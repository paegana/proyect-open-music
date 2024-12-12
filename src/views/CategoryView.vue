<template>
  <div>
    <h1>{{ categoryName.toUpperCase() }}</h1>
    <div class="albums">
      <div v-for="album in albums" :key="album.id" class="album">
        <img :src="album.image || 'https://via.placeholder.com/200'" :alt="`Cover of ${album.album}`" />
        <h2>{{ album.artist }}</h2>
        <p>{{ album.album }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const categoryName = computed(() => route.params.category);
    const albums = computed(() => store.getters.getCategory(categoryName.value));

    // Observa los cambios en la ruta y actualiza los datos
    watch(
      () => route.params.category,
      () => {
        // Actualiza automáticamente la lista de álbumes al cambiar de categoría
        albums.value = store.getters.getCategory(route.params.category);
      }
    );

    return { categoryName, albums };
  },
};
</script>

<style scoped>
.albums {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.album {
  text-align: center;
  background: #222;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

img {
  max-width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

h1 {
  text-align: center;
  font-size: 32px;
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
}
</style>
