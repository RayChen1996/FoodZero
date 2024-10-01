<template>
  <div class="container text-center py-32 px-6">
    <div>
      <PageTitle
        title="Calories Energy Balance"
        sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        <div>
          <figure class="relative overflow-hidden">
            <div
              class="flex justify-between px-20 absolute top-10 left-0 w-full transition-transform duration-1000 ease-in-out"
            >
              <span class="text-black text-3xl">Starters</span>
              <span
                class="transition-transform duration-1000 ease-in-out hover:translate-x-2"
                ><img src="/assets/Icon_arrow-right.svg" alt=""
              /></span>
            </div>
            <img
              src="/assets/food1.png"
              class="w-full transition-transform duration-500 ease-in-out hover:scale-125"
              alt=""
            />
          </figure>
        </div>

        <div>
          <figure class="relative overflow-hidden">
            <div
              class="flex justify-between px-20 absolute top-10 left-0 w-full transition-transform duration-1000 ease-in-out"
            >
              <span class="text-black text-3xl">Mains</span>
              <span
                class="transition-transform duration-1000 ease-in-out hover:translate-x-2"
                ><img src="/assets/Icon_arrow-right.svg" alt=""
              /></span>
            </div>
            <img
              src="/assets/food2.png"
              class="w-full transition-transform duration-500 ease-in-out hover:scale-125"
              alt=""
            />
          </figure>
        </div>

        <div>
          <figure class="relative overflow-hidden">
            <div
              class="flex justify-between px-20 absolute top-10 left-0 w-full transition-transform duration-1000 ease-in-out"
            >
              <span class="text-black text-3xl">Soups</span>
              <span
                class="transition-transform duration-1000 ease-in-out hover:translate-x-2"
                ><img src="/assets/Icon_arrow-right.svg" alt=""
              /></span>
            </div>
            <img
              src="/assets/food3.png"
              class="w-full transition-transform duration-500 ease-in-out hover:scale-125"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
