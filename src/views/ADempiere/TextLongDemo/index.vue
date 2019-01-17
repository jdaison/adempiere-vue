
<template>
  <el-form class="app-container">
    <field :data-attributes="data" />
  </el-form>
</template>

<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.TextLong.json'
import Field from '@/components/ADempiere/Field'
export default {
  name: 'TextLongDemo',
  components: {
    Field
  },
  data() {
    return {
      data: {
        ...dataJSON
      }
    }
  }
}
</script>
