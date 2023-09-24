import { Component, OnInit, inject } from '@angular/core';
import { Message, OpenAiService } from '../open-ai.service';
import { apiKey } from '../api-key';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plan-for-me',
  templateUrl: './plan-for-me.component.html',
  styleUrls: ['./plan-for-me.component.css']
})

export class PlanForMeComponent {
  public apiKey: string = apiKey;
  openAiResult: String  = '';
  

  constructor(private openAiService: OpenAiService) {}

  ngOnInit() {// Call the OpenAI service and assign the Observable to openAiResult$
    const messages: Message[] = [
      {"role": "system", "content": "You are a helpful assistant."},
      {
        "content": 'Write a small rap song about 2 potatoes that are in love with Angular',
        "role": 'user',
      },
    ];
    this.openAiService.doOpenAICall(messages, 0.5, 'gpt-3.5-turbo', apiKey).subscribe((text:String) => {
      this.openAiResult = text;
    });
    //throw new Error('Function not implemented.');
  }

  doOpenAICall() {
    console.log(this.openAiResult)
  }
}


