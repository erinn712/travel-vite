<template>
  <div>
    user
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: "user",
  setup () {
    const userPage = ref(`<h1>name</h1>`)
    return { userPage }
  },
}
</script>
