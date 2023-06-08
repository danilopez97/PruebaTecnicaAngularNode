import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './components/todos/todos.component';
import { TodoEditComponent } from './components/todos/todo-edit/todo-edit.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
