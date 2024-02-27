<script setup>
defineProps({
    title: String,
});
</script>
<template>
    <v-app>
        <v-app-bar density="compact">
            <v-toolbar class="bg-teal-darken-4">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <RouterLink to="/">
                        <span class="text-white text-lg">MyApp</span>
                    </RouterLink>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn to="/register" variant="plain"> Register </v-btn>
                <v-btn to="/login" variant="plain"> Login </v-btn>
            </v-toolbar>
        </v-app-bar>

        <v-main class="" style="min-height: 300px">
            <slot name="main"></slot>
        </v-main>
    </v-app>
</template>
