<template>
  <div class="bg-white">
    <div class="relative h-screen">
      <div class="text-white">
        <img
          src="/assets/AboutBgImage.png"
          alt="menu page banner"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div class="z-10 h-full w-full m-auto relative pt-36 pl-32">
          <span class="text-3xl lg:text-7xl text-white relative m-auto">
            Who We Are <br
          /></span>
          <p class="text-xl mt-10 text-white absolute">
            The most important thing for us is to give you the comfortable
            dining experience
          </p>
        </div>
      </div>
    </div>
    <div class="relative py-10 m-auto text-center">
      <div
        class="grid grid-cols-1 md:grid-cols-2 text-left gap-x-5 lg:gap-x-[102px] place-items-center"
      >
        <div>
          <div>
            <div class="text-4xl lg:text-6xl text-black">Our Story <br /></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </p>
          </div>
        </div>
        <img src="/assets/AboutImage1.png" alt="" />
      </div>
    </div>
    <div class="relative py-10 m-auto text-center">
      <div
        class="grid grid-cols-1 md:grid-cols-2 text-left gap-x-5 lg:gap-x-[102px] place-items-center"
      >
        <img src="/assets/AboutImage2.png" alt="" />
        <div>
          <div>
            <div class="text-4xl lg:text-6xl text-black"></div>
          </div>
        </div>
      </div>
    </div>
    <HomeReservation />
  </div>
</template>
