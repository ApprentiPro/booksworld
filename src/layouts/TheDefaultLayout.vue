<script lang="ts">
import { defineComponent } from "vue";
import TheFooter from "@/components/TheFooter.vue";
export default defineComponent({
    name: "TheDefaultLayout",
    components:{
        TheFooter
    }, 
    mounted(){
        console.log("this si the mouted of the default layout")
    }
});
</script>

<template>
    <v-layout>
        <v-main>
            <slot></slot>
            <TheFooter />
        </v-main>
    </v-layout>
</template>
