<script setup>
  const menuitems = [{
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about",
    },
      {
      title: "Korea",
      path: "/korea",
    },
    {
      title: "Mandarin",
      path: "/mandarin",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const open = ref(false);
</script>

<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5 mx-2">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="text-lg">
          <img class="logo-topbar" src="~/assets/img/logosekolahbahasa.png" />
        </a>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ 'block': open, 'hidden': !open }">
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems" :key="item.path">
            <a :href="item.path" class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div class="lg:hidden flex flex-col items-center mt-3 gap-4">
          <LandingLink href="#" styleName="muted" block size="md">Log in</LandingLink>
          <LandingLink href="#" size="md" block>Sign up</LandingLink>
        </div>
      </nav>
      <div class="hidden lg:flex items-center gap-4">
        <a href="#" class="text-gray-600 hover:text-gray-900">Log in</a>
        <LandingLink href="#" style="background:#F4A340" size="md">Test Gratis</LandingLink>
      </div>
    </header>
  </LandingContainer>
</template>
<style scoped>
  img.logo-topbar {
    height: 35px;
  }

  /* Mobile responsiveness */
  @media (max-width: 1023px) {
    header {
      padding: 1rem;
    }

    img.logo-topbar {
      height: 28px;
    }

    nav {
      position: absolute;
      top: 85px;
      left: 0;
      right: 0;
      z-index: 50;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      background: #fde3c0;
      padding: 0 24px 64px;
    }

    nav ul {
      padding: 1rem 0;
    }

    nav ul li {
      padding: 0.5rem 1rem;
    }

    nav ul li a {
      font-size: 1rem;
    }

    .lg\\:hidden.flex.items-center.mt-3.gap-4 {
      margin-top: 1rem;
    }
  }
</style>