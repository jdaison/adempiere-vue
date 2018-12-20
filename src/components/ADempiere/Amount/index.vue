<!-- the :precision attribute indicating the decimal quantity
:min="data.ValueMin"
      :max="data.ValueMax"-->
<template>
  <div>
    <el-input-number
      v-model="val"
      :precision="data.Decimals"
      :step="data.Steps"
      :disabled="data.IsReadOnly"
      value="0"
      controls-position="right"
      @change="handleChange"
      @keyup.native="validatePattern" />
  </div>
</template>

<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.Amount.json'
export default {
  name: 'Amount',
  props: {
    data: {
      type: Object,
      default: () => ({
        ...dataJson.data
      })
    }
  },
  data() {
    return {
      val: 0
    }
  },
  methods: {
    handleChange(value) {
      const _Pattern = /[^0-9.]/g
      const res = _Pattern.test(this.val)
      if (res === true) {
        this.val.replace(_Pattern, '')
      }
      /* this.val = value.target.value.replace(_Pattern, 'A')
      console.log(value)*/
    },
    validatePattern(value) {
      // console.log(value.target.value)
      value = value.target.value.toString()
      const _Pattern = /[^0-9.]/g
      this.val = value.replace(_Pattern, '')
    }
  }
}
</script>

<style>

</style>
