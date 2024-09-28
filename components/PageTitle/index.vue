<template>
  <div class="my-7">
    <h1 class="text-5xl text-black">{{ title }}</h1>
    <h2 class="text-[#4c4c4c] mt-4" v-if="subTitle">{{ subTitle }}</h2>
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
  },
  setup() {},
});
</script>
