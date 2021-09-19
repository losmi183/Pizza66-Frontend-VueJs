<template>
      <div class="product-box">
        
        <div class="image-wrapper" style="cursor: pointer">
            <img :src="drinkData.image" alt="" class="img-fluid">
            <div class="text-wrapper2">
                <p class="title" href="#">{{ drinkData.name }}</p>                                

                <h5 v-if="drinkData.discount" class="mt-2">{{ drinkData.discount }} RSD</h5>   
                <h5 v-else class="mt-2">{{ drinkData.price }} RSD</h5>                                                   
            </div>
            
            <!-- @if ($product->badge)
                <div class="info-addon">{{$product->badge}}</div>
            @endif -->
        </div>           
        
        <div class="order-wrapper">
            <button @click="addToCart" class="btn btn-danger btn-block"><i class="fas fa-shopping-cart mr-2" aria-hidden="true"></i>Dodaj u korpu</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Drink',
    props: ['drinkData'],
    methods: {
        addToCart() {

            // console.log(this.drinkData)
            // return

            const item = {
                id: this.drinkData.id,
                name: this.drinkData.name,
                image: this.drinkData.image,
                price:  this.drinkData.price,
                qty: 1
            }

            const value = {
                price: this.drinkData.price,
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