
<!-- the :precision attribute indicating the decimal quantity -->
<template>
  <el-input-number v-model="val" :precision="data.Decimals" :min="data.ValueMin" :max="data.ValueMax" controls-position="right" @change="handleChange" @keyup.native="validatePattern" />
</template>

<script>
export default {
  name: 'ADAmount',
  props: {
    data: {
      type: Object,
      default: () => ({
        'ValueMin': 0,
        'ValueMax': 10,
        'Decimals': 2
      })
    }
  },
  data() {
    return {
      val: 1
    }
  },
  methods: {
    handleChange(value) {
      const _Pattern = /[^0-9.]/g
      this.val = value.target.value.replace(_Pattern, '')
    },
    validatePattern(value) {
      console.log(value.target.value)
      value = value.target.value.toString()
      const _Pattern = /[^0-9.]/g
      this.val = value.replace(_Pattern, '')
    }
  }
}
</script>

<style>

</style>
