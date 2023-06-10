import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditComponent } from './todo-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Observable, of, from } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';


class MockTodoService {
  addTodo(): Observable<any> {
    const respuesta = [{
      "status": true,
      "message": "Creado correctamente"
  }];
    const myObservable = from(respuesta);
    return myObservable;
  }


}

class MockMatSnackBar {
  open() {}
}

describe('TodoEditComponent', () => {
  let component: TodoEditComponent;
  let fixture: ComponentFixture<TodoEditComponent>;
  // @ts-ignore
  // const service = new TodoService(null);

  let service: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoEditComponent],
      imports: [ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        HttpClientTestingModule
        ],
        providers: [
          { provide: TodoService, useClass: MockTodoService },
          { provide: MatSnackBar, useClass: MockMatSnackBar }
        ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(TodoService);

  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear un formulario con 2 campos', () => {
    const fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('description')).toBeTruthy();
  });
  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.form;
    const name = form.controls['name'];
    name.setValue('first todo');

    expect(form.invalid).toBe(true);
  });


  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.form;
    const name = form.controls['name'];
    const description = form.controls['description'];
    name.setValue('first todo');
    description.setValue('description todo');

    expect(form.invalid).toBeFalsy();
  });


  it('Debe retornar formulario invalido si el numero de caracteres del nombre es menor a 10', () => {
    const fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.form;
    const name = form.controls['name'];
    const description = form.controls['description'];
    name.setValue('first');
    description.setValue('description todo');

    expect(form.invalid).toBeTruthy();
  });

  it('debe agregar un todo a la lista', () => {

    component.form.controls['name'].setValue('Nombre de la tarea');
    component.form.controls['description'].setValue('Descripcion de la tarea');

    const spy = spyOn(service, 'addTodo').and.callThrough();
    component.save();
    expect(spy).toHaveBeenCalled();


  });

});

