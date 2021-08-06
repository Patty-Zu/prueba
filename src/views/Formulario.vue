<template>
  <div class="home">
    <div class="formu">

   <nav class="nav">
      <div>
        
      </div>
      <div class="mytabs">
      <input type="radio" id="tabfree" name="mytabs" checked="checked" />
      <label class="lab" for="tabfree">Iniciar Sesion</label>
      <div class="tab">
        <Login />
      </div>

      <input type="radio" id="tabsilver" name="mytabs" />
      <label class="lab" for="tabsilver">Registrate</label>
      <div class="tab">
        <Registro />
      </div>
     </div>
    </nav>
  </div>
    
    

  </div>
</template>

<script>
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
<style scope>

.formu {
  width: 100%;
  min-height: 100vh;
  background-image: url(../assets/fondo.png);
  margin: 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.nav{
  width: 100%;
  padding-top: 0;
}
.mytabs {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  margin-left: 1035px;

}
.mytabs input[type="radio"] {
  display: none;
}
.lab {
  width: 250px;
  padding: 25px;
  background: white;
  font-weight: bold;
}

.mytabs .tab {
  width: 100%;
  padding: 40px;
  background: #fff;
  order: 1;
  display: none;
}
.mytabs .tab h2 {
  font-size: 3em;
}

.mytabs input[type="radio"]:checked + label + .tab {
  display: block;
}

.mytabs input[type="radio"]:checked + label {
  background: rgb(231, 228, 228);
  text-decoration: 2px solid black;
}
</style>
