
<template>
  <el-tabs type="border-card" @tab-click="handleClick">
    <el-tab-pane :label="tabName">
      <panel :data-attributes="dataAttributes" />
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>

<script>
import Panel from '@/components/ADempiere/Panel'

export default {
  name: 'TabComponent',
  components: {
    Panel
  },
  props: {
    // receives the property that is an object with all the attributes
    dataAttributes: {
      type: Array,
      required: true
    },
    tabName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style></style>
