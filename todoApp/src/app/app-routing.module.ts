import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { TodoEditComponent } from './components/todos/todo-edit/todo-edit.component';


const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: 'todo-create', component: TodoEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), // forRoot es para rutas principales
    CommonModule
  ]
})
export class AppRoutingModule { }
