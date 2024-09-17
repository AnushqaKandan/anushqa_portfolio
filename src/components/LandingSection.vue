<template>
    <div class="container" id="home">
      <div class="row flex-column flex-md-row">
       <div class="col image-1">
          <img src="https://anushqakandan.github.io/All-images/Images/AnushiPro3.JPG " alt="profile" class="img-thumbnail border-5" loading="lazy">
       </div>
  
       <div class="col"> 
          <div id="details">
             <h1 class="lead">Anushqa Kandan</h1>
              <p v-if="title" class="slogan">
                 I am a
                <span>{{ title }}</span>
              </p>
              <Spinner v-else/>
          </div> 
       </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import Spinner from './Spinner.vue'

const store = useStore()
const defaultTitle = ref('Full-Stack Web Developer') // Original title to type out
const title = ref('') 
const typingSpeed = 130
const pauseBetweenLoops = 500 

// Typing effect function
function typeOutTitle() {
  let charIndex = 0

  function type() {
    if (charIndex < defaultTitle.value.length) {
      title.value += defaultTitle.value.charAt(charIndex)
      charIndex++
      setTimeout(type, typingSpeed)
    } else {
      
      setTimeout(() => {
        title.value = ''
        charIndex = 0
        type() 
      }, pauseBetweenLoops)
    }
  }

  type() 
}

onMounted(() => {
  store.dispatch('fetchJobTitle') 
  typeOutTitle() 
})
</script>

<style scoped>
.container{
    margin-top: 1rem;
    margin-bottom: 1rem;
}


</style>