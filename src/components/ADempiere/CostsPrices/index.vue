<template>
  <el-input-number
    v-model="val"
    :precision="data.Decimals"
    :controls="data.Controls"
    :disabled="data.IsReadOnly"
    :value="data.DefaultValue"
  />
</template>

<script>
export default {
  name: 'CostsPrices',
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

</style>
