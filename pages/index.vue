<template>
<div class="menu-container">
  <p><span class="emphasised">Talia Devanadero</span> (she/they) lives in liminal spaces.</p>
  <br/>
  <p>this webpage does things that i don't want to type out right now lol</p>
  <p>kadsfjksaldfkjhsadlkf</p>
  <br/>
  <p>dasdfksad</p>

  
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
