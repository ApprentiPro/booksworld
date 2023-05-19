<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheDefaultLayout",
});
</script>

<template>
    <v-layout>
        <v-main>
          <!--The <slot> element is a slot outlet that indicates 
                where the "VIEW" content should be rendered.-->
            <slot></slot>
            <TheFooter />
        </v-main>
    </v-layout>
</template>
