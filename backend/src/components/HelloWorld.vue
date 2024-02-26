<script setup lang="ts">
import useTestStore from "../store/index.js";
import { computed } from "vue";
defineProps<{ msg: string }>();

const store = useTestStore();
const message = computed(() => store.getMessage);
</script>

<template>
    <h1 class="bg-purple-500">{{ msg }}</h1>
    <h1 class="bg-purple-900 text-gray-100">{{ message }}</h1>
</template>

<style scoped></style>
