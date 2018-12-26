
<template>
  <div >
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      :format="data.VFormat"
      type="date"
      placeholder="Pick a day"
    />
  </div>
</template>

<script>
export default {
  name: 'ADDate',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: 'A week ago',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value1: '',
      value2: ''
    }
  }
}
</script>

<style>

</style>
