import { GoogleGenAI } from '@google/genai';
import { TOOLS } from '../data/tools';
import { Tool } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey, vertexai: true });

export const getAIRecommendations = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  const toolsContext = TOOLS.map(t => `${t.name} (${t.category}): ${t.description}`).join('\n');

  const prompt = `
    You are an expert AI software consultant.
    The user is looking for AI tool recommendations.
    
    Here is a list of tools available in our directory:
    ${toolsContext}

    User Query: "${userQuery}"

    Based on the user's query, recommend the best tools from the list above. 
    If the user's need is not met by the list, you may suggest general categories or popular external tools, but prioritize the provided list.
    Provide a concise, helpful response explaining why you chose these tools.
    Format the response with clear bullet points.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        role: 'user',
        parts: [{ text: prompt }]
      }
    });

    return response.text || "Sorry, I couldn't generate a recommendation at this time.";
  } catch (error) {
    console.error("Error fetching AI recommendations:", error);
    return "An error occurred while contacting the AI service.";
  }
};
