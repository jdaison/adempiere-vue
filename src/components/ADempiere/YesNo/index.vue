
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
      value: 'Y',
      minWidthField: 3,
      maxWidthField: 3,
      minHeightField: null,
      maxHeightField: null
    }
  },
  methods: {
    handleChange(value) {
      alert(value)
    }
  }
}
</script>
