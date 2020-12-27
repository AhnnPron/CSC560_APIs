import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { AthletesEventsService } from 'src/app/athletes-events.service';
import { AthletesEvents } from 'src/app/models/athletesEvents.model'
import { AthletesNames} from 'src/app/models/athletesNames.model'

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  athletesNames: AthletesNames[]; //lists: List[]; //Property
  athletesEvents: AthletesEvents[]; //tasks: Task[]; //Property

  selectedAthletesNameId: string; //selectedListId

  constructor(private athletesEventsService: AthletesEventsService, private route: ActivatedRoute, private router: Router) { } //taskService = AthletesEventsService

  ngOnInit() {
   this.route.params.subscribe(
     (params: Params) => {
       //console.log(params)
       if (params.athletesNamesId) {
         this.selectedAthletesNameId = params.athletesNamesId; //selectedListId = listId
         this.athletesEventsService.getAthletesEvents(params.selectedAthletesNameId).subscribe((athletesEvents: AthletesEvents[]) => {
           this.athletesEvents = athletesEvents;
         })
       } else {
         this.athletesEvents = undefined;
       }
     }
   )
//reading from athletes-events.service.ts
   this.athletesEventsService.getAthletesNames().subscribe((athletesNames: AthletesNames[]) => {
     this.athletesNames = athletesNames;
   })

 }

 onDeleteAthletesNamesClick() { //deleteAthletesNames lives in athletes-events-service
  this.athletesEventsService.deleteAthletesNames(this.selectedAthletesNameId).subscribe((res: any) => {
    this.router.navigate(['/athletesEventsModel']);
    console.log(res);
  })
}

onDeleteAthletesEventsClick(id: string) { //deleteAthletesEvents lives in athletes-events-service
  this.athletesEventsService.deleteAthletesEvents(this.selectedAthletesNameId, id).subscribe((res: any) => {
    this.athletesEvents = this.athletesEvents.filter(val => val._id !== id);
    console.log(res);
  })
}

}
