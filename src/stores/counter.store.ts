import { defineStore } from "pinia";

export const useCounterStore = defineStore("counterStore", {
    state: () => ({ count: 0 }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        }
    },
    getters: {
        showCounter(): number {
            return this.count;
        },
    }
});
