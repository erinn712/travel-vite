import { createI18n } from "i18n";
import zh from "./lang/zh-TW.json";
import en from "./lang/en-US.json";

export default createI18n({
  // 使用當前技術，確保程式碼的兼容性
  legacy: false,
  // 設置地區，由localStorage中取得地區，若沒有則使用預設語言zh-TW
  locale: localStorage.getItem("locale") ?? "zh-TW",
  // 語言設定不存在或無法使用時的預設語言
  fallbackLocale: "zh-TW",
  messages: {
    "zh-TW": zh,
    "en-US": en,
  },
});
