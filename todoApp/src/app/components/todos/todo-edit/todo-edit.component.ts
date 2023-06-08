import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {


  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private todoService: TodoService
  ) {

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      description: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  ngOnInit(): void {
  }

  // guardar datos en memoria
  saveLocal() {
    if(!this.form.valid) {
      return this.openSnackBar("Ingrese los datos faltantes" ,'Ok');
    }

    const data = new Todo().deserialize(JSON.parse(this.form.value));
    const totalElements = this.todoService.todoArray.length;
    data.todoId = totalElements + 1;

    // this.todoService.todoArray.push(data);
    this.todoService.addTodoArray(data);
    this.openSnackBar("Agregado correctamente" ,'Ok');

  }

  // guardar datos en la api
  save() {
    if(!this.form.valid) {
      return this.openSnackBar("Ingrese los datos faltantes" ,'Ok');
    }

    const data = new Todo().deserialize(JSON.parse(JSON.stringify(this.form.value)));
    this.todoService.addTodo(data).subscribe(resp => {
      if(resp.status) {
        this.openSnackBar(resp.message ,'Ok');
        this.form.reset();
      } else {

        this.openSnackBar("Ocurrio un error" ,'Ok');
      }
    })
  }




  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

}
