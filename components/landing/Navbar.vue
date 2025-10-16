<script setup>
const menuitems = [
  {
    title: "Home",
    path: "#",
  },
   {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Pricing",
    path: "/pricing",
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
          <button @click="open = !open" class="text-gray-800">
           <img
      
        src="~/assets/img/logosekolahbahasa.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
          </button>
        </div>
      </div>
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems">
            <a
              :href="item.path"
              class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="#" styleName="muted" block size="md"
            >Log inasas</LandingLink
          >
          <LandingLink href="#" size="md" block>Sign up</LandingLink>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="#">Log in</a>
          <LandingLink href="#" style="background:#F4A340" size="md">Test Gratis</LandingLink>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
<style scoped>
header {
 
}
img.logo-topbar{
    height: 35px;
}
</style>