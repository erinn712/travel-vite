<template>
  <h2>{{ t("recommendCards.title") }}</h2>
  <v-row dense>
    <v-col v-for="card in data" :key="card.title" :cols="card.flex">
      <v-card hover href="#">
        <v-img :src="card.img" class="text-right pa-2 img-height" cover>
          <v-btn :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"></v-btn>
        </v-img>
        <v-card-title>{{ card.title }}</v-card-title>
        <v-card-subtitle style="margin-bottom: 10px">
          {{ card.subtitle }}
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "RecommendCards",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup () {
    const { t, locale } = useI18n();

    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });

    return {
      t,
      locale,
    };
  },
};
</script>
