import { Component, OnInit } from '@angular/core';
import { AddlevelComponent } from '../addlevel/addlevel.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  days: any = [];
  bsModalRef: BsModalRef;
  eventList: any = [];
  getEvents: any;
  class: any;

  constructor(private modalService: BsModalService) {
    this.days = Array(24).fill('').map((x, i) => i);
   }

  ngOnInit() {
    this.getEvents = JSON.parse(localStorage.getItem('eventList'));
  }
  openModal() {
    this.bsModalRef = this.modalService.show(AddlevelComponent);
    // this.bsModalRef.content.label = 'Label';
    // this.bsModalRef.content.endTime = 'Label';
    console.log('HERE: ', this.bsModalRef.content);
    this.bsModalRef.content.eventData.subscribe(resp => {
      this.eventList.push(resp);
      localStorage.setItem('eventList', JSON.stringify(this.eventList));
      console.log('eventList', this.eventList);
      console.log('RESP: ', resp);
    });
  }


}
