import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditComponent } from './todo-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
  import { Observable, of, from } from 'rxjs';




describe('TodoEditComponent', () => {
  let component: TodoEditComponent;
  let fixture: ComponentFixture<TodoEditComponent>;
    // @ts-ignore
    // const service = new TodoService(null);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoEditComponent ],
      imports: [ReactiveFormsModule,
      FormsModule,
      MatSnackBarModule,
      HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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


  // xit('Debe agregar un nuevo todo al arreglo de Todo', () => {

  //   const todo = { todoId: 1, nombre: 'Preuba de todo', description:"pueba descripcion todo"};
  //   const miObservable = of(todo);

  //   spyOn(service, 'addTodoArray').and.returnValue( miObservable );

  //   component.saveLocal();

  //   expect( service.todoArray.length).toBe(1);



  // });

});

