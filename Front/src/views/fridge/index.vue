<template>
  <div class="issue-index">
      <el-row>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>

   Pagina principal!
    <food></food>
  </div>
</template>

<script>
import food from '@/components/Food.vue'
export default {
  components: {food}
}
</script>
