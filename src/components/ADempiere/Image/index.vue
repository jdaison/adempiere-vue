<template>
  <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"

    list-type="picture">
    <el-button size="small" type="primary">Clic para subir archivo</el-button>
    <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tamaño menor de 500kb</div>
  </el-upload>
</template>
<script>
export default {
  name: 'Image',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style></style>
