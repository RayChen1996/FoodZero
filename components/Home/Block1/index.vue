<template>
  <div class="bg-primary text-white px-28">
    <div class="justify-between py-20 relative">
      <div class="w-2/3 relative">
        <div class="text-8xl z-30 relative">
          Healthy Eating is important part of lifestyle
        </div>
        <p class="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </p>
      </div>
      <div class="flex justify-end pr-[138px] -top-60 relative">
        <div class="relative">
          <img
            data-aos="fade-left"
            src="/assets/Image.png"
            width="792"
            class="h-[931px] z-10"
            alt="food"
          />
          <div
            data-aos="fade-right"
            class="absolute -bottom-10 -left-72 flex gap-11"
          >
            <img src="/assets//spices1.png" alt="" class="object-cover w-52" />
            <img src="/assets//spices2.png" alt="" class="object-cover w-52" />
            <img src="/assets//spices3.png" alt="" class="object-cover w-52" />
          </div>
        </div>
      </div>
      <div class="absolute bottom-20">
        <span class="rotate-90 inline-block -ml-5">
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
    // 你可以在這裡添加 AOS 的選項配置
    duration: 800,
    once: true, // 決定動畫是否只觸發一次
  });
  if (process.client && window.AOS) {
    window.AOS.refresh(); // 手動刷新 AOS
  }
});
</script>
