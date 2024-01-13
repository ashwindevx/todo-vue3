<template>
  <div>
    <div v-for="todo in todoStore.state.todos">
      <p>{{ todo }}</p>
      <button @click="deleteTodo(todo)">Delete Todo</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { todoStore } from "../store/todo.ts";

const { deleteTodo } = todoStore;
</script>
