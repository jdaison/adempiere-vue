
<template>
  <el-upload
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple>
    <el-button size="small" type="primary">Clic para subir archivo</el-button>
    <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tamaño menor de 500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: 'ADBinay',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`El límite es 3, haz seleccionado ${files.length} archivos esta vez, añade hasta ${files.length + fileList.length}`)
    }
  }
}
</script>

<style>

</style>
