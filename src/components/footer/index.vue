<template>
  <v-footer class="bg-teal-lighten-3 text-center d-flex flex-column">
      <div>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            class="mx-2"
            color="white"
            rounded="xl"
            variant="text"
          >
            {{ link }}
          </v-btn>
        </v-row>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum.
      </div>
      <!-- divider無作用 -->
      <v-divider class="border-opacity-50"></v-divider>
      <div>{{ new Date().getFullYear() }} — <strong>愛玩樂</strong></div>
      <v-row>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"
          color="brown-darken-4"
        >
        </v-btn>
      </v-row>
    </v-footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Footer",
  setup () {
    const links = ref(["首頁", "關於我們", "團隊", "相關服務", "聯絡我們"])
    const icons = ref(["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"])
    return { links, icons }
  }
}
</script>
