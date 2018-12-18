import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  days:any = [];

  constructor() {
    this.days = Array(24).fill('').map((x,i)=>i);
   }

  ngOnInit() {
  }
  addEvent(){
    alert("Hello");

  }

}
