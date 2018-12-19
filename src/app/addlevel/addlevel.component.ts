import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-addlevel',
  templateUrl: './addlevel.component.html',
  styleUrls: ['./addlevel.component.css']
})
export class AddlevelComponent implements OnInit {

  closeBtnName: any;
  eventData: Subject<any>;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.eventData = new Subject();
  }
  addEvent(title, starttime, duration) {
    const testData = {
      title: title.value,
      startTime: starttime.value,
      duration: duration.value,
    };
  this.eventData.next(testData);
  console.log('asasd', this.eventData);
}

onCancel() {
  this.bsModalRef.hide();
}

}
