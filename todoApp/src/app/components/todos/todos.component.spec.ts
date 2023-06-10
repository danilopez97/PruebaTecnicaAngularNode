import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from 'src/app/services/todo.service';
import { Observable, of, from } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';

class MockTodoService {

  getAllTodo(): Observable<any> {
    const myMock = [{
      "status": true,
      "message": "Datos cargados",
      "data": [
        {
          "todoId": 1,
          "name": "primera tarea",
          "description": "descripcion de segund atarea"
        }
      ]
    }]

    const myObservable = from(myMock);
    return myObservable;
  }

}


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let service: TodoService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosComponent],

      //Metodo 1
      // en este momento funciona porque se esta inyectando, pero en realidad no deberia
      // imports: [HttpClientTestingModule],
      // providers: [TodoService]

      // metodo 2
      //este metodo ahora se elimina el httpclientTestinModule para implementar un mock
      // en lugar de usar el TodoService usamos el MockTodoService
      providers: [
        { provide: TodoService, useClass: MockTodoService }
      ],


    })
      .compileComponents();

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // injectar el servicio para espiarlo
    service = TestBed.inject(TodoService); // esto evita que se haga publico en el componente
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });


  // esta es una prueba pero haciendo publico el todoService en el componente
  // este es parte del metodo 1
  // it('el ngOnInit de cargar los datos de los TOdos', () => {

  //   const myMock = [{
  //     "status": true,
  //     "message": "Datos cargados",
  //     "data": [
  //       {
  //         "todoId": 1,
  //         "name": "primera tarea",
  //         "description": "descripcion de segund atarea"
  //       }
  //     ]
  //   }]

  //   const myObservable = from(myMock);

  //   spyOn(component.todoService, 'getAllTodo').and.callFake(() => myObservable);

  //   component.ngOnInit();

  //   expect(component.todos.length).toBeGreaterThanOrEqual(1);

  // });


  // esto es del metodo 2 con el mock
  it('el ngOnInit de cargar los datos de los TOdos', () => {


    // se usa callThrough cuando solamante se quiere llamar sin sobrescribir el metodo getAllTodo
    spyOn(service, 'getAllTodo').and.callThrough();


    component.ngOnInit();

    expect(component.todos.length).toBe(1);

  });


});
