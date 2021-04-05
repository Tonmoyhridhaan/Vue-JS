<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2>All Students</h2>
                <table class="table">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>

                    <tbody>
                        <tr v-for="student in students" v-bind:key="student.id">
                        <td>{{ student.name }}</td>
                        <td>{{ student.email }}</td>
                        
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">
                <h2>All Teachers</h2>
                <table class="table">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                       
                    </thead>

                    <tbody>
                        <tr v-for="teacher in teachers" v-bind:key="teacher.id">
                        <td>{{ teacher.name }}</td>
                        <td>{{ teacher.email }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
            students: [],
            teachers: []
        }
    },
    mounted(){
        this.$http.get('http://127.0.0.1:8000/api/students')
            .then((res)=>{
                this.students = res.data.students
            }),
        this.$http.get('http://127.0.0.1:8000/api/teachers')
        .then((res)=>{
            this.teachers = res.data.teachers
        })
        
    }
   
}
</script>

<style>

</style>