<script setup>
import { computed } from 'vue';
import { max, round, ONE_DAY } from '../helpers';

const props = defineProps({
    datetime: String
});

const date = new Date(props.datetime);

const diff = date - Date.now();

const countdown = computed(() => max(0, round(diff / ONE_DAY)));

</script>

<template>
    <time :datetime="datetime">{{ countdown }} days to go</time>
</template>

<style scoped></style>
