
<template>
  <div>
    <el-input v-model="input" placeholder="Please input"/>
  </div>
</template>

<script>
export default {
  name: 'ADString',
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
