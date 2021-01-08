<template>
  <div>
    <router-view/>
    <bottom-nav/>
  </div>
      

</template>

<script>
import BottomNav from './shared/BottomNav.vue';

export default {
  name: 'App',

  components: {
    BottomNav
  },

  data: () => ({
    //
  }),
};
</script>
 