<template>
  <main class="main-hero grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <div class="c_medium-length-hero-h-text1">
<p class="c_medium-length-hero-h-text2">
Mau Pede Ngomong Pake Bahasa Asing ?
</p>
</div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Marketing website done with Nuxt essdrd
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Nuxtship is a starter template for startups, marketing websites &
        landing pages.<wbr /> Built with Nuxt & TailwindCSS. You can quickly
        create any website with this starter.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          rel="noopener"
          >Get Started</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</LandingLink
        >
      </div>
    </div>
  </main>
</template>
<style scoped>
.main-hero {
  background: red;
  padding: 0 15%;

}
.c_medium-length-hero-h-text1 {
  width: 100%;
  max-width: 100%;
  margin-top: 0;
  min-height: auto;
  text-align: left;
  margin-bottom: 0;
}


.c_medium-length-hero-h-text2 {
  color: #f4a340;
  font-size: 28px;
  font-style: normal;
  margin-top: 0;
  text-align: left;
  font-family: "Nunito",sans-serif;
  font-weight: 700;
  line-height: 39px;
  margin-bottom: 0;
  letter-spacing: -1px;
  text-transform: none;
}

/* Mobile responsiveness */
@media (max-width: 767px) {
  .main-hero {
    padding: 0 1rem;
    flex-direction: column;
    text-align: center;
  }

  .main-hero > div:first-child {
    order: 2;
  }

  .main-hero > div:last-child {
    order: 1;
  }

  .c_medium-length-hero-h-text2 {
    font-size: 24px;
    line-height: 32px;
  }

  h1 {
    font-size: 2.5rem !important;
  }

  .mt-6 {
    margin-top: 2rem;
  }

  .flex-col.sm\\:flex-row {
    flex-direction: column;
  }
}</style>