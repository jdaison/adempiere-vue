
<template>
  <el-input-number
    v-model="num"
    :step="data.Steps"
    :max="data.ValueMax"
    :min="data.ValueMin"
  />
</template>

<script>
export default {
  name: 'Number',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      num: 0
    }
  }
}
</script>

<style></style>
