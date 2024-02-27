<script setup lang="ts">
import GuestLayout from "../layouts/GuestLayout.vue";
import { ref } from "vue";

const formEl = ref<HTMLFormElement>();
const form = ref({
    email: "",
    password: "",
    remember: false,
});
const valid = ref(false);
const emailRules = [
    (v: string) => !!v || "Completa tu mail",
    (v: string) => {
        if (/.+@.+\..+/.test(v)) return true;
        return "Debe ser un E-mail válido";
    },
];
const passwordRules = [(v: string) => !!v || "Ingresa tu contraseña"];
const submitForm = () => {};
</script>

<template>
    <GuestLayout title="Ingresa con tu cuenta">
        <template v-slot:main>
            <v-container class="flex items-center h-100">
                <v-card class="flex-1 mx-auto h-fit px-4 pb-4" max-width="360">
                    <v-card-title class="text-teal-lighten-2">
                        Ingresar
                    </v-card-title>
                    <v-form
                        @submit.prevent="submitForm"
                        v-model="valid"
                        ref="formEl"
                    >
                        <v-text-field
                            v-model="form.email"
                            :rules="emailRules"
                            prepend-inner-icon="mdi-email"
                            label="E-mail"
                            placeholder="juanito@mail.com"
                            autocomplete="email"
                            hide-details
                            required
                            color="teal-lighten-2"
                            class="mb-8"
                        ></v-text-field>
                        <v-text-field
                            v-model="form.password"
                            :rules="passwordRules"
                            prepend-inner-icon="mdi-key"
                            label="Password"
                            type="password"
                            autocomplete="current-password"
                            hint="Enter your password to access this website"
                            color="teal-lighten-2"
                        ></v-text-field>
                        <v-checkbox
                            v-model="form.remember"
                            label="Recuérdame"
                            color="teal-darken-4"
                            value="true"
                        ></v-checkbox>
                        <v-btn block type="submit" class="bg-teal mt-4">
                            Ingresar
                        </v-btn>
                    </v-form>
                </v-card>
            </v-container>
        </template>
    </GuestLayout>
</template>
