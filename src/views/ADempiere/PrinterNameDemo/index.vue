
<template>
  <el-form class="app-container">
    <field :data-attributes="data" />
  </el-form>
</template>

<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.FileName.json'
import Field from '@/components/ADempiere/Field.vue'

export default {
  name: 'FilePathOrNameDemo',
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
