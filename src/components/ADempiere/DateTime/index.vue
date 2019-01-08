<template>
  <div class="block">
    <el-date-picker
      v-model="data.DefaultValue"
      :value-format="data.VFormat"
      :min="data.ValueMin"
      :picker-options="pickerOptions1"
      :range="data.Range"
      type="datetimerange"
      placeholder="Select date and time"
    />
  </div>
</template>

<script>
export default {
  name: 'DateTime',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      pickerOptions1: {
        disabledDate(range) {
          return range.getTime() < Date.now()
        }
      }
      // range: this.data.ValueMin + '=' + this.data.ValueMax
    }
  }
}
</script>

<style>

</style>
