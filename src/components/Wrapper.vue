<script setup>
defineProps({
    is: {
        type: [String, Object],
        default: 'section'
    }
});
</script>

<template>
    <div>
        <component :is="is" class="mx-auto max-w-5xl">
            <slot />
        </component>
    </div>
</template>

<style scoped></style>
