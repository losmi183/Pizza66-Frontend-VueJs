<template>
      <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="wrapper">
                        <div class="logo-wrapper">
                            <a href="/"><img src="/img/logo.png" alt="pizza 66 logo" class="img-fluid"></a>                            
                        </div>
                        <div class="user-wrapper nowrap">
                            
                            <div v-if="$store.state.loggedUser == 'guest'">
                                <router-link to="login">
                                    <a href="#" class="a-secondary nowrap"><i class="fas fa-sign-in-alt mr-1 enlarge-mobile" aria-hidden="true"></i><span class="hide-mobile">prijava</span></a>
                                </router-link>
                            
                                <router-link to="/register">
                                    <a href="#" class="a-secondary nowrap"><i class="fas fa-user-plus mr-1 enlarge-mobile"></i><span class="hide-mobile">registracija</span></a>
                                </router-link>
                            </div>

                            <a href="#" @click="logout" v-if="$store.state.loggedUser != 'guest'" class="a-secondary nowrap"><i class="fas fa-sign-out-alt mr-1 enlarge-mobile" aria-hidden="true"></i><span class="hide-mobile">odjavi me</span></a>

    
                            <div class="d-none">
                                <a href="#" class="a-secondary nowrap"><i class="fas fa-user-cog mr-1 enlarge-mobile"></i><span class="hide-mobile">Admin</span></a>
                                <a href="#" class="a-secondary nowrap"><i class="fas fa-user mr-1 enlarge-mobile" aria-hidden="true"></i><span class="hide-mobile">Moj nalog</span></a>                                        
                                <a class="a-secondary nowrap" href="#">
                                    <i class="fas fa-sign-out-alt mr-1 enlarge-mobile"></i><span class="hide-mobile">Odjava</span>
                                </a>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </header>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AuthNav',
    methods: {
        logout() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            axios.post('http://pizza66api.test/api/logout')
            .then(res => {
                console.log(res)
                localStorage.removeItem('token')
                this.$store.commit('userData', 'guest')
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>