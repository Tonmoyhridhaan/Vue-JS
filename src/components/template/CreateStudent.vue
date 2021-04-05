<template>
    <div class="container mt-5">
        <div class="col-md-6">
            <h2>Create Student</h2>
        <form @submit="createStudent">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="student.name">
            </div>

            <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" v-model="student.email">
            </div>
            
            <div class="form-group">
                <label for="">password</label>
                <input type="password" class="form-control" v-model="student.password">
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
            student: {
                name: null,
                email: null,
                password: null
            }
        }
    },
    methods: {
        createStudent(e){
            e.preventDefault()
            console.log(this.student.name)
            this.$http.post('http://127.0.0.1:8000/api/insert-student',{
                sname: this.student.name,
                semail: this.student.email,
                spassword: this.student.password
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