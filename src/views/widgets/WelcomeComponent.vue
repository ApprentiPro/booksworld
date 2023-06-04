<template>
    <div class="welcome-page-container">

        <div class="welcome-title-app-container">
            <span data-text="B">B</span>
            <span data-text="O">O</span>
            <span data-text="O">O</span>
            <span data-text="K">K</span>
            <span></span>
            <span data-text="W">W</span>
            <span data-text="O">O</span>
            <span data-text="R">R</span>
            <span data-text="L">L</span>
            <span data-text="D">D</span>
            <div class="version-content-display">
                <h4  style="color:#fff;" >
                    version: {{ version }}
                </h4>
            </div>

        </div>
        <div class="welcome-body-context-container">
            <div class="welcome-body-description-licence-context-container">
                {{ $t('translate_key_licence_description') }}
            </div>
            <div class="welcome-action-button">
                <input id='button' @change="GetStartedInformation" type='checkbox'>
                <label for='button'>
                    <div class='button_inner q'>
                        <!--<i class='l ion-log-in'></i> -->
                      <v-icon icon="mdi-logout" class="l"></v-icon>
                        <span class='t'>{{ $t('translate_key_next') }} </span>
                        <span>
                            <!--<i class='tick ion-checkmark-round'></i>-->
                          <v-icon icon="mdi-check" class="tick" ></v-icon>
                        </span>
                        <div class='b_l_quad'>
                            <div v-for="(item, index) in 55" :key="index" class='button_spots'></div>
                        </div>
                    </div>
                </label>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'WelcomeComponents',
    data() {
        return {
            version: '0.0.1'
        }
    },
    methods:{
        GetStartedInformation(){
            setTimeout(() => {
                router.push('/home')
            }, 5500);
        }
    }

})
</script>