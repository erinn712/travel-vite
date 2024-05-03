<template>
    <h2>{{ t("topicCard.title") }}</h2>
    <v-row dense>
      <v-col v-for="card in data" :key="card.title" :cols="card.flex">
        <v-card hover href="#">
          <v-img
            :src="card.img"
            class="img-height"
            cover
            gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"
          >
            <v-card-title class="text-white">{{ card.title }}</v-card-title>
            <v-card-subtitle class="text-white">{{
              card.subtitle
            }}</v-card-subtitle>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import { watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "TopicCards",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const { t, locale } = useI18n();

    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });

    return {
      t,
      locale
    };
  },
};
</script>
