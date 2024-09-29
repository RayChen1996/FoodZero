<template>
  <div class="bg-white">
    <div class="relative h-screen">
      <div class="text-white">
        <img
          src="/assets/contactBgImage.png"
          alt="menu page banner"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div class="z-10 h-full w-full m-auto relative pt-36 pl-32">
          <span class="text-3xl lg:text-7xl text-white relative m-auto">
            Get in Touch <br
          /></span>
          <span class="text-xl mt-10 text-white absolute">
            The freshest ingredients for you every day
          </span>
        </div>

        <div
          class="m-auto absolute right-10 w-1/3 bottom-10 lg:right-[130px] lg:bottom-[138px]"
        >
          <div class="flex items-center justify-between">
            <span class="text-xl lg:text-xl text-white"> Open Time </span>
            <span class="text-xl text-white">Sunday - Friday</span>
          </div>
          <img src="/assets/Divider.png" class="my-9 text-white" alt="" />
          <div class="flex items-center justify-between">
            <span class="text-xl lg:text-xl text-white"
              >Brunch <br />11:00–12:00
            </span>
            <span class="text-xl lg:text-xl text-white"
              >Lunch <br />13:00–17:00
            </span>
            <span class="text-xl lg:text-xl text-white"
              >Dinner <br />18:00–20:00
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="relative py-10 m-auto text-center">
      <div
        class="grid grid-cols-1 md:grid-cols-2 text-left gap-x-5 lg:gap-x-[102px] place-items-center"
      >
        <img src="/assets/contactImage1.png" alt="" />
        <div>
          <div>
            <div class=" ">We can be contacted via</div>

            <div class="text-4xl lg:text-6xl text-black">
              email info@foodzero.com <br />
              or telephone on +86 852 346 000
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative py-10 m-auto text-center">
      <div
        class="grid grid-cols-1 md:grid-cols-2 text-left gap-x-5 lg:gap-x-[102px] place-items-center"
      >
        <div>
          <div>
            <div class="text-4xl lg:text-6xl text-black">
              We are located in 1959 Sepulveda Blvd. Culver <br />
              City, CA, 90230
            </div>
            <button class="btn rounded-none px-8 py-3 btn-outline">
              View in maps
            </button>
          </div>
        </div>
        <img src="/assets/contactImage2.png" alt="" />
      </div>
    </div>

    <!-- contact Form -->
    <div class="relative py-10 m-auto text-center bg-primary-200">
      <LazyPageTitle
        title="Make a Reservation"
        sub-title="Get in touch with restaurant"
      />
      <div class=" "></div>
    </div>
  </div>
</template>
