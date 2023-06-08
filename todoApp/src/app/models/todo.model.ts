export class Todo {
  todoId?: number;
  name?: string;
  description?: string;


  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
