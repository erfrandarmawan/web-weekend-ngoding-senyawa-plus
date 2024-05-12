<template>
  <main class="w-full h-auto flex flex-col bg-primary">
    <!-- Landing Page Section -->
    <section id="section-landing-page" class="w-full h-screen flex items-center justify-center">
      <img src="https://ik.imagekit.io/b3amk7ihm/senyawa_logo.webp" class="w-40 md:w-60 xl:w-60"
        :class="isMounted ? 'opacity-100' : 'opacity-0'"/>

      <div id="scrolling-icon" class="absolute bottom-0 mb-5 animate-bounce"
        :class="isMounted ? 'opacity-100' : 'opacity-0'">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 xl:w-10 xl:h-10">
          <path d="M30.2667 14.3167L20.8333 23.75L11.4 14.3167L12.5833 13.15L20.8333 21.4L29.0833 13.15L30.2667 14.3167Z" fill="#E56CCA"/>
        </svg>
      </div>

    </section>
    <!-- ./Landing Page Section -->

    <!-- Tagline Section -->
    <section id="section-tagline" class="w-full h-screen flex relative z-10 items-center justify-center text-white p-5 md:p-20 xl:p-20 
      bg-[url('https://ik.imagekit.io/b3amk7ihm/senyawa_bg_tagline.webp')] bg-cover bg-no-repeat bg-center bg-fixed
      before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-primary
      before:opacity-80
      before:z-[-5]">
      <h1 class="font-cinzel text-white text-center font-light text-3xl md:text-5xl xl:text-7xl leading-snug">
        <span id="text-explore-indonesian">XXXXXXX XXXXXXXXXX</span><br>
        <span id="text-emerging">XXXXXXXX</span> <span class="font-anton text-secondary" id="text-creators"></span> <span class="text-white" id="text-plus">+</span> <span class="font-anton text-secondary" id="text-brands"></span>
      </h1>
    </section>
    <!-- ./Tagline Section -->

    <!-- About Section -->
    <section id="section-about" class="w-full min-h-screen flex flex-col md:flex-row xl:flex-row items-center justify-center p-5 md:p-0 xl:p-0">
      <div id="img-about" class="w-full md:w-1/3 xl:w-1/3 h-96 xl:h-[600px] overflow-hidden rounded-2xl">
        <img src="https://ik.imagekit.io/b3amk7ihm/senyawa_bg_tagline.webp" class="w-full h-full object-cover" />
      </div>
      <div class="w-full md:w-1/2 xl:w-1/2 flex flex-col text-white items-center md:items-start xl:items-start ml-0 md:ml-16 xl:ml-16 mt-5 md:mt-0 xl:mt-0">
        <h2 id="text-about" class="font-cinzel text-xl xl:text-4xl tracking-[0.4em] leading-normal w-full">
        </h2>
        <div id="link-wrapper-senyawa-space">
          <a id="link-senyawa-space" href="https://maps.app.goo.gl/32Fnp7iyDUTnyibp9"
            class="btn btn-secondary btn-md xl:btn-lg rounded-full w-fit font-anton uppercase mt-5 tracking-widest" 
            target="_blank" rel="noreferrer noopener">Discover Our Space</a>
        </div>
      </div>
    </section>
    <!-- ./About Section -->

    <!-- Video Section -->
    <section id="section-video" class="w-full h-screen flex flex-col items-center justify-center p-10 md:p-0 xl:p-0">
      <div id="video-intro" class="mockup-phone">
        <div class="camera"></div> 
        <div class="display">
          <div class="artboard artboard-demo md:phone-1 xl:phone-1">
            <video controls>
              <source src="https://sgp1.vultrobjects.com/public-develobe/videos/senyawa_intro_video.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <span id="video-source" class="text-base text-white mt-5 font-poppins">Source : instagram.com/senyawa.plus</span>
    </section>
    <!-- ./Video Section -->

    <!-- News Section -->
    <section id="section-news" class="w-full min-h-screen flex flex-col items-center font-anton text-secondary py-10 md:py-20 xl:py-20 px-5 md:px-20 xl:px-40">
      <div class="flex flex-col">
        <h1 id="text-latest" class="text-3xl md:text-5xl xl:text-7xl -ml-10 md:-ml-20 xl:-ml-20">TSETAL</h1>
        <div class="flex -mr-10 md:-mr-20 xl:-mr-20">
          <h1 id="text-news" class="text-3xl md:text-5xl xl:text-7xl">SWEN</h1>
          <span id="text-news-plus" class="text-3xl md:text-5xl xl:text-7xl -mt-4 md:-mt-8 xl:-mt-8">+</span>
        </div>
      </div>

      <div id="wrapper-social-media" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 md:mt-20 xl:mt-20 gap-5 md:gap-8 xl:gap-10">
        <a v-for="item in newsData"
          :key="item.code"
          :href="`https://instagram.com/p/${item.code}`"
          target="_blank"
          rel="noreferrer noopener"
          class="group">
          <div
            class="card w-full h-96 xl:h-[600px] bg-base-100 shadow-xl overflow-hidden">
            <figure><img :src="item.thumbnail" :alt="item.caption" class="group-hover:scale-110 duration-300" /></figure>
            <div class="card-body text-primary font-poppins p-4 md:p-5 xl:p-8">
              <p class="line-clamp-5 text-xs md:text-sm xl:text-base">{{ item.caption }}</p>
            </div>
          </div>
        </a>
      </div>
    </section>
    <!-- ./News Section -->

    <!-- Contact Section -->
    <section id="section-contact" class="w-full h-screen flex flex-col items-center justify-center relative">
      <div class="w-full flex items-center gap-2 md:gap-10 xl:gap-10">
        <div class="w-5/12 md:w-1/2 xl:w-1/2 flex justify-end">
          <img id="img-contact" src="https://ik.imagekit.io/b3amk7ihm/senyawa_logo.webp" class="w-24 min-w-24 md:w-60 md:min-w-60 xl:w-60 xl:min-w-60 h-fit"/>
        </div>

        <div id="divider-contact" class="w-0.5 h-16 md:h-24 xl:h-24 bg-secondary"></div>

        <div class="flex flex-col text-white text-poppins w-7/12 md:w-1/2 xl:w-1/2">
          <div class="flex items-center gap-1 md:gap-2 xl:gap-2">
            <svg id="icon-email" class="w-6 h-6 md:w-12 md:h-12 xl:w-12 xl:h-12" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.232 38C8.31067 38 7.542 37.692 6.926 37.076C6.31 36.46 6.00133 35.6907 6 34.768V13.232C6 12.3107 6.30867 11.542 6.926 10.926C7.54333 10.31 8.31133 10.0013 9.23 10H38.77C39.69 10 40.458 10.3087 41.074 10.926C41.69 11.5433 41.9987 12.312 42 13.232V34.77C42 35.69 41.6913 36.4587 41.074 37.076C40.4567 37.6933 39.6887 38.0013 38.77 38H9.232ZM24 24.232L8 13.77V34.77C8 35.1287 8.11533 35.4233 8.346 35.654C8.57667 35.8847 8.872 36 9.232 36H38.77C39.1287 36 39.4233 35.8847 39.654 35.654C39.8847 35.4233 40 35.128 40 34.768V13.768L24 24.232ZM24 22L39.384 12H8.616L24 22ZM8 13.77V12V34.77C8 35.1287 8.11533 35.4233 8.346 35.654C8.57667 35.8847 8.872 36 9.232 36H8V13.77Z" fill="white"/>
            </svg>
            <span id="text-email-senyawa" class="text-xs md:text-lg xl:text-xl" aria-label="hello@senyawa.plus"></span>
          </div>

          <div class="flex items-center gap-1 md:gap-2 xl:gap-2">
            <svg id="icon-instagram" class="w-6 h-6 md:w-12 md:h-12 xl:w-12 xl:h-12" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 32C26.1217 32 28.1566 31.1571 29.6569 29.6569C31.1571 28.1566 32 26.1217 32 24C32 21.8783 31.1571 19.8434 29.6569 18.3431C28.1566 16.8429 26.1217 16 24 16C21.8783 16 19.8434 16.8429 18.3431 18.3431C16.8429 19.8434 16 21.8783 16 24C16 26.1217 16.8429 28.1566 18.3431 29.6569C19.8434 31.1571 21.8783 32 24 32Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 32V16C6 13.3478 7.05357 10.8043 8.92893 8.92893C10.8043 7.05357 13.3478 6 16 6H32C34.6522 6 37.1957 7.05357 39.0711 8.92893C40.9464 10.8043 42 13.3478 42 16V32C42 34.6522 40.9464 37.1957 39.0711 39.0711C37.1957 40.9464 34.6522 42 32 42H16C13.3478 42 10.8043 40.9464 8.92893 39.0711C7.05357 37.1957 6 34.6522 6 32Z" stroke="white" stroke-width="1.5"/>
              <path d="M35 13.02L35.02 12.998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <a id="link-instagram-senyawa" href="https://www.instagram.com/senyawa.plus/" class="text-xs md:text-lg xl:text-xl link link-hover" target="_blank" rel="noreferrer noopener" aria-label="@senyawa.plus"></a>
          </div>
        </div>
      </div>

      <div id="developer-info" class="text-white absolute bottom-0 mb-5 md:mb-10 xl:mb-10 font-poppins text-xs md:text-base xl:text-lg text-center">
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
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  // Heading and set body attributes
  useHead({
    title: 'Senyawa Plus',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'SENYAWA+ ART SPACE PROVIDES A SUPPORT SYSTEM FOR LOCAL CREATORS AND BRANDS TO EXHIBIT THEIR PRODUCTS' },
      { name: 'keywords', content: 'senyawa, senyawa plus, art, art space, creators, brands, product, space, local creators, local brands, exhibition' },
      { name: 'author', content: 'Erfran Darmawan' },

      { name: 'og:title', content: 'Senyawa Plus' },
      { name: 'og:site_name', content: 'Senyawa Plus' },
      { name: 'og:description', content: 'SENYAWA+ ART SPACE PROVIDES A SUPPORT SYSTEM FOR LOCAL CREATORS AND BRANDS TO EXHIBIT THEIR PRODUCTS' },
      { name: 'og:url', content: 'https://senyawa.develobe.id/' },
      { name: 'og:image', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/senyawa_landing_page.png' },
      { name: 'og:image:secure_url', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/senyawa_landing_page.png' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image:width', content: '300' },
      { name: 'og:image:height', content: '213' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en_US' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Senyawa Plus' },
      { name: 'twitter:description', content: 'SENYAWA+ ART SPACE PROVIDES A SUPPORT SYSTEM FOR LOCAL CREATORS AND BRANDS TO EXHIBIT THEIR PRODUCTS' },
      { name: 'twitter:image', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/senyawa_landing_page.png' },
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

      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-tagline",
            start: 'top top',
          }
        })
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

      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-about",
            start: 'top top',
          }
        })
        .from("#img-about", {
          y: 100,
          duration: 1,
          opacity: 0
        })
        .to("#text-about", {
          duration: 6,
          ease: "none",
          text: "SENYAWA+ ART SPACE PROVIDES A SUPPORT SYSTEM FOR LOCAL CREATORS AND BRANDS TO EXHIBIT THEIR PRODUCTS"
        })
        .from("#link-wrapper-senyawa-space", {
          y: 100,
          duration: 1,
          opacity: 0,
        });

      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-video",
            start: 'top top',
          }
        })
        .from("#video-intro", {
          duration: 1.5,
          opacity: 0,
          scale: 0
        })
        .from("#video-source", {
          duration: 1,
          opacity: 0,
        });

      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-news",
            start: 'top top',
          }
        })
        .from("#text-latest", {
          opacity: 0,
          duration: 0.5,
        })
        .from("#text-news", {
          opacity: 0,
          duration: 0.5,
        })
        .to("#text-latest", {
          duration: 1.5,
          ease: "none",
          text: "LATEST"
        })
        .to("#text-news", {
          duration: 1.5,
          ease: "none",
          text: "NEWS"
        })
        .from("#text-news-plus", {
          opacity: 0,
          duration: 1,
        })
        .from("#wrapper-social-media", {
          duration: 1.5,
          y: 100,
          opacity: 0
        });

      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-contact",
            start: 'top top',
          }
        })
        .from("#divider-contact", {
          duration: 0.5,
          y: 40,
          opacity: 0
        })
        .from("#img-contact", {
          duration: 0.5,
          x: 60,
          opacity: 0
        })
        .from("#icon-email", {
          duration: 0.5,
          x: -60,
          opacity: 0
        }, "<")
        .from("#icon-instagram", {
          duration: 0.5,
          x: -60,
          opacity: 0
        }, "<")
        .to("#text-email-senyawa", {
          duration: 1.5,
          ease: "none",
          text: "hello@senyawa.plus"
        })
        .to("#link-instagram-senyawa", {
          duration: 1.5,
          ease: "none",
          text: "@senyawa.plus"
        }, "<")
        .from("#developer-info", {
          duration: 0.5,
          y: 50,
          opacity: 0
        })
    });
  }

  // Prepare variable
  let ctx;
  const isMounted = ref(false);
  const newsData = ref([]);
  
  // Get runtime config
  const config = useRuntimeConfig();

  // Register GSAP plugin
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    // Set flag mounted
    isMounted.value = true;

    // Get env file
    if (config.public.newsData && typeof config.public.newsData === 'string'){
      newsData.value = JSON.parse(config.public.newsData);
    } else {
      newsData.value = config.public.newsData;
    }

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