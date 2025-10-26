import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const analysisSchema = {
  type: Type.OBJECT,
  properties: {
    isValid: { type: Type.BOOLEAN },
    reason: { type: Type.STRING },
    points: { type: Type.INTEGER },
    litterType: { 
      type: Type.STRING,
      description: "The category of litter, e.g., 'Plastic Bottle', 'Food Wrapper', 'Can', 'Paper', or 'Other'."
    },
  },
  required: ['isValid', 'reason', 'points', 'litterType'],
};

const prompt = `You are a strict validation AI for the 'Litterly' app, an app that rewards users for picking up litter. Your task is to analyze the user-submitted image and determine if it meets ALL of the following criteria:
1. A clear piece of litter is the primary subject (e.g., can, bottle, wrapper, plastic bag).
2. The litter is being held in a human hand.
3. The background suggests an outdoor environment (e.g., grass, sidewalk, soil, street).

- 'isValid': true if all criteria are met, otherwise false.
- 'reason': A brief, user-friendly explanation. If valid, say something encouraging like 'Great job! That's a valuable contribution.'. If invalid, explain which rule was broken (e.g., 'Please make sure to hold the litter in your hand.').
- 'points': If valid, assign points between 5 (for small items like a bottle cap) and 25 (for larger items like a full plastic bag), based on the litter's size and material. If invalid, this must be 0.
- 'litterType': If valid, classify the litter into one of the following categories: 'Plastic Bottle', 'Food Wrapper', 'Can', 'Paper', 'Other'. If invalid, return 'None'.`;


export async function analyzeLitterImage(base64Image: string): Promise<AnalysisResult> {
  try {
    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType: 'image/jpeg',
      },
    };

    const textPart = {
      text: prompt,
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [imagePart, textPart] },
      config: {
        responseMimeType: 'application/json',
        responseSchema: analysisSchema,
      },
    });

    const jsonString = response.text.trim();
    const result: AnalysisResult = JSON.parse(jsonString);
    return result;

  } catch (error)
 {
    console.error("Error analyzing image:", error);
    return {
      isValid: false,
      reason: "Sorry, something went wrong during analysis. Please try again.",
      points: 0,
      litterType: 'None',
    };
  }
}
