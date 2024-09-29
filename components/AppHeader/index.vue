<template>
  <div>
    <div class="bg-primary text-white py-[47px]">
      <header class="flex justify-around">
        <div class="flex gap-11">
          <nuxt-link to="/">
            <img src="/assets/Logo.svg" width="150" />
          </nuxt-link>

          <button class="btn-circle btn" @click="clickOpenMenu">
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
    <dialog
      ref="dialog"
      class="w-screen h-screen bg-transparent overflow-hidden"
    >
      <div class="relative">
        <button class="btn-circle left-3 top-3 relative bg-white">
          <img
            src="/assets/NaviClose.svg"
            alt="Close"
            @click="clickCloseMenu"
          />
        </button>

        <img
          src="/assets/mnubg.png"
          class="w-full absolute h-screen bg-[#233000]/80"
          alt="Menu Background"
        />
        <div class="h-screen w-full bg-[#233000]/80 relative py-12">
          <div class="flex justify-between items-end relative">
            <div class="flex justify-center items-center w-1/2">
              <ul class="flex flex-col gap-14 text-5xl">
                <nuxt-link to="/">
                  <li class="hover:text-primary-100" @click="clickCloseMenu">
                    Home
                  </li>
                </nuxt-link>

                <nuxt-link to="/Menu">
                  <li class="hover:text-primary-100" @click="clickCloseMenu">
                    Menu
                  </li>
                </nuxt-link>

                <nuxt-link to="/Blog">
                  <li class="hover:text-primary-100" @click="clickCloseMenu">
                    Blogs
                  </li>
                </nuxt-link>

                <nuxt-link to="/About">
                  <li class="hover:text-primary-100" @click="clickCloseMenu">
                    About
                  </li>
                </nuxt-link>

                <nuxt-link to="/Contact">
                  <li class="hover:text-primary-100" @click="clickCloseMenu">
                    Contact
                  </li>
                </nuxt-link>
              </ul>
            </div>
            <div>
              <div class="text-3xl">Contact</div>
              <img src="/assets/Line 1.png" alt="" />
              <div class="my-[38px]">
                <div>+86 852 346 000</div>
                <div>info@foodzero.com</div>
              </div>
              <div class="mb-[38px]">
                <div>1959 Sepulveda Blvd.</div>
                <div>Culver City, CA, 90230</div>
              </div>
              <div class="flex items-center gap-4 mt-5">
                <img src="/assets//Icon_instagram.svg" alt="" />
                <img src="/assets/Icon_twitter.svg" alt="" />
                <img src="/assets/Icon_facebook.svg" alt="" />
                <img src="/assets/Icon_youtube.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 追踪模態窗口是否打開
const menuOpen = ref(false);

// 引用 dialog 元素
const dialog = ref<HTMLDialogElement | null>(null);

// 打開模態窗口
const clickOpenMenu = () => {
  menuOpen.value = true;
  if (dialog.value) {
    dialog.value.showModal(); // 使用 ref 引用來顯示模態窗口
  }
};

// 關閉模態窗口
const clickCloseMenu = () => {
  menuOpen.value = false;
  if (dialog.value) {
    dialog.value.close(); // 使用 ref 引用來關閉模態窗口
  }
};
</script>
