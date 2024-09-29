<template>
  <div class="">
    <div class="my-7 relative">
      <h1 class="text-5xl text-black">{{ title }}</h1>
      <h2 class="text-[#4c4c4c] mt-4" v-if="subTitle">{{ subTitle }}</h2>
      <img
        v-if="hasDeco"
        src="/assets/Mint.png"
        class="absolute left-1/2 -translate-x-96 -translate-y-16 top-2 w-60 object-cover"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      require: true,
    },
    subTitle: {
      type: String,
      require: false,
    },
    hasDeco: {
      type: Boolean,
      require: false,
    },
  },
  setup() {},
});
</script>
