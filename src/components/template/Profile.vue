<template>
    <div>
        <h2>Profile</h2>
        <p>This is a profile page</p>
         <ul>
            <li><router-link to="/dashboard/profile/change-password">Change Password</router-link></li>
            <li><router-link to="/dashboard/profile/change-picture">Change Picture</router-link></li>
        </ul>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>