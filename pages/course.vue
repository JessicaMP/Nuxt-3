<script setup>
const { chapters } = useCourse();
const route = useRoute()

const getTextColor = computed(() => {
  return (path) => {
    if(path === route.fullPath) return 'text-blue-500'
    return 'text-gray-600'
  }
})
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
        <div v-for="(chapter, index) in chapters" :key="index">
          <h4>
            <strong>Chapter {{ index + 1 }}</strong> ({{ chapter.title }})
          </h4>

          <ol
            v-if="chapter.lessons && chapter.lessons.length > 0"
            class="list-decimal"
          >
            <li v-for="lesson in chapter.lessons" :key="lesson.id">
              <NuxtLink
                class="no-underline"
                :to="lesson.path"
                :class="getTextColor(lesson.path)"
              >
                {{ lesson.title }}
              </NuxtLink>
            </li>
          </ol>
        </div>
      </div>
      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-blue-500;
}
</style>
