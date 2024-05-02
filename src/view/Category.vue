<template>
  <v-app>
    <HeaderMenu />
    <v-main>
      <div>
      Diving {{ id }}
    </div>
    </v-main>
  </v-app>
</template>

<script setup>
import HeaderMenu from "@/components/header/index.vue";
import { useRoute } from "vue-router";

const route = useRoute()
const id = route.params.id
console.log(route)
</script>
