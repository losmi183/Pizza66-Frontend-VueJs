<template>
      <nav id="navbar">
        <div class="container">
            <div class="wrapper">

                <div class="left hide-tablet">
                    <a href="tel:0616675241"><i class="fas fa-mobile-alt"></i><span class="hide-mobile">0616675241</span></a>
                </div>

                <div class="center">
                    <ul>
                        <div class="icon-wrapper">
                            <router-link to="/"><img src="/img/menu-icon.png" alt="pizza 66 logo"></router-link> |
                        </div>
                        <li :class=" this.$route.fullPath == '/pizza' ? 'secondary' : 'primary' "><router-link to="/pizza">Pizza</router-link></li>
                        <li :class=" this.$route.fullPath == '/bbq' ? 'secondary' : 'primary' "><router-link to="/bbq">Roštilj</router-link></li>
                        <li :class=" this.$route.fullPath == '/about' ? 'secondary' : 'primary' "><router-link to="/about">O nama</router-link></li>
                    </ul>
                </div>
                
                <div class="right">
                    <router-link class="a-white nowrap" to="/cart"><i class="fas fa-shopping-cart" aria-hidden="true"></i> 
                        <span class="hide-mobile">Korpa</span>
                        <div class="count">{{ $store.getters.itemsInCart }}</div>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
    <div class="container py-1">
        <div class="message-wrapper">
            <div class="alert-flash" :class="[ this.$store.state.alertHide ? 'd-none' : 'd-inline-block' ]">
                Proizvod je dodat u korpu
                <i class="fas fa-check-square"></i>
            </div>
        </div>
    </div>

</template>

<script>
export default {
 
}
</script>

<style scoped>
    a {
        color: white;
    }
    .alert-flash {
        display: inline-block;
        width: auto;
        position: absolute;
        right: 0;
    }
</style>