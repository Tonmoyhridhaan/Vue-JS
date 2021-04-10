<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/dashboard/student">Student</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/dashboard/teacher">Teacher</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/dashboard/home">Home</router-link>
                        </li>
                    </ul>
                </nav>
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