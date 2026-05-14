<template>
  <div v-if="item" class="container mt-5">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img :src="item.imageUrl" class="img-fluid mb-3" :alt="item.imageUrl" />
      </div>
      <div class="col-lg-8">
        <h2>{{ item.title }}</h2>
        <h3>{{ item.brand }}</h3>
        <div class="card mb-3">
          <div class="card-body">
            <strong>Futócipő adatai:</strong>
            <div>Azonosító: {{ item.id }}</div>
            <div>Kategória: {{ item.category }}</div>
          </div>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Ár:</strong>
          <p>{{ item.priceHuf }} Ft</p>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Értékelések</strong>
          <div class="progress">
            <div class="progress-bar bg-success" :style="`width:${item.point*10}%`">
              {{ item.point }}/10
            </div>
          </div>
          <small>Több mint 10 millió értékelés alapján</small>
        </div>
        <button class="btn btn-secondary me-2" @click="$router.push('/items')">Vissza a futócipőkhöz</button>
        <button class="btn btn-primary">Kosárba tesz</button>
      </div>
    </div>
  </div>

  <div v-else class="container mt-5">
    <p>Nincs ilyen futócipő azonosítóval.</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useItemsStore } from '../stores/items'

const route = useRoute()
const router = useRouter()
const store = useItemsStore()

const item = computed(() =>
  store.items.find(i => i.id == route.params.id)
)

onMounted(async () => {
  if (!store.items.length) {
    await store.fetchItems()
  }
})
</script>