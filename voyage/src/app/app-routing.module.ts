import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ManualComponent } from './manual/manual.component';
import { HomeComponent } from './home/home.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'activity-form', component: ActivityFormComponent },
  { path: 'trip-form', component: ManualComponent },
  { path: 'choose-plan', component: ChoosePlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
