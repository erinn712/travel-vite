<template>
  <!-- nav bar -->
  <v-app-bar :elevation="2">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="cyan-darken-1" v-bind="props" class="btn-explore">
          {{ t("header.explore") }}</v-btn
        >
      </template>
      <v-list v-model:opened="open">
        <!-- 熱門城市選單 -->
        <v-list-group
          v-for="(group, i) in exploreList"
          :key="i"
          :title="group.title"
          :value="group.title"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :key="i"
              :value="group.title"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="([subtitle], j) in group.subtitle"
            :key="j"
            :value="subtitle"
            >{{ subtitle }}</v-list-item
          >
        </v-list-group>
      </v-list>
    </v-menu>

    <v-app-bar-title @click="homePage" class="cursor-pointer">
      <v-icon icon="mdi-airplane"></v-icon>
      {{ t("header.title") }}
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn> {{ t("header.myFollowing") }} </v-btn>
      <v-btn> {{ t("header.startPlanning") }} </v-btn>
      <!-- 註冊按鈕 -->
      <v-dialog max-width="500" transition="dialog-top-transition">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="red-lighten-3"
            :text="t('header.login')"
          ></v-btn>
        </template>
        <!-- 登入表單 -->
        <template v-slot:default="{ isActive }">
          <v-card
            class="text-center pa-10"
            color="grey-lighten-5"
            :title="t('loginForm.title')"
          >
            <v-form fast-fail @submit.prevent>
              <v-text-field
                class="mt-4"
                v-model="username"
                :rules="firstNameRules"
                :label="t('loginForm.username')"
                variant="outlined"
                color="teal-darken-3"
              ></v-text-field>

              <v-text-field
                class="mt-4"
                v-model="password"
                :rules="lastNameRules"
                :label="t('loginForm.password')"
                variant="outlined"
                color="teal-darken-3"
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-text>忘記密碼</v-text>
              </v-card-actions>
              <v-card-actions>
                <v-btn
                  class="mx-auto"
                  variant="outlined"
                  color="teal-darken-4"
                  type="submit"
                  @click="isActive.value = false"
                  >{{ t("loginForm.signIn") }}</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </template>
      </v-dialog>

      <!-- 語言切換 -->
      <select v-model="locale">
        <option value="zh-TW">中文</option>
        <option value="en-US">English</option>
      </select>

      <!-- 收藏 -->
      <v-dialog max-width="800" transition="dialog-top-transition">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            icon="mdi-heart"
            color="red-accent-2"
          ></v-btn>
        </template>
        <!-- 收藏表單 -->
        <template v-slot:default="{ isActive }">
          <v-card
            class="text-center pa-10"
            color="grey-lighten-5"
            :title="t('collection.title')"
          >
            <v-card class="text-center pa-10" variant="elevated" hover>
              <v-card-item d-flex>
                <div class="text-overline mb-1">
                  {{ t("collection.category") }}
                </div>
                <div class="text-h6 mb-1">
                  {{ t("collection.article") }}
                </div>
                <div class="text-caption">
                  {{ t("collection.intro") }}
                </div>
              </v-card-item>

              <v-card-actions>
                <v-btn variant="outlined"> {{ t("collection.read") }} </v-btn>
                <v-btn variant="outlined"> {{ t("collection.delete") }} </v-btn>
              </v-card-actions>
            </v-card>
            <v-card-actions>
              <v-btn
                class="mx-auto"
                variant="outlined"
                type="submit"
                @click="isActive.value = false"
                >{{ t("collection.close") }}</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <!-- 搜尋框 -->
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
        style="width: 200px"
      ></v-text-field>
    </template>
  </v-app-bar>
</template>

<script setup>
import { reactive, watch, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

let search = ref('')

const router = useRouter();
const homePage = () => {
  // router.push({ path: "/home" })
  router.push("/home");
  console.log("homePage");
};
const { t, locale } = useI18n();
const exploreList = reactive([
  {
    title: t("cityMenu.title"),
    subtitle: [
      ["台南", "mdi-account-multiple-outline"],
      ["花蓮", "mdi-cog-outline"],
      ["首爾", "mdi-cog-outline"],
      ["東京", "mdi-cog-outline"],
      ["曼谷", "mdi-cog-outline"],
    ],
  },
  {
    title: "推薦行程",
    subtitle: [
      ["一日輕旅行", "mdi-account-multiple-outline"],
      ["三天兩夜深度遊", "mdi-cog-outline"],
      ["國外旅遊", "mdi-cog-outline"],
    ],
  },
  {
    title: t("topicMenu.title"),
    subtitle: [
      ["必吃美食", "mdi-account-multiple-outline"],
      ["IG打卡景點", "mdi-cog-outline"],
      ["悠遊散策", "mdi-cog-outline"],
      ["秘境攻略", "mdi-cog-outline"],
      ["國外自由行", "mdi-cog-outline"],
    ],
  },
]);

// const dialog = ref(false);

watch(locale, (newlocale) => {
  localStorage.setItem("locale", newlocale);
});
</script>

<style>
.btn-explore {
  font-size: large;
  font-weight: 600;
}
</style>
