<template>
  <el-upload
    :before-upload="beforeAvatarUpload"
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
  >
    <img v-if="data.ImageURL" :src="data.ImageURL" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"/>
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
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG || !isGIF || !isPNG) {
        this.$message.success('La imagen debe estar en formato tipo image como JPG!')
      }

      if (!isLt2M) {
        this.$message.error('La imagen excede los 2MB!')
      }
      return isJPG || isGIF || isPNG && isLt2M
    }
  }

}
</script>
