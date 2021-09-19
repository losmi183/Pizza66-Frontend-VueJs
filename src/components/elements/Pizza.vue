<template>    
    <div class="product-box">            
        <div class="image-wrapper">

            <router-link :to="productRoute"> 
                <img :src="pizzaData.image" alt="" class="img-fluid">
            </router-link>

            <div class="text-wrapper">
                <a class="title" href="{{ pizzaData.slug }}">{{ pizzaData.name }}</a>
                <p class="info">{{ pizzaData.content }}</p>
            </div>
            
            <div v-if="pizzaData.badge" class="info-addon">{{ pizzaData.badge }}</div>
        </div>

        <select class="form-control select-size" name="price" v-model="selectedPrice">
            <option 
                v-for="price in pizzaData.prices" 
                :key="price.id" 
                :value="price.id">
                {{ price.size }} {{ price.cm }} cm - {{ price.rsd }} RSD
            </option>
        </select>    
        
        <div class="order-wrapper">
            <button @click="add" class="btn btn-danger btn-block"><i class="fas fa-shopping-cart mr-2" aria-hidden="true"></i>Dodaj u korpu</button>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'Pizza',
    props: ['pizzaData'],
    data() {
        return {
            selectedPrice: this.pizzaData.prices[0].id
        }
    },
    computed: {
        productRoute() {
            return '/product/' + this.pizzaData.slug
        },
        priceElement() {
            return this.pizzaData.prices.filter(price => price.id == this.selectedPrice)[0]
        }
    },
    methods: {
        add() {
            const item = {
                id: this.pizzaData.id,
                name: this.pizzaData.name,
                image: this.pizzaData.image,
                priceId:  this.priceElement.id,
                price: this.priceElement.rsd,
                size: this.priceElement.size,
                cm: this.priceElement.cm,
                qty: 1
            }

            const value = {
                price: this.priceElement.rsd,
                qty: 1
            }

            this.$store.commit('addToCart', item)
            this.$store.commit('addToSum', value)
            this.$store.commit('showAlert')
        }
    }
}
</script>

<style>

</style>