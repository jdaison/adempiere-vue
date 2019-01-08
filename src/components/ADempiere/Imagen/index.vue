<template>
  <el-upload
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"/>
  </el-upload>
</template>

<script>
export default {
  name: 'Imagen',
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
