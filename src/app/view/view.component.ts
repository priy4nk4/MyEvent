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

  constructor(private modalService: BsModalService) {
    this.days = Array(24).fill('').map((x, i) => i);
   }

  ngOnInit() {
  }
  openModal() {
    this.bsModalRef = this.modalService.show(AddlevelComponent);
    this.bsModalRef.content.label = 'Label';
    this.bsModalRef.content.endTime = 'Label';
    this.bsModalRef.content.closeBtnName = 'Close';
    console.log('HERE: ', this.bsModalRef.content);
    this.bsModalRef.content.action.subscribe(resp => {
      console.log('RESP: ', resp);
    });
  }

}
