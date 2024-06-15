<template>
  <div class="relative">
    <section>
      <img class="opacity-60" src="../../assets/images/banner.png" />
      <div class="absolute top-[7%] left-[17%]">
        <p class="text-6xl uppercase mb-4 font-[1000] tracking-wider w-[30rem]">
          Rent a car with Sikute Australia
        </p>
        <p class="text-2xl w-[35rem] mb-5">
          Increase efficiency and improve your customer experience with Skikute
          Australia.
        </p>
        <div class="flex bg-white h-[70px] rounded-md">
          <div class="relative">
            <input
              type="text"
              id="pickup-location"
              class="border-b w-56 mx-5 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
              autocomplete="off"
            />
            <label
              for="pickup-location"
              class="absolute left-0 mx-5 top-5 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-[-0.5rem] peer-focus:text-gray-700 transition-all"
              >Pick-up Location</label
            >
          </div>
          <div class="relative">
            <input
              type="date"
              id="fromdate"
              class="border-b w-56 mx-5 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
              autocomplete="off"
            />
            <label
              for="fromdate"
              class="absolute left-0 mx-5 text-gray-600 cursor-text text-xs -top-[-0.5rem] peer-focus:text-gray-700 transition-all"
            >
              From</label
            >
          </div>

          <div class="relative">
            <input
              type="date"
              id="todate"
              class="border-b w-56 mx-5 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
              autocomplete="off"
            />
            <label
              for="todate"
              class="absolute left-0 mx-5 text-gray-600 cursor-text text-xs -top-[-0.5rem] peer-focus:text-gray-700 transition-all"
            >
              To</label
            >
          </div>
        </div>
        <button
          class="bg-[#dc143c] text-white px-10 py-2 rounded-md cursor-pointer mt-3 hover:bg-[#902c40]"
        >
          Search
        </button>
      </div>
    </section>

    <!-- Who We Are Section -->

    <section>
      <div class="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:h-[70vh] lg:grid-cols-2">
          <div class="relative z-10 lg:py-16">
            <div class="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="silver1"
                src="../../assets/images/silver1.png"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div class="relative flex items-center bg-gray-100">
            <span
              class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
            ></span>

            <div class="p-8 sm:p-16 lg:p-24">
              <h2 class="text-2xl font-bold sm:text-3xl">WHO WE ARE</h2>

              <p class="mt-4 text-gray-600">
                Nunc vulputate, purus sed interdum imperdiet, odio nibh
                facilisis mi, eget sodales lorem neque ac diam. Suspendisse non
                mauris euismod, fringilla orci quis, rutrum urna. Phasellus eu
                eleifend leo. Curabitur eleifend rhoncus tellus, eget mattis
                lectus efficitur non. Curabitur a urna ex.
              </p>

              <a
                class="mt-8 inline-block rounded border border-[#dc143c] bg-[#dc143c] px-12 py-3 text-sm font-medium text-white hover:bg-[#902c40] focus:outline-none focus:ring"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Services Section -->

    <section>
      <h1 class="flex justify-center p-11 text-3xl">OUR LOCATION</h1>
      <div class="flex flex-wrap justify-center gap-10 pb-16">
        <article
          class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg w-full sm:w-1/2 lg:w-1/3 mb-4"
        >
          <img
            alt="brisbane"
            src="../../assets/images/brisbane.png"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <div
            class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
          >
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                LOCATION
              </time>
              <h3 class="mt-0.5 text-lg text-white">Brisbane</h3>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
        <article
          class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg w-full sm:w-1/2 lg:w-1/3 mb-4"
        >
          <img
            alt="townsvile"
            src="../../assets/images/townsville.png"
            class="absolute inset-0 h-full w-full object-fit"
          />

          <div
            class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
          >
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                LOCATION
              </time>

              <h3 class="mt-0.5 text-lg text-white">Townsville</h3>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
