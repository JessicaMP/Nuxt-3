<script setup>
  const VideoPlayer = resolveComponent('VideoPlayer')

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
      <NuxtLink
        v-if="lesson?.sourceUrl"
        :to="lesson.sourceUrl"
        class="font-normal text-md text-gray-500"
      >
        Download Source Code
      </NuxtLink>

      <NuxtLink
        v-if="lesson?.downloadUrl"
        :to="lesson.downloadUrl"
        class="font-normal text-md text-gray-500"
      >
        Download Video
      </NuxtLink>

      <p v-if="!lesson.sourceUrl && !lesson.downloadUrl" class="m-0 cursor-no-drop text-gray-300 underline">Download Video</p>
    </div>
    <VideoPlayer v-if="lesson.video_id" :videoId="lesson.video_id" />
    <p>{{ lesson?.text || "--" }}</p>
  </div>
</template>
