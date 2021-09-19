<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <h1 class="title-primary mt-4">Registrujte se</h1>

          <div class="alert alert-danger m-2 d-none" :class="{ 'd-block': alertMessage}">{{ alertMessage }}</div>

          <hr />
          <div class="card-body">

            <form method="POST" @submit.prevent="registerUser">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right"
                  >Ime i prezime</label
                >
                <div class="col-md-6">
                  <input
                    type="text"
                    v-model="name"
                    autocomplete="name"
                    autofocus="autofocus"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"
                  >Email</label
                >
                <div class="col-md-6">
                  <input
                    type="email"
                    v-model="email"
                    autocomplete="email"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                  >Lozinka</label
                >
                <div class="col-md-6">
                  <input
                    type="password"
                    v-model="password"
                    autocomplete="new-password"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="password-confirm"
                  class="col-md-4 col-form-label text-md-right"
                  >Potvrdite lozinku</label
                >
                <div class="col-md-6">
                  <input
                    type="password"
                    v-model="password_confirmation"
                    autocomplete="new-password"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-danger btn-block">
                    Registruj me
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            alertMessage: ''
        }
    },
    methods: {
        registerUser() {
            
            axios.post(this.$store.state.backendUrl + '/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(res => {
                // Save to vuex storage
                this.$store.commit('userData', res.data)
                // Save token to localStorage
                localStorage.setItem("token",res.data.token);
                this.alertMessage = ''
                this.$router.push('/')
            })
            .catch(err => {
                console.log(err)
                this.alertMessage = 'Registracija nije uspela. Pokušajte ponovo.'
            })
        }
    }
};
</script>

<style>
</style>