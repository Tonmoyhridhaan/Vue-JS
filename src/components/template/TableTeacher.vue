<template>
    <div class="container mt-5">
        <div class="col-md-6-ml-3">
            <h2>All Teachers</h2>
            <table class="table">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    <tr v-for="teacher in teachers" v-bind:key="teacher.id">
                    <td>{{ teacher.name }}</td>
                    <td>{{ teacher.email }}</td>
                    <td><router-link class="btn btn-primary" :to="'/dashboard/teacher/edit-teacher/'+teacher.id">Edit</router-link></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            teachers: []
        }
    },
    mounted(){
        this.$http.get('http://127.0.0.1:8000/api/teachers')
            .then((res)=>{
                this.teachers = res.data.teachers
            })
        
    },
    
}
</script>

<style>

</style>