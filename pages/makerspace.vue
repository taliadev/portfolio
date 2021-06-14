<template>
<div class="menu-container">
  <p>What do you do when faced with a pile of old laptops with no power cords?
  The answer, it turns out, is simple: loot them for their displays and make a “magic mirror”.
  I spent the first semester of my high school sophomore year in a makerspace class doing just that—meticulously disassembling laptops, 3D printing frame brackets, cutting down a one-way mirror, and programming a Raspberry Pi.
  The goal: to create a mirror that would show not only my reflection but also the time, weather, and upcoming Google Calendar events.</p>
  </br>
  <p>Unfortunately, I couldn't just work on one project the entire semester. Especially not while waiting for parts to ship in from China. So,
  I spent my free time embroidering, making origami lamps, and making the Internet nigh-illegible.</p>
  </br>
  <p>All of these projects are wittily framed with the design thinking process on my <span class="emphasised">blog</span>.</p>



  
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

@media (max-width: 500px) {
  .menu-container {
    margin-left: 0;
    padding-left: 25px;
    border-left: none;
  }
}
</style>
