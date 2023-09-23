import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanForMeComponent } from './plan-for-me/plan-for-me.component';
import { ManualComponent } from './manual/manual.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanForMeComponent,
    ManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
