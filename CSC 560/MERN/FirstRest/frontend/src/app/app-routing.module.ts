import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewAthletesNamesComponent } from './pages/new-athletes-names/new-athletes-names.component';
import { NewAthletesEventsComponent } from './pages/new-athletes-events/new-athletes-events.component';
import { EditAthletesNamesComponent } from './pages/edit-athletes-names/edit-athletes-names.component';
import { EditAthletesEventsComponent } from './pages/edit-athletes-events/edit-athletes-events.component';

const routes: Routes = [
  { path: '', redirectTo: '/athletesNamesModel', pathMatch: 'full'},
  { path: 'new-athletes-names', component: NewAthletesNamesComponent},// attempt localhost:4200/new-athletesNames //NewListComponent = NewAthletesNamesComponent
  { path: 'edit-athletes-names/:athletesNamesId', component: EditAthletesNamesComponent},
  { path: 'athletesNamesModel', component: TaskViewComponent},
  { path: 'athletesNamesModel/:athletesNamesId', component: TaskViewComponent}, //we can access the athletesNamesId inside the TaskViewComponent
  { path: 'athletesNamesModel/:athletesNamesId/new-athletes-events', component: NewAthletesEventsComponent},
  { path: 'athletesNamesModel/:athletesNamesId/edit-athletes-events/:athletesEventsId', component: EditAthletesEventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
