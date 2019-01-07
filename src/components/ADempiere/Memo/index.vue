
<template>
  <div>
    <el-input
      :autosize="{ minRows: 2, maxRows: 4}"
      type="textarea"
      placeholder="A description is limited to 255 characters."/>
  </div>
</template>

<script>
export default {
  name: 'Memo',
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
