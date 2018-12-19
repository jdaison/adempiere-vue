
<template>
  <el-switch
    v-model="value"
    active-text="Yes"
    inactive-text="Not"
    active-value="y"
    inactive-value="n"
    @change="handleChange(value)"/>
</template>

<script>
export default {
  name: 'ADYesNo',
  props: {
    value: {
      type: String,
      default: 'y'
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      valueSwitch: 'y'
    }
  },
  methods: {
    handleChange(value) {
      alert(value)
    }
  }
}
</script>

<style>

</style>
