<template>
  <div
      class="btn btn-ghost absolute right-10 top-8 opacity-50 z-10 duration-300"
      @click="toggleDarkMode()"
  >
    <Icon
        v-show="!appIsDark"
        class=""
        name="material-symbols:light-mode"
        size="24"
    />
    <Icon
        v-show="appIsDark"
        class=""
        name="material-symbols:dark-mode-rounded"
        size="24"
    />
  </div>

  <div
      v-show="scY > 300"
      id="pagetop"
      class="
      btn
      hover:shadow-lg
      duration-300
      opacity-60
      hover:opacity-80
      fixed
      right-10
      bottom-10
      px-2
      rounded-full
      z-10
    "
      @click="toTop"
  >
    <Icon
        class="fill-base-100"
        name="material-symbols:keyboard-arrow-up-rounded"
        size="30"
    />
  </div>

  <NuxtPage/>

  <!-- <Footer/> -->
</template>

<!--<script setup lang="ts">-->
<!--import {useThemeStore} from "./composables/theme";-->
<!--const theme = useThemeStore();-->
<!--// onUpdated(() => {-->
<!--//   theme.applyTheme();-->
<!--// });-->
<!--// function toggleDarkMode() {-->
<!--//   theme.toggleTheme();-->
<!--// }-->
<!--</script>-->


<script lang="ts">
// import '@unocss/reset/tailwind.css'
// Import daisyUI **BEFORE** UnoCSS
// import '@kidonng/daisyui/index.css'
// import 'uno.css'

export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
      // daisy_light: "winter",
      // daisy_dark: "night",
      daisy_light: "light",
      daisy_dark: "dark",
      appIsDark: this.isDarkTheme(),
    };
  },

  mounted() {
    console.log("root app mounted.");
    this.appIsDark = this.isDarkTheme();
    this.logColorMode();

    // 监听滚动
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    isDarkTheme: function () {
      const index = ["light", this.daisy_light].indexOf(this.$colorMode.value);
      if (index > -1) {
        console.log("initialized as: light theme.");
        return false;
      } else {
        console.log("initialized as: dark theme.");
        return true;
      }
      return index <= -1;
    },

    toggleDarkMode: function () {
      console.log("toggle (before and after):");
      this.logColorMode();
      this.$colorMode.preference = this.appIsDark
          ? this.daisy_light
          : this.daisy_dark;
      this.appIsDark = !this.appIsDark;
      setTimeout(() => {
        this.logColorMode();
      }, 1000)
    },

    logColorMode: function () {
      let mode = this.$colorMode;
      console.log(
          `prefer: ${mode.preference} (${typeof mode
              .preference}), value: ${mode.value} (${typeof mode
              .value}), unknown: ${mode.unknown} (${typeof mode
              .unknown}), this.dark: ${this.appIsDark}, daisy: ${this.daisy_theme}`
      );
    },

    // setBodyBgDark: function (set_dark) {
    //   if (set_dark) {
    //     document.body.style.backgroundColor = "black";
    //   } else {
    //     document.body.style.backgroundColor = "white";
    //   }
    // },

    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
