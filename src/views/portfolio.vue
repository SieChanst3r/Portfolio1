<template>
  <div>
    <div id="navigation-container">
      <nav-bar />
    </div>

    <div id="project-container">
        <portfolio-content />
    </div>
    <div id="footer-container">
        <footer-comp />
    </div>
  </div>
</template>

<script>
import footerComp from "../components/Footer.vue";
import portfolioContent from "../components/portfolioContent.vue";
import navBar from "../components/navBar.vue";
export default {
  name: "portfolio",
  components: {
    navBar,
    portfolioContent,
    footerComp,
  },
};
</script>

<style scoped>
*{
    margin: 0%;
    padding: 0%;
}

/* #navigation-container {
    display: grid;
    width: 100%;
    margin: 0%;
    padding: 0%;
} */
</style>