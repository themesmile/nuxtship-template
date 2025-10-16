<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg1 = "https://source.unsplash.com/IF9TK5Uy-KI";
const TeamImg2 = "https://source.unsplash.com/iEEBWgY_6lA";
const TeamImg3 = "https://source.unsplash.com/ZHvM3XIOHoE";

const team = [
  {
    name: "Janette Lynch",
    title: "Senior Director",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "Marcell Ziemann",
    title: "Principal Strategist",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Robert Palmer",
    title: "Marketing Engineer",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
];
</script>

<template>
  <div class="h-fit p-6 flex flex-col gap-2.5 items-center justify-center relative">
  <div
    class="bg-color-mantis-lighter rounded-[30px] pt-section-padding-padding-section-large pr-page-padding-padding-global pb-section-padding-padding-section-large pl-page-padding-padding-global flex flex-col gap-20 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
  >
    <svg
      class="shrink-0 w-[296px] h-[458px] absolute left-[296px] top-[341px] overflow-visible"
      style="transform: translate(-296px, -341px)"
      width="296"
      height="458"
      viewBox="0 0 296 458"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.51568e-05 458C163.492 458 296 325.416 296 161.83L296 -2.73623e-05L-4.88285e-06 -1.48518e-06L3.51568e-05 458Z"
        fill="#9DD17E"
        fill-opacity="0.21"
      />
    </svg>
    <svg
      class="shrink-0 w-[151.9px] h-[234.9px] absolute right-[0.1px] bottom-[0.1px] overflow-visible"
      width="152"
      height="235"
      viewBox="0 0 152 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M151.9 0C68 0 0 68 0 151.9V234.9H151.9V0Z" fill="#9DD17E" />
    </svg>
    <div
      class="flex flex-row gap-y-20 items-start justify-between flex-wrap content-start w-[100%] shrink-0 h-[368px] max-w-container-container-large relative"
    >
      <div
        class="flex flex-col gap-4 items-start justify-start flex-1 min-w-[360px] relative"
      >
        <div
          class="bg-color-mantis rounded-[20px] pt-[3px] pr-3 pb-[3px] pl-3 flex flex-row gap-0 items-center justify-start shrink-0 relative"
        >
          <div
            class="text-color-white text-left font-['Nunito-Black',_sans-serif] text-2xl leading-normal font-black uppercase relative"
            style="letter-spacing: 0.09em"
          >
            tentang kami
          </div>
        </div>
        <div
          class="text-color-scheme-3-text text-left font-['Nunito-Black',_sans-serif] text-text-sizes-heading-2 leading-[120%] font-black relative self-stretch"
          style="letter-spacing: -0.02em"
        >
          Belajar Bahasa Asing di Sekolah Bahasa
        </div>
      </div>
      <div
        class="flex flex-col gap-8 items-start justify-start flex-1 min-w-[360px] relative"
      >
        <div
          class="text-color-scheme-3-text text-left font-text-large-medium-font-family text-text-large-medium-font-size leading-text-large-medium-line-height font-text-large-medium-font-weight relative self-stretch"
        >
          Sekolah Bahasa adalah tempat terbaik untuk meningkatkan kemampuan
          berbahasa asing Anda. Dengan pengajaran dari instruktur berpengalaman,
          kami siap membantu Anda mencapai tujuan bahasa Anda.
        </div>
      </div>
    </div>
  </div>
</div>

  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>About</template>
      <template v-slot:desc>We are a small passionate team.</template>
    </LandingSectionhead>
  </LandingContainer>
</template>
