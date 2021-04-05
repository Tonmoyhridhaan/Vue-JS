<template>
    <div>
       <h2>Create Division</h2>
       <form @submit="createDivision">
           <label for="">Name</label>
           <input type="text" v-model="division.name">
           <br>
           <button type="submit">Submit</button>
       </form>

    </div>
</template>

<script>
export default {
    data() {
        return{
            division: {
                name: null
            }
        }
    },
    methods: {
        createDivision(e){
            e.preventDefault()
            console.log(this.division.name)
            this.$http.post('http://127.0.0.1:8000/api/insert-division',{
                name: this.division.name
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