<template>
  <div>
    <h1>Photos in Album {{ albumId }}</h1>
    <div v-for="photo in photos" :key="photo.id">
      <img :src="photo.thumbnailUrl" @click="viewPhoto(photo.url)" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AlbumDetail',
  setup() {
    const route = useRoute();
    const albumId = route.params.id;
    const photos = ref([]);

    const fetchPhotos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      photos.value = await response.json();
    };

    const viewPhoto = (url) => {
      window.open(url, '_blank');
    };

    onMounted(fetchPhotos);

    return {
      albumId,
      photos,
      viewPhoto,
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
  
  .photo-item {
    display: inline-block;
    margin: 10px;
    cursor: pointer;
  }
  
  .photo-item img {
    max-width: 150px;
    border-radius: 5px;
    transition: transform 0.3s;
  }
  
  .photo-item img:hover {
    transform: scale(1.05);
  }
  
  .photo-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .photo-modal img {
    max-width: 90%;
    max-height: 90%;
  }
  </style>
  