<template>
  <div class="container">
      <div class="row">
          <h2 class="display-2">Projects</h2>
      </div>
      <div class="row" data-aos="fade-up">
      <div class="scrollable"> 
          <div class="card text-white Proj-block">
            <div id="details" class="card-content">
                <div v-if="projects?.length" class="proj-item">
                      <p class="Project-Title">{{ projects[0].name }}</p>   
                  <img src="https://anushqakandan.github.io/All-images/vue/Rangeela.png" alt="project" class="img-fluid" loading="lazy">
                  <div class="row flex-column flex-md-row">
                    <p class="Project-Description">{{ projects[0].description }}</p>
                <div class="col">
                   <a href="https://github.com/AnushqaKandan/Rangeela-Royalty.git" class="card-link" target="blank"><i class="bi bi-github"></i></a>
                   <a href="https://rangeela-royalty.vercel.app/" class="card-link" target="blank"><i class="bi bi-heart-pulse"></i></a>
               </div>
                  </div>
                </div>
                <Spinner v-else/>
            </div> 
        </div>
        <div class="card text-white Proj-block">
            <div id="details" class="card-content">
                <div v-if="projects?.length" class="proj-item">
                      <p class="Project-Title">{{ projects[1].name }}</p>   
                  <img src="https://anushqakandan.github.io/All-images/vue/Capstone.png" alt="project" class="img-fluid" loading="lazy">
                  <div class="row flex-column flex-md-row">
                    <p class="Project-Description">{{ projects[1].description }}</p>
                <div class="col">
                    <a href="https://github.com/AnushqaKandan/Capstone.git" class="card-link" target="blank"><i class="bi bi-github"></i></a>
                    <a href="https://capstone-204f7.web.app" class="card-link" target="blank"><i class="bi bi-heart-pulse"></i></a>
               </div>
                    </div>
                  
                </div>
                <Spinner v-else/>
            </div> 
        </div>
        <div class="card text-white Proj-block">
            <div id="details" class="card-content">
                <div v-if="projects?.length" class="proj-item">
                      <p class="Project-Title">{{ projects[2].name }}</p>   
                  <img src="https://anushqakandan.github.io/All-images/vue/Node.png" alt="project" class="img-fluid" loading="lazy">
                  <div class="row flex-column flex-md-row">
                    <p class="Project-Description">{{ projects[2].description }}</p>
                <div class="col">
                    <a href="https://github.com/AnushqaKandan/node_eomp.git" class="card-link" target="blank"><i class="bi bi-github"></i></a>
                    <a href="https://node-eomp-4d23a.firebaseapp.com/" class="card-link" target="blank"><i class="bi bi-heart-pulse"></i></a>
               </div>
                    </div>
                  
                </div>
                <Spinner v-else/>
            </div> 
        </div>
        <div class="card text-white Proj-block">
            <div id="details" class="card-content">
                <div v-if="projects?.length" class="proj-item">
                      <p class="Project-Title">{{ projects[3].name }}</p>   
                  <img src="https://anushqakandan.github.io/All-images/vue/Calculator.png" alt="project" class="img-fluid" loading="lazy">
                  <div class="row flex-column flex-md-row">
                    <p class="Project-Description">{{ projects[3].description }}</p>
                <div class="col">
                    <a href="https://github.com/AnushqaKandan/calculator.git" class="card-link" target="blank"><i class="bi bi-github"></i></a>
                    <a href="https://calculator-anushqas-projects.vercel.app/" class="card-link" target="blank"><i class="bi bi-heart-pulse"></i></a>
               </div>
                    </div>
                 
                </div>
                <Spinner v-else/>
            </div> 
        </div>
        <div class="card text-white Proj-block">
            <div id="details" class="card-content">
                <div v-if="projects?.length" class="proj-item">
                      <p class="Project-Title">{{ projects[5].name }}</p>   
                  <img src="https://anushqakandan.github.io/All-images/vue/ToDo.png" alt="project" class="img-fluid" loading="lazy">
                  <div class="row flex-column flex-md-row">
                    <p class="Project-Description">{{ projects[5].description }}</p>
                <div class="col">
                   <a href="https://github.com/AnushqaKandan/To-do-list.git" class="card-link" target="blank"><i class="bi bi-github"></i></a>
                   <a href="https://to-do-list-8nsop4h58-anushqas-projects.vercel.app/" class="card-link" target="blank"><i class="bi bi-heart-pulse"></i></a>
               </div>
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
  const projects = computed(() => store.state.projects)
  
  
  onMounted(() => {
      store.dispatch('fetchProjects')
  })
</script>

<style>
.Project-Title{
    font-family: "Tiro Devanagari Hindi", serif;
    font-size: 1.5rem;
}
</style>