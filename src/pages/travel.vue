<route lang="yaml">
meta:
    title: 'Travel'
</route>

<script setup>
import { env } from '../helpers';

const mapUrl = env('MAP_URL');
</script>


<template>
    <template v-if="mapUrl">
        <iframe :src="mapUrl" class="w-full aspect-video"></iframe>
    </template>
</template>

<style scoped></style>