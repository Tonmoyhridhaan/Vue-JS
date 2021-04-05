<template>
    <div>
       <h2>Create District</h2>
       <form @submit="createDistrict">
           <label for="">Division</label>
           <select v-model="district.division" id="">
               <option v-for="division in divisions" :key="division.id" :value="division.id">{{division.name}}</option>
           </select>
           <label for="">Name</label>
           <input type="text" v-model="district.name">
           <br>
           <button @click="redirect" type="submit">Submit</button>
       </form>
    </div>
</template>

<script>
export default {
    data() {
        return{
            divisions: [],
            district: {
                name: null,
                division: null
            }
        }
    },
    mounted(){
        this.listDivision();
    },
    methods: {
        listDivision(){
            this.$http.get('http://127.0.0.1:8000/api/divisions')
                .then((res)=>{
                    this.divisions = res.data.divisions
                })
        },
        createDistrict(e){
            e.preventDefault()
            console.log(this.district.name)
            console.log(this.district.division)
             this.$http.post('http://127.0.0.1:8000/api/insert-district', {
                 districtname: this.district.name,
                 division: this.district.division
                 
             })
            .then((res)=>{
                alert(res.data.message)
            })
        },
        redirect(){
            this.$router.push({name: "Divisions"})
        }
    }
   
}
</script>
<style>

</style>