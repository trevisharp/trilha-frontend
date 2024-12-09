<script setup lang="ts">
const props = defineProps([ 'onSend' ])
const model = defineModel();
</script>

<template>
    <input v-model="model">
    <button @click="$emit(onSend, { })">Send Data!</button>
</template>

<style scoped>

</style>