
<template>
  <el-time-picker
    v-model="setData.val"
    :picker-options="{
      selectableRange: range
    }"
    :editable="false"
    :readonly="setData.isReadonly"
    placeholder="Select time"/>
</template>

<script>
export default {
  name: 'ADTime',
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    setData: {
      type: Object,
      default: () => ({
        val: new Date(),
        min: '07:50:00',
        max: '19:00:00',
        isReadonly: false
      })
    }
  },
  data() {
    return {
      // '18:30:00 - 20:30:00' or ['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']
      range: this.setData.min + '-' + this.setData.max
    }
  }
}
</script>
