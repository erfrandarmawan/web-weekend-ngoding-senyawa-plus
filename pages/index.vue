<template>
  <main class="w-full h-auto flex flex-col bg-primary">
    <!-- Landing Page Section -->
    <section class="w-full h-screen flex items-center justify-center">
      <img src="https://ik.imagekit.io/b3amk7ihm/senyawa_logo.webp" class="w-60"/>
    </section>
    <!-- ./Landing Page Section -->

    <!-- Tagline Section -->
    <section class="w-full h-screen flex relative z-10 items-center justify-center text-white p-20 
      bg-[url('https://ik.imagekit.io/b3amk7ihm/senyawa_bg_tagline.webp')] bg-cover bg-no-repeat bg-center
      before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-primary
      before:opacity-80
      before:z-[-5]">
      <h1 class="font-cinzel text-white text-center font-light text-7xl leading-snug">
        EXPLORE INDONESIAN<br>
        EMERGING <span class="font-anton text-secondary">CREATORS <span class="text-white">+</span> BRANDS</span>
      </h1>
    </section>
    <!-- ./Tagline Section -->

    <!-- About Section -->
    <section class="w-full h-screen flex items-center justify-center">
      <div class="w-1/3 h-[600px] overflow-hidden rounded-2xl ">
        <img src="https://ik.imagekit.io/b3amk7ihm/senyawa_bg_tagline.webp" class="w-full h-full object-cover" />
      </div>
      <div class="w-1/2 flex flex-col text-white ml-16">
        <h2 class="font-cinzel text-4xl tracking-[0.4em] leading-normal">
          SENYAWA+ ART SPACE PROVIDES A SUPPORT SYSTEM FOR LOCAL CREATORS AND BRANDS TO EXHIBIT THEIR PRODUCTS
        </h2>
        <a href="https://maps.app.goo.gl/32Fnp7iyDUTnyibp9"
          id="link-senyawa-space"
          class="btn btn-secondary btn-lg rounded-full w-fit font-anton uppercase mt-5 tracking-widest" 
          target="_blank" rel="noreferrer noopener">Discover Our Space</a>
      </div>
    </section>
    <!-- ./About Section -->

    <!-- Video Section -->
    <section class="w-full h-screen flex flex-col items-center justify-center">
      <div class="mockup-phone">
        <div class="camera"></div> 
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            <video controls>
              <source src="https://sgp1.vultrobjects.com/public-develobe/videos/senyawa_intro_video.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </section>
    <!-- ./Video Section -->

    <!-- News Section -->
    <section class="w-full min-h-screen flex flex-col items-center font-anton text-secondary py-20 px-40">
      <div class="flex flex-col">
        <h1 class="text-7xl -ml-20">LATEST</h1>
        <div class="flex -mr-20">
          <h1 class="text-7xl">NEWS</h1>
          <span class="text-7xl -mt-8">+</span>
        </div>
      </div>

      <div class="grid grid-cols-3 mt-20 gap-10">
        <div class="card w-full h-96 bg-base-100 shadow-xl">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body text-primary">
            <p class="line-clamp-5">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div class="card w-full h-96 bg-base-100 shadow-xl">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body text-primary">
            <p class="line-clamp-5">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div class="card w-full h-96 bg-base-100 shadow-xl">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body text-primary">
            <p class="line-clamp-5">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div class="card w-full h-96 bg-base-100 shadow-xl">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body text-primary">
            <p class="line-clamp-5">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div class="card w-full h-96 bg-base-100 shadow-xl">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body text-primary">
            <p class="line-clamp-5">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div class="card w-full h-96 bg-base-100 shadow-xl">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body text-primary">
            <p class="line-clamp-5">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </section>
    <!-- ./News Section -->
  </main>
</template>

<script setup>
  // Heading and set body attributes
  useHead({
    title: 'Senyawa+',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: "TODO" },
      { name: 'og:title', content: 'Senyawa+' },
      { name: 'og:url', content: 'https://senyawa.develobe.id/' },
      { name: 'og:description', content: "TODO" },
      { name: 'og:image', content: 'TODO' },
    ],
  })
</script>