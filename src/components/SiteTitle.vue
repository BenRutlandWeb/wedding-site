<script setup>
import { config } from '../helpers';

const couple = config('wedding.couple');
</script>

<template>
    <RouterLink to="/"
                class="text-7xl font-heading bg-clip-text text-transparent leading-relaxed bg-gradient-to-br from-gold-start to-gold-end">
        {{ couple.first }} & {{ couple.second }}
    </RouterLink>
</template>

<style scoped></style>