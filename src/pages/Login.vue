<template>
  <div>
    <img class="mt-16" src="../assets/login.png" />
    <div class="w-10/12 flex flex-col mx-auto ">
        <heading class="text-xl mb-16">Login</heading>
    <form action="">

      <div class="flex flex-col mb-8">
        <label for="email
        ">E-mail</label>
        <input class="ml-2 mt-1 bg-input p-3 rounded-sm font-light text-sm" type="text" v-model="form.email" placeholder="loremipsum@gmail.nl"/>

      </div>
      <div class="flex flex-col">
        <label for="password
        ">Wachtwoord</label>
        <input class="ml-2 mt-1 bg-input p-3 rounded-sm font-light text-sm" placeholder="wachtwoord" type="password" v-model="form.password"/>
        
      </div>
      <router-link class="float-right text-xs mt-2 text-ondertext font-light" to="resetpassword">Wachtwoord vergeten?</router-link>
      <router-link to="profile">
      <primary-button class="mt-16">Inloggen</primary-button></router-link>
      <div class="flex justify-center">
      <router-link class="text-xs font-light text-ondertext mt-2 " to="register">Nog geen account? <span class="text-black font-semibold">Registreer!</span></router-link>
      </div>
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
               email: "",
               password: "",
           }
       }
   },
   methods: {
      authenticate() {
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