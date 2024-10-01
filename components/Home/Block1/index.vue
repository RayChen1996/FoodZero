<template>
  <div class="bg-primary text-white lg:px-28">
    <div class="justify-between py-20 relative">
      <div class="md:w-2/3 w-full relative">
        <div class="lg:text-8xl text-xl relative z-30">
          Healthy Eating is important part of lifestyle
        </div>
        <p class="mt-5 block w-full z-30 relative">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </p>
      </div>
      <div class="md:flex justify-end md:-top-60 md:relative">
        <div class="relative">
          <img
            data-aos="fade-left"
            src="/assets/Image.png"
            class="h-[931px] w-full z-10 object-cover"
            alt="food"
          />
          <div
            data-aos="fade-right"
            class="md:absolute -bottom-10 -left-72 lg:flex gap-11 justify-center items-center"
          >
            <img
              src="/assets//spices1.png"
              alt=""
              class="object-cover w-10/12 m-auto md:w-52"
            />
            <img
              src="/assets//spices2.png"
              alt=""
              class="object-cover w-10/12 m-auto md:w-52"
            />
            <img
              src="/assets//spices3.png"
              alt=""
              class="object-cover w-10/12 m-auto md:w-52"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="absolute bottom-20 hidden md:block"
      >
        <span class="lg:rotate-90 inline-block lg:-ml-5">
          <span>Scroll</span>
        </span>
        <img src="/assets/Line 8.png" alt="" class="mt-7" />
      </div>
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
  if (process.client && window.AOS) {
    window.AOS.refresh();
  }
});
</script>
