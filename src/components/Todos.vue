<template>
  <div class="container">
    <h1>Daftar Kegiatan</h1>
    <input
      type="text"
      v-model="newTodoText"
      @keyup.enter="addTodo"
      placeholder="Tambah kegiatan baru"
    />
    <button class="add" @click="addTodo">Tambah</button>
    <button class="filter" @click="toggleFilter">
      {{ showCompleted ? 'Tampilkan Belum Selesai' : 'Tampilkan Semua' }}
    </button>
    <div v-for="(todo, index) in filteredTodos" :key="index" class="todo-item">
      <span :class="['todo-text', { completed: todo.completed }]">{{ todo.text }}</span>
      <div class="todo-actions">
        <input type="checkbox" v-model="todo.completed" />
        <button class="delete" @click="deleteTodo(index)">Hapus</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'Todos',
  setup() {
    const newTodoText = ref('');
    const todos = ref([]);
    const showCompleted = ref(false);

    const addTodo = () => {
      if (newTodoText.value.trim()) {
        todos.value.push({
          text: newTodoText.value.trim(),
          completed: false,
        });
        newTodoText.value = '';
      }
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const toggleFilter = () => {
      showCompleted.value = !showCompleted.value;
    };

    const filteredTodos = computed(() => {
      if (showCompleted.value) {
        return todos.value;
      }
      return todos.value.filter((todo) => !todo.completed);
    });

    return {
      newTodoText,
      todos,
      showCompleted,
      addTodo,
      deleteTodo,
      toggleFilter,
      filteredTodos,
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease-in-out;
}

.container:hover {
  transform: scale(1.02);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
}

input[type="text"] {
  width: calc(100% - 22px);
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  border-color: #0056b3;
  outline: none;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.add {
  background-color: #28a745;
  color: white;
  width: 100%;
  margin-bottom: 10px;
}

button.add:hover {
  background-color: #218838;
}

button.filter {
  background-color: #007bff;
  color: white;
  width: 100%;
  margin-bottom: 10px;
}

button.filter:hover {
  background-color: #0056b3;
}

button.delete {
  background-color: #dc3545;
  color: white;
  margin-left: 10px;
}

button.delete:hover {
  background-color: #c82333;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #f8f9fa;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background-color 0.3s;
}

.todo-item:hover {
  background-color: #e9ecef;
}

.todo-text {
  flex: 1;
  color: #333333;
}

.todo-text.completed {
  text-decoration: line-through;
  color: #aaa;
}

.todo-actions {
  display: flex;
  align-items: center;
}
</style>
