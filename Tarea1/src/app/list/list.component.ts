import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list: String[] = [];
  element = '';

  addElement(){
    this.list.push(this.element);
    this.element = '';
  }

  dropElement() {
    this.list = [];
  }
}
