<template>
  <div>
    
  </div>
  <div> 
      <form class="form-reg" @submit.prevent="procesarInfo()">
          <div>
            <img src="../assets/reg.png" alt="reg">
          </div>
          <div class="">
            <input class="control" type="text" placeholder="Nombre y Apellido" v-model="nuevo.nombre" required/>
          </div>
          <div>
            <input class="control" type="email" placeholder="Correo" v-model="nuevo.email"/>
          </div>
          <div>
              <input class="control" type="password" placeholder="Contraseña" v-model="nuevo.password"/>
          </div>
      
          <div>
            <input type="checkbox" id="check-1" value="Acepto" v-model="nuevo.politica" >
            <label for="check-1">Acepto <a href="#"> terminos y condiciones</a></label>
          </div>
          <div>
              <button type="submit">Registrarse</button>
          </div>
      </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';
export default {
    data(){
      return{
          nuevo:{
              id: '',
              nombre: '',
              email: '',
              password: '',
              terminos: [],
          },
      };
    },
    methods: {
      ...mapActions(['setRegistroAction']),
        procesarInfo(){
          if(this.postulante.nombre.trim() === ''){
            console.log(nuevo.password);
            return;
          }

          //genera id
          this.nuevo.id=uuidv4();
          //console.log(this.nuevo);

          //mandar al action
          this.setRegistroAction(this.nuevo);
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

.form-reg{
  width:400px;
  background: palevioletred;
  padding: 10px;
  margin: auto;
  margin-top:100px;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  color: black;
}

.form-reg h3{
  font-size: 22px;
  margin-bottom: 20px;
  
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
   margin-top: 20px;
   padding: 10px;
   border-radius: 4px;
   border: 1px solid #5640FF;
   background: #5640FF;
   font-family: 'Poppins',sans-serif;
   font-size: 16pt;
   font-weight: bold;
   color: white;
 }

 .form-reg img{
   width: 250px;
   height: 150px;
   margin: 5px 0 30px;
 }
</style>