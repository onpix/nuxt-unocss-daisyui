<script>
export default {
  props: ["btn_class", "ul_class"],
  components: {
    // Icon,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>


  <ul :class="ul_class" tabindex="0">
    <li>
      <nuxt-link :class="btn_class" to=""
      >
        <Icon class="mr-n" name="bxs:home" size="22"/>
        Home</nuxt-link
      >
    </li>
    <li>
      <nuxt-link :class="btn_class" to=""
      >
        <Icon class="mr-n" name="entypo-social:github" size="22"/>
        Github</nuxt-link
      >
    </li>
    <li>
      <nuxt-link
          :class="btn_class"
          to=""
      >
        <Icon
            class="mr-n"
            name="academicons:google-scholar-square"
            size="22"
        />
        Scholar</nuxt-link
      >
    </li>
    <li>
      <!-- <nuxt-link :class="btn_class" to=""> -->
      <nuxt-link :class="btn_class" to="">
        <Icon class="mr-n" name="fa6-solid:blog" size="22"/>
        Blog
        <div
            class="badge badge-sm"
            style="margin-left: -0.7rem; margin-top: -1rem; font-size: 0.7rem"
        >
          中文
        </div>
      </nuxt-link
      >
    </li>
  </ul>
  </div>
</template>

<style scoped>
.mr-n {
  margin-right: -0.5rem;
}
</style>
