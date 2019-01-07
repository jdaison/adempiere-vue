
<template>
  <el-button type="primary" icon="el-icon-edit" native-type="button" @click="processButton()">
    {{ data.Name }}
  </el-button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    data: {
      type: Object,
      default: () => ({
        Name: 'Name Button',
        AD_Process_ID: 123
      })
    }
  },
  data() {
    return {

    }
  },
  methods: {
    processButton() {
      alert('This process id is  \n' + this.data.AD_Process_ID)
    }
  }
}
</script>
