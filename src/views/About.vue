<template>
  <div>
    <nav-bar />
    <div id="body-container">
      <h2>~/ Hello World!</h2>
      <!-- <h3>  </h3> -->
      <!-- <div id="body-content"> -->
      <p> <strong>
        Currently a freshly graduate from an accelerated full stack web
        development diploma at Innotech College! I am a Dedicated learner and
        very eager to further develop my technical skills post graduation. In
        Innotech College we were taught basic HTML, CSS/SASS, Vue.JS,
        JavaScript, Python, Apache and we used some tools such as PostMan,
        Dbeaver, GitHub, Google Cloud. Lets take a look at my projects in the
        Portfolio page! </strong>
      </p>
      <!-- </div> -->
    </div>
    <div id="footer-container">
      <footer-comp />
    </div>
  </div>
</template>

<script>
import footerComp from "../components/Footer.vue";
import navBar from "../components/navBar.vue";
export default {
  name: "about",
  components: {
    navBar,
    footerComp,
  },
};
</script>

<style  scoped>
#body-container {
  display: grid;
  justify-items: center;
  align-items: center;
    padding: 0%;
    margin: 0%;
  min-height: 80vh;
  grid-template-rows: 1fr 2fr 4fr;
}
#body-content {
  display: grid;
  align-items: center;
  justify-items: center;

  /* grid-template-columns: 1fr 1fr 1fr; */
}
p{
    display: grid;
    justify-items: center;
    align-items: center;
    border: black solid 2px;
    padding: 20px;
    margin: 90px;
    
}
</style>