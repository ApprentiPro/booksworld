<template>
    <div class="welcome-page-container">
        <WelcomeComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WelcomeComponent from '@/views/widgets/WelcomeComponent.vue';
export default defineComponent({
    components:{
        WelcomeComponent
    },
    data() {
        return{

        }
        
    },
})
</script>
<style lang="scss" src="@/assets/styles/welcome.scss"></style>