import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<ProjectViewComponent>) {}

  public closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
