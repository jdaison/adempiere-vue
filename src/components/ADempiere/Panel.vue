
<template>
  <el-form :label-position="labelPosition" label-width="200px">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover" header="hola">
          <field v-for="(item, key) in dataAttributes" :key="item.data.ID" :data-attributes="item" :data-key="key" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <field v-for="(item, key) in dataAttributes" :key="item.data.ID" :data-attributes="item" :data-key="key" />
        </el-card>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import Field from '@/components/ADempiere/Field'

export default {
  name: 'Panel',
  components: {
    Field
  },
  props: {
    dataAttributes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      val: '',
      labelPosition: 'top'
    }
  },
  methods: {
    /*
         * Sorts the components according to the value that is obtained from the
         * array that contains the JSON objects in the data.SortNo property
         */
    sortFields(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function(a, b) {
        return a.data.SortNo - b.data.SortNo
      })
    }
  }
}
</script>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }

    .el-button {
      width: 110px;
    }
  }
</style>
