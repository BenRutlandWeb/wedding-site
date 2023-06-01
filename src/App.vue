<script setup>
</script>

<template>
  <AppHeader></AppHeader>
  <Wrapper>
    <h1 class="text-xl font-bold">{{ $route.meta.title }}</h1>

    <RouterView></RouterView>
  </Wrapper>
</template>

<style scoped></style>