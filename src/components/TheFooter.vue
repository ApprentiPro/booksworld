<template>
    <div class="dock">
        <div class="dock-container">
            <li v-for="(items, index) in features" :key="index" :class="getClasseName(index)">
                <div class="name">{{ $t(items.name) }} </div>
                <img class="ico" :src="getImage(items.icon)" alt="">
            </li>
            <li class="li-bin li-15">
                <div class="name">{{ $t('translate_key_trash') }} </div>
                <img class="ico ico-bin" src="https://findicons.com/files/icons/569/longhorn_objects/128/trash.png" alt="">
            </li>

        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheFooter',
    data: () => {
        return {
            features: [
                {
                    icon: 'home_icon.png',
                    name: 'translate_key_home'
                },
            ]
        }
    },
    computed: {
        getClasseName() {
            return (index: number) => 'li-' + (index + 1)
        },
        getImage(){
            return (icon:string) => new URL(`../assets/images/${icon}`, import.meta.url).href
        }

    }
})


</script>

<style src="@/assets/styles/footer.scss" lang="scss" ></style>