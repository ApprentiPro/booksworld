<template>
    <div class="welcome-page-container" >

        <div class="welcome-title-app-container">
            <h1>
                
            </h1>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getUserLocale from '@/middlewares/getLocal'
export default defineComponent({
    name: 'WelcomeComponents',
   data() {
       return{

       }
   },
   mounted() {
       let userLocal = getUserLocale()
       console.log("kdkfkfkdf")
       console.log({userLocal})
   },
})
</script>