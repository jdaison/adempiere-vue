
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
  name: 'Yes',
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

<style></style>
