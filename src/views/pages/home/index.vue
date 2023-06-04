<template>
  <div class="home-page-container">
    <v-container>
      <v-row>
        <v-col v-for="(item, index) in homeFeauture" :key="index" cols="12" md="6" lg="6" sm="12">
          <FeatureCard :feature-data="item"  :is-mobile = 'isMobile' />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {FeatureData} from "@/views/pages/home/modules/features";
import GetUsersDeviceInfo from "@/helpers/getUsersDeviceInfo";
import FeatureCard from '@/views/widgets/FeatureCard.vue'

export default defineComponent({

  name: "home-page",
  data: () => {
    return {
      homeFeauture: FeatureData,
      isMobile: false
    }
  },
  components:{
    FeatureCard
  },
  created() {
    console.log("this si the created")
    const DeviceInfo = new GetUsersDeviceInfo()
    this.isMobile = DeviceInfo.getDeviceRatio().isMobile
    console.log(DeviceInfo.getDeviceRatio())
  },
  mounted() {
    console.log("failded suites", this.homeFeauture)
  }
})
</script>

<style src="@/assets/styles/home.scss" lang="scss"></style>
