<template>
<div class="flex justify-center">
  <vue-tabs class="mt-8 flex flex-col">
    <v-tab class="" title="Training">
      <training />
    </v-tab>
    <v-tab title="Agenda">
      <agenda />
    </v-tab>
    <v-tab title="Statistieken">
      <statistics />
    </v-tab>
  </vue-tabs>
</div>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import Training from './Training.vue';

export default {
  components: {
    VueTabs,
    VTab,
    Training
  },
};
</script>

<style>
.v-tab {
  background: black !important;
  justify-content: space-between;
}

.v-application .title {
  font-weight: 100 !important;
  font-size: 16px !important;
}

</style>
