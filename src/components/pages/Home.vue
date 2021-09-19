<template>
  <div>
    <Showcase />
    
    <div class="space-60"></div>
    <h1 class="title-secondary">Akcije</h1>
    <div class="container"><hr style="background-color: orange; width: 50%;"></div>      
    <div class="space-50"></div>
    <section id="actions">
      <div class="container">
          <div class="row">
              <div class="col-md-6 mb-4">
                <Action :actionData="dailyAction" />
              </div>
              <div class="col-md-6 mb-4">
                <Action :actionData="fixedAction"/>
              </div>
          </div>
      </div>
    </section>

    <div class="space-50"></div>
    <h1 class="title-secondary">
      <router-link to="/pizza">PIZZA</router-link>      
    </h1>
    <div class="container"><hr style="background-color: orange; width: 50%;"></div>      
    <div class="space-50"></div>   
    <section id="products-home">
        <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 text-wrapper sol-sm-12" v-for="item in pizza" :key="item.id">
                <Pizza :pizzaData="item" />
              </div>
            </div>
        </div>
    </section>

    <div class="space-50"></div>
    <h1 class="title-secondary">
      <router-link to="/bbq">Roštilj</router-link>
    </h1>
    <div class="container"><hr style="background-color: orange; width: 50%;"></div>      
    <div class="space-50"></div>   
    <section id="bbq-home">
      <div class="container">
          <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-12" v-for="item in bbq" :key="item.id">
                <Bbq :bbqData="item" />
              </div>
          </div>
      </div>
    </section>

    
    <div class="space-50"></div>
    <h1 class="title-secondary">
      <router-link to="/bbq">Pića</router-link>
    </h1>
    <div class="container"><hr style="background-color: orange; width: 50%;"></div>      
    <div class="space-50"></div>   
    <section id="bbq-home">
      <div class="container">
          <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-12" v-for="item in drinks" :key="item.id">
                <Drink :drinkData="item"/>
              </div>
          </div>
      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios'
import Showcase from './includes/Showcase.vue'
import Action from '../elements/Action.vue'
import Pizza from '../elements/Pizza.vue'
import Bbq from '../elements/Bbq.vue'
import Drink from '../elements/Drink.vue'


export default {
  name: 'Home',
  components: { Showcase, Action, Pizza, Bbq, Drink },
  data() {
    return {
      dailyAction: '',
      fixedAction: '',
      pizza: [],
      bbq: [],
      drinks: [],
    }
  },
  mounted() {
    // console.log('asd')
    // return
    axios.get('http://pizza66api.test/api')
    .then(res => {
      this.dailyAction = res.data.dailyAction
      this.fixedAction = res.data.fixedAction
      this.pizza = res.data.pizza
      this.bbq = res.data.bbq
      this.drinks = res.data.drink
    })
    .catch(err => console.log(err))

    
  }
}
</script>

<style>
  .title-secondary a {
    color: #f29a26;
    text-decoration: none;
  }
</style>