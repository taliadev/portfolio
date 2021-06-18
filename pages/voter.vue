<template>
<div class="menu-container">
  <p>Here is some filler text for the first area. This is a section about the ArcGIS Project.</p>
  <br/>
  <p>Here is the record of tasks</p>
  <br/>
  <div>
    <iframe src='/portfolio/talia_devanadero.pdf' class="pdf-viewer">
      <p>This browser does not support PDF!</p>
    </iframe>
  </div>
  <br/>
  <p>Here is a demonstration of the working program.</p>
  <br/>
  <iframe
    class='video-player'
    src="https://www.youtube-nocookie.com/embed/Y2j4iLSlKQU"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen/>

  
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

.pdf-viewer {
  width: 100%;
  height: 25vw;
}

.video-player {
  width: 100%;
  height: 20vw;
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
