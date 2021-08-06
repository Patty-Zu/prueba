<template>
  <div class="form-postula"> 
      <form @submit.prevent="procesarInfo" class="form-post">
          <h3>Postula y obten un 10%</h3>
          <h3>de descuento en el programa</h3>
          <div
          
          
          >
            <input class="control" type="text" placeholder="NOMBRE" v-model="postulante.nombre" required/>
          </div>

          <div>
            <input class="control" type="text" placeholder="CELULAR" v-model.number="postulante.celular"/>
          </div>
          <div>
            <input class="control" type="email" placeholder="EMAIL" v-model="postulante.email"/>
          </div>
          <div>
              <input class="control" type="text" placeholder="PROGRAMA" v-model="postulante.programa"/>
          </div>
          <div>
            <input type="checkbox" id="check-1" value="Acepto" v-model="postulante.politica" >
            <label for="check-1">Acepto las politicas de privacidad</label>
          </div>
          <div>
              <button type="submit">Quiero Postular</button>
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
          postulante:{
              id: '',
              nombre: '',
              celular: '',
              email: '',
              programa: '',
              politica: [],
          },
      };
    },
    methods: {
      ...mapActions(['setActions']),
        procesarInfo(){

        //reset
        this.postulante = {
          id: '',
          nombre: '',
          celular: '',
          email: '',
          programa: '',
          politica: [],
        }
      }

     
    },

};
</script>

<style>


*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

.form-post{
  width:400px;
  padding: 30px;
  margin: auto;
  margin-top: 60px;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  color: black;
}

.form-post h3{
  height: 30px;
  font-size: 14px;
  margin-bottom: 5px;
  margin-right: 30px;
  padding: 0;
}

.form-post label{
  height: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  margin-right: 30px;
}


.control{
  width: 50px;
  padding: 5px;
  border-radius: 4px;
  margin-right: 30px;
  margin-bottom: 16px;
  border: 1px solid gray;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}
 button{
   width: 200px;
   margin-top: 10px;
   margin-right: 30px;
   padding: 10px;
   border-radius: 4px;
   border: none;
   background: #5640FF;
   font-family: 'Poppins',sans-serif;
   font-size: 16px;
   font-weight: bold;
   color: white;
   
 }

 .form-postula{
   position: fixed;
   line-height: 56px;
   bottom: 100px;
   right: 50px;
   background: url("../assets/mobile.png") ;
   z-index: 100;
 }

 

</style>