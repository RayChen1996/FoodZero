<template>
  <div class="bg-primary text-white py-[47px]">
    <header class="flex justify-around">
      <div class="flex gap-11">
        <nuxt-link to="/">
          <img src="/assets/Logo.svg" width="150" />
        </nuxt-link>

        <button class="btn-circle btn">
          <img src="/assets/NaviOpen.svg" />
        </button>
      </div>
      <div class="flex items-center gap-3">
        <span>+86 852 346 000</span>
        <nuxt-link to="/contact">
          <button class="border px-[46px] py-5 hover:bg-primary-100">
            Reservations
          </button>
        </nuxt-link>
      </div>
    </header>
  </div>
</template>
