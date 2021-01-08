<template>
  <div>
   
    <div class="w-10/12 flex flex-col mx-auto ">
        <heading class="text-xl my-16">Registratie</heading>
    <form action="">

      <div class="flex flex-col mb-4">
        <label for="Volledige naam
        ">Volledige naam</label>
        <input class="bg-gray-100 p-2" type="text" v-model="form.name" placeholder="John doe"/>

      </div>
       <div class="flex flex-col mb-4">
        <label for="email
        ">E-mail</label>
        <input class="bg-gray-100 p-2" type="text" v-model="form.email" placeholder="loremipsum@gmail.nl"/>

      </div>
      <div class="flex flex-col">
        <label for="password
        ">Wachtwoord</label>
        <input class="bg-gray-100 p-2" placeholder="wachtwoord" type="password" v-model="form.password"/>
        
      </div>
      <primary-button class="mt-16">Registreren</primary-button>
      <router-link class="text-xs text-gray-400" to="register">Heb je al een account? <span class="text-black font-semibold">Login</span></router-link>
    </form>
    </div>

  </div>
</template>

<script>

import AuthService from "../services/AuthService";
import Heading from "../shared/Heading.vue";
import PrimaryButton from '../shared/PrimaryButton.vue';
let auth = new AuthService();
export default { 
  components: { Heading, PrimaryButton },
  
   data() {
       return {
           form: {
               name: "",
               email: "",
               password: "",
           }
       }
   },
   methods: {
      register() {
      auth
        .authenticate(this.form.email, this.form.password)
        .then((response) => {
          const { id, username, email, role } = response.data;
          localStorage.setItem("access_token", response.data.token);
          localStorage.setItem("id", id);
          this.$store.commit("setUser", { id, username, email, role });
          this.$router.push("/");
        });
    },

   }
}
</script>

<style>

</style>