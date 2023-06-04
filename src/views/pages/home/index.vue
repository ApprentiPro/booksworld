<template>
    <div class="home-page-container">
      <v-container  >
        <v-row>
          <v-col v-for="(item, index) in homeFeauture" :key="index" cols="6" md="6" lg="6"  sm="12">
            <div  class="feature-card-content">
              <div class="feature-icon-content d-flex justify-center align-center flex-column">
                <v-icon size="45" color="white" :icon="item.icon"></v-icon>
                <span class="text-body-1 font-weight-light text-white " >
                                {{ $t(item.name) }}
                </span>
              </div>
              <div class="feature-descritpion-content">
              <p>
                {{ $t(item.description) }}
              </p>
              </div>
              <v-btn position="absolute" style="right: 2rem;bottom:-1rem" >
                {{ $t('translate_key_start') }}
              </v-btn>

            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {FeatureData} from "@/views/pages/home/modules/features";

export default defineComponent({

    name: "home-page",
    data: () => {
        return {
            homeFeauture:FeatureData
        }
    },
  mounted() {
      console.log("failded suites", this.homeFeauture)
  }
})
</script>

<style src="@/assets/styles/home.scss" lang="scss"></style>
