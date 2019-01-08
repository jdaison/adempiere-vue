<template>
  <div class="block">
    <el-date-picker
      v-model="date"
      :value-format="data.VFormat"
      :picker-options="{
      selectableRange: data.Range}"
      :readonly="data.IsReadOnly"
      type="datetime"
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
      date: ''
      // range: this.data.ValueMin + '-' + this.data.ValueMax
    }
  }
}
</script>

<style>

</style>
