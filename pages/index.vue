<template>
<div class="menu-container">
  <p><span class="emphasised">Talia Devanadero</span> (she/they) lives in liminal spaces.</p>
  <br/>
  <p> Their interests include electronic literature,
  conference moderation, data visualization, fandom meta, social justice, and someday wrangling their 7,000+ bookmarks.</p>
  <p>Projects featured here include: a multimedia project centered around American student loan data, a voter education web app, and a bubbly makerspace blog from my sophomore year of high school.</p>
  <br/>


  
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
  columns: 250px 2;
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
