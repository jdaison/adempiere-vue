
<template>
  <el-form :label-position="labelPosition" class="app-container">
    <el-row :gutter="20">
      <template v-for="(item, key) in arrColumns">
        <el-col :span="item" :key="key">
          <el-card :header="item + ' Columns'" shadow="hover">
            <field :data-attributes="data" />
          </el-card>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.Binary.json'
import Field from '@/components/ADempiere/Field'

export default {
  name: 'Binary',
  components: {
    Field
  },
  data() {
    return {
      labelPosition: 'top',
      arrColumns: [3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 12, 12, 24],
      data: {
        ...dataJSON
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      this.$message.success(`The previously uploaded file has been deleted.`)
    },
    handleSuccess(file) {
      this.$message.success(`The file has been successfully loaded.`)
    },
    handleError(file) {
      this.$message.error(`The file does not meet the specifications.`)
    }
  }
}
</script>
