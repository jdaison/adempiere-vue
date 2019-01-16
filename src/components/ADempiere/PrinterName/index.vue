
<template>
  <el-input
    v-model="input"
    placeholder="Please Printer Name input"/>
</template>

<script>
export default {
  name: 'PrinterName',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
