<template>
  <div class="container">
    <div class="row"></div>

    <!-- Flexbox for side-by-side layout -->
    <div class="contact-container">
      <!-- Contact Info Card -->
      <div class="card contact-card text-white" 
           data-aos="fade-right" 
           data-aos-delay="200" 
           data-aos-offset="300">
        <h2 class="display-2 text-center">Contact Info</h2>
        <div class="contact-info">
          <div v-if="contact?.length">
            <p><i class="bi bi-telephone-forward-fill"></i> Contact number: {{ contact[0].phone }}</p>
            <p><i class="fa-solid fa-envelope"></i> Email Address: {{ contact[0].email }}</p>
            <p>
              <a class="icon" href="https://github.com/anushqakandan" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a class="icon" href="https://www.linkedin.com/in/anushqa-kandan-09379a317/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </p>
            <p>
              <iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </p>
          </div>
          <Spinner v-else />
        </div>
      </div>

      <!-- Form -->
      <div class="card form-card text-white" 
           data-aos="fade-left" 
           data-aos-delay="200" 
           data-aos-offset="300">
        <h2 class="display-2 text-center">Let's work together</h2>
        <form action="https://formspree.io/f/myzgydyw" method="POST">
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Name</label>
            <input
              name="name"
              type="name"
              class="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea
              name="message"
              type="text"
              class="form-control message"
              id="exampleInputPassword1"
              required
            ></textarea>
          </div>
          <div class="last-button">
            <button type="submit" class="btn">Submit</button>
            <button type="reset" class="btn">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const contact = computed(() => store.state.contact)

onMounted(() => {
  store.dispatch('fetchContact')
})
</script>

<style scoped>
.display-2{
  margin-top: 1rem;
}
.form-label{
  font-family: "Tiro Devanagari Hindi", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
}
.contact-info{
  font-family: "Tiro Devanagari Hindi", serif;
  font-weight: 400;
  font-style: normal; 
}
.contact-card p {
  font-size: 1.2rem; /* Increase the size of the text inside the contact card */
}
/* Flexbox container for the cards */
.contact-container {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem; /* Add space between cards */
  margin-top: 2rem;
}

/* Contact card and form card styling */
.contact-card {
  flex: 1;
  border: 1px solid #F5CB86;
  background-color: transparent;
  margin-bottom: 1.5rem;
}
.form-card{
  flex: 1;
  background-color: transparent;
  border: 1px solid #F5CB86;
  margin-bottom: 1.5rem;
}

.mb-3 {
  width: 80%; /* Ensure form fields take full width */
  margin: auto;
}

.message {
  height: 15rem;
}

/* Flexbox layout for buttons */
.last-button {
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding-bottom: 1rem;
}

/* Icon styling */
.fa-brands {
  font-size: 2rem;
  padding-right: 1rem;
}

.icon {
  color: white;
}

.btn {
  background-color: transparent;
  border: white 1px solid;
  color: white;
}

.btn:hover {
  transform: scale(1.2);
}

/* Responsive styling for smaller screens */
@media only screen and (max-width: 767px) {
  .contact-container {
    flex-direction: column; /* Stack cards vertically on small screens */
  }
  
  .mb-3 {
    width: 100%;
  }
}
</style>
