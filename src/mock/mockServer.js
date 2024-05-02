// mock/mockServer.js

import Mock from "mockjs";

import slides from "./slides.json";
import placesCards from "./placesCards.json";
import topicCards from "./topicCards.json";
import recommendCards from "./recommendCards.json";
import pages from "./pages.json";

// import token from "./login.json";

Mock.mock("/mock/slides", {
  code: 200,
  data: slides,
});

Mock.mock("/mock/placesCards", {
  code: 200,
  data: placesCards,
});

Mock.mock("/mock/topicCards", {
  code: 200,
  data: topicCards,
});

Mock.mock("/mock/recommendCards", {
  code: 200,
  data: recommendCards,
});

Mock.mock("/mock/pages", {
  code: 200,
  data: pages,
});

// Mock.mock("/mock/login", {
//   code: 200,
//   data: token,
// });
