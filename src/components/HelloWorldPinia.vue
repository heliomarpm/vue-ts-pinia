<script setup lang="ts">

import { useCounterStore } from '../stores';

defineProps<{ msg: string }>();

const counter = useCounterStore();

</script>

<template>
<h1>{{ msg }}</h1>
<h1>{{ counter.showCounter }}</h1>
<div class="card">
  <button type="button" @click="counter.increment">Increment</button>
</div>

</template>


