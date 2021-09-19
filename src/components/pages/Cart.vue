<template>
  <section id="cart">
        <div class="container">        
            <div class="table-wrapper">            
                <h1 class="title-primary">Korpa</h1>
                <div class="container"><hr></div>      
                
                <table>
                    <tr v-for="item in $store.state.cart" :key="item.id">
                        <td align="center" class="img-wrapper">
                            <img :src="item.image" alt="nema slike" class="img-fluid">
                        </td>
                        <td>
                            <div class="product-info">
                                <h4>{{ item.name }} X {{ item.qty }}</h4>
                                <div v-if="item.size">
                                    <p>{{ item.size }} / {{ item.cm }} cm</p>
                                </div>
                                <span>Quantity: </span>
                                <button @click="$store.commit('decrement', item)" class="mx-1">-</button>
                                <button @click="$store.commit('increment',  item)">+</button>
                                <div v-if="item.addons">
                                    <span v-for="addon in item.addons" :key="addon.id">
                                        {{returnAddonName(addon.addonId)}} / {{ returnAddonValue(addon.optionId).size }} - {{returnAddonValue(addon.optionId).grams }}, 

                                    </span>
                                </div>
                            </div>
                        </td> 
                        <td>
                            <div class="price-info">
                                <h4>    
                                    {{ item.qty }} X
                                    {{ item.price }} RSD
                                </h4>
                                <button @click="$store.commit('removeItem', item)" title="ukloni iz korpe" class="btn btn-danger btn-sm mt-2">X</button>
                            </div>
                        </td>
                    </tr>
                </table>       

                <div class="total">
                    <h4>Ukupno: <span class="primary-color">{{ $store.state.cartSum }}</span> <span class="secondary-color">RSD</span> </h4>
                </div>      
                
                <div class="row mt-5">
                    <div class="col-12 mb-2">
                        <a href="#" class="btn btn-danger btn-block">Plaćanje</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Cart',
    mounted() {
        
    },
    methods: {
        returnAddonName(id) {
            const addons = this.$store.state.addons
            return addons[id].name
        },
        returnAddonValue(id) {
            const addons = this.$store.state.addonOptions
            return addons[id]
        }
    }
}
</script>

<style scoped>
    .product-info button {
        background: #e3342f;
        color: white;
        border: none;
        border-radius: 5px;
    }
</style>