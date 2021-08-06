<template>
<div>
  
      <form class="form-log" @submit.prevent="procesarInfo">
          <div>
            <img src="../assets/idat.png" alt="login">
          </div>
          <div>
            <input class="control" type="email" placeholder="Correo Electronico" v-model="usuario.email" required/>
          </div>
          <div>
              <input class="control" type="password" placeholder="Contraseña" v-model="usuario.password"/>
          </div>
          <div class="lib"><label>Ingresa un correo valido</label></div>
          <div>
              <button type="submit">Ingresar</button>
          </div>
      </form>
  </div>

  
</template>

<script>
export default {

    data(){
      return{
          usuario:{
              email: '',
              password: '',
          },
      };
    },
    methods: {
      enviar(){

      },
  
    },

};
</script>

<style scope>


*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

.form-log{
  
  margin-top:0;
  width:400px;
  height: 570px;
  padding: 8px;
  margin: 0 auto;
  
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  color: black;
}

.control{
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 30px;
  border: 1px solid gray;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}

.lib{
  color: red;
  font-size: 13px;
  margin: -15px 0 0 220px ;
}

 button{
   width: 100%;
   margin-top: 10px;
   border-radius: 5px;
   background: #5640FF;
   font-family: 'Poppins',sans-serif;
   font-size: 16pt;
   font-weight: bold;
   color: white;
 }

 .form-log img{
   width: 170px;
   height: 170px;
   margin: 5px 0 50px;
 }

</style>