
<template>
  <el-input-number
    v-model="val"
    :step="data.Steps"
    :disabled="data.IsReadOnly"
    :precision="data.Decimals"
    :value="data.DefaultValue"
    :min="data.ValueMin"
    :max="data.ValueMax"
    :controls="data.Controls"
    controls-position="right"/>
</template>

<script>
export default {
  name: 'NumberBase',
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
