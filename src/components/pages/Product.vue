<template>
    <section id="product" class="text-left">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="image-wrapper">
                        <img src="/img/products/madjarica.png" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="space-50"></div>
                    <div class="product-info">                        

                            <h1 class="product-title text-left">{{ product.name}}</h1>
                            <p class="product-content">{{ product.content }}</p> 

                            <h4 class="addons-*title">Veličina</h4> 
                            <select class="form-control select-size" name="price" v-model="size">
                                <option 
                                    v-for="price in product.prices" 
                                    :key="price.id"
                                    :value="price.id">{{ price.size }} - {{ price.cm }} cm - {{ price.rsd }} RSD
                                </option>
                            </select>    


                            <h4 class="addons-*title">Količina</h4> 

                            <div class="increment-wrapper" style="width: 100px">
                                <span @click="minus" class="prev">-</span>
                                <input name="qty" class="value" type="number" v-model="quantity">
                                <span @click="plus" class="next">+</span>
                            </div>

                            <h4 class="addons-*title">Dodaci</h4>  
                            <button @click="cancelOptions">Poništi izabrano</button>

                            <div class="product-options mt-4">                    
                                <div id="options">

                                    <Option 
                                        v-for="addon in addons" 
                                        :key="addon.id" 
                                        :addon="addon"
                                        @optionSelected="optionSelected"
                                    />
                                    
                                    
                                </div> 
                            </div>   

                            <button @click="addToCart" class="btn btn-danger btn-block mt-3">Dodaj u korpu</button>  
        
                    </div> 
                </div>
            </div>
        </div> 
    </section>
</template>

<script>
import axios from 'axios'
import Option from './includes/Option.vue'

export default {
    name: 'Product',
    components: { Option },
    data() {
        return {
            slug: this.$route.params.slug,
            product: '',
            addons: '',
            size: '',
            quantity: '1',
            selectedAddons: []
        }
    },
    mounted() {
        axios.get('http://pizza66api.test/api/product/' + this.slug)
        .then(res => {
            this.product = res.data.product
            this.addons = res.data.addons
            this.size = this.product.prices[0].id
            // console.log(this.product.prices.filter(price => price.id == this.size)[0])
        })
        .catch(err => console.log(err))
        // Call action for all addons and options
        this.$store.dispatch('getAddonOptions')
        this.$store.dispatch('getAddons')
    },
    computed: {
        priceElement() {
            return this.product.prices.filter(price => price.id == this.size)[0]
        }
    },
    methods: {
        optionSelected(optionValues) {
            // console.log(optionValues)
            // return
            this.selectedAddons.push(optionValues)
            // console.log(this.selectedAddons)
        },
        minus() {
            if(this.quantity > 1) {
                this.quantity--
            } else {
                alert('Minimalna količina je 1')
            }
        },
        plus() {
            this.quantity++
        },
        cancelOptions() {
            this.selectedAddons = [];
        },
        addToCart() {

            // Price of addons
            let addonsSum = 0
            if(this.selectedAddons) {
                this.selectedAddons.forEach(addon => {
                    // console.log(addon.optionId)
                    // console.log(this.$store.state.addonOptions)
                    addonsSum += parseInt(this.$store.state.addonOptions[addon.optionId-1].price)
                }) 
            }

            const item = {
                id: this.product.id,
                name: this.product.name,
                image: this.product.image,
                priceId:  this.priceElement.id,
                price: (this.priceElement.rsd + addonsSum),
                size: this.priceElement.size,
                cm: this.priceElement.cm,
                addons: this.selectedAddons,
                qty: this.quantity
            }
            
            const value = {
                price: (this.priceElement.rsd + addonsSum),
                qty: this.quantity
            }

            this.$store.commit('addToCart', item)
            this.$store.commit('addToSum', value)
            this.$store.commit('showAlert')
            this.$router.push('/cart')
        }
    }
}
</script>

<style>

</style>