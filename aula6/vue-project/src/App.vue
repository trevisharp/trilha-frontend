<script setup lang="ts">

/** 
 *  -defineProps
 *  -defineModel
 *  -ref
 * 
 *  -v-bind
 *  -v-model
 *  -v-on
 *  -v-if
 *  -v-for
 * 
 *  -v-else
 *  -v-else-if
 * 
 *  menos importantes:
 *  -v-show
 *  -v-text
 *  -v-html
 *  -v-once
 */

import { ref } from 'vue';
import MyComponent from './components/MyComponent.vue'

const model = defineModel();

let i = 3;
const list = ref([
  {
    id: 1,
    text: model
  },
  {
    id: 2,
    text: "Hello, World!"
  }
])

const func = () => {
  console.log("Olá, mundo!")
};
</script>

<template>
  <div v-for="value in list" :key="value.id">
    {{ value.text }}
  </div>

  <MyComponent v-model="model" @onSend="func"/>
</template>

<style scoped>

</style>

