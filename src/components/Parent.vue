<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ msg }}</p>
        <hr>
        <child v-bind:empname="name" v-bind:empemail="email"></child>
        <hr>
        <h4>Employees</h4>
        <ul>
            <list v-for="employee in employees" v-bind:key="employee.id" v-bind:employee="employee"></list>
        </ul>

    </div>
</template>

<script>
import Child from './Child'
import List from './List'
export default {
    data() {
        return{
            title: 'Parent Component',
            msg: 'Details of parent components',
            name : 'Tonmoy',
            email : 'tonmoy@gmail.com',
            employees: [
                {id: 1, name : 'A' },
                {id: 2, name : 'B' },
                {id: 3, name : 'C' }
            ]
        }
        
    }, 
    components :{
        'child': Child,
        'list': List
    }
}
</script>

<style>

</style>
