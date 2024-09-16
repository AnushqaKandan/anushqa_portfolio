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
                        <p class="card-text1"> Full name: {{ about[0].name }}</p>
                        <p class="card-text1"> Location: {{ about[0].location }}</p>
                       <p class="card-text1"> Email: {{ about[0].email }}</p>
                      </div>
                </div>
             <div class="about-text">
               <p class="card-text">{{ about[0].message }}</p>
             </div>
            </div>
            <Spinner v-else/>
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


onMounted(() => {
    store.dispatch('fetchAbout')
})

</script>

<style scoped>
.anushqa{
    display: flex;
    gap: 1rem;
}

@media screen and (width < 1057px) {
    .anushqa {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
}
</style>