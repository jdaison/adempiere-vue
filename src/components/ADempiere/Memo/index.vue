
<template>
  <el-input
    v-model="input"
    :autosize="{ minRows: 2, maxRows: 4}"
    type="textarea"
    placeholder="A description or long text."/>
</template>

<script>
export default {
  name: 'Memo',
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
