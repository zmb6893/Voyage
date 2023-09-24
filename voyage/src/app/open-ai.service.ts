import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { apiKey } from './api-key';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor() {}

  async question() {
    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true
    });
  
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello, how are you doing today?"}
        ],
      });
      return chatCompletion; // Return the chatCompletion directly
    } catch (error) {
      console.error("Error occurred:", error);
      throw error; // Re-throw the error to propagate it
    }
  }
  
}
