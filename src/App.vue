<template>
  <div>
    <header>
      <nav>
        <button :class="{ active: currentView === 'todos' }" @click="navigateTo('/todos')">Todos</button>
        <button :class="{ active: currentView === 'posts' }" @click="navigateTo('/posts')">Post</button>
        <button :class="{ active: currentView === 'albums' }" @click="navigateTo('/albums')">Album Foto</button>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const currentView = ref('todos');
    const router = useRouter();

    const navigateTo = (view) => {
      currentView.value = view;
      router.push(view);
    };

    return { currentView, navigateTo };
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  margin: 0;
  padding: 0;
}

header {
  background-color: #007bff;
  padding: 10px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
  transition: color 0.3s, transform 0.3s;
}

nav button.active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

nav button:hover {
  color: #cce5ff;
  transform: scale(1.1);
}

main {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
}
</style>
