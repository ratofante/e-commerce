<script setup>
defineProps({
    title: String,
});
</script>
<template>
    <div
        class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <div class="flex items-center justify-center">
                <img
                    class="w-20 h-20"
                    src="../assets/logo.svg"
                    alt="Your Company"
                />
                <h2
                    class="ml-8 text-center text-3xl font extrabold text-gray-900"
                >
                    {{ title }}
                </h2>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
