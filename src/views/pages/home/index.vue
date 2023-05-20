<template>
    <div class="home-page-container">
        <v-container>
            <v-row>
                <v-col v-for="(item, index) in homeFeauture" :key="index" cols="6" >
                    <div  class="feature-card-content">
                        <div class="feature-icon-content d-flex justify-center align-center">
                            <v-icon color="white" :icon="item.icon"></v-icon>
                            <v-icon icon="mdi-vuetify"></v-icon>
                        </div>
                        <div class="feature-descritpion-content">

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

export default defineComponent({
    name: "home-page",
    data: () => {
        return {
            homeFeauture: [
                {
                    icon: 'mdi-plus',
                    name: 'translate_key_new_project'
                },
                {
                    icon: '',
                    name: 'translate_key_new_project'
                },
                {
                    icon: '',
                    name: 'translate_key_new_project'
                },
                {
                    icon: '',
                    name: 'translate_key_new_project'
                }
            ]
        }
    }
})
</script>

<style src="@/assets/styles/home.scss" lang="scss"></style>
