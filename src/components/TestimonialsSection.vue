<template>
  <div class="container">
      <div class="row">
          <h2 class="display-2">Testimonials</h2>
      </div>
<div class="row">
 <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
   <div class="carousel-inner">

    <div class="carousel-item active">
    <div class="card text-white Testi-block">
      <div v-if="testimonials?.length" class="testimonial-item">
        <img src="https://anushqakandan.github.io/All-images/Images/Nizaam2.jpg" alt="testi" class="d-block-1" loading="lazy">
          <div class="Testi-text">
            <p class="Testi-Title">{{ testimonials[0].message }}</p>
            <p class="Testi-Description"> - {{ testimonials[0].name }}</p>
          </div>
      </div>
        <Spinner v-else/>
    </div> 
    </div>

    <div class="carousel-item">
    <div class="card text-white Testi-block">
      <div v-if="testimonials?.length" class="testimonial-item">
        <img src="https://anushqakandan.github.io/All-images/Images/Massoodah.jpg" alt="testi" class="d-block-1" loading="lazy">
          <div class="Testi-text">
            <p class="Testi-Title">{{ testimonials[1].message }}</p>
            <p class="Testi-Description"> - {{ testimonials[1].name }}</p>
          </div>
      </div>
        <Spinner v-else/>
    </div>
    </div>

    <div class="carousel-item">
    <div class="card text-white Testi-block">
      <div v-if="testimonials?.length" class="testimonial-item">
        <img src="https://anushqakandan.github.io/All-images/Images/Caleb.jpg" alt="testi" class="d-block-1" loading="lazy">
          <div class="Testi-text">
            <p class="Testi-Title">{{ testimonials[2].message }}</p>
            <p class="Testi-Description"> - {{ testimonials[2].name }}</p>
          </div>
      </div>
        <Spinner v-else/>
    </div>
    </div>

    <div class="carousel-item">
    <div class="card text-white Testi-block">
      <div v-if="testimonials?.length" class="testimonial-item">
        <img src="https://anushqakandan.github.io/All-images/Images/joel3.jpg" alt="testi1" class="d-block-1" loading="lazy">
          <div class="Testi-text">
            <p class="Testi-Title">{{ testimonials[3].message }}</p>
            <p class="Testi-Description"> - {{ testimonials[3].name }}</p>
          </div>
      </div>
        <Spinner v-else/>
    </div>
    </div>

    <div class="carousel-item">
    <div class="card text-white Testi-block">
      <div v-if="testimonials?.length" class="testimonial-item">
        <img src="https://anushqakandan.github.io/All-images/Images/Shakeel.jpg" alt="testi" class="d-block-1" loading="lazy">
          <div class="Testi-text">
            <p class="Testi-Title">{{ testimonials[4].message }}</p>
            <p class="Testi-Description"> - {{ testimonials[4].name }}</p>
          </div>
      </div>
        <Spinner v-else/>
    </div>
    </div>
    
    <div class="carousel-item">
    <div class="card text-white Testi-block">
      <div v-if="testimonials?.length" class="testimonial-item">
        <img src="https://anushqakandan.github.io/All-images/Images/Asheeka1.jpg" alt="testi" class="d-block-1" loading="lazy">
          <div class="Testi-text">
            <p class="Testi-Title">{{ testimonials[5].message }}</p>
            <p class="Testi-Description"> - {{ testimonials[5].name }}</p>
          </div>
      </div>
        <Spinner v-else/>
    </div>
    </div>

    <div class="carousel-item">
    <div class="card text-white Testi-block">
      <div v-if="testimonials?.length" class="testimonial-item">
        <img src="https://anushqakandan.github.io/All-images/Images/Kyle2.jpg" alt="testi" class="d-block-1" loading="lazy">
          <div class="Testi-text">
            <p class="Testi-Title">{{ testimonials[6].message }}</p>
            <p class="Testi-Description"> - {{ testimonials[6].name }}</p>
          </div>
      </div>
        <Spinner v-else/>
    </div>
    </div>
    

    <button class="carousel-control-prev" type="button"
       data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button"
        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
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
const testimonials = computed(() => store.state.testimonials)

onMounted(async () => {
  try {
    await store.dispatch('fetchTestimonials')
  } catch (error) {
    console.error('Failed to fetch testimonials:', error)
  }
})
</script>


