<template>
<div>
   <div class="row mt-3">
        <div class="col-md-5 ml-5 mt-3" >
            <router-link class="btn btn-success" to="/dashboard/teacher/create-teacher">Create Teacher</router-link>
        </div>
        <div class="col-md-5 ml-5 mt-3">
            <router-link class="btn btn-success" to="/dashboard/teacher/table-teacher">Teachers</router-link>
        </div>
    </div>
        
        <router-view></router-view>
</div>
</template>

<script>

export default {
    
}
</script scoped>

<style>
    
</style>