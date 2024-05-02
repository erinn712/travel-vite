<template>
    <h2>{{ t("placesCard.title") }}</h2>
    <v-row dense>
      <v-col v-for="card in data" :key="card.title" :cols="card.flex">
        <v-card hover>
          <v-img
            :src="card.img"
            class="align-end img-height"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
          >
            <v-card-title class="text-white" v-text="card.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import { watch } from "vue";
import { useI18n } from "i18n";

export default {
  name: "PlacesCards",
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
