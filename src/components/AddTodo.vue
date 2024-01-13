<template>
  <div>
    <form @submit.prevent>
      <input
        :value="text"
        @input="(event) => (text = (event.target as HTMLInputElement).value)"
        type="text"
        placeholder="Write a todo..."
      />
      <button type="submit" @click="handleAddTodo()">Add Todo</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { todoStore } from "../store/todo.ts";

const text = ref("");
const { addTodo } = todoStore;

const handleAddTodo = () => {
  addTodo(text.value);
  text.value = "";
};
</script>
