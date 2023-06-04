/**
 * test if the footer is correctly mounted
 */

import {test} from "vitest";
import {createVueWrapper} from "@vue/test-utils/dist/wrapperFactory";
import {mount} from "@vue/test-utils";
import TheFooter from '../TheFooter.vue'

test('test footer mounted', () =>{
    const wrapper = mount(TheFooter,)
    console.log({wrapper})
   const visibility =  wrapper.isVisible()
    console.log(visibility)

})