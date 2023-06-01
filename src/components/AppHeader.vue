<script setup>
import NavBar from './Navbar.vue';
</script>

<template>
    <Wrapper is="header" class="pt-4 bg-white text-center">
        <RouterLink to="/"
                    class="text-7xl font-heading bg-clip-text text-transparent leading-relaxed bg-gradient-to-br from-gold-start to-gold-end">
            Ben & Sophie
        </RouterLink>
        <p>
            <time datetime="2023-05-28">May 28, 2023</time> • Oxford Botanic Garden, Rose Ln, Oxford OX1 4AZ
        </p>
        <p>
            <Countdown datetime="2023-05-28" class="block mt-2 mb-4 text-2xl" />
        </p>
    </Wrapper>
    <Wrapper :is="NavBar" class="sticky top-0 border-b border-b-gold-start py-4 bg-white">
        <NavLink to="rsvp">RSVP</NavLink>
        <NavLink to="photos">Photos</NavLink>
        <NavLink to="events">Events</NavLink>
        <NavLink to="wedding-party">Wedding party</NavLink>
        <NavLink to="travel">Travel</NavLink>
        <NavLink to="gift-registry">Gift registry</NavLink>
    </Wrapper>
</template>

<style scoped></style>