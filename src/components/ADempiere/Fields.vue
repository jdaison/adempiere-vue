
<template>
  <div>
    <div v-for="(item, key) in sortFields(dataAttributes)" :key="item.data.ID">
      <reference :data-attributes="item" :data-key="key" />
      <br>
    </div>
  </div>
</template>

<script>
import Reference from '@/components/ADempiere/Reference'

export default {
  name: 'Fields',
  components: {
    Reference
  },
  props: {
    dataAttributes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      val: ''
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
