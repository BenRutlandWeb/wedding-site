<route lang="yaml">
meta:
    title: 'Old, New, Borrowed, Boop'
</route>

<script setup>
import { config } from "../helpers";

const schedule = config("schedule");
</script>

<template>
  <template v-for="(text, time) in schedule" :key="time">
    <p>{{ time }} - {{ text }}</p>
  </template>

  <img src="main-photo.jpg" alt="" class="p-1 border border-gold-start" />
</template>

<style scoped></style>