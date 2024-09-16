<template>
    <div class="container">
      <div class="row">
          <h2 class="display-2">Resume</h2>
      </div>
       
      <div class="row">
        <div class="col">  
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
                  <img src="https://anushqakandan.github.io/All-images/vue/Sigma2.png" alt="resume" class="img-resume3" loading="lazy">
                    <div class="resume-text">
                      <p class="Resume-Title">{{ resume[2].place }}</p>
                      <p class="Resume-Description">{{ resume[2].description }}</p>
                    </div>
                </div>
                <Spinner v-else/>
            </div> 
          </div>
  
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