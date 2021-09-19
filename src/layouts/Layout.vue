<template>
  <div>
    <div id="fixed">
      <AuthNav />
      <Navbar />
    </div>

    <div class="space-225"></div>

    <router-view/>

    <Informations />
    <Footer />

  </div>
</template>

<script>
import AuthNav from '../components/partials/AuthNav.vue'
import Navbar from '../components/partials/Navbar.vue'
import Informations from '../components/partials/Informations.vue'
import Footer from '../components/partials/Footer.vue'

export default {
  name: 'Layout',
  components: { AuthNav, Navbar, Footer, Informations}
}
</script>

<style>


</style>