
<template>
  <el-time-picker
    v-model="data.DefaultValue"
    :value-format="data.VFormat"
    :picker-options="{
    selectableRange: data.Range}"
    :readonly="data.IsReadOnly"
    placeholder="Select time"/>
</template>

<script>
export default {
  name: 'Time',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // range: this.data.ValueMin + '-' + this.data.ValueMax
    }
  }
}
</script>
