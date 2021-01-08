<template>
<div class="flex justify-center">
    <div class="font-bold">
    <slot> </slot>
    <div class="border-4 border-darkred -mt-25 "></div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .-mt-25 {
        margin-top: -10px;
    }
</style>