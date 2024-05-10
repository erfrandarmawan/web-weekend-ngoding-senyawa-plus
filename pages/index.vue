<template>
  <main class="w-full h-auto flex flex-row bg-primary">
    <!-- Landing Page Section -->
    <section class="w-full min-h-screen flex items-center justify-center">
      <img src="/images/logo.webp" class="w-60"/>
    </section>
    <!-- ./Landing Page Section -->
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