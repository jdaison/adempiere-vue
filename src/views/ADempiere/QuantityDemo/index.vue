
<template>
  <el-form class="app-container">
    <field :data-attributes="data" />
  </el-form>
</template>

<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.Quantity.json'
import Field from '@/components/ADempiere/Field.vue'

export default {
  name: 'QuantityDemo',
  components: {
    Field
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
