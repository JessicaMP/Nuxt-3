export const useTitle = () => {
    const course = useCourse()
    const route = useRoute()
  
    const chapter =  computed(() => {
      return course.chapters.find((chapter) => chapter.slug === route.params.chapterSlug)
    })
  
    const lesson = computed(()=> {
      return chapter?.value?.lessons.find((lesson) => lesson.slug === route.params.lessonSlug)
    })

    const title = computed(() => {
        return `${lesson?.value?.title} - ${course.title}`
    })
    return title
}
