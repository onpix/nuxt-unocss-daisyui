<template>
  <div class="bg-top bg-no-repeat vbg-index-bg-sm md:vbg-index-bg-lg" style="">
    <div class="h-6"></div>
    <NavBar />
    <div class="xl:mx-56 lg:mx-48 md:mx-20 mx-8 mt-12">
      <slot />
    </div>

    <div class="h-16"></div>
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  mounted() {
    // useColorMode().preference = useColorMode().preference;
  },
};
</script>
