<template>
  <div class="container">
    <div class="row">
        <h2 class="display-2">About</h2>
    </div>
    
    <div class="card cardAbout">
     <div class="col"> 
        <div id="details">
            <div v-if="about?.length">
                <div class="anushqa">
                  <img src="https://anushqakandan.github.io/All-images/Images/Anushqa04.jpg " alt="about" class="img-about" loading="lazy">
                      <div class="about-info"> 
                        <p class="card-text">{{ about[0].message }}</p>
                      </div>
                </div>
       <div class="about-text">
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
            <img src="https://anushqakandan.github.io/All-images/vue/Leadership1.png " alt="skills" class="img-skills" loading="lazy">
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
            <img src="https://anushqakandan.github.io/All-images/vue/Communication.png " alt="skills" class="img-skills" loading="lazy">
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
            <img src="https://anushqakandan.github.io/All-images/vue/Practical1.png " alt="skills" class="img-skills" loading="lazy">
          <div class="card-body">
            <p class="Skills-Name">{{ skills[7].name }}</p>
            <p class="Skills-Level">{{ skills[7].level }}</p>
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
    color: white;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Tiro Devanagari Hindi", serif;
    margin-top: 1.5rem;

}
.cardAbout { 
    background-color: transparent;
    width: 100%;
    padding: 1rem;
    border:  rgb(248, 165, 179);
    box-shadow: 0 0 10px white;
    transition: box-shadow 0.3s ease-in-out;
}

.cardAbout:hover {
    box-shadow: 0 0 20px 10px rgb(248, 165, 179);
}

img[alt='about'] {
    width: 20rem;
}

/* About text */
.card-text {
    text-align: left;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.cardSkills {
    margin-top: 1rem;
    width: 70%;
    border: black 1px solid;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 12rem; /* Reduced height */
    overflow: hidden;
}

img[alt='skills'] {
    margin-bottom: 0.5rem; /* Adjusted margin */
    height: 6rem; /* Adjusted height */
}

img[alt='skills1'], img[alt='skills2'] {
    height: 6rem; /* Adjusted height */
}

.card-body {
    background-color: #935656;
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
