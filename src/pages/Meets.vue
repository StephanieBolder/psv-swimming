<template>
    <div>
        <top-nav-right />
        <div class="">
            <heading class="flex justify-center mt-4">Meets</heading>
            <div class="font-light text-sm text-center mt-8">Bekijk de meets en registreer je waar je wilt.</div>
        </div>
        <meets-content />
    </div>
</template>

<script>

import  MeetsContent from '../components/meets/MeetsContent.vue';
import TopNavRight from '../shared/TopNavRight.vue';
import Heading from '../shared/Heading.vue';

export default {
    components: {
        MeetsContent, 
        TopNavRight,
        Heading,

    }
}
</script>

<style>

</style>