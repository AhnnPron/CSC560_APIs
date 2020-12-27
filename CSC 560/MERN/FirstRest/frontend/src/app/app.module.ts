import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

import { HttpClientModule } from '@angular/common/http';
import { NewAthletesNamesComponent } from './pages/new-athletes-names/new-athletes-names.component';
import { NewAthletesEventsComponent } from './pages/new-athletes-events/new-athletes-events.component';
import { EditAthletesNamesComponent } from './pages/edit-athletes-names/edit-athletes-names.component';
import { EditAthletesEventsComponent } from './pages/edit-athletes-events/edit-athletes-events.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewAthletesNamesComponent,
    NewAthletesEventsComponent,
    EditAthletesNamesComponent,
    EditAthletesEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
