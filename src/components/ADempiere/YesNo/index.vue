
<template>
  <el-switch
    v-model="value"
    active-text="Yes"
    inactive-text="Not"
    active-value="Y"
    inactive-value="N"
    @change="handleChange(value)"/>
</template>

<script>
export default {
  name: 'YesNo',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: 'Y'
    }
  },
  methods: {
    handleChange(value) {
      alert(value)
    }
  }
}
</script>
