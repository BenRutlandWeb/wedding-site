<script setup>
</script>

<template>
  <AppHeader></AppHeader>
  <Wrapper class="py-8 gap-y-8">
    <h1 class="text-xl font-bold">{{ $route.meta.title }}</h1>
    <RouterView></RouterView>
  </Wrapper>
</template>

<style scoped></style>