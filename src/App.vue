<template>
  <div>
    <header>
      <nav>
        <button :class="{ active: currentView === 'todos' }" @click="currentView = 'todos'">Todos</button>
        <button :class="{ active: currentView === 'posts' }" @click="currentView = 'posts'">Post</button>
      </nav>
    </header>
    <main>
      <Todos v-if="currentView === 'todos'" />
      <Posts v-else />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import Todos from './components/Todos.vue';
import Posts from './components/Posts.vue';

export default {
  name: 'App',
  components: {
    Todos,
    Posts,
  },
  setup() {
    const currentView = ref('todos');
    return { currentView };
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
}

header {
  background-color: #007bff;
  padding: 10px;
  color: white;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav button {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
}

nav button.active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

nav button:hover {
  color: #cce5ff;
}

main {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
