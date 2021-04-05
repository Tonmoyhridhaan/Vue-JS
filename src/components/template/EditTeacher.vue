<template>
    <div class="container mt-5">
        <div class="col-md-6">
            <h2>Edit Teacher</h2>
        <form @submit="updateTeacher">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="teacher.name">
            </div>

            <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" v-model="teacher.email">
            </div>

            <div class="form-group">
                <button class="btn btn-success" name="submit" value="submit">Update</button>
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
            teacher: {

            }
        }
    },
    mounted(){
        this.listTeacher();
    },
    created(){
        this.id=this.$route.params.id
        console.log(this.id)
    },
    methods: {
        listTeacher(){
            this.$http.get('http://127.0.0.1:8000/api/teacher/'+this.id)
                .then((res)=>{
                    //console.log(res.data.teacher)
                    this.teacher = res.data.teacher
                    console.log(this.teacher)
                    //this.teacher.email = res.data.teacher.email
                })
            //console.log(this.teacher)
        },

        updateTeacher(e){
            e.preventDefault()
            console.log(this.teacher.name)
            this.$http.post('http://127.0.0.1:8000/api/update-teacher',{
                tname: this.teacher.name,
                temail: this.teacher.email,
                tid: this.teacher.id,
            })
            .then((res)=>{
              this.redirect()
                
            })
        },
        redirect(){
            this.router.push({ path: './table-teacher' })
        }
    }
}
</script>

<style>

</style>