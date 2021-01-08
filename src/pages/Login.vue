<template>
    <div>
        
        <heading>Welkom bij PSV Zwemmen</heading>
        <primary-button>Inloggen</primary-button>
        <secondary-button>Registreren</secondary-button>
        <bottom-nav />
    </div>
</template>
    

<script>
import BottomNav from '../shared/BottomNav.vue';
import Heading from '../shared/Heading.vue';
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from '../shared/SecondaryButton.vue';

export default {
  components: { PrimaryButton, SecondaryButton, Heading, BottomNav },
    
}
</script>

<style scoped>

</style>