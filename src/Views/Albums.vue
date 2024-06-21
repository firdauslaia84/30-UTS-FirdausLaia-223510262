<template>
  <div>
    <h1>Albums</h1>
    <div v-for="album in albums" :key="album.id">
      <router-link :to="'/albums/' + album.id">{{ album.title }}</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Albums',
  setup() {
    const albums = ref([]);

    const fetchAlbums = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      albums.value = await response.json();
    };

    onMounted(fetchAlbums);

    return {
      albums,
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
    max-width: 600px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333333;
  }
  
  .album-item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    transition: background-color 0.3s;
  }
  
  .album-item:hover {
    background-color: #f0f0f0;
  }
  </style>
  