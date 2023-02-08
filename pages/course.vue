<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const listLessons = computed(() => {
  return chapter.value.lessons.map(({ title, slug, id }) => ({
    title,
    slug,
    id,
  }));
});
</script>

<template>
  <div
    class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
  >
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold"> Mastering Nuxt 3 </span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row flex-grow justify-center">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <ul>
          <li v-for="lesson in listLessons" :key="lesson.id">
            <NuxtLink :to="`/course/chapter/${route.params.chapterSlug}/lesson/${lesson.slug}`">
            {{ lesson.title }}
          </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
