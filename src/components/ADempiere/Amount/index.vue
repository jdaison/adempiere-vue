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
      controls-position="right"/>
    <Integer/>
  </div>
</template>

<script>
import Integer from '@/views/ADempiere/IntegerDemo'
export default {
  name: 'Amount',
  components: {
    Integer
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
