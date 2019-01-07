
<template>
  <div>
    <el-input
      v-model="setData.val"
      :autosize="{ minRows: 2, maxRows: 4}"
      type="textarea"
      placeholder="A description is limited to 255 characters."/>
  </div>
</template>

<script>
export default {
  name: 'ADText',
  props: {
    setData: {
      type: Object,
      default: () => ({
        val: '',
        min: '07:50:00',
        max: '19:00:00',
        isReadonly: false
      })
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
