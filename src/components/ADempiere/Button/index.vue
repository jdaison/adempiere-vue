
<template>
  <el-button type="primary" icon="el-icon-edit" native-type="button" @click="processButton()">
    {{ data.Name }}
  </el-button>
</template>

<script>
export default {
  name: 'ADButton',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {

    }
  },
  methods: {
    processButton() {
      alert('this process id is = ' + this.data.AD_Process_ID)
    }
  }
}
</script>

<style>

</style>
