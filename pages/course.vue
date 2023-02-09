<script setup>
const course = useCourse();
// const route = useRoute();

const chapters = computed(() => {
  return course.chapters.map(({ title, slug, lessons}) => ({
    title,
    slug,
    lessons
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
        <ol class="list-decimal">
          <li v-for="(chapter, index) in chapters" :key="index">
           <h4> {{ chapter.title }}</h4>
              

            <ul v-if="chapter.lessons && chapter.lessons.length > 0">
              <li v-for="lesson in chapter.lessons" :key="lesson.id">
                <NuxtLink
                class="no-underline"
                  :to="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
                >
                  {{ lesson.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
