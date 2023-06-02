<script setup>
import NavBar from "./Navbar.vue";
import { config } from "../helpers";

const pages = config("app.pages");
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
    <SiteTitle />
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
    <template v-if="pages.rsvp">
      <NavLink to="rsvp">RSVP</NavLink>
    </template>
    <template v-if="pages.photos">
      <NavLink to="photos">Photos</NavLink>
    </template>
    <template v-if="pages.events">
      <NavLink to="events">Events</NavLink>
    </template>
    <template v-if="pages.wedding_party">
      <NavLink to="wedding-party">Wedding party</NavLink>
    </template>
    <template v-if="pages.travel">
      <NavLink to="travel">Travel</NavLink>
    </template>
    <template v-if="pages.gift_registry">
      <NavLink to="gift-registry">Gift registry</NavLink>
    </template>
  </Wrapper>
</template>

<style scoped></style>