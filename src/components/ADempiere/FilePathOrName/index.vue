
<template>
  <el-input v-model="value" placeholder="Please input your file path or name"/>
</template>

<script>
export default {
  name: 'FilePathOrName',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
  }
}
</script>
