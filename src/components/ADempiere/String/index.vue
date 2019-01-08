
<template>
  <el-input v-model="input" placeholder="Please input"/>
</template>

<script>
export default {
  name: 'String',
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
