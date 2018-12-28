
<template>
  <div>
    <el-input
      v-model="input"
      placeholder="Please PrinterName input"/>
  </div>
</template>

<script>
export default {
  name: 'PrinterName',
  props: {
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

<style>

</style>
