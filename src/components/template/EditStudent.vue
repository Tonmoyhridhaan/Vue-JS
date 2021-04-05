<template>
    <div class="container mt-5">
        <div class="col-md-6">
            <h2>Edit student</h2>
        <form @submit="updateStudent">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="student.name">
            </div>

            <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" v-model="student.email">
            </div>

            <div class="form-group">
                <button class="btn btn-success" @click="redirect" name="submit" value="submit">Update</button>
            </div>

        </form>
        </div>
    </div>

    <!-- <div>
        <h3>User componenet</h3>
        <p>USER ID: {{ $route.params.id }}</p>
    </div> -->
</template>

<script>
import router from '../../router'
export default {
    data() {
        return{
            id : 0,
            student: {

            }
        }
    },
    mounted(){
        this.listStudent();
    },
    created(){
        this.id=this.$route.params.id
        console.log(this.id)
    },
    methods: {
        listStudent(){
            this.$http.get('http://127.0.0.1:8000/api/student/'+this.id)
                .then((res)=>{
                    //console.log(res.data.teacher)
                    this.student = res.data.student
                    console.log(this.student)
                    //this.teacher.email = res.data.teacher.email
                })
            //console.log(this.teacher)
        },

        updateStudent(e){
            //e.preventDefault()
            console.log(this.student.name)
            this.$http.post('http://127.0.0.1:8000/api/update-student',{
                sname: this.student.name,
                semail: this.student.email,
                sid: this.student.id,
            })
            .then((res)=>{
                alert(res.data.message)
            })
        },
        redirect(){
            this.router.push({ path: 'table-student' })
        }
    }
}
</script>

<style>

</style>