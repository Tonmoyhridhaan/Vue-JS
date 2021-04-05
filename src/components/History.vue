<template>
    <div>
        <h3>{{ title }}</h3>
        <h5>{{ text }}</h5>
        <hr>
        <our-team></our-team>

    </div>
</template>

<script>
import Team from './Team'
export default {
    data() {
        return{
            title: 'Our History',
            text: 'This is our history page'
        }
        
    }, 
    components :{
        'our-team': Team
    }
}
</script>

<style scoped>

</style>
