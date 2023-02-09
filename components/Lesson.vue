<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});
console.log({ c: chapter.value });

const lesson = computed(() => {
  if (!chapter.value) return null;
  if (chapter.value.lessons.length === 0) return null;
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
</script>

<template>
  <div class="space-y-4">
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ lesson?.course_order + 1 || "--" }} - duration:
      {{ lesson?.duration || "--" }}
    </p>
    <h2 class="my-0">{{ lesson?.title || "--" }}</h2>

    <div class="flex space-x-4">
      <a
        v-if="lesson?.sourceUrl"
        :href="lesson.sourceUrl"
        class="font-normal text-md text-gray-500"
      >
        Download Source Code
      </a>

      <a
        v-else-if="lesson?.downloadUrl"
        :href="lesson.downloadUrl"
        class="font-normal text-md text-gray-500"
      >
        Download Video
      </a>

      <a v-else href="#" class="cursor-no-drop text-gray-300">Download Video</a>
    </div>
    <p>{{ lesson?.text || "--" }}</p>
    <!-- <p>This is a lesson</p>
    <p>{{ chapter.title }}</p>
    <p>{{ lesson.title }}</p> -->
    <!-- <p v-if="$route.params.chapterSlug">Chapter slug: {{ $route.params.chapterSlug }}</p>
    <p v-if="$route.params.lessonSlug">Lesson slug: {{ $route.params.lessonSlug }}</p> -->
  </div>
</template>
