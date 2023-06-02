<script setup>
defineProps({
    to: [String]
});
</script>

<template>
    <li>
        <RouterLink :to="to" class="" active-class="bg-red-500">
            <slot></slot>
        </RouterLink>
    </li>
</template>

<style scoped></style>
