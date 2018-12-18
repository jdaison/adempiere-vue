
<template>
  <div class="app-container">
    <div v-for="(item, key) in even(dataAttributes)" :key="item.data.ID">
      <ad-reference :data-attributes="item" :data-key="key" />
      <br>
    </div>
  </div>
</template>

<script>
/* json response prototype with attributes of the field and column */
import jsonButton from '@/views/ADempiere/data/dataAttributes.Button.json'
import jsonDate from '@/views/ADempiere/data/dataAttributes.Date.json'
import jsonInteger from '@/views/ADempiere/data/dataAttributes.Integer.json'
import jsonString from '@/views/ADempiere/data/dataAttributes.String.json'
import jsonText from '@/views/ADempiere/data/dataAttributes.Text.json'
import AdReference from '@/components/ADempiere/AD_Reference'

export default {
  components: {
    AdReference
  },
  data() {
    return {
      val: '',
      dataAttributes: [
        jsonText,
        jsonInteger,
        jsonDate,
        jsonButton,
        jsonString
      ]
    }
  },
  created() {
    /*
    if (this.dataAttributes.IsFieldOnly) {
      console.log('asd')
    }
    console.log(JSON.stringify(this.dataAttributes, null, 4));
    */
  },
  methods: {
    /*
     * Sorts the components according to the value that is obtained from the
     * array that contains the JSON objects in the data.SortNo property
     */
    even(arr) {
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
