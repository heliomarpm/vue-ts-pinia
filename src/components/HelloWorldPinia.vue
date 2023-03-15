<script setup lang="ts">

import { useCounterStore } from '../stores';

defineProps<{ msg: string }>();

const counter = useCounterStore();

</script>

<template>
<h1>{{ msg }}</h1>

<div class="card">
  <button type="button" @click="counter.increment">count is {{ counter.count }}</button>
</div>

</template>


