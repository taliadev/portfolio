<template>
<div class="menu-container">
<blockquote class="otro-blockquote">
  for many americans transitioning into adulthood, college was the golden ticket to a well-paying job, and student loans were merely the price of admission. today, over half of all american students have to go into some form of debt, including loans, to fund their education. the average debt burden, as of 2020? $39,351. but what does that cost look like on a national scale? and what would be different, if the government just funded postsecondary education directly? 
<span>from the <a href="https://taliadev.github.io/student-loan/student/visual#introduction" target="_blank">introduction to the visualization</a> of "student loan debt (as modern triptych)"</span>
</blockquote>
  <p>in the spring of 2021, i took a critical media (?) class by Dr. Kim Knight called mediated textuality (gonna link to the utd description)
https://catalog.utdallas.edu/2020/undergraduate/courses/atcm4326
this class explored the relationships between different types of media and narrativity, and we were tasked with (executing) these concepts within the context of a chosen dataset. i chose to pull from the fafsa student loan database (link)
our final project involved a short paper and a portfolio of three different media objects; for me, this consisted of a data visualization, an interactive fiction story written in inklewriter and ported to ink, and analog objects
after i finished the final drafts, i decided to frame them all in a website so i could juxtapose the tonse of them all together
this of course, was a lot of work, but hey, i get to post it now and it looks pretty and i did all the website design by hand, no frameworks
the creation was bittersweet
there was a lot drawn on my own and other people's experiences
though i created it for a specific class, my end audience that i had in mind was someone who didn't understand what the monetary and energy and labor costs of college really meant
someone who might see the sticker tag and need a little more contextualization
a high school student heading out of state, blissfully unaware of the gravity of the decisions they are tasked with making, or maybe a parent pushing their child into a 4 year university, unknowingly caught in the times where a summer of work could pay for a semester, a year of college (when today a year's min wages might not even pay for a single semester)
my goal was for the three different media objects to highlight different things about a single dataset - conversion, narrative, exponential massive growth
look at trends and put yourself the reader in their shoes and convert the costs of something that society demands into blood sweat tears hunger and time
and then i also wanted to leverage the digital format
which is why i put so much work into framing for the website
it's solemn and bittersweet but it's also a nod of respect to all of those who are soldiering through in spite of the near dystopian state of things</p>

  


  
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
