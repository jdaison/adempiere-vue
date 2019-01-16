
<template>
  <el-input
    v-model="input"
    :minlength="data.MinLength"
    :maxlength="data.MaxLength"
    :readonly="data.IsReadOnly"
    :pattern="pattern"
    placeholder="Please input"/>
</template>

<script>
export default {
  name: 'TextBase',
  props: {
    data: {
      type: Object,
      required: true
    },
    pattern: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
