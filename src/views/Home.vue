<template>
    <div>
        <nav-bar />
        <div id="body-container">
            <h1> Sie Chan </h1>
            <h2> Full Stack Junior Web Developer </h2>
            <img src="@/assets/siephotoshoot.jpg" height="180px" alt="">
            <h2> Dedicated Learner </h2>
            <h2> Currently working on full stack web application skills! </h2>
        </div>
       <footer-comp />

    </div>
    
</template>

<script>
import footerComp from "../components/Footer.vue";
import NavBar from "@/components/navBar.vue";
    export default {
        name: "Home",
        components: {
            NavBar,
            footerComp,
        },        
    }
</script>

<style scoped>
#body-container {
    min-height: 80vh;

}
</style>