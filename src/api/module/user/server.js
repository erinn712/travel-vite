// /src/api/server.js
import axios from "axios";

// 創建 Axios 實例
const axiosInstance = axios.create({
  baseURL: "/mock", // 設置基礎URL => 跟後端要資料的 URL
  timeout: 5000, // 設置請求超時時間(單位：毫秒[ms])
});

// 請求攔截器
axiosInstance.interceptors.request.use(
  function (config) {
    // 在發送請求之前做些什麼
    // 可以在此處新增請求頭、修改請求參數等操作
    return config;
  },
  function (error) {
    // 對請求錯誤做些什麼
    return Promise.reject(error);
  }
);

// 回應攔截器
axiosInstance.interceptors.response.use(
  function (response) {
    // 對回應資料做些什麼
    return response;
  },
  function (error) {
    // 對回應錯誤做些什麼
    return Promise.reject(error);
  }
);

export default axiosInstance;
