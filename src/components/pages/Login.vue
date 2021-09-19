<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <h1 class="title-primary mt-4">Prijavite se</h1>

          <div class="alert alert-danger m-2 d-none" :class="{ 'd-block': alertMessage}">{{ alertMessage }}</div>

          <hr />
          <div class="card-body">

            <form method="POST" @submit.prevent="loginUser">

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

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-danger btn-block">
                    Prijavi me
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
            email: '',
            password: '',
            alertMessage: ''
        }
    },
    methods: {
        loginUser() {
            axios.post(this.$store.state.backendUrl + '/login', {
                email: this.email,
                password: this.password,
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
                this.alertMessage = 'Email i/ili lozinka nisu dobri. Pokušajte ponovo.'
            })
        }
    }
};
</script>

<style>
</style>