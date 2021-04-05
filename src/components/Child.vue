<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ msg }}</p>
        <p>Name from parent : {{empname}}</p>
        <p>Email from parent : {{empemail}}</p>
    </div>
</template>

<script>

export default {
    props: ['empname','empemail'],
    data() {
        return{
            title: 'Child Component',
            msg: 'Details of child components'
        }
        
    }, 
    components :{

    }
}
</script>

<style>

</style>
