import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CountableValuesComponent} from '../countable-values/countable-values.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
})
@Component({
    selector: 'app-input-fields',
    templateUrl: './input-fields.component.html',
    styleUrls: ['./input-fields.component.scss'],
})

export class InputFieldsComponent implements OnInit {

    constructor() {
    }

  cbt: CountableValuesComponent = new CountableValuesComponent();
    startDate = new Date(2019, 0, 1);
    public workhours: number;
  myInput: number;

    ngOnInit() {
    }

    public cancel(): void {
        window.location.reload();
    }

    public save(): void {
      this.workhours = this.myInput;
      console.log(this.workhours);
      this.cbt.setTime(this.workhours);
      window.location.reload();
    }

}
