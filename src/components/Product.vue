<template>
    <div>
        <h2>List of products</h2>
        <table>
            <thead>
                <th>Product ID</th>
                <th>Product</th>
                <th>Price</th>
                <th>Category</th>
            </thead>
            <tbody>
                <tr v-for="product in products" v-bind:key="product.id" >
                    <td>{{product.id}}</td>
                    <td>{{product.product}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>


export default {
    data(){
        return {
                products : []
            }
    },
    mounted(){
        const baseURI = 'http://127.0.0.1:8000/api/products'
        this.$http.get(baseURI) 
        .then((result)=> {
            this.products = result.data.products
        })
    }
    
}
</script>
<style >

</style>
