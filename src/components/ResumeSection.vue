<template>
  <div class="container">
      <!-- <div class="row">
          <h2 class="display-2">Education & Work Experience</h2>
      </div> -->
      
      <div class="row">
          <!-- Education Section -->
          <div class="col-md-6">
              <h2 class="section-title display-2">Education</h2>
              <div class="card text-white cardResume">
                  <div id="details" class="card-content">
                      <div v-if="resume?.length" class="resume-item">
                          <img src="https://anushqakandan.github.io/All-images/vue/LifeChoices.png" alt="resume" class="img-resume4" loading="lazy">
                          <div class="resume-text">
                              <p class="Resume-Title">{{ resume[3].place }}</p>
                              <p class="Resume-Description">{{ resume[3].description }}</p>
                          </div>
                      </div>
                      <Spinner v-else/>
                  </div>
              </div>

              <div class="card text-white cardResume">
                  <div id="details" class="card-content">
                      <div v-if="resume?.length" class="resume-item">
                          <img src="https://anushqakandan.github.io/All-images/vue/UWC1.png" alt="resume2" class="img-resume2" loading="lazy">
                          <div class="resume-text">
                              <p class="Resume-Title">{{ resume[1].place }}</p>
                              <p class="Resume-Description">{{ resume[1].description }}</p>
                          </div>
                      </div>
                      <Spinner v-else/>
                  </div>
              </div>

              <div class="card text-white cardResume">
                  <div id="details" class="card-content">
                      <div v-if="resume?.length" class="resume-item">
                          <img src="https://anushqakandan.github.io/All-images/vue/SpineRoad5.png" alt="resume1" class="img-resume1" loading="lazy">
                          <div class="resume-text">
                              <p class="Resume-Title">{{ resume[0].place }}</p>
                              <p class="Resume-Description">{{ resume[0].description }}</p>
                          </div>
                      </div>
                      <Spinner v-else/>
                  </div>
              </div>
          </div>
          
          <!-- Work Experience Section -->
          <div class="col-md-6">
              <h2 class="section-title display-2">Experience</h2>
              <div class="card text-white cardResume">
                  <div id="details" class="card-content">
                      <div v-if="resume?.length" class="resume-item">
                          <img src="https://anushqakandan.github.io/All-images/vue/Sigma2.png" alt="resume3" class="img-resume3" loading="lazy">
                          <div class="resume-text">
                              <p class="Resume-Title">{{ resume[2].place }}</p>
                              <p class="Resume-Description">{{ resume[2].description }}</p>
                          </div>
                      </div>
                      <Spinner v-else/>
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
const resume = computed(() => store.state.resume)

onMounted(() => {
  store.dispatch('fetchResume')
})
</script>

<style scoped>
/* Resume */
.cardResume {
  background-color: #03346E;
  margin-top: 1rem;
  border: #C4F0C5 2px solid;
}
img {
  width: 12rem;
  height: 10rem;
  object-fit: cover;
}

.resume-item {
  display: flex;
  align-items: flex-start;
}
.Resume-Title {
  font-size: 1rem;
  font-weight: 500;
}

.resume-text {
  margin-left: 1rem;
  font-family: "Tiro Devanagari Hindi", serif;
  font-weight: 400;
  font-style: normal;
}

.card-content {
  padding: 0.5rem;
}

/* Section Titles */
.section-title {
  text-align: center;
  margin-block: 1rem;
}

/* Responsiveness */
@media screen and (max-width: 768px) {
  .cardResume {
      margin-top: 1rem;
  }

  img {
      width: 10rem;
      height: 8rem;
      margin: auto;
  }

  .resume-item {
      display: flex;
      align-items: center;
  }

  .resume-text {
      margin-left: 0rem;
  }

  .card-content {
      padding: 0.5rem;
  }

  .resume-item {
      flex-direction: column;
      align-items: flex-start;
  }

  .resume-text {
      margin-left: 0;
      margin-top: 1rem;
  }
}
</style>
