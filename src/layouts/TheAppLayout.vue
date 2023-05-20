<script lang="ts" >
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import TheDefaultLayout from './TheDefaultLayout.vue';
export default defineComponent({
    name: 'TheAppLayout',
    components:{
        TheDefaultLayout
    }, 
    setup() {
        const route = useRoute();

        const layout = computed(() => {
            const layout = route?.meta?.layout;
            console.log("this is the layouts", layout)

            if (layout) {
                return `The${layout}Layout`;
            }
            return 'div';
        });
        return {
            layout,
        };
    },
});
</script>

<template>
    <component :is="layout">
        <router-view />
    </component>
</template>
