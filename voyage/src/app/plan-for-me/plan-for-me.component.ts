import { Component } from '@angular/core';
import { apiKey } from './api-key';
import OpenAI from 'openai';

@Component({
  selector: 'app-plan-for-me',
  templateUrl: './plan-for-me.component.html',
  styleUrls: ['./plan-for-me.component.css']
})

const openai = new OpenAI({
  apiKey: apiKey
})

export class PlanForMeComponent {
  
}
