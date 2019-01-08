
<template>
  <el-input v-model="input" placeholder="Please input your file path or name"/>
</template>

<script>
export default {
  name: 'ADFilePathOrName',
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
  }
}
</script>
