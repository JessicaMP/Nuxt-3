<script setup>
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <iframe
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video Player"
    width="560"
    height="315"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  >
  </iframe>
</template>

<style scoped></style>
