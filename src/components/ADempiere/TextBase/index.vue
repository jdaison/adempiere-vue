
<template>
  <el-input
    v-model="input"
    :minlength="data.MinLength"
    :maxlength="data.MaxLength"
    :readonly="data.IsReadOnly"
    placeholder="Please input"/>
</template>

<script>
export default {
  name: 'TextBase',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
