<template>
  <div data-aos="flip-left">
    <figure class="relative">
      <span class="bg-primary-50 absolute right-2 top-2 text-white px-8 py-3">
        {{ post.category }}
      </span>
      <img :src="post.imgUrl" class="w-full object-cover" :alt="post.title" />
    </figure>
    <div>
      <div class="flex">
        <img :src="post.avatarUrl" alt="author avatar" />
        <ul class="flex items-center gap-3">
          <li>{{ post.author }}</li>
          <li>{{ post.date }}</li>
          <li>{{ post.time }}</li>
          <li>{{ post.comments }} comments</li>
        </ul>
      </div>
      <h3 class="text-4xl">
        {{ post.title }}
      </h3>
      <img src="/assets/Line 1.png" alt="" />
      <p class="my-4">
        {{ post.excerpt }}
      </p>
      <div class="flex items-center gap-3 mt-10">
        <span>Read More</span>
        <img src="/assets/Icon_arrow-right.svg" alt="arrow icon" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
