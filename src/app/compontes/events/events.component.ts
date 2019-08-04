import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any = [];
  constructor(private eventServce: EventService) { }

  ngOnInit() {
    this.eventServce.getEvents()
      .subscribe(
        res => this.events = res,

        err => console.log(err)
      )

  }
  viewUsers() {
    console.log(this.events);
  }

}
