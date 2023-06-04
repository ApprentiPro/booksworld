<template>
  <div class="feature-card-content my-4">
    <div class="feature-icon-content d-flex justify-center align-center flex-column">
      <v-icon size="45" color="white" :icon="featureData.icon"></v-icon>
      <span class="text-body-1 font-weight-light text-white ">
                                {{ $t(featureData.name) }}
                </span>
    </div>
    <div class="feature-descritpion-content">
      <p>
        {{ $t(featureData.description) }}
      </p>
    </div>
    <v-btn v-if="!isMobile" position="absolute" style="right: 2rem;bottom:-1rem">
      {{ $t('translate_key_start') }}
    </v-btn>

  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'FeatureCard',

  props: {
    featureData: {
      required: true
    },
    isMobile: {
      type: Boolean
    }
  },
  mounted() {
    console.log( "featureCard element",this.featureData)
  }
})
</script>
