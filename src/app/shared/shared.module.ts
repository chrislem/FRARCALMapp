
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCheckboxModule} from '@angular/material/checkbox';


const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  exports:[
    CommonModule,
    NgxBootstrapModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...materialModules,
  ]
})
export class SharedModule { }
