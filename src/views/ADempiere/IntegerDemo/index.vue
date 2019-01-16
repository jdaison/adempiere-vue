
<template>
  <el-form class="app-container">
    <field :data-attributes="data" />
  </el-form>
</template>

<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.Integer.json'
import Field from '@/components/ADempiere/Field'

export default {
  name: 'IntegerDemo',
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
