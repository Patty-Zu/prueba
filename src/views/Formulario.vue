<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Login />
    <Registro />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Registro from "@/components/Registro.vue";

export default {
  name: "Home",
  components: {
    Login,
    Registro,
  },
};
</script>
