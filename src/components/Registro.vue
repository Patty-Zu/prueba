<template>
  <div>
    
  </div>
  <div> 
      <form class="form-reg" @submit.prevent="registrar">
          <div>
            <img src="../assets/idat.png" alt="reg">
          </div>
          <div>
            <input class="control" type="email" placeholder="Correo" v-model="nuevo.email"  required/>
          </div>
          <div >
            <input class="control" type="text" placeholder="Nombre y Apellido" v-model="nuevo.username"  />
          </div>
          <div>
              <input class="control" type="password" placeholder="Contraseña" v-model="nuevo.password" />
          </div>
      
          <div class="sel">
            <input type="checkbox" id="check-1" value="Acepto" v-model="nuevo.politica" >
            <label for="check-1"> Acepto <a href="#"> los terminos y condiciones</a></label>
          </div>
          <div>
              <button type="submit">Registrarse</button>
          </div>
      </form>
  </div>
</template>

<script>

export default {
    data(){
      return{
          nuevo:{
              email: '',
              username: '',
              password: '',
          },
      };
    },

    
    methods: {
     
    async registrar(){
    const rawResponse = await fetch('https://thawing-stream-82830.herokuapp.com/auth/register/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.nuevo)
  });
  const content = await rawResponse.json();

  console.log(content);

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

.form-reg{
  width:400px;
  height: 570px;
  padding: 10px;
  margin: auto;
  
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
.sel{
  margin-top: 20px;
}

label{
  display: flex;
  align-items: left;
}

 button{
   width: 100%;
   margin-top: 55px;
   padding: 10px;
   border-radius: 4px;
   border: 1px solid;
   background: #5640FF;
   font-family: 'Poppins',sans-serif;
   font-size: 16pt;
   font-weight: bold;
   color: white;
 }

 .form-reg img{
   width: 180px;
   height: 180px;
   margin: 5px 0 30px;
 }
 
 input[type="checkbox"]:not(old) + label {
   cursor: pointer;
}

input[type="checkbox"]:not(old) + label:before {
   content: '';
   width: 15px;
   height: 15px;
   border: 1px double black;
   cursor: pointer;
   vertical-align: top;
   display: inline-block;
   margin-right: 5px;
}

.wrapper {
  position: relative;
}

input[type="checkbox"]:not(old) {

  /* Opacidad para ocultar el input */
  opacity: 0;

  /* Position para dejar el input bajo el label
     (Es importante agregar al contenedor una posición relativa) */
  position: absolute;
  top: 0;
  left: 0;
}

/* Este es un pequeño reset */
input[type="checkbox"]:not(old) + label::-moz-selection,
input[type="checkbox"]:not(old) + label::selection {
  color: inherit;
  background-color: transparent;
}

input[type="checkbox"]:not(old):checked + label:before {
   /* Estilos del input seleccionado */
   box-shadow: inset 0 0 1px 2px white;
   background: black;
}
 
</style>