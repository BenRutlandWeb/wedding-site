<route lang="yaml">
meta:
    title: 'RSVP'
</route>

<script setup>
import { env } from "../helpers";
</script>

<template>
  <iframe :src="env('GOOGLE_FORM')" class="w-full aspect-[2/3]">
    Loading…
  </iframe>
</template>

<style scoped></style>