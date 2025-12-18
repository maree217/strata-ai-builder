import { GoogleGenerativeAI } from "@google/generative-ai";

// Use Vite-style environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const generateDocumentation = async (
  systemName: string,
  sections: string[],
  onChunk: (text: string) => void
): Promise<string> => {
  if (!apiKey) {
    onChunk("Error: No API Key found. Please add VITE_GEMINI_API_KEY to your .env file.");
    return "";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
      You are an expert AI Architect. 
      The user wants to document an AI system named "${systemName}".
      
      Please generate content for the following sections: ${sections.join(', ')}.
      
      Tone: Professional, precise, and visionary.
      Format: Markdown. 
      Do not include preamble. Start directly with the content.
    `;

    const result = await model.generateContentStream(prompt);

    let fullText = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullText += chunkText;
      onChunk(fullText);
    }
    return fullText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    onChunk("Error calling Gemini API. Check console for details.");
    throw error;
  }
};