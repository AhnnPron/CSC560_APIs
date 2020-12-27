//task.service.ts

import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { AthletesEvents } from './models/athletesEvents.model'; //MERN/FirstRest/frontend/src/app/models
import { AthletesNames } from './models/athletesNames.model'

@Injectable({
  providedIn: 'root'
})
export class AthletesEventsService {

  constructor(private webReqService: WebRequestService) { }


  getAthletesNames() { //Get All Athlete's Names
    return this.webReqService.get('athletesNamesModel'); //localhost:3000/athletesNamesModel
  }

  getAthletesEvents(athletesNamesId: string) { //Get All Athlete's Events by Athlete's Id
    return this.webReqService.get(`athletesNamesModel/${athletesNamesId}/athletesEventsModel`);
  }

  createAthletesNames(title: string) { // Create New Athlete
    // We want to send a web request to create an athlete by name
    return this.webReqService.post('athletesNamesModel', { title }); //also takes in a payload of "title" -> which is a new Athlete's name
  }

  createAthletesEvents(title: string, athletesNamesId: string) { //Create New Event by Athlete Id)
    // We want to send a web request to create a task
    return this.webReqService.post(`athletesNamesModel/${athletesNamesId}/athletesEventsModel`, { title });
  }

  updateAthletesNames(id: string, title: string) { // Update Athlete's Name by Id
    // We want to send a web request to update an athletes name
    return this.webReqService.patch(`athletesNamesModel/${id}`, { title });
  }

  updateAthletesEvents(athletesNamesId: string, athletesEventsId: string, title: string) { // Update Event by Athlete Id
    // We want to send a web request to update an athlete's event
    return this.webReqService.patch(`athletesNamesModel/${athletesNamesId}/athletesEventsModel/${athletesEventsId}`, { title });
  }


  deleteAthletesNames(id: string) { //Delete Athlete's Name by Id
    return this.webReqService.delete(`athletesNamesModel/${id}`);
  } //refereneced in task-view.component.ts

  deleteAthletesEvents(athletesNamesId: string, athletesEventsId: string) { //Delete Athlete's Events by Athlete Id
    return this.webReqService.delete(`athletesNamesModel/${athletesNamesId}/athletesEventsModel/${athletesEventsId}`);
  } //refereneced in task-view.component.ts
}
