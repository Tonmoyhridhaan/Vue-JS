<template>
    <div>
        <h2>Manage Division</h2>
        <!-- <hr>
        <create-division></create-division>
        <hr> -->
        <!-- <h3>List Division</h3>
        <table>
            <thead>
                <th>ID</th>
                <th>NAME</th>
            </thead>
            <tbody>
                <tr v-for="division in divisions" v-bind:key="division.id">
                    <td>{{ division.id }}</td>
                    <td>{{ division.name }}</td>
                </tr>
            </tbody>
        </table> -->
        <!-- <hr>
        <create-district></create-district> -->
         <label  for="">Division</label>
           <select @change="getDistricts" v-model="division" id="">
               <option v-for="division in divisions" :key="division.id" :value="division.id">{{division.name}}</option>
           </select>

            <select  @change="showtDistricts" v-model="district" id="">
               <option v-for="district in districts" :key="district.id" :value="district.id">{{district.name}}</option>
           </select>
    </div>
</template>

<script >
import CreateDivision from './CreateDivision'
import CreateDistrict from './CreateDistrict'
export default {
    data() {
        return{
            divisions:[],
            division: null,
            districts:[],
            district: null
        }
        
    },
    components: {
        'create-division' : CreateDivision,
        'create-district' : CreateDistrict
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
        getDistricts(){
            this.$http.get('http://127.0.0.1:8000/api/districts/'+this.division)
                .then((res)=>{
                    this.districts = res.data.districts
                    console.log(this.districts)
                })
        },
        showtDistricts(){
            console.log(this.district)
        }
    }
}
</script>
<style>

</style>