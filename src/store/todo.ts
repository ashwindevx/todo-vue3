import { reactive } from "vue";

export const todoStore = {
  state: reactive({
    todos: [] as string[],
  }),
  addTodo(text: string) {
    todoStore.state.todos.push(text);
  },
  deleteTodo(todoToDelete: string) {
    todoStore.state.todos = todoStore.state.todos.filter(
      (todo) => todo !== todoToDelete
    );
  },
};
