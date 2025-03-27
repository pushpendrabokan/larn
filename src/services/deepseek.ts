import { Category, Concept } from '../types';
import { DEEPSEEK_API_KEY } from '@env';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

export const generateConcept = async (
  category: string,
  subtopic: string
): Promise<Concept> => {
  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are an educational content generator. Generate concise, informative content for learning concepts.',
          },
          {
            role: 'user',
            content: `Generate a concept about ${subtopic} in the category of ${category}. Include a title and detailed explanation.`,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate concept');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // Parse the content to extract title and explanation
    const [title, ...explanationParts] = content.split('\n\n');
    const explanation = explanationParts.join('\n\n');

    return {
      id: Date.now().toString(),
      title: title.replace('# ', ''),
      content: explanation,
      categoryId: category,
      subtopicId: subtopic,
      createdAt: new Date(),
    };
  } catch (error) {
    console.error('Error generating concept:', error);
    throw error;
  }
};

export const generateSubtopics = async (category: string): Promise<string[]> => {
  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are an educational content generator. Generate relevant subtopics for learning categories.',
          },
          {
            role: 'user',
            content: `Generate 5 relevant subtopics for learning about ${category}. Return them as a JSON array of strings.`,
          },
        ],
        temperature: 0.7,
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate subtopics');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    return JSON.parse(content);
  } catch (error) {
    console.error('Error generating subtopics:', error);
    throw error;
  }
}; 