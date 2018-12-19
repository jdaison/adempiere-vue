
<template>
  <el-input-number v-model="num8" :min="data.ValueMin" :max="data.ValueMax" controls-position="right" @change="validateInput" />
</template>

<script>
export default {
  name: 'ADInteger',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      num8: 1
    }
  },
  created() {
    // if the ValueMax is not defined, it takes the default value of 10 digits
    if (this.data.ValueMax === 0) { this.ValueMax = 9999999999 }
  },
  methods: {
    validateInput(value) {
      if (parseInt(value) > parseInt(this.data.ValueMax)) {
        this.num8 = this.data.ValueMax
      }
    }
  }
}
</script>

<style>

</style>
