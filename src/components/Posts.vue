<template>
  <div class="container">
    <h1>Postingan</h1>
    <select v-model="selectedUser" @change="fetchPosts">
      <option value="">Pilih Pengguna</option>
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <div v-if="posts.length" class="posts-container">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <div v-else class="no-posts">
      <p>Tidak ada postingan untuk pengguna yang dipilih.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Posts',
  setup() {
    const users = ref([]);
    const posts = ref([]);
    const selectedUser = ref('');

    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      users.value = await response.json();
    };

    const fetchPosts = async () => {
      if (selectedUser.value) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`);
        posts.value = await response.json();
      } else {
        posts.value = [];
      }
    };

    onMounted(fetchUsers);

    return {
      users,
      posts,
      selectedUser,
      fetchPosts,
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #e0f7fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: auto;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.container:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #007bff;
  text-align: center;
}

select {
  width: 100%;
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: border-color 0.3s;
}

select:focus {
  border-color: #0056b3;
  outline: none;
}

.posts-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-item {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.post-item:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

.post-item h2 {
  font-size: 22px;
  margin: 0 0 10px 0;
  color: #007bff;
}

.post-item p {
  margin: 0;
  color: #555;
}

.no-posts {
  text-align: center;
  color: #007bff;
  font-size: 18px;
}
</style>
