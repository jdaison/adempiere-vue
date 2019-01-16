
<template>
  <el-form class="app-container">
    <field :data-attributes="data" />
  </el-form>
</template>

<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.PrinterName.json'
import Field from '@/components/ADempiere/Field.vue'

export default {
  name: 'PrinterNameDemo',
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
