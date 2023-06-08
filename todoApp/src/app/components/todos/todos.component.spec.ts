import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from 'src/app/services/todo.service';
import { Observable, of, from } from 'rxjs';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  // @ts-ignore
  const service = new TodoService(null);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });


  xit('Debe cargar los todos', () => {


    const todos = [
      {
        "todoId": 1,
        "name": "primera tarea",
        "description": "descripcion de segund tarea"
      },
      {
        "todoId": 2,
        "name": "primera tarea",
        "description": "descripcion de segund tarea"
      }
    ];
    const mockTodos = [
      {
        "todoId": 1,
        "name": "primera tarea",
        "description": "descripcion de segund tarea"
      },
      {
        "todoId": 2,
        "name": "primera tarea",
        "description": "descripcion de segund tarea"
      }
    ];
    const myObservable = from(todos);
    spyOn(service, 'getAllTodo').and.returnValue(of({ status: true, data: mockTodos }));



    component.ngOnInit();


    expect(component.todos.length).toBeGreaterThan(0);

  });


});
