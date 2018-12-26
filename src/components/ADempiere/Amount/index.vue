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
      :value="data.DefaultValue"
      :min="data.ValueMin"
      :max="data.ValueMax"
      controls-position="right"
    />
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

  beforeMount() {
    if (this.data.ValueMin == null) {
      this.data.ValueMin = undefined
    }
    if (this.data.ValueMax == null) {
      this.data.ValueMax = undefined
    }
  }
}
</script>

<style>

</style>
