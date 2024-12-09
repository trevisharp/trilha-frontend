<script setup lang="ts">
const props = defineProps([ 'text' ]);
</script>

<template>
    <marquee>
        <h1>
            {{ text }}
        </h1>
    </marquee>
</template>

<style scoped>

</style>