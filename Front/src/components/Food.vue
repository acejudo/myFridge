<template>
  <div class="food">
    <h1>Fridge</h1>
    This file will list all the food.
    <div v-if="food.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewFodd' }" class="">Add Food</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="element in food" :key="element.title" >
          <td>{{ element.title }}</td>
          <td>{{ element.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link> |
            <a href="#">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no food.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewFood' }" class="add_food_link">Add Food</router-link>
    </div>
  </div>
</template>

<script>
import FoodService from '@/services/FoodService'
export default {
  name: 'food',
  data () {
    return {
      food: []
    }
  },
  created () {
    this.getAllFood()
  },
  methods: {
    async getAllFood () {
      const response = await FoodService.getFood()
      console.log(response.data)
      this.food = response.data
    }
  }
}
</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_food_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
