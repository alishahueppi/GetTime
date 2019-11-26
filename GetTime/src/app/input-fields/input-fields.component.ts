import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss']
})
export class InputFieldsComponent implements OnInit {

  constructor() {
  }
  startDate = new Date(2019, 0, 1);

  ngOnInit() {
  }

}
