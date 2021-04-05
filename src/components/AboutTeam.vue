<template>
    <div>
        <about></about>
        <hr>
        <team></team>
    </div>
    
</template>

<script>
import Team from './Team'
import About from './About'
export default {
    data() {
        return{
            title: 'About+Team ',
            text : 'This is about+team us page'
        }
    },
    components :{
        'team' : Team,
        'about' : About
    }
}
</script>

<style scoped>

</style>
