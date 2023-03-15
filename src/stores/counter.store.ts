import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counterStore", {
//     // propriedades reativas
//     state: () => ({ count: 0 }),

//     // metodos
//     actions: {
//         increment() {
//             this.count++;
//         },
//         decrement() {
//             this.count--;
//         },
//         reset() {
//             this.count = 0;
//         }
//     },

//     // propriedades computadas
//     getters: {
//         showCounter(): number {
//             return this.count;
//         },
//     }
// });

// -------------------------------------------------------------
// USANDO COMPOSITION API PARA FAZER A MESMA COISA DE CIMA
// -------------------------------------------------------------
import { ref, computed } from 'vue';

export const useCounterStore = defineStore("counterStore", () => {
    // propriedades reativas
    const count = ref(0); //iniciando em 0 (note que está declado como const, funciona pq o valor alterado é count.value)

    // metodos
    function increment() {
        count.value++;
    }
    function decrement() {
        count.value--;
    }
    function reset() {
        count.value = 0;
    }

    // propriedades computadas
    const showCounter = computed(() => {
        return count.value;
    });

    // aqui vai tudo que deve ser publico
    return { count, increment, decrement, reset, showCounter };

});