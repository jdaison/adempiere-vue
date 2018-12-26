<template>
  <div class="app-container">
    <references :data-attributes="data"/>
  </div>
</template>
<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.Integer.json'
import References from '@/components/ADempiere/Reference.vue'
export default {
  name: 'IntegerDemo',
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
