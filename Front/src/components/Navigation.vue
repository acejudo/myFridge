<template>
<div>
    <Slide>
      <a id="fridge" href="#/food">
        <span>Fridge</span>
      </a>
    </Slide>
    </div>
  </template>
<script>
import { Slide } from 'vue-burger-menu'
export default {
  components: { Slide },
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
