import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AthletesEventsService } from 'src/app/athletes-events.service';

@Component({
  selector: 'app-edit-athletes-events',
  templateUrl: './edit-athletes-events.component.html',
  styleUrls: ['./edit-athletes-events.component.scss']
})
export class EditAthletesEventsComponent implements OnInit {

  athletesEventsId: string;
  athletesNamesId: string;

  constructor(private route: ActivatedRoute, private athletesEventsService: AthletesEventsService, private router: Router) {}




  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.athletesEventsId = params.athletesEventsId;
        this.athletesNamesId = params.athletesNamesId;
      }
    )
  }

  updateAthletesEvents(title: string) {
    this.athletesEventsService.updateAthletesEvents(this.athletesNamesId, this.athletesEventsId, title).subscribe(() => {
      this.router.navigate(['/athletesNamesModel', this.athletesNamesId]);
    })
  }

}
