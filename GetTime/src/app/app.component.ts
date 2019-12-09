import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectViewComponent} from './project-view/project-view.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'GetTime';
    constructor(public dialog: MatDialog) {}

    public openProjects(): void {
      const dialogRef = this.dialog.open(ProjectViewComponent, {
          height: '400px',
          width: '600px'
      });
    }
}
