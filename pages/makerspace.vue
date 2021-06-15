<template>
<div class="menu-container">
  <p>What do you do when faced with a pile of old laptops with no power cords?
  The answer, it turns out, is simple: loot them for their displays and make a “<a href="https://liiexplorations.blogspot.com/2017/09/my-new-project-repurposing-display.html" target="_blank">magic mirror</a>”.</p>
  </br>
  <p>I spent the first semester of my sophomore year of high school in a makerspace class doing just that—meticulously disassembling laptops, 3D printing frame brackets, cutting down a one-way mirror, and programming a Raspberry Pi.
  The goal: to create a mirror that would show not only my reflection but also the time, weather, and upcoming Google Calendar events.</p>
  </br>
  <p>Unfortunately, I couldn't just work on one project the entire semester. Especially not while waiting for parts to ship in from China. So,
  I spent my free time <a href="https://liiexplorations.blogspot.com/2017/11/cross-stitch-pillow.html" target="_blank">embroidering</a>, making <a href="https://liiexplorations.blogspot.com/2017/10/origami-sonobe-lamp.html" target="_blank">origami lamps</a>, and <a href="https://liiexplorations.blogspot.com/2017/12/sans-comic-20.html" target="_blank">defacing the Internet</a>:</p>
  </br>
  <img src="~/assets/sans-comic.gif" alt="Animation of rainbow text and shaking on Wikipedia page" title="Wikipedia, defaced."/>
  </br>
  </br>
  <p>All of these projects are playfully framed within the design thinking process on my <a href="https://liiexplorations.blogspot.com/" target="_blank">blog</a>.</p>
  


  
</div>
</template>

<script>
export default {
  layout: 'Frontpage'
};
</script>

<style scoped>
.menu-container {
  display: inline-block;
  width: calc(100% - 130px);
  max-width: 700px;
  columns: 300px 1;
  vertical-align: top;
  padding: 25px 0 25px 50px;
  padding-left: 50px;
  border-left: 1px solid #111;
  margin-left: 50px;
}

.emphasised {
  font-weight: 700;
}


a {
  text-decoration: underline;
  font-weight: 600;
}

@media (max-width: 500px) {
  .menu-container {
    margin-left: 0;
    padding-left: 25px;
    border-left: none;
  }
}
</style>
