<template>
  <el-select
    v-model="val"
    :multiple="data.Multiple"
    :collapse-tags="data.CollapseTags"
    :filterable="data.Filterable"
    :allow-create="data.AllowCreate"
    :placeholder="data.Help"
    :disabled="data.IsReadOnly">
    <el-option
      v-for="item in data.Options"
      :key="item.value"
      :label="item.label"
      :value="item.value"/>
  </el-select>
</template>
<script>
export default {
  name: 'List',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      val: []
    }
  }
}
</script>
