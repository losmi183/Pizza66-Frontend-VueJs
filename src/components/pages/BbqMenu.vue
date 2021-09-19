<template>
  <div>
    <h1 class="title-secondary">Roštilj</h1>
    <div class="container"><hr style="background-color: orange; width: 50%;"></div>      
    <div class="space-50"></div>   

    <section id="products-shop">
        <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 text-wrapper sol-sm-12" v-for="item in allBbq" :key="item.id">
                <Bbq :bbqData="item" />
              </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Bbq from '../elements/Bbq.vue'

export default {
  name: 'BbqMenu',
  components: { Bbq },
  data() {
    return {
      allBbq: ''
    }
  },
  mounted() {
    axios.get('http://pizza66api.test/api/bbq')
    .then(res => {
      console.log(res.data.data)
      this.allBbq = res.data.data
    })

    // .then(res => this.allBbq = res.data.data)
    .catch(err => console.log(err))
  }
}
</script>

<style>

</style>