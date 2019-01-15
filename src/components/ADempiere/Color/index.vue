<template>
  <el-color-picker
    :value="data.DefaultValue"
    :show-alpha="data.ShowAlpha"
    :size="data.Size"
    :disabled="data.IsReadOnly"/>
</template>

<script>
export default {
  name: 'Color',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      color: ''
    }
  }
}
</script>
