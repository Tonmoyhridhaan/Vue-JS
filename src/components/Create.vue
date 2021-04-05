<template>
    <div>
        <form @submit="submitfnc">
            <label for="">Category</label>
            <select v-model="category" id="">
                <option v-for="category in categories" :key="category.id" :value="category.id" >{{category.name}}</option>
            </select>

            <label for="">Product</label>
            <input type="text" v-model="name" id="">

            <label for="">Price</label>
            <input type="text" v-model="price" id="">

            <input type="submit" value="submit" >
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            categories: [],
            category: null,
            name: null,
            price: null
        }
    },
    created(){
        const baseURI = 'http://127.0.0.1:8000/api/categories'
        this.$http.get(baseURI) 
        .then((result)=> {
            this.categories = result.data.categories
        })
    },
    methods: {
        submitfnc(e){
            e.preventDefault();
            this.$http.post('http://127.0.0.1:8000/api/insert-product', {
                pname : this.name,
                pcategory : this.category,
                pprice : this.price,
                status : true 
            })
            .then(function(response){
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }
    }
}
</script>

<style>

</style>