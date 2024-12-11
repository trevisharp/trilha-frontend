<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const username = route.params.username;
const user = ref<User>();

</script>

<template>
</template>