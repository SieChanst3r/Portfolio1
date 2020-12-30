<template>
  <div>
    <div id="footer-container">
      <div class="footer-item">
        <h4>~/ Created by Sie Chan</h4>
      </div>
        <div class="footer-item">
        <span> </span>
        </div >
        <div class="footer-item">
            <h4>~/ Copyright 2020</h4>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
#footer-container {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  height: 12vh;
  width: 100%;
  
  border-top: solid 2px black;
  background-color: #447B66;
}
/* .footer-item {
    
} */

* {
  margin: 0%;
  padding: 0%;
}
</style>