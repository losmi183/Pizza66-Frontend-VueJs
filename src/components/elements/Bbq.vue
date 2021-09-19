<template>
    <div class="product-box">
        
        <div class="image-wrapper" style="cursor: pointer">
            <img :src="bbqData.image" alt="" class="img-fluid">
            <div class="text-wrapper2">
                <p class="title" href="#">{{ bbqData.name }}</p>                                

                <h5 v-if="bbqData.discount" class="mt-2">{{ bbqData.discount }} RSD</h5>   
                <h5 v-else class="mt-2">{{ bbqData.price }} RSD</h5>                                                   
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
    name: 'Bbq',
    props: [ 'bbqData' ],
    methods: {
        addToCart() {

            // console.log(this.bbqData)
            // return

            const item = {
                id: this.bbqData.id,
                name: this.bbqData.name,
                image: this.bbqData.image,
                price:  this.bbqData.price,
                qty: 1
            }

            const value = {
                price: this.bbqData.price,
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