// api/module/home/index.js

import server from "../server";

export const homeApi = {
  getSlidesApi: async () => {
    const { data } = await server.get("/slides");
    return data;
  },
  getTopicCardsApi: async () => {
    const { data } = await server.get("/topicCards");
    return data;
  },
  getPlacesApi: async () => {
    const { data } = await server.get("/placesCards");
    return data;
  },
  getRecommendCardsApi: async () => {
    const { data } = await server.get("/recommendCards");
    return data;
  },
};
