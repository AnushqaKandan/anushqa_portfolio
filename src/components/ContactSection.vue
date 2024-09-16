<template>
  <div class="container">
    <div class="row">
        <h2 class="display-2">Contact Info</h2>
    </div>

    <div class="col">
      <div class=" card Contact text-white">
        <div class="Contact-info">
            <p class="Contact-text">LET'S WORK TOGETHER.</p>
            <div v-if="contact?.length">
              <p><i class="bi bi-telephone-forward-fill"></i> Contact number: {{ contact[0].phone }}</p>
              <p><i class="fa-solid fa-envelope"></i> Email Address: {{ contact[0].email }}</p>
             <p><i class="fa-sharp fa-solid fa-location-dot"></i> Location: {{ contact[0].location }}</p>  
             <p>
                <a class="icon" href=" https://github.com/anushqakandan" target="blank"><i class="fa-brands fa-github"></i></a>
                <a class="icon" href="https://www.linkedin.com/in/anushqa-kandan-09379a317/" target="blank"> <i class="fa-brands fa-linkedin"></i></a>
                                                            
               
            </p>
            </div>
            <Spinner v-else/>
       </div>
       
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
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
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

