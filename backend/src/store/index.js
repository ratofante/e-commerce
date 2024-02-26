import { defineStore } from "pinia";

const useTestStore = defineStore("test-store", {
    state: () => {
        return {
            message: "This is a test",
        };
    },
    getters: {
        getMessage: (state) => state.message,
    },
    actions: {},
    mutations: {},
});

export default useTestStore;
