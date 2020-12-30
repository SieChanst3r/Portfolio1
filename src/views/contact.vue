<template>
  <div>
    <nav-bar />
    <div id="body-container">
      <div>
        <contact-comp />
      </div>
    </div>
    <div>
      <footer-comp />
    </div>
  </div>
</template>

<script>
import contactComp from "../components/contactContent.vue";
import footerComp from "../components/Footer.vue";
import navBar from "../components/navBar.vue";
export default {
  name: "about",
  components: {
    navBar,
    footerComp,
    contactComp,
  },
};
</script>

<style scoped>
#body-container {
  display: grid;
  align-items: center;
  justify-items: center;
  /* grid-template-columns: 1fr 1fr 1fr; */
  min-height: 80vh;
}
</style>