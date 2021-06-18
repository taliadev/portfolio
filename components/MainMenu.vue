<template>
  <div class="main-menu">
    <nuxt-link to="/" exact>
      <p class="link">Home</p>
    </nuxt-link>
    <nuxt-link to="/about">
      <p class="link">About Me</p>
    </nuxt-link>
    <div style="height: 20px"></div>
    <nuxt-link to="/makerspace">
      <p class="link">Makerspace</p>
    </nuxt-link>
    <a href="https://taliadev.github.io/student-loan/student">
      <p class="link">Student Loans</p>
    </a>
    <nuxt-link to="/voter">
      <p class="link">Voter District App</p>
    </nuxt-link>
    <div style="height: 20px"></div>
    <a href="https://www.github.com/taliadev">
      <p class="link">GitHub</p>
    </a>
    <a href="/portfolio/talia_devanadero.pdf">
      <p class="link">Resume</p>
    </a>
    <div style="height: 150px"></div>
  </div>
</template>
<style>
.main-menu {
  display: inline-block;
  width: 80px;
  text-align: right;
  padding-top: 25px;
}

.main-menu a {
  text-transform: uppercase;
  font-weight: 400;
}

.main-menu a p {
  margin: 2px;
}

.main-menu a.nuxt-link-active p {
  font-weight: 600;
}
</style>
