<template>
    <li>{{employee.name}}</li>
</template>

<script>
export default {
    props: ['employee'],
    data() {
        return{
            title: 'Our Team',
            text: 'This is our team page'
        }
        
    }
}
</script>

<style scoped>

</style>
