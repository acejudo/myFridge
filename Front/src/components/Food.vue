<template>
  <div class="food">
    <h1>Posts</h1>
    This file will list all the food.

    <div v-for="element in food" :key="element.title" >
      <p>
        <span><b>{{ element.title }}</b></span><br />
        <span>{{ element.description }}</span>
      </p>
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
