<template>
    <div>
        <h3>User componenet</h3>
        <p>USER ID: {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
   data(){
       id: this.$route.params.id,
       console.log(id);
   },
}
</script>

<style >

</style>