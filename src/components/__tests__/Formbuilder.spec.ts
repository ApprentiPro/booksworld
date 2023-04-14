import { describe,it,test } from "node:test";

import {mount} from '@vue/test-utils'

import FormbuilderVue from "../Formbuilder.vue";


test('Formbuilder is render',()=>{
    const wrapper = mount(FormbuilderVue)
})