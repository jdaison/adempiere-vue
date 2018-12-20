
<template>
  <div class="block">
    <span class="demonstration">seleccione fecha</span>
    <el-date-picker
      v-model="data1"
      type="date"
      placeholder="Pick a day"
    />

  </div>
</template>

<script>

export default {
  name: 'Date',
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        }
      },
      data1: ''
    }
  }
}
</script>

<style></style>
