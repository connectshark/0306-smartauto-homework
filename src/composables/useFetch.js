import { ref } from 'vue'

export default (url) => {
  const loading = ref(false)
  const data = ref(null)
  const doFetch = async ({ per_page = 10, page = 1 }) => {
    loading.value = true
    const response = await fetch(`${url}?per_page=${per_page}&page=${page}`)
    data.value = await response.json()
    loading.value = false
  }

  return { loading, data, doFetch }
}