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
  style: any;

  constructor(private modalService: BsModalService) {
    this.days = Array(24).fill('').map((x, i) => i);
   }

  ngOnInit() {
    
    this.getEvents = JSON.parse(localStorage.getItem('eventItem'));
  }
  openModal() {
    this.bsModalRef = this.modalService.show(AddlevelComponent);
    this.bsModalRef.content.eventData.subscribe(resp => {
      this.eventList.push(resp);
      console.log('RESP: ', resp);
      localStorage.setItem('eventItem', JSON.stringify(this.eventList));
    });
  }

  calculateStyle(startHour, startMinute, duration) {
    this.style = {
      'top.px': startMinute + startHour*60,
      'position': 'absolute',
      'right': '0px',
      'width': '29rem',
      'z-index':'10',
      'height.px':duration,
    };
    return this.style;
  }

}
