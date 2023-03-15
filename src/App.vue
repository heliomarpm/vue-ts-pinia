<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import HelloWorldPinia from './components/HelloWorldPinia.vue'

import { useCounterStore } from './stores';

defineProps<{ msg: string }>();

const counter = useCounterStore();

</script>

<template>
  <div>


    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
      <img src="./assets/pinia.svg" class="logo pinia" alt="Vue logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="./assets/typescript.png" class="logo ts" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue + TS" /> -->
  <HelloWorldPinia msg="Vite + Vue + Pinia + TS" />

  <button @click="counter.decrement">Decrement</button>
  &nbsp; &nbsp;
  <button @click="counter.reset">Reset</button>
  <p>
  <h1>{{ counter.count }}</h1>
  </p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #e6e34faa);
}

.logo.ts:hover {
  filter: drop-shadow(0 0 2em #397ac4aa);
}
</style>
