<template>
<div class="menu-container">
<blockquote class="otro-blockquote">
  "for many americans transitioning into adulthood, college was the golden ticket to a well-paying job, and student loans were merely the price of admission. today, over half of all american students have to go into some form of debt, including loans, to fund their education. the average debt burden, as of 2020? $39,351. but what does that cost look like on a national scale? and what would be different, if the government just funded postsecondary education directly?" 
<span>from the <a href="https://taliadev.github.io/student-loan/student/visual#introduction" target="_blank">introduction to the visualization</a> of <a href="https://taliadev.github.io/student-loan/student" target="_blank">student loan debt (as modern triptych)</a></span>
</blockquote>
<br />
  <p>In the spring of 2021, I took a critical media class by <a href="https://atec.utdallas.edu/content/knight-kim/" target="_blank">Dr. Kim Knight</a> called <a href="
https://catalog.utdallas.edu/2020/undergraduate/courses/atcm4326" target="_blank">Mediated Textuality</a>.
Over the course of the semester, we discussed readings on narrativity and the relationships between different types of media, while simultaneously putting theory into action by creating media objects within the context of a chosen dataset.</p>
<br />
<p>My portfolio pulled from the <a href="https://studentaid.gov/data-center/student/portfolio" target="_blank">Federal Student Loan database</a> and consisted of a data visualization, an interactive fiction story written in inklewriter, and mixed media analog art.</p>
<br />
<p>After I finished the final drafts, I decided to hand-code a <a href="https://taliadev.github.io/student-loan/student/" target="_blank">website</a> so I could refine the framing of each object and juxtapose the narrative angles. I wanted to highlight the dimensions of student loan debt by not only showcasing quantitative trends, but also by placing the reader in a targeted second-person narrative and converting monetary cost into its equivalent in blood, sweat, tears, and time.
</p>
<br />
<p>Although this was a class project, the audience I had in mind was someone who didn't come in understanding what the cost of college really meant—someone who might see the sticker tag and need a little more contextualization.</p>
<br />
<p>Like a high school student heading out of state, blissfully unaware of the gravity of decisions they were pressured into making—or maybe a parent pushing their child into a 4-year university, mindset caught in the times where a summer of work could pay for a year of college. (Today, a year's worth of minimum wages might not even pay for five months.)</p>
  
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

.wikipedia-image {
  width: 100%;
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

.otro-blockquote{
  font-size: 1em;
  width: 100%;
  margin: 10px auto;
  font-style: italic;
  color: #555;
  padding: 1.2em 30px 1.2em 25px;
  border-left: 8px solid #858585;
  line-height: 1.25;
  background: #ededed;
}



.otro-blockquote::after{
  content: '';
}

.otro-blockquote span{
  display:block;
  color:#333333;
  font-style: normal;
  margin-top:1em;
}

</style>
