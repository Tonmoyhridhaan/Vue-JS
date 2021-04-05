<template>
    <div class="container mt-5">
        <div class="col-md-6">
            <h2>All Students</h2>
            <table class="table">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    <tr v-for="student in students" v-bind:key="student.id">
                    <td>{{ student.name }}</td>
                    <td>{{ student.email }}</td>
                    <td><router-link class="btn btn-primary" :to="'/dashboard/student/edit-student/'+student.id">Edit</router-link></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-6-ml-3">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            students: []
        }
    },
    mounted(){
        this.$http.get('http://127.0.0.1:8000/api/students')
            .then((res)=>{
                this.students = res.data.students
            })
        
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