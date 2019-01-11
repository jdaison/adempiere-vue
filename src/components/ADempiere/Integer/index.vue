
<template>
  <el-input-number
    v-model="val"
    :step="data.Steps"
    :disabled="data.IsReadOnly"
    :precision="data.Decimals"
    :value="data.DefaultValue"
    :min="parseInt(data.ValueMin)"
    :max="parseInt(data.ValueMax)"/>
</template>

<script>
export default {
  name: 'Integer',
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
