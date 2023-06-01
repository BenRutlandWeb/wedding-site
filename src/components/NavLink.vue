<script setup>
defineProps({
    to: [String]
})

</script>

<template>
    <li>
        <RouterLink :to="to">
            <slot></slot>

        </RouterLink>
    </li>
</template>

<style scoped></style>
