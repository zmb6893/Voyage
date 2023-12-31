import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanForMeComponent } from './plan-for-me/plan-for-me.component';
import { ManualComponent } from './manual/manual.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TripService } from '../trip.service';
import { ActivityCardComponent } from './activity-card/activity-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanForMeComponent,
    ManualComponent,
    ActivityFormComponent,
    HomeComponent,
    NavBarComponent,
    LeftPanelComponent,
    ChoosePlanComponent,
    TripCardComponent,
    ActivityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
