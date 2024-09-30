<template>
  <div class="bg-white">
    <div class="relative h-screen">
      <div class="text-white">
        <img
          src="/assets/BlogBgImage.png"
          alt="menu page banner"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div class="z-10 h-full w-full m-auto relative pt-36 pl-32">
          <span class="text-3xl lg:text-7xl text-white relative m-auto">
            Blogs - Two Columns <br
          /></span>
          <p class="text-xl mt-10 text-white absolute">
            It is easy way to create your beatiful blog for daily
          </p>
        </div>
      </div>
    </div>
    <div class="relative py-10 px-20">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-16 text-black"
      >
        <!-- <GridItemPost v-for="i in 6" :key="i" /> -->
        <GridItemPost
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const posts = ref([
  {
    title: "Fruit and vegetables and protection against diseases",
    author: "Julie Christie",
    date: "October 17, 2021",
    time: "3:33 pm",
    comments: 2,
    category: "Fashion",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl:
      "https://images.unsplash.com/photo-1602988051561-00c38bccde6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2VzdGVybiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    avatarUrl: "/assets/Avatar1.png",
  },
  {
    title: "Healthy Eating: How to Start",
    author: "John Doe",
    date: "November 5, 2021",
    time: "1:20 pm",
    comments: 3,
    category: "Health",
    excerpt: "Vestibulum viverra massa sit amet congue mollis.",
    imgUrl:
      "https://images.unsplash.com/photo-1598578014352-7b722b0f8a5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2VzdGVybiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    avatarUrl: "/assets/Avatar1.png",
  },
  {
    title: "Healthy Eating: How to Start",
    author: "John Doe",
    date: "November 5, 2021",
    time: "1:20 pm",
    comments: 3,
    category: "Health",
    excerpt: "Vestibulum viverra massa sit amet congue mollis.",
    imgUrl:
      "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatarUrl: "/assets/Avatar1.png",
  },

  {
    title: "Healthy Eating: How to Start",
    author: "John Doe",
    date: "November 5, 2021",
    time: "1:20 pm",
    comments: 3,
    category: "Health",
    excerpt: "Vestibulum viverra massa sit amet congue mollis.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1666978195894-b2e3a3f14d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFdlc3Rlcm4lMjBmb29kfGVufDB8fDB8fHww",
    avatarUrl: "/assets/Avatar1.png",
  },

  {
    title: "Healthy Eating: How to Start",
    author: "John Doe",
    date: "November 5, 2021",
    time: "1:20 pm",
    comments: 3,
    category: "Health",
    excerpt: "Vestibulum viverra massa sit amet congue mollis.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1680370268975-bce3c4cdf5ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFdlc3Rlcm4lMjBmb29kfGVufDB8fDB8fHww",
    avatarUrl: "/assets/Avatar1.png",
  },

  {
    title: "Healthy Eating: How to Start",
    author: "John Doe",
    date: "November 5, 2021",
    time: "1:20 pm",
    comments: 3,
    category: "Health",
    excerpt: "Vestibulum viverra massa sit amet congue mollis.",
    imgUrl:
      "https://images.unsplash.com/photo-1598578014352-7b722b0f8a5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2VzdGVybiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    avatarUrl: "/assets/Avatar1.png",
  },

  {
    title: "Healthy Eating: How to Start",
    author: "John Doe",
    date: "November 5, 2021",
    time: "1:20 pm",
    comments: 3,
    category: "Health",
    excerpt: "Vestibulum viverra massa sit amet congue mollis.",
    imgUrl:
      "https://images.unsplash.com/photo-1598577789978-b87168a57b69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFdlc3Rlcm4lMjBmb29kfGVufDB8fDB8fHww",
    avatarUrl: "/assets/Avatar1.png",
  },

  {
    title: "Healthy Eating: How to Start",
    author: "John Doe",
    date: "November 5, 2021",
    time: "1:20 pm",
    comments: 3,
    category: "Health",
    excerpt: "Vestibulum viverra massa sit amet congue mollis.",
    imgUrl:
      "https://images.unsplash.com/photo-1598147775792-31d56f1b6a17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFdlc3Rlcm4lMjBmb29kfGVufDB8fDB8fHww",
    avatarUrl: "/assets/Avatar1.png",
  },
]);
</script>
