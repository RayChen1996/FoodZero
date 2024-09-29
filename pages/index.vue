<template>
  <div class="flex flex-col min-h-dvh">
    <div class="flex-1">
      <HomeBlock1 />
      <HomeBlock2 />
      <HomeMenu />
      <HomeExcellent />
      <HomeFeature />
      <HomePost />
      <HomeReservation />
      <HomeEnergy />
      <HomeFeedback />
    </div>
  </div>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

import { onMounted } from "vue";

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
