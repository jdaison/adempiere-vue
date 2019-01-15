<template>
  <!--<el-input-number
      v-model="val"
      :precision="data.Decimals"
      :step="data.Steps"
      :disabled="data.IsReadOnly"
      :value="data.DefaultValue"
      :min="data.ValueMin"
      :max="data.ValueMax"
      controls-position="right"/>-->
  <number-base :data="data"/>
</template>

<script>
import NumberBase from '@/components/ADempiere/NumberBase'
export default {
  name: 'Amount',
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
