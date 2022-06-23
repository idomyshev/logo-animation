<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="d-flex justify-center main-container">
    <div class="animation-container">
      <img src="@/assets/logo/logo-choreograph-exact.svg" />
      <img v-if="false" src="@/assets/logo/logo-occasions-graph-exact.svg" />
      <img v-if="false" src="@/assets/logo/logo-compose-exact.svg" />
      <img v-if="false" src="@/assets/logo/logo-sync-exact.svg" />
    </div>
    <div class="animation-container animation-second">
      <img src="@/assets/logo/logo-occasions-graph-exact.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "PublicAreaView",
  components: {},
  data() {
    return {};
  },
  beforeMount() {},
  mounted() {},
  watch: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.main-container {
  margin-top: 300px;
  position: relative;
  overflow: hidden;
}
.animation-container {
  opacity: 0;
  width: 400px;
  animation-name: fadeInFromNone;
  animation-duration: 1.8s;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.animation-second {
  animation-delay: 1.62s;
}
@keyframes fadeInFromNone {
  0% {
    display: block;
    opacity: 0;
    margin-top: 0;
  }
  9% {
    opacity: 1;
    margin-top: 0;
  }
  90% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: -200px;
    display: none;
  }
}
</style>
