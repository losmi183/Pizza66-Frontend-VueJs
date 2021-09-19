<template>
    <div class="op">
        <div @click="visible = !visible" class="option-title" data-toggle="collapse" data-target="#collapse{{$loop->iteration}}" aria-expanded="true" aria-controls="collapse{{$loop->iteration}}">
            <h5>{{ addon.name }}</h5>
            <i class="fas fa-angle-down"></i>
        </div>

        <div class="option-content" :class="{ collapse: visible }">

            <div v-for="option in addon.addon_option" :key="option.id">
                <input @change="optionSelected" type="radio" :value="option.id" v-model="optionId">
                <label>{{option.size}} - {{option.grams}} g - {{option.price}} RSD</label>
            </div>
            
        </div>

    </div>                                           
</template>

<script>
export default {
    name: 'Option',
    props: ['addonId', 'addon'],
    data() {
        return {
            visible: true,
            optionId: ''
        }
    },
    methods: {
        optionSelected() {
            const optionValues = {
                addonId: this.addon.id,
                optionId: this.optionId
            }
            this.$emit('optionSelected', optionValues)
        }
    }
}
</script>

<style>

</style>