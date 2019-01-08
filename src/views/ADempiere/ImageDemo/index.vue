
<template>
  <div class="app-container">
    <field :data-attributes="data"/>
  </div>
</template>

<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.Image.json'
import Field from '@/components/ADempiere/Field'

export default {
  name: 'ImagenDemo',
  components: {
    Field
  },
  data() {
    return {
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
