<template>
  <el-upload
    :limit="data.Limit"
    :disabled="data.IsReadOnly"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :on-error="handleError"
    class="image-uploader"
    action="https://jsonplaceholder.typicode.com/posts/">
    <el-button size="small" type="primary">Upload File</el-button>
    <div slot="tip" class="el-upload__tip">Only files with a size smaller than 500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: 'Binary',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleRemove(file) {
      this.$message.success(`The previously uploaded file has been deleted.`)
    },
    handleError(file) {
      this.$message.error(`The file does not meet the specifications.`)
    },
    handleSuccess(file) {
      this.$message.success(`The file has been successfully loaded.`)
    }
  }
}
</script>
