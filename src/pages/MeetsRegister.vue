<template>
    <div>
        <top-nav-left />
        <div class="">
            <heading class="border-darkred flex justify-center mt-4">Registeren voor meet</heading>
            <div class="font-light text-sm text-center mt-8">Bekijk de meets en registreer je waar je wilt.</div>
        </div>
        <meets-registration />
    </div>
</template>

<script>

import  MeetsRegistration from '../components/meets/MeetsRegistration.vue';
import TopNavLeft from '../shared/TopNavLeft.vue';
import Heading from '../shared/Heading.vue';

export default {
    components: {
        MeetsRegistration, 
        TopNavLeft,
        Heading,

    }
}
</script>

<style>

</style>