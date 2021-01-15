<template>
<div>
    <div v-for="part in event.parts" :key="part.id">
        <div class="flex flex-col mx-12">
    <div class="flex flex-row justify-between mt-8 ">
      <events-titles class="">
          {{event.name}}
      </events-titles>
      <div class="font-regular text-sm">
          {{event.date}}, {{event.location}}
      </div>
    </div>
      <div class="text-sm mt-4">
         Deadline: {{event.deadline}}
      </div>

<dropdown>
    <template #header>
        <div class="">
            <card class="align-center items-center">
                <div class="flex flex-row justify-between mx-3 ">
                    <events-titles>
                        {{part.date}}
                    </events-titles>
                <div class="text-sm">
                        {{part.gender}}
                </div>
                </div>
            </card>
        </div>
    </template>
    <template #content>
        <div class="">
            <card>
                <div class="flex flex-col justify-between mx-3 ">
                <div v-for="(distance, i) in part.distances" :key="i">
                    <div class="flex flex-col">
                        {{part.name}}, {{part.distances}}
                    </div>
                </div>
                </div>
            </card>
        </div>
    </template>
</dropdown>


        </div>




    <vue-tabs class="flex flex-col justify-center items-center">
      <!-- new events -->
      <v-tab title="Nieuw">
        <!-- card 1 -->
        <div v-for="event in newEvents" :key="event.id">
          <div class="flex justify-center">
          <div class="card-margin w-full ">
            <dropdown>
              <template #header>
                <div class="trainings">
                  <div class="">
                    <card class="">
                      <div class="flex justify-center items-center align-center">
                        <p class="font-bold z-10 text-md w-7/12 ml-3">
                            {{event.name}}
                            </p>
                          <p class="font-regular text-xs">
                            {{event.date}}, {{event.location}}
                          </p>
                        </div>
                    </card>
                  </div>
                </div>
              </template>
              <template #content>
                <div class="mt-2 ml-6 text-xs font-regular">
                 Deadline: {{event.deadline}}
                </div>
                <div class="button">
                  <router-link to="meetsregistration">
                  <button class="rounded-sm text-xs bg-black py-1 px-3 text-white font-light">Registreer</button>
                  </router-link>
                </div>
              </template>
            </dropdown>
          </div>
        </div>
        </div>
      </v-tab>

      <!-- registered events -->
      <v-tab title="Geregistreerd">
        <!-- card 1 -->
        <div v-for="event in newEvents" :key="event.id">
          <div class="flex justify-center">
          <div class="card-margin w-full ">
            <dropdown>
              <template #header>
                <div class="trainings">
                  <div class="">
                    <card class="">
                      <div class="flex justify-center items-center align-center">
                        <p class="font-bold z-10 text-md w-7/12 ml-3">
                            {{event.name}}
                            </p>
                          <p class="font-regular text-xs">
                            {{event.date}}, {{event.location}}
                          </p>
                        </div>
                    </card>
                  </div>
                </div>
              </template>
              <template #content>
                <div class="mt-2 ml-6 text-xs font-regular">
                 Status: {{event.status}}
                </div>
                <div class="button">
                  <router-link to="eventregistration">
                  <button class="rounded-sm text-xs bg-black py-1 px-3 text-white font-light">Wijzigen</button>
                  </router-link>
                </div>
              </template>
            </dropdown>
          </div>
        </div>
        </div>
      </v-tab>
    </vue-tabs>
  </div>
</div>
</template>

<script>
import Dropdown from "../../shared/Dropdown.vue";
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import EventsTitles from '../../shared/EventsTitles.vue';

export default {
  components: { Dropdown, VueTabs, VTab, EventsTitles},

  data() {
    return {
      event: {
        name: "Dutch masters",
        date: "20 - 23 november",
        location: "Eindhoven",
        deadline: "12 november",
        parts: [
          {
            id: 1,
            date: "20 november",
            name: "Breaststroke",
            distances: ["500m", "100m", "200m"],
            gender: "M & V",
          },
          {
            id: 2,
            date: "21 november",
            name: "Backstroke",
            distances: ["500m", "100m", "200m"],
          },
          {
            id: 3,
            date: "22 november",
            name: "Sidestroke",
            distances: ["500m", "100m", "200m"],
          },
          {
            id: 4,
            date: "23 november",
            name: "Backstroke",
            distances: ["500m", "100m", "200m"],
          },
        ],
      },
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.active_tab {
  border: none !important;
  color: black !important;
  font-weight: 500 !important;
}

.vue-tabs .nav-tabs {
  border-bottom: none !important;
  margin-bottom: 32px;
  font-family: inherit;
}

.active {
  border-bottom: 3px solid #E3322C;
}

p {
  margin-bottom: 0px !important;
}

.event-name {
  z-index: 5;
  font-weight: 800;
}

.training-details-text {
  z-index: 5;
  font-weight: 700;
}

.training-details {
  width: 90%;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 5;
  align-items: center;
}

.training-details-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  margin-left: -12px;
  position: absolute;
  z-index: 1;
  width: 32px;
  height: 32px;
  border-radius: 2000px;
  background: linear-gradient(#daf4ff, #f4fafd);
}

.training-container {
  margin: 0px 0px;
}

.loremipsum {
  font-weight: 200;
  width: 95%;
  margin-left: 16px;
}

.button {
  display: flex;
  justify-content: center;
  color: linear-gradient(#daf4ff, #f4fafd);
}

.card-margin {
  margin-bottom: 20px;
}

.v-btn {
  margin-bottom: -12px;
  margin-top: 12px;
}

.bold {
  font-weight: 700;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px 0px;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  text-align: center;
}

.modal-button {
  margin-top: 16px;
}
</style>
