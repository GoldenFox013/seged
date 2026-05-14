<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container d-flex justify-content-between">    
      <div>
        <RouterLink to="/" class="nav-link d-inline text-light px-3">Kezdőlap</RouterLink>
        <RouterLink to="/items" class="nav-link d-inline text-light px-3">Futócipők</RouterLink>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>