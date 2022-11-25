<template>
  <div class="navbar font-bold">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost md:hidden">
          <Icon
            name="mingcute:menu-fill"
            size="24"
            class="opacity-50"
          />
        </label>
        <NavBarItems
          ul_class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
        />
      </div>
    </div>

    <NavBarItems
      class="navbar-center hidden md:flex"
      ul_class="menu menu-horizontal p-0 opacity-50"
      btn_class="hover:rounded-lg active:bg-base-100 active:text-neutral"
    />

    <div class="navbar-end"></div>
  </div>
</template>

<script>
// import { Icon } from "@iconify/vue";
import NavBarItems from "./NavBarItems.vue";

export default {
  components: {
    // Icon,
    NavBarItems,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.mr-n {
  margin-right: -0.5rem;
}
</style>
