
<template>
  <span>
    <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>

    <el-dialog :visible.sync="outerVisible" title="Outer Dialog">
      <el-dialog
        :visible.sync="innerVisible"
        width="30%"
        title="Inner Dialog"
        append-to-body/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
      </div>
    </el-dialog>
  </span>
</template>

<script>
export default {
  data() {
    return {
      outerVisible: false,
      innerVisible: false
    }
  }
}
</script>
