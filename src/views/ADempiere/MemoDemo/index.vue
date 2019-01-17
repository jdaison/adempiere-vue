
<template>
  <el-form class="app-container">
    <field :data-attributes="data" />
  </el-form>
</template>

<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.Memo.json'
import Field from '@/components/ADempiere/Field'
export default {
  name: 'MemoDemo',
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
