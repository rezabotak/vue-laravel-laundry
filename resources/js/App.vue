<template>
  <div class="wrapper">
    <app-header v-if="isAuth"></app-header>

    <div class="content-wrapper">
      <router-view></router-view>
    </div>

    <app-footer v-if="isAuth"></app-footer>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["isAuth"])
  },
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>