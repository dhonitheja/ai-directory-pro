import { GoogleGenAI } from '@google/genai';
import { TOOLS } from '../data/tools';
import { Tool } from '../types';

const getApiKey = () => {
  // Use import.meta.env for Vite, fallback to empty string
  return import.meta.env.VITE_API_KEY || '';
};

export const getAIRecommendations = async (userQuery: string): Promise<string> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.warn("API Key is missing. Please configure VITE_API_KEY.");
    return "AI service is currently unavailable (API Key missing). Please try searching manually.";
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
    // Initialize lazily to prevent top-level crashes
    const ai = new GoogleGenAI({ apiKey });

    // Note: 'gemini-2.5-flash' might not exist or require specific access. 
    // Fallback model or standard model is safer. Trying recommended model first.
    const modelId = 'gemini-1.5-flash';

    const response = await ai.models.generateContent({
      model: modelId,
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
