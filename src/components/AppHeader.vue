<script setup>
import NavBar from './Navbar.vue';
import { env, config } from '../helpers';

const datetime = env('WEDDING_DATE');
const venue = env('WEDDING_VENUE');

const date = new Date(datetime).toLocaleDateString('pu', { month: 'long', 'day': 'numeric', 'year': 'numeric' });
</script>

<template>
    <Wrapper is="header" class="pt-4 bg-white text-center">
        <RouterLink to="/"
                    class="text-7xl font-heading bg-clip-text text-transparent leading-relaxed bg-gradient-to-br from-gold-start to-gold-end">
            Ben & Sophie
        </RouterLink>
        <p>
            <time :datetime="datetime">{{ date }}</time> • {{ venue }}
        </p>
        <p>
            <Countdown :datetime="datetime" class="block mt-2 mb-4 text-2xl" />
        </p>
    </Wrapper>
    <Wrapper :is="NavBar" class="sticky top-0 border-b border-b-gold-start py-4 bg-white">
        <template v-if="config('menu.rsvp')">
            <NavLink to="rsvp">RSVP</NavLink>
        </template>
        <template v-if="config('menu.photos')">
            <NavLink to="photos">Photos</NavLink>
        </template>
        <template v-if="config('menu.events')">
            <NavLink to="events">Events</NavLink>
        </template>
        <template v-if="config('menu.wedding_party')">
            <NavLink to="wedding-party">Wedding party</NavLink>
        </template>
        <template v-if="config('menu.travel')">
            <NavLink to="travel">Travel</NavLink>
        </template>
        <template v-if="config('menu.gift_registry')">
            <NavLink to="gift-registry">Gift registry</NavLink>
        </template>
    </Wrapper>
</template>

<style scoped></style>