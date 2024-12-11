<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getUser } from '@/services/userService.ts';

const route = useRoute();
const router = useRouter();
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
            <span>{{ user?.name }}</span>
        </template>
    </el-page-header>

    <div class="userpage" style="color: white;">
        <div class="userphoto">
            <el-avatar shape="circle" fit="fill" :src="user?.photo"
                :style="{ width: '60vw', height: '60vw' }" />
        </div>

        <h1>{{ user?.name }}</h1>

        <h3>{{ user?.username }}</h3>

        <RouterLink :to="'/friends/' + user?.username" style="color: white;">
            {{ user?.friendsCount }} Amigos
        </RouterLink>
    </div>
</template>

<style>
.userpage {
    background-color: #003;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
}

.userphoto {
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 5vw;
}

</style>