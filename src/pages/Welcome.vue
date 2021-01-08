<template>
    <div class="flex flex-col  items-center text-xl">
        <img class="mt-32 mb-16" src="../assets/loginpage.png" />
        <heading class="mb-16 ">Welkom bij PSV Zwemmen</heading>
        <div class="w-7/12 mb-4">
           <primary-button variant="primary">Inloggen</primary-button>
        </div>
        <div class="w-7/12 ">
        <primary-button variant='secondary'>Registreren</primary-button></div>
       
    </div>
</template>
    

<script>
import Heading from '../shared/Heading.vue';
import PrimaryButton from "../shared/PrimaryButton";

export default {
  components: { PrimaryButton,  Heading,  },
    
}
</script>

<style scoped>

</style>