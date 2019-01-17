
<template>
  <el-input
    v-model="input"
    :readonly="data.Readonly"
    :minlength="data.Minlength"
    :maxlength="data.Maxlength"
    :autosize="{ minRows: 2, maxRows: 6}"
    type="textarea"
    placeholder="A description or long text."/>
</template>

<script>
export default {
  name: 'TextareaBase',
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
