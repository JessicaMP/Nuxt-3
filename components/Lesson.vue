<script setup>
  const course = useCourse()
  const route = useRoute()

  const chapter =  computed(() => {
    return course.chapters.find((chapter) => chapter.slug === route.params.chapterSlug)
  })

  const lesson =  computed(()=> {
    return chapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug)
  })
</script>

<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
    <p>This is a lesson</p>
    <p>{{ chapter.title }}</p>
    <p>{{ lesson.title }}</p>
    <!-- <p v-if="$route.params.chapterSlug">Chapter slug: {{ $route.params.chapterSlug }}</p>
    <p v-if="$route.params.lessonSlug">Lesson slug: {{ $route.params.lessonSlug }}</p> -->
  </div>
</template>
