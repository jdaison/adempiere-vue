
<template>
  <div class="app-container">
    <div v-for="element in dataAttributes" :key="element.data.ID">
      <ad-reference :data-attributes="element" />
      <br>
    </div>
  </div>
</template>

<script>
/* json response prototype with attributes of the field and column */
import jsonButton from '@/views/ADempiere/data/dataAttributes.Button.json'
import jsonDate from '@/views/ADempiere/data/dataAttributes.Date.json'
import jsonInteger from '@/views/ADempiere/data/dataAttributes.Integer.json'
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
        jsonButton
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
