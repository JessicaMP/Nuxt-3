<script setup>
 const title = useTitle()
  const Lesson = resolveComponent('Lesson')
 
 
  useHead({
    title
  })
</script>

<template>
  <Lesson />
</template>