<template>
  <div>
    <div class="relative h-screen">
      <div class="text-white">
        <img
          src="/assets/menupagebannerbg.png"
          alt="menu page banner"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div class="z-10 h-full w-full m-auto relative pt-36 pl-32">
          <span class="text-3xl lg:text-7xl text-white relative m-auto"
            >View Our <br />
            New Menu</span
          >
          <p class="text-xl mt-10 text-white absolute">
            The freshest ingredients for you every day
          </p>
        </div>
      </div>
    </div>

    <div class="relative py-10 text-center bg-white px-10">
      <LazyPageTitle
        title="Starters"
        sub-title="This is a section of your menu. Give your section a brief description"
      />
      <div
        class="grid grid-cols-1 md:grid-cols-2 text-left gap-x-5 lg:gap-x-[102px] place-items-center"
      >
        <img src="/assets/StartersImage.png" alt="" />
        <div>
          <div>
            <div class="flex justify-end mb-3">$20</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Grilled Okra and <br />
              Tomatoes
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <div class="flex justify-end mb-3">$18</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Cucumber Salad <br />
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <div class="flex justify-end mb-3">$12</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Basil Pancakes<br />
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative py-10 text-center bg-white">
      <LazyPageTitle
        title="Mains"
        sub-title="This is a section of your menu. Give your section a brief description"
      />

      <div
        class="grid grid-cols-1 md:grid-cols-2 text-left gap-x-5 lg:gap-x-[102px] place-items-center"
      >
        <div>
          <div>
            <div class="flex justify-end mb-3">$20</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Deep Sea Snow White <br />
              Cod Fillet
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <div class="flex justify-end mb-3">$22</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Steak With Rosemary<br />Butter
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <div class="flex justify-end mb-3">$20</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Steaks with Grilled <br />Kimchi
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <img src="/assets/MainImage.png" alt="" />
      </div>
    </div>

    <div class="relative py-10 text-center bg-white">
      <LazyPageTitle
        title="Pastries & Drinks"
        sub-title="This is a section of your menu. Give your section a brief description"
      />

      <div
        class="grid grid-cols-1 md:grid-cols-2 text-left gap-x-5 lg:gap-x-[102px] place-items-center"
      >
        <img src="/assets/PastriesDrinkImage.png" alt="" />
        <div>
          <div>
            <div class="flex justify-end mb-3">$158</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Wine Pairing<br />
              Tomatoes
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <div class="flex justify-end mb-3">$168</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Natural Wine Pairing <br />
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <div class="flex justify-end mb-3">$90</div>
            <img src="/assets//Line 1.png" alt="" class="w-full mb-6" />
            <div class="text-4xl lg:text-6xl text-black">
              Whisky Flyer<br />
            </div>
            <p class="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
