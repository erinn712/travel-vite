<template>
  <div>
    login
  </div>
</template>
<script>
export default {
  name: "login",
  setup () {
    // const login = async (data) => {
    //   try {
    //     const { token } = await loginApi(data);
    //     if (token) {
    //       localStorage.setItem("authToken", token);
    //       message.success("登入成功");
    //       // TODO: 看是否要導向某個頁面
    //     }
    //   } catch (err) {
    //     message.error("登入失敗");
    //     console.error("Login fail", error);
    //   }
    // };

    // const logout = () => {
    //   localStorage.removeItem("authToken");
    //   message.success("登出成功");
    //   // TODO: 看是否要重導入首頁
    // };
    // return { login, logout };
  },
};

// 前端拿到Token之後，將token儲存在本地
// 回饋給使用者通知登入成功
</script>
