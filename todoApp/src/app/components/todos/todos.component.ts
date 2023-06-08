import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  displayedColumns: string[] = ['todoId', 'name', 'description'];
  dataSource = new MatTableDataSource<Todo>();
  todos: Todo[] = [];
  constructor(
    private todoService: TodoService
  ) {

    this.todos = this.todoService.todoArray;
  }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<Todo>(this.todos);

    // http
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllTodo().subscribe(resp => {
      if (resp.status) {
        this.todos = resp.data;
        this.dataSource = new MatTableDataSource<Todo>(this.todos);
      }
    })
  }

}
