<template>
  <div class="block">
    <el-date-picker
      v-model="setData.val"
      :picker-options="{
      selectableRange: range}"

      :format="data.V"
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
  setData: {
    type: Object,
    default: () => ({
      val: new Date(),
      min: '2019-01-01 ',
      max: '2019-01-10'
    })
  },
  data() {
    return {
      range: this.setData.min + '-' + this.setData.max
    }
  }
}
</script>

<style>

</style>
