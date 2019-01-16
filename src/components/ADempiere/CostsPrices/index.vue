<template>
  <number-base :data="data"/>
</template>

<script>
import NumberBase from '@/components/ADempiere/NumberBase'
export default {
  name: 'CostsPrices',
  components: {
    NumberBase
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      val: 0
    }
  }
}
</script>
<style>
  .el-input-number.is-controls-right .el-input__inner{
    padding-right: 15px;
  }
</style>
