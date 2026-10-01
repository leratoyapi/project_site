<template>

  <div class="contact-page">
    <main>

        <section class="north-star-viewport">

            <h1 class="north-star">
              My North Star
            </h1>

            <p class="quote-block">
              "Not knowing where you are going is exactly where discovery begins"
            </p>

        </section>

        <section class="contact-viewport">

            <div class="contact-container">
                
                <div class="explore-form">

                    <h2>
                      Let's explore together
                    </h2>

                    <p class="explore-info">
                      Open to internships, junior developer roles, and conversations about code, creativity and discovery.
                    </p>

                    <div class="contact-links">

                        <a href="#" target="_blank">
                          <img src="../components/icons/github.png" alt="GitHub"> 
                          GitHub Profile
                        </a>

                        <a href="#" target="_blank">
                          <img src="../components/icons/linkedin.png" alt="LinkedIn"> 
                          LinkedIn Profile
                        </a>

                        <a href="mailto:leratoyapi482@gmail.com">
                          <img src="../components/icons/email.png" alt="Email"> leratoyapi482@gmail.com
                        </a>

                    </div>
                </div>

                <div class="contact-form">

                    <h2>
                      Send a Message
                    </h2>

                    <form @submit.prevent="submitForm">

                        <div class="form-group">

                            <label for="name">
                              Name
                            </label>

                            <input type="text" id="name" v-model="form.name" placeholder="Your name" required>
                        </div>

                        <div class="form-group">

                            <label for="email">
                              Email
                            </label>

                            <input type="email" id="email" v-model="form.email" placeholder="you@example" required>

                        </div>

                        <div class="form-group">

                            <label for="message">
                              Message
                            </label>

                            <textarea id="message" v-model="form.message" placeholder="Tell me about your project..." required></textarea>

                        </div>

                        <div>
                            <button type="submit" class="glow-button">
                              Send Message
                            </button>

                        </div>

                    </form>
                    <p v-if="submitted" class="success-message">
                      Thank you! Your message has been sent.
                    </p>
                </div>

            </div>
        </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    submitForm() {
      
      // a success message.
      console.log('Form Submitted:', this.form);
      this.submitted = true;
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
      
      setTimeout(() => {
        this.submitted = false;
      }, 
      5000);
    }
  }
}
</script>

<style scoped>
.success-message {
  color: #B39DDB;
  margin-top: 15px;
  font-weight: bold;
}
</style>