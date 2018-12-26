<template>
  <div class="app-container">
    <references :data-attributes="data"/>
  </div>
</template>
<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.Amount.json'
import References from '@/components/ADempiere/Reference.vue'
export default {
  name: 'AmountDemo',
  components: {
    References
  },
  data() {
    return {
      data: {
        ...dataJson
      }
    }
  }
}
</script>
<style></style>
