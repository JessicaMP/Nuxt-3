<template>
  <div>
    <h2>Lesson</h2>
    <p>This is a lesson</p>
    <p v-if="$route.params.chapterSlug">Chapter slug: {{ $route.params.chapterSlug }}</p>
    <p v-if="$route.params.lessonSlug">Lesson slug: {{ $route.params.lessonSlug }}</p>
  </div>
</template>
