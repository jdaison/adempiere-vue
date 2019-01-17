<template>
  <el-form class="app-container">
    <field :data-attributes="data"/>
  </el-form>
</template>

<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.TableDirect.json'
import Field from '@/components/ADempiere/Field'

export default {
  name: 'TableDirectDemo',
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
