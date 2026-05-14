<template>
  <div class="col-md-4 col-lg-3 mb-4">
    <div class="card h-100">
      <img :src="itemProp.imageUrl" class="card-img-top" :alt="itemProp.title" style="height:280px; object-fit:cover;" />
      <div class="card-body">
        <h5 class="text-xl font-semibold mt-2">{{ itemProp.title }}</h5>
        <button @click="goToDetails">Részletek</button>
      </div>
    </div>
  </div>
</template>
<script setup>
//defineProps(['book'])
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  itemProp: Object
})

const router = useRouter()

function goToDetails() {
  router.push(`/items/${props.itemProp.id}`)
}
</script>
