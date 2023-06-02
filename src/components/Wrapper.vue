<script setup>
defineProps({
    is: {
        type: [String, Object],
        default: 'section'
    }
});
</script>

<template>
    <component :is="is" class="grid gap-x-4 wrapper">
        <slot />
    </component>
</template>

<style>
.wrapper {
    grid: auto / 1fr minmax(auto, theme('screens.lg')) 1fr;
}

.wrapper > * {
    grid-column: 2 / -2;
}

.wrapper > .full {
    grid-column: 1 / -1;

}
</style>
