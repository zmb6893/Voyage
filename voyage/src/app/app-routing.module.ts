import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ManualComponent } from './manual/manual.component';

const routes: Routes = [
  { path: 'activity-form', component: ActivityFormComponent },
  { path: 'trip-form', component: ManualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
