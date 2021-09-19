<template>
    <div class="action-wrapper">
        <img class="img-fluid" :src="actionData.image" alt="">
        <h3>{{ actionData.name }}</h3>                                                  
        <h3 class="text-danger mr-1">Već od {{ actionData.new_price }} RSD</h3>                        
        <p>{{ actionData.description }}</p>        

        <div class="links mb-4">
            <a href="#" class="btn btn-warning mx-2">Dodaj u korpu</a>
        </div>
        
    </div>    
</template>

<script>
export default {
    name: 'Action',
    props: [ 'actionData' ],
}
</script>

<style>

</style>