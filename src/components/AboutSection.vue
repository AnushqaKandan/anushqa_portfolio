<template>
  <div class="container">
    <div class="row">
        <h2 class="display-2">About</h2>
    </div>
    
    <div data-aos="fade-up">
     <div class="col"> 
        <div id="details">
            <div v-if="about?.length">
                <div class="anushqa">
                      <div class="about-info"> 
                        <p class="card-text">{{ about[0].message }}</p>
                      </div>
                </div>
       <div class="about-text">
        <div data-aos="fade-up">
        <h2 class="display-3">Skills</h2>
      <div class="skills-grid"> 
     <div class="card text-white cardSkills">
      <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/HTML.png " alt="skills" class="img-skills" loading="lazy">
         <div class="card-body">
            <p class="Skills-Name">{{ skills[0].name }}</p>
            <p class="Skills-Level">{{ skills[0].level }}</p>
          </div>
        </div>
        <Spinner v-else/>
     </div> 
    </div>
    <div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/CSS.png " alt="skills" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[1].name }}</p>
            <p class="Skills-Level">{{ skills[1].level }}</p>
           </div>
        </div>
        <Spinner v-else/>
     </div> 
    </div>
    <div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/Bootstrap.png " alt="skills" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[2].name }}</p>
            <p class="Skills-Level">{{ skills[2].level }}</p>
          </div>
        </div>
        <Spinner v-else/>
     </div> 
    </div>

    <div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/Javascript3.png" alt="skills2" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[3].name }}</p>
            <p class="Skills-Level">{{ skills[3].level }}</p>
          </div>
        </div>
        <Spinner v-else/>
     </div> 
    </div>

    <div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/Vue1.webp" alt="skills1" class="img-skills" loading="lazy">
            <div class="card-body">
            <p class="Skills-Name">{{ skills[4].name }}</p>
            <p class="Skills-Level">{{ skills[4].level }}</p>
        </div>
        </div>
        <Spinner v-else/>
     </div> 
    </div>
<div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/nodejs.png" alt="skills" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[5].name }}</p>
            <p class="Skills-Level">{{ skills[5].level }}</p>
          </div>
        </div>
        <Spinner v-else/>
     </div> 
    </div>
    <div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/mysql2.png" alt="skills" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[6].name }}</p>
            <p class="Skills-Level">{{ skills[6].level }}</p>
          </div>
        </div>
        <Spinner v-else/>
     </div> 
    </div>

    <div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/Leadership1.png " alt="skills" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[7].name }}</p>
            <p class="Skills-Level">{{ skills[7].level }}</p>
          </div>
      </div>
        <Spinner v-else/>
     </div> 
    </div>

    <div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/Communication.png " alt="skills" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[8].name }}</p>
            <p class="Skills-Level">{{ skills[8].level }}</p>
          </div>
        </div>
        <Spinner v-else/>
     </div> 
             </div>
             <div class="card text-white cardSkills">
     <div id="details">
        <div v-if="skills?.length">
            <img src="https://anushqakandan.github.io/All-images/vue/Practical1.png " alt="skills" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[9].name }}</p>
            <p class="Skills-Level">{{ skills[9].level }}</p>
          </div>
        </div>
        <Spinner v-else/>
     </div> 
             </div>
            </div>
          </div>
        </div> 
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const about = computed(() => store.state.about)
const skills = computed(() => store.state.skills)
onMounted(() => {
    store.dispatch('fetchAbout')
    store.dispatch('fetchSkills')
})

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&display=swap');
.display-3{
    color: #F5CB86;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Tiro Devanagari Hindi", serif;
    margin-top: 3rem;

}
.img-about{
    width: 20rem;
    height: 20rem;
    border-radius: 20%;
}
.about-text{
  margin-bottom: 1rem;
}
.cardAbout { 
    background-color: transparent;
}

img[alt='about'] {
    width: 20rem;
}

/* About text */
.card-text {
  font-family: "Tiro Devanagari Hindi", serif;
  font-weight: 400;
  font-style: normal;
    text-align: center;
    color: var(--secondary);
    font-size: 1.5rem;
    margin-top: 3rem;
}

.card-text1 {
    color: var(--secondary);
    font-size: 1.5rem;

}

.about-info {
    margin-top: 2rem;
}

/* Responsive Landing+About */
@media screen and (max-width: 768px) {
    .cardAbout {
        width: 100%;
        margin-left: 0rem;
    }
    .display-2 {
        font-size: 2rem;
    }
    .card-text, .card-text1 {
        font-size: 1rem;
    }
    img[alt='about'] {
        width: 90%;
    }
}

.anushqa {
    display: flex;
    gap: 1rem;
}
.about-info{
 margin-top: -2rem;

}
@media screen and (width < 1057px) {
    .anushqa {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
}

/* Skills Section */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Display 5 skills in a row */
  gap: 1rem;
}

.cardSkills {
  margin-top: 1rem;
  border: black 1px solid;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 12rem; /* Maintain height */
  overflow: hidden;
  width: 100%; /* Ensure full width of grid column */
}




img[alt='skills'] {
    margin-bottom: 0.5rem; /* Adjusted margin */
    height: 6rem; /* Adjusted height */
}

img[alt='skills1'], img[alt='skills2'] {
    height: 6rem; /* Adjusted height */
}

.card-body {
  font-weight: bold;
    font-family: "Tiro Devanagari Hindi", serif;
    font-weight: 400;
    background-color:#03346E;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    height: 5rem; /* Reduced height */
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.skills-grid {
    gap: 0.5rem; /* Reduced gap between cards */
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
    .cardSkills {
        height: 10rem; /* Further reduced height for smaller screens */
    }
    img[alt='skills'], img[alt='skills1'], img[alt='skills2'] {
        height: 5rem; /* Adjusted for smaller screens */
    }
}


</style>
