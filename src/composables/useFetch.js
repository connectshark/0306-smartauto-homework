import { ref } from 'vue'

export default (url) => {
  const loading = ref(false)
  const data = ref(null)

  const error = ref(false)
  const doFetch = async ({ per_page = 10, page = 1 }) => {
    loading.value = true
    error.value = false
    try {
      const response = await fetch(`${url}?per_page=${per_page}&page=${page}`)
      if (!response.ok) {
        error.value = true
        return
      }
      data.value = await response.json()
    } catch (err) {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  return { loading, data, error, doFetch }
}