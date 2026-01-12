
import { GoogleGenAI, Type } from "@google/genai";
import { FullAssessment } from "../types";

const API_KEY = process.env.API_KEY || "";

export async function analyzeText(text: string, topic?: string): Promise<FullAssessment> {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    You are a world-class linguistic expert and professional writing evaluator. 
    Analyze the provided text based on the following criteria:
    1. Content Quality (Relevance, Clarity, Argument Strength, Originality, Word Count).
    2. Style & Presentation (Tone, Conciseness, Organization, Transitions, Voice).
    3. Advanced Parameters (Sentiment, Bias, Keyword Coverage).
    4. Constructive Feedback Generation.
    5. Detection: Analyze if the text was likely written by an AI or a Human.
    6. Comparison: Provide a comparative critique between what a 'Gen AI' would say versus a 'Human Expert'.

    The input text might specify a topic. If so, evaluate relevance based on that.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Analyze this text: "${text}" ${topic ? `based on the topic: ${topic}` : ""}`,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          overallScore: { type: Type.NUMBER },
          contentQuality: {
            type: Type.OBJECT,
            properties: {
              relevance: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
              clarityOfIdeas: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
              argumentStrength: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
              originality: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
              wordCountCompliance: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
            },
          },
          stylePresentation: {
            type: Type.OBJECT,
            properties: {
              formalTone: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
              conciseness: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
              organization: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
              transitions: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
              passiveActiveVoice: { type: Type.OBJECT, properties: { label: {type: Type.STRING}, score: {type: Type.NUMBER}, feedback: {type: Type.STRING} } },
            },
          },
          advancedParameters: {
            type: Type.OBJECT,
            properties: {
              sentiment: { type: Type.STRING },
              biasFairness: { type: Type.STRING },
              keywordCoverage: { type: Type.ARRAY, items: { type: Type.STRING } },
            }
          },
          feedbackGeneration: {
            type: Type.OBJECT,
            properties: {
              grammar: { type: Type.STRING },
              clarity: { type: Type.STRING },
              vocabulary: { type: Type.STRING },
              structure: { type: Type.STRING },
            }
          },
          detection: {
            type: Type.OBJECT,
            properties: {
              aiProbability: { type: Type.NUMBER },
              humanProbability: { type: Type.NUMBER },
              reasoning: { type: Type.STRING },
            }
          },
          comparison: {
            type: Type.OBJECT,
            properties: {
              aiExpertOpinion: { type: Type.STRING },
              humanExpertOpinion: { type: Type.STRING },
            }
          }
        }
      }
    }
  });

  return JSON.parse(response.text) as FullAssessment;
}
