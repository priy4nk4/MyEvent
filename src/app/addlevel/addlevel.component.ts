import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-addlevel',
  templateUrl: './addlevel.component.html',
  styleUrls: ['./addlevel.component.css']
})
export class AddlevelComponent implements OnInit {


  eventData: Subject<any>;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.eventData = new Subject();
  }
  addEvent() {
    const testData = {
      title: 'meeting',
      startTime: '12:30',
      duration: '30',
    };
  this.eventData.next(testData);
  console.log('asasd',this.eventData)
}
}
