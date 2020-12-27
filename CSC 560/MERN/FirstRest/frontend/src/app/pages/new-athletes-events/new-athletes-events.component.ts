import { Component, OnInit } from '@angular/core';
import { AthletesEventsService } from 'src/app/athletes-events.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AthletesEvents } from 'src/app/models/athletesEvents.model';

@Component({
  selector: 'app-new-athletes-events',
  templateUrl: './new-athletes-events.component.html',
  styleUrls: ['./new-athletes-events.component.scss']
})
export class NewAthletesEventsComponent implements OnInit {

  constructor(private athletesEventsService: AthletesEventsService, private route: ActivatedRoute, private router: Router) { }

  athletesNamesId: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.athletesNamesId = params['athletesNamesId'];
        //console.log(this.athletesNamesId);
      }
    )
  }

  createAthletesEvents(title: string) {
    this.athletesEventsService.createAthletesEvents(title, this.athletesNamesId).subscribe((newAthletesEvents: AthletesEvents) => {
      //console.log(newAthletesEvents);
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }

}
