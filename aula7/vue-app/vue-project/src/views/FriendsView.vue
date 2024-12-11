<script setup lang="ts">
import UserCard from "@/components/UserCard.vue";
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getUser } from '@/services/userService.ts';

const router = useRouter();

const route = useRoute();
const username = route.params.username;
const user = ref<User>();

onMounted(async () => {
    user.value = await getUser(username as string);
    window.scrollTo({
        top: 0
    })
})
</script>

<template>
    <el-page-header @back="router.back()">
        <template #content>
            <span>Amigos do {{ user?.name }}</span>
        </template>
    </el-page-header>

    <UserCard v-for="user in user?.friends" :user="user" :key="user.id"></UserCard>
</template>

<style>
</style>