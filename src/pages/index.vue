<script setup>
import useFetch from '@/composables/useFetch'
import { useVirtualList, useInfiniteScroll } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const API_URI = import.meta.env.VITE_API_URI
const USER_NAME = 'connectshark'

const { doFetch, loading, error, data } = useFetch(`${ API_URI }/users/${ USER_NAME }/repos`)

const realData = ref([])

const ITEM_HEIGHT = 130
const INITIAL_PAGE_SIZE = 30
const SUBSEQUENT_PAGE_SIZE = 10

const { list, containerProps, wrapperProps } = useVirtualList(
  realData,
  {
    itemHeight: ITEM_HEIGHT
  }
)

const options = {
  per_page: INITIAL_PAGE_SIZE,
  page: 1
}

const canLoadMore = ref(false)

onMounted(async () => {
  await doFetch({ per_page: options.per_page, page: options.page })
  if (error.value) return
  realData.value.push(...data.value)
  options.page = Math.floor(realData.value.length / SUBSEQUENT_PAGE_SIZE) + 1
  options.per_page = SUBSEQUENT_PAGE_SIZE
  canLoadMore.value = true
})

useInfiniteScroll(
  containerProps.ref,
  async () => {
    await doFetch({ per_page: options.per_page, page: options.page })
    if (error.value) return
    realData.value.push(...data.value)
    options.page++
    if (data.value.length < 10) {
      canLoadMore.value = false
    }
  },
  {
    distance: 10,
    canLoadMore: () => canLoadMore.value
  }
)

</script>

<template>
  <section
    v-bind="containerProps"
    class="h-screen pt-2"
  >
    <div class="w-11/12 max-w-lg mx-auto">
      <ul
        v-bind="wrapperProps"
        class="py-5"
      >
        <li
          v-for="item in list"
          :key="item.data.id"
          class="not-last:mb-6 font-bold p-3 rounded-xl bg-white border border-gray-200 shadow hover:shadow-lg"
        >
          <div class="text-lg font-bold line-clamp-1">
            <i class="bxl bx-github align-middle mr-1" /><span>{{ item.data.name }}</span>
          </div>
          <p class="line-clamp-1 text-sm text-gray-500">
            {{ item.data.description || 'No description provided.' }}
          </p>
          <div class="flex items-center justify-between">
            <p class="leading-loose">
              Row Index: {{ item.index + 1 }}  
            </p>
            <a
              :href="item.data.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-sky-600 hover:underline"
            >link<i class="bx bx-arrow-out-up-right-square text-lg align-middle" /></a> 
          </div>
        </li>
      </ul>
      <div
        v-if="error"
        class="py-20"
      >
        <p class="text-center">
          Something's Wrong.
        </p>
      </div>
    </div>
  </section>
</template>
