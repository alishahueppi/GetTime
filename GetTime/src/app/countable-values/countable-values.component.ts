import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {convertUpdateArguments} from "@angular/compiler/src/compiler_util/expression_converter";
@Inject(ChangeDetectorRef)
@Component({
  selector: 'app-countable-values',
  templateUrl: './countable-values.component.html',
  styleUrls: ['./countable-values.component.scss']
})
export class CountableValuesComponent implements OnInit {
  constructor() {

  }

  private sollZeit = 8.2;
  private istZeit: number;
  private differenz: number;

  private get diffZeit(): number {
    this.differenz = this.sollZeit - this.istZeit;
    return this.differenz;
  }
  ngOnInit() {
  }
  public setTime(zeit: number): void {
    this.istZeit = zeit;
    console.log(this.istZeit);
    window.location.reload();
  }

}
