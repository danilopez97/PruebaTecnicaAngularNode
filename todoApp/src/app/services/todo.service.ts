import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';
import { HandleError } from '../common/handle-error';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoArray: Todo[] = [];

  public addTodoArray(todo: Todo) {
    this.todoArray.push(todo);
  }



  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private handleError: HandleError,


  ) {

  }


  getAllTodo() {
    return this.http.get<Todo>(this.appConfig.getUrlBase() + 'todos').pipe(
      catchError(this.handleError.handleError<any>('getAllTodo'))
    );
  }

  addTodo(data: Todo) {
    return this.http.post<Todo>(this.appConfig.getUrlBase() + 'todos', data).pipe(
      catchError(this.handleError.handleError<any>('addTodo'))
    );
  }
}
