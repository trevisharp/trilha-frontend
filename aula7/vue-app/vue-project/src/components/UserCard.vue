<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps([ 'user' ]);
</script>

<template>
    <el-card style="background: #114; color: white; width: 100vw;">
        <div class="user-container">
            <img :src="user?.photo" width="40vh" height="40vh"/>
            <div class="user-data">
                <el-button link style="color: white;" @click="router.push('/user/' + user?.username)">
                    {{ user?.name }}
                </el-button>
                
                <el-button link style="color: white;" @click="router.push('/user/' + user?.username)">
                    {{ user?.username }}
                </el-button>
            </div>
        </div>
    </el-card>
</template>

<style scoped>
.user-container {
    display: flex;
}

.user-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>