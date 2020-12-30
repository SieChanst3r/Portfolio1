<template>
  
    <div id="nav">
        <img src="" alt="">
      <span></span>
      <router-link to="/" class="nav-link">| HOME |</router-link>
      <!-- <router-link to="/about" class="nav-link">| ABOUT |</router-link> -->
      <router-link to="/portfolio" class="nav-link">| PORTFOLIO |</router-link>
      <router-link to="/contact" class="nav-link">| CONTACT |</router-link>
    </div>
  
</template>

<script>
export default {
  name: "navBar"
};
</script>

<style  scoped>
*{
  margin: 0%;
  padding: 0%;
}
a:link {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
a:visited {
  color: black;
}

#nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 98%;
  align-items: center;
  justify-items: center;
  min-height: 2vh;
  color: black;
  font-family: monospace;
  font-size: 14px;
  border-bottom: solid black 2px;
  /* background-color: #485550; */
}
@media only screen and (min-width: 768px) {
  #nav {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr 2fr 2fr;
    font-size: 20px;
  }
 
}
@media only screen and (min-width: 1020px) {
  #nav {
    grid-template-columns: 1fr 3fr 2fr 2fr 2fr 2fr;
    font-size: 20px;
    margin: 0%;
    /* background-color: #447B66; */
    padding-bottom: 35px;
    /* padding-top: 35px; */
    margin: 0;
    /* padding-left: 9px;  */
    padding-right: 2px;
    min-width: 100%;
  }
 
  .nav-link {
    display: inline-block;
    vertical-align: middle;
    /* transform: perspective(1px) translateZ(0); */
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    font-size: 18px;
    /* color: #447B66; */
    /* padding: 7px; */
  }
  
  .nav-link:hover:before,
  .nav-link:focus:before,
  .nav-link:active:before {
    left: 0;
    right: 0;
  }
}
</style>