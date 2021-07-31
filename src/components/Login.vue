<template>
<div>
  
      <form class="form-log" @submit.prevent="procesarInfo()">
          <div>
            <img src="../assets/login.png" alt="login">
          </div>
          <div>
            <input class="control" type="email" placeholder="Correo Electronico" v-model="usuario.email" required/>
          </div>
          <div>
              <input class="control" type="password" placeholder="Contraseña" v-model="usuario.password"/>
          </div>
          <div>
              <button type="submit">Ingresar</button>
          </div>
      </form>
  </div>

  
</template>

<script>
import { mapActions } from 'vuex';
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
      ...mapActions(['setUsuarioAction']),
        procesarInfo(){
          if(this.usuario.nombre.trim() === ''){
            console.log('campo vacio');
            return;
          }

          //mandar al action
          this.setUsuarioAction(this.usuario);
        },
    },

};
</script>

<style>


*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

.form-log{
  width:400px;
  height: 500px;
  background: cadetblue;
  border: 1px solid black;
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
  margin-bottom: 16px;
  border: 1px solid gray;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}

 button{
   width: 100%;
   margin-top: 30px;
   padding: 10px;
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