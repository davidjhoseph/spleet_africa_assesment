<template>
  <div>
    
  </div>
</template>

<script setup lang="ts">
const imageUrl = (s: any) => {
  return new URL(`../assets/icons/${s.image}.svg`, import.meta.url).href
}
</script>