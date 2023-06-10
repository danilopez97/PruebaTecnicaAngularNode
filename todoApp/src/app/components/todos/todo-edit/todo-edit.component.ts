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
  regex = '[]';


  get filterControl() {
    return this.form.get('description');
  }


  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private todoService: TodoService
  ) {

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      description: [null, [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z ]*$')]]
    });


  }

  ngOnInit(): void {
  }

  getValidationMessages(formControl: string) {
    let control = this.form.get(formControl);
    let messages : string[] = [];

    if (control?.errors) {
      if (control.errors['required']) {
        messages.push('Este campo es requerido.');
      }

      if (control.errors['minlength']) {
        messages.push(`Este campo debe tener al menos ${control.errors['minlength'].requiredLengh} caracteres.`);
      }

      if (control.errors['pattern']) {
        messages.push('Este campo solo puede contener letras y espacios.');
      }
    }

    return messages;
  }
  // guardar datos en memoria
  saveLocal() {
    if(!this.form.valid) {
      return this.openSnackBar("Ingrese los datos faltantes" ,'Ok');
    }

    const data = new Todo().deserialize(JSON.parse(JSON.stringify(this.form.value)));
    const totalElements = this.todoService.todoArray.length;
    data.todoId = totalElements + 1;

    // this.todoService.todoArray.push(data);
    this.todoService.addTodoArray(data);
    return this.openSnackBar("Agregado correctamente" ,'Ok');

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
