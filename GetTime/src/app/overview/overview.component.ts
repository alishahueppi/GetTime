import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor() {
  }

  startDate = new Date(2019, 0, 1);

  ngOnInit() {
  }

  // public Array[] myDataArray = new Array[];
}
