<template>
    <div class="container mt-5">
        <div class="col-md-6">
            <h2>Create Teacher</h2>
        <form @submit="createTeacher">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="teacher.name">
            </div>

            <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" v-model="teacher.email">
            </div>
            
            <div class="form-group">
                <label for="">password</label>
                <input type="password" class="form-control" v-model="teacher.password">
            </div>

            <div class="form-group">
                <button class="btn btn-success" name="submit" value="submit">Create</button>
            </div>

        </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            teacher: {
                name: null,
                email: null,
                password: null
            }
        }
    },
    methods: {
        createTeacher(e){
            e.preventDefault()
            console.log(this.teacher.name)
            this.$http.post('http://127.0.0.1:8000/api/insert-teacher',{
                tname: this.teacher.name,
                temail: this.teacher.email,
                tpassword: this.teacher.password
            })
            .then((res)=>{
                alert(res.data.message)
            })
        }
    }
}
</script>

<style>

</style>