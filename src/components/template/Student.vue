<template>

   <div class="row mt-3">
        <div class="col-md-5 ml-5 mt-3" >
            <router-link class="btn btn-success" to="/dashboard/student/create-student">Create Student</router-link>
        </div>
        <div class="col-md-5 ml-5 mt-3">
            <router-link class="btn btn-success" to="/dashboard/student/table-student">Students</router-link>
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