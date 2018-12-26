<template>
  <el-input-number
    v-model="val"
    :step="data.Steps"
    :disabled="data.IsReadOnly"
    :precision="data.Decimals"
    :value="data.DefaultValue"
    :min="data.ValueMin"
    :max="data.ValueMax"/>
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
<style></style>
