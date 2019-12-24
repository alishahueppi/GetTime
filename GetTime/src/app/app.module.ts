import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule, MatDialog, MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule
} from '@angular/material';
import {InputFieldsComponent} from './input-fields/input-fields.component';
import { CountableValuesComponent } from './countable-values/countable-values.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        InputFieldsComponent,
        CountableValuesComponent,
        ProjectViewComponent
    ],
    entryComponents: [ProjectViewComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonToggleModule,
        MatDialogModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
