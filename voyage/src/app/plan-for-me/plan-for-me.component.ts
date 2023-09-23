import { Component } from '@angular/core';
import { apiKey } from './api-key';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: apiKey
})



@Component({
  selector: 'app-plan-for-me',
  templateUrl: './plan-for-me.component.html',
  styleUrls: ['./plan-for-me.component.css']
})

export class PlanForMeComponent {
  
}
