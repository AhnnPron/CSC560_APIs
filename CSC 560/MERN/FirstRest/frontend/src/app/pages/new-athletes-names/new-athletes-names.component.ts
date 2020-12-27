import { Component, OnInit } from '@angular/core';
import { AthletesEventsService } from 'src/app/athletes-events.service';
import { Router } from '@angular/router';
import { AthletesNames } from 'src/app/models/athletesNames.model';

@Component({
  selector: 'app-new-athletes-names',
  templateUrl: './new-athletes-names.component.html',
  styleUrls: ['./new-athletes-names.component.scss']
})
export class NewAthletesNamesComponent implements OnInit {

  constructor(private athletesEventsService: AthletesEventsService, private router: Router) { }

  ngOnInit(): void {
  }
  createNewAthletesNames(title: string){ //used in html file on botton (click)
    this.athletesEventsService.createAthletesNames(title).subscribe((AthletesNames: AthletesNames) => {
      console.log(AthletesNames);
      // Now we navigate to /athletesNamesModel/_athletesNames.Id
      this.router.navigate([ '/athletesNamesModel', AthletesNames._id ]);
    });
  }
}
