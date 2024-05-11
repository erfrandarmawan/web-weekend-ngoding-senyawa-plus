<template>
  <main class="w-full h-auto flex flex-col bg-primary">
    <!-- Landing Page Section -->
    <section id="section-landing-page" class="w-full h-screen flex items-center justify-center">
      <img src="https://ik.imagekit.io/b3amk7ihm/senyawa_logo.webp" class="w-60"/>

      <div id="scrolling-icon" class="absolute bottom-0 mb-5 animate-bounce"
        :class="isMounted ? 'opacity-100' : 'opacity-0'">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.2667 14.3167L20.8333 23.75L11.4 14.3167L12.5833 13.15L20.8333 21.4L29.0833 13.15L30.2667 14.3167Z" fill="#E56CCA"/>
        </svg>
      </div>

    </section>
    <!-- ./Landing Page Section -->

    <!-- Tagline Section -->
    <section class="w-full h-screen flex relative z-10 items-center justify-center text-white p-20 
      bg-[url('https://ik.imagekit.io/b3amk7ihm/senyawa_bg_tagline.webp')] bg-cover bg-no-repeat bg-center bg-fixed
      before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-primary
      before:opacity-80
      before:z-[-5]">
      <h1 class="font-cinzel text-white text-center font-light text-7xl leading-snug">
        <span id="text-explore-indonesian">XXXXXXX XXXXXXXXXX</span><br>
        <span id="text-emerging">XXXXXXXX</span> <span class="font-anton text-secondary" id="text-creators"></span> <span class="text-white" id="text-plus">+</span> <span class="font-anton text-secondary" id="text-brands"></span>
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

    <!-- Contact Section -->
    <section class="w-full h-screen flex flex-col items-center justify-center relative">
      <div class="flex items-center gap-10">
        <img src="https://ik.imagekit.io/b3amk7ihm/senyawa_logo.webp" class="w-60 h-fit"/>
        <div class="w-0.5 h-24 bg-secondary"></div>
        <div class="flex flex-col text-white text-poppins">
          <div class="flex items-center gap-2">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.232 38C8.31067 38 7.542 37.692 6.926 37.076C6.31 36.46 6.00133 35.6907 6 34.768V13.232C6 12.3107 6.30867 11.542 6.926 10.926C7.54333 10.31 8.31133 10.0013 9.23 10H38.77C39.69 10 40.458 10.3087 41.074 10.926C41.69 11.5433 41.9987 12.312 42 13.232V34.77C42 35.69 41.6913 36.4587 41.074 37.076C40.4567 37.6933 39.6887 38.0013 38.77 38H9.232ZM24 24.232L8 13.77V34.77C8 35.1287 8.11533 35.4233 8.346 35.654C8.57667 35.8847 8.872 36 9.232 36H38.77C39.1287 36 39.4233 35.8847 39.654 35.654C39.8847 35.4233 40 35.128 40 34.768V13.768L24 24.232ZM24 22L39.384 12H8.616L24 22ZM8 13.77V12V34.77C8 35.1287 8.11533 35.4233 8.346 35.654C8.57667 35.8847 8.872 36 9.232 36H8V13.77Z" fill="white"/>
            </svg>
            <span class="text-xl">hello@senyawa.plus</span>
          </div>

          <div class="flex items-center gap-2">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 32C26.1217 32 28.1566 31.1571 29.6569 29.6569C31.1571 28.1566 32 26.1217 32 24C32 21.8783 31.1571 19.8434 29.6569 18.3431C28.1566 16.8429 26.1217 16 24 16C21.8783 16 19.8434 16.8429 18.3431 18.3431C16.8429 19.8434 16 21.8783 16 24C16 26.1217 16.8429 28.1566 18.3431 29.6569C19.8434 31.1571 21.8783 32 24 32Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 32V16C6 13.3478 7.05357 10.8043 8.92893 8.92893C10.8043 7.05357 13.3478 6 16 6H32C34.6522 6 37.1957 7.05357 39.0711 8.92893C40.9464 10.8043 42 13.3478 42 16V32C42 34.6522 40.9464 37.1957 39.0711 39.0711C37.1957 40.9464 34.6522 42 32 42H16C13.3478 42 10.8043 40.9464 8.92893 39.0711C7.05357 37.1957 6 34.6522 6 32Z" stroke="white" stroke-width="1.5"/>
              <path d="M35 13.02L35.02 12.998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <a href="https://www.instagram.com/senyawa.plus/" class="text-xl link link-hover" target="_blank" rel="noreferrer noopener">@senyawa.plus</a>
          </div>
        </div>
      </div>

      <div class="text-white absolute bottom-0 mb-10 font-poppins text-lg">
        Made by <a href="https://www.instagram.com/erfrandarmawan" class="link link-hover text-secondary font-bold">Erfran Darmawan</a> from <a href="https://develobe.id/" class="link link-hover text-secondary font-bold">DEVELOBE.ID</a>
      </div>
    </section>
    <!-- ./Contact Section -->
  </main>
</template>

<script setup>
  // Import library
  import gsap from 'gsap';
  import { TextPlugin } from 'gsap/TextPlugin';

  // Heading and set body attributes
  useHead({
    title: 'Senyawa Plus',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: "TODO" },
      { name: 'og:title', content: 'Senyawa Plus' },
      { name: 'og:url', content: 'https://senyawa.develobe.id/' },
      { name: 'og:description', content: "TODO" },
      { name: 'og:image', content: 'TODO' },
    ],
  })

  function animatePage(){
    // Animate page
    ctx = gsap.context((self) => {
      gsap.timeline()
        .from("#section-landing-page", {
          y: 50,
          duration: 0.5,
          opacity: 0,
        })
        .from("#scrolling-icon", {
          duration: 0.5,
          opacity: 0,
        });

      gsap.timeline()
        .to("#text-explore-indonesian", {
          duration: 2,
          text: "EXPLORE INDONESIAN"
        })
        .to("#text-emerging", {
          duration: 1,
          text: "EMERGING"
        })
        .to("#text-creators", {
          duration: 1,
          text: "CREATORS"
        })
        .to("#text-brands", {
          duration: 1,
          text: "BRANDS"
        })
    });
  }

  // Prepare variable
  let ctx;
  const isMounted = ref(false);

  // Register GSAP plugin
  gsap.registerPlugin(TextPlugin);

  onMounted(() => {
    // Set flag mounted
    isMounted.value = true;
    
    // Animate page
    animatePage();
  });

  onUnmounted(() => {
    // Revert to original state
    if (ctx){
      ctx.revert();
    }
  });
</script>