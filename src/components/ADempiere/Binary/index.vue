<template>
  <el-upload
    :limit="1"
    :on-remove="handleRemove"
    :on-error="handleError"
    :on-success="handleSuccess"
    :disabled="data.IsReadOnly"
    list-type="picture"
    class="upload-demo"
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
<style></style>
