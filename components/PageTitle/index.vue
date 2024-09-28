<template>
  <div>
    <h1 class="text-5xl">{{ title }}</h1>
    <h2 v-if="subTitle">{{ subTitle }}</h2>
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
