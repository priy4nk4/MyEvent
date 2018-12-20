import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addlevel',
  templateUrl: './addlevel.component.html',
  styleUrls: ['./addlevel.component.css']
})
export class AddlevelComponent implements OnInit {

  closeBtnName: any;
  eventData: Subject<any>;

  constructor(public bsModalRef: BsModalRef,
    private router: Router) { }

  ngOnInit() {
    this.eventData = new Subject();
  }
  addEvent(title, starttime, duration) {
    const eventObj = {
      id: uuid(),
      title: title.value,
      duration: parseInt(duration.value, 10),
      startHour: parseInt(starttime.value.split(':')[0], 10),
      startMinute: parseInt(starttime.value.split(':')[1], 10),
    };
  this.eventData.next(eventObj);
  this.bsModalRef.hide();
  window.location.reload();

}

onCancel() {
  this.bsModalRef.hide();
}

}
