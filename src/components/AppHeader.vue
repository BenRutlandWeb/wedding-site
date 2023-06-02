<script setup>
import NavBar from "./NavBar.vue";
import { config } from "../helpers";

const app = config("app");
const wedding = config("wedding");

const datetime = wedding.datetime;
const venue = wedding.venue;

const date = new Date(datetime).toLocaleDateString("pu", {
  month: "long",
  day: "numeric",
  year: "numeric",
});
</script>

<template>
  <Wrapper is="header" class="pt-4 bg-white text-center">
    <RouterLink
      to="/"
      class="text-7xl font-heading bg-clip-text text-transparent leading-relaxed bg-gradient-to-br from-gold-start to-gold-end p-1"
    >
      {{ wedding.couple.first }} & {{ wedding.couple.second }}
    </RouterLink>
    <p>
      <time :datetime="datetime">{{ date }}</time> • {{ venue }}
    </p>
    <p>
      <Countdown :datetime="datetime" class="block mt-2 mb-4 text-2xl" />
    </p>
  </Wrapper>
  <Wrapper
    :is="NavBar"
    class="sticky top-0 border-b border-b-gold-start py-4 bg-white"
  >
    <template v-if="app.pages.rsvp">
      <NavLink to="rsvp">RSVP</NavLink>
    </template>
    <template v-if="app.pages.photos">
      <NavLink to="photos">Photos</NavLink>
    </template>
    <template v-if="app.pages.events">
      <NavLink to="events">Events</NavLink>
    </template>
    <template v-if="app.pages.wedding_party">
      <NavLink to="wedding-party">Wedding party</NavLink>
    </template>
    <template v-if="app.pages.travel">
      <NavLink to="travel">Travel</NavLink>
    </template>
    <template v-if="app.pages.gift_registry">
      <NavLink to="gift-registry">Gift registry</NavLink>
    </template>
  </Wrapper>
</template>

<style scoped></style>