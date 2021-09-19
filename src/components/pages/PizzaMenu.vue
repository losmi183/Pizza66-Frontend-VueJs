<template>
  <div>
    <h1 class="title-secondary">PIZZA</h1>
    <div class="container"><hr style="background-color: orange; width: 50%;"></div>      
    <div class="space-50"></div>   

    <section id="products-shop">
        <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 text-wrapper sol-sm-12" v-for="item in allPizza" :key="item.id">
                <Pizza :pizzaData="item" />
              </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Pizza from '../elements/Pizza.vue'

export default {
    name: 'PizzaMenu',
    components: { Pizza },
    data() {
        return {
            allPizza: '',
        }
    },
    mounted() {
        axios.get('http://pizza66api.test/api/pizza')
        .then(res => this.allPizza = res.data.data)
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>