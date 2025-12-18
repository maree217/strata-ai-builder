/**
 * CHALLENGE: LEVEL 1 & 2 (Infrastructure & Intelligence)
 * 
 * Goal: Prove your "foundation" is working by calling your first AI model.
 * 
 * INSTRUCTIONS:
 * 1. Get a Gemini API Key from: https://aistudio.google.com/
 * 2. Add it to a .env file: VITE_GEMINI_API_KEY=your_key_here
 * 3. Run this file using: npx tsx examples/hello-world.ts
 * 
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ ERROR: No API Key found!");
    console.log("Please create a .env file in the dashboard folder with:");
    console.log("VITE_GEMINI_API_KEY=your_key_here");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function runHelloWorld() {
    console.log("🚀 Initialising Layer 1 (Infrastructure)... Done.");
    console.log("🧠 Thinking with Layer 2 (Intelligence)...");

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Explain the 'Three-Layer AI Architecture' in three short bullet points.";

        const result = await model.generateContent(prompt);
        const text = result.response.text();

        console.log("\n--- AI RESPONSE ---");
        console.log(text);
        console.log("-------------------\n");
        console.log("✅ SUCCESS! You've just implemented the first two layers of Strata.");
        console.log("Next step: Go to the Dashboard to build Layer 3 (UX).");
    } catch (error) {
        console.error("❌ API CALL FAILED:", error);
    }
}

runHelloWorld();
