<template>
<button class="w-full flex justify-center px-3 py-2  border-2 border-black rounded text-xs text-center " :class="variant == 'primary' ? 'bg-black text-white ' : 'bg-white text-black' ">
    <slot></slot>
</button>
</template>

<script>
export default {
    props: {
        variant: {
       type: String,
       default: "primary",
    }
    }
}
</script>

<style scoped>

</style>