

/**
 * nous allons faire ici les tests unitaire pour ce composant 
 * 1-> test si le composant est bien monté
 */

import {describe,it,test} from 'vitest'
import {mount} from '@vue/test-utils'
import WelcomeComponent from '../WelcomeComponent.vue'

test('WelcomeComponent is render',()=>{
    const wrapper = mount(WelcomeComponent)
})

