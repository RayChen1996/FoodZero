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
        <GridItemPost v-for="i in 6" :key="i" />
      </div>
    </div>
  </div>
</template>
