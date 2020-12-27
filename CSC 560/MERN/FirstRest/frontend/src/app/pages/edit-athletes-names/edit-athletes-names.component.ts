import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AthletesEventsService } from 'src/app/athletes-events.service';

@Component({
  selector: 'app-edit-athletes-names',
  templateUrl: './edit-athletes-names.component.html',
  styleUrls: ['./edit-athletes-names.component.scss']
})
export class EditAthletesNamesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private athletesEventsService: AthletesEventsService, private router: Router) { }

  athletesNamesId : string; //stores the athlete's name id

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.athletesNamesId = params.athletesNamesId;
        console.log(params.athletesNamesId);
      }
  )
}

  updateAthletesNames(title: string) {
    this.athletesEventsService.updateAthletesNames(this.athletesNamesId, title).subscribe(() => {
      this.router.navigate(['/athletesNamesModel', this.athletesNamesId]);
    })
  }

}
