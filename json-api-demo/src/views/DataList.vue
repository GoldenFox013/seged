<template>
    <div v-if="store.loading" class="col-span-full text-center">Betöltés...</div>
    <div v-if="store.error" class="col-span-full text-center text-red-600">{{ store.error }}</div>

    <div class="container">
      <h2 class="my-4 text-center">Futócipők</h2>
      <div class="row">
        <ItemCard v-for="item in store.items"
                :key="item.id"
                :itemProp="item"
                @details="showDetails" />
      </div>
    </div>

      

<!--     
<div v-for="item in store.items" :key="item.id" class="border rounded shadow p-4">
 <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded" />
      <h2 class="text-xl font-semibold mt-2">{{ item.title }}</h2>
      <router-link 
        :to="{ name: 'Details', params: { id: item.id } }"
        class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Részletek
      </router-link>
         </div>
-->
 
</template>

<script setup>
import { onMounted } from 'vue'
import { useItemsStore } from '../stores/items'
import ItemCard from '../components/ItemCard.vue'

const store = useItemsStore()

onMounted(() => {
  store.fetchItems()
})
const showDetails = (id) => { console.log('Könyv azonosító:', id) }
</script>