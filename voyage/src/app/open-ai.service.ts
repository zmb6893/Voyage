import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { apiKey } from './api-key';
import { Observable } from 'rxjs';


export type Role = 'user' | 'system' | 'assistant';

// Message type that represents a message in the conversation
export type Message = {
    content: string;
    role: Role;
};

@Injectable({ providedIn: 'root' })
export class OpenAiService {
  /**
    This Angular service method makes a call to the OpenAI API to perform a chat completion.
    It sends a list of messages along with other parameters to the API and receives responses in a streaming manner.
    @param messages - An array of Message objects representing the conversation history.
    @param temperature - Optional parameter that controls the randomness of the generated text. Default value is 0.5.
    @param model - Optional parameter that specifies the model to be used. Default value is 'gpt-3.5-turbo'.
    @param apiKey - The API key for authorization.
    @returns An Observable that emits string values representing the generated text updates from the API.
*/
public doOpenAICall(
  messages: Message[],
  temperature: number = 0.5,
  model: string = 'gpt-3.5-turbo',
  apiKey: string
): Observable<string> {
  const url = 'https://api.openai.com/v1/chat/completions'; // Use completions endpoint for non-streaming requests

  console.log("OpenAI Call is Running");
  return new Observable((observer) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + apiKey);

    xhr.onload = () => {
      if (xhr.status === 200) {
        try{
          console.log(xhr.responseText)

          xhr.responseText.split('\n').forEach(rt => {
            console.log(JSON.parse(rt.replace("data: ", '')).choices)
          })
          const response = JSON.parse(xhr.responseText.split('\n')[0].replace("data: ", ''));
          console.log(response.choices[0]);
          const generatedText = response.choices[0].content;
          observer.next(generatedText);
          observer.complete();
        } catch {
          console.log(typeof xhr.responseText)
          console.log(xhr.responseText.split('\n')[0].replace("data: ", ''))
          console.log('oopsie')
        }
        
      } else {
        observer.error(
          new Error('Request failed with status ' + xhr.status)
        );
      }
    };

    xhr.send(
      JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello, how are you doing today?"}
        ],
        "temperature": 0.5,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "stream": true
      })
    )
    
    // Send the request to the OpenAI API
    // xhr.send(
    //   JSON.stringify({
    //     model,
    //     messages,
    //     temperature,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    //   })
    // );

    // Return a cleanup function that aborts the request if the observer unsubscribes
    console.log(xhr);
    return () => {
      xhr.abort();
    };
  });
}

}

