import { Component, OnInit } from '@angular/core';
import { OpenAiService } from '../open-ai.service';

@Component({
  selector: 'app-plan-for-me',
  templateUrl: './plan-for-me.component.html',
  styleUrls: ['./plan-for-me.component.css']
})

export class PlanForMeComponent implements OnInit {
  isLoading = false;
  response : Object = {};

  constructor(private openAiService: OpenAiService) { }

  ngOnInit(): void { }

  async askQuestion() {
    this.isLoading = true;

    const chatCompletion = await this.openAiService.question();
    console.log(chatCompletion.choices[0].message);

  }
}
