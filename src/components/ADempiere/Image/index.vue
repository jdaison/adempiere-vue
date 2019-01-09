<template>
  <el-upload
    :image="data.ImageURL"
    :limit="data.Limit"
    :dra="data.Drag"
    :before-upload="beforeAvatarUpload"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-exceed="handleExceed"
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture">
    <el-button size="small" type="primary">Click to upload file</el-button>
    <div slot="tip" class="el-upload__tip">he image must be in image type format such as JPG, PNG, GIF and Big Map with a size less than 500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: 'ImageAdempiere',
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isGIF = file.type === 'image/gif'
      const isPNG = file.type === 'image/png'
      const isBMP = file.type === 'image/bmp'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message('The image must be in image type format such as JPG, PNG, GIF and Big Map!')
      }
      if (!isLt2M) {
        this.$message.error('the image exceeds 500 kb')
      }
      return isJPG || isGIF || isPNG || isBMP && isLt2M
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },

    handlePreview(file) {
      console.log(file)
    },

    handleExceed(files, fileList) {
      this.$message.warning(`you have reached the limit of images allowed ${files.length}   `)
    }
  }

}
</script>
