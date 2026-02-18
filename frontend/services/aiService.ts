// Direct usage of Gemini API via fetch to avoid Node.js SDK issues in browser
import { TOOLS } from '../data/tools';

const getApiKey = () => {
  return import.meta.env.VITE_API_KEY || '';
};

export const getAIRecommendations = async (userQuery: string): Promise<string> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.warn("API Key is missing. Please configure VITE_API_KEY.");
    return "AI service is currently unavailable (API Key missing). Please try searching manually.";
  }

  // Create context from tools list
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
    // Using standard Gemini 1.5 Flash model via REST API
    const modelId = 'gemini-1.5-flash';
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("AI API Error:", errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    // Safely access the response text
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a recommendation at this time.";

  } catch (error) {
    console.error("Error fetching AI recommendations:", error);
    return "An error occurred while contacting the AI service.";
  }
};
