
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
      required: true,
      minWidthField: 6,
      maxWidthField: 12,
      minHeightField: null,
      maxHeightField: null
    }
  },
  data() {
    return {
      // range: this.data.ValueMin + '-' + this.data.ValueMax
    }
  }
}
</script>

<style>
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100% !important;
  }
</style>
