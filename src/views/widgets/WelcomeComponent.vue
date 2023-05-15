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
                <h4>
                  version:  {{ version }}
                </h4>
            </div>

        </div>
        <div class="welcome-body-context-container">
           
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'WelcomeComponents',
    data() {
        return {
            version:'0.0.1'

        }
    },

})
</script>