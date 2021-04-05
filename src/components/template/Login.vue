<template>
    <div class="container mt-5">
        <div class="col-md-6">
            <h2>Login</h2>
        <form @submit="submitFunction">
            <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" name="email">
            </div>
            
            <div class="form-group">
                <label for="">password</label>
                <input type="password" class="form-control" name="password">
            </div>

            <div class="form-group">
                <button class="btn btn-success" name="submit" value="submit">Login</button>
            </div>

        </form>
        </div>
    </div>
	
</template>

<script>
export default {
    methods: {
        submitFunction(e){
            e.preventDefault()
            this.$router.push({path : '/dashboard'})
        }
    }
}
</script>

<style>

</style>