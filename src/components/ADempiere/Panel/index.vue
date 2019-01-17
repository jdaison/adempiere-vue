
<template>
  <el-form :label-position="labelPosition" label-width="200px">
    <el-row :gutter="20">
      <template v-for="(item, key) in sortAndGroup(dataAttributes)">
        <el-col v-if="item.groupFinal === '0'" :span="24" :key="key">
          <template v-for="(subItem, subKey) in item.dataAttributes" >
            <field :key="subItem.ID" :data-attributes="subItem" :data-key="subKey" />
          </template>
        </el-col>
        <el-col v-else :span="12" :key="key">
          <el-card :header="item.groupFinal + ' - Numbers of Fields: ' + item.numberFields" shadow="hover">
            <template v-for="(subItem, subKey) in item.dataAttributes" >
              <field :key="subItem.ID" :data-attributes="subItem" :data-key="subKey" />
            </template>
          </el-card>
        </el-col>
      </template>
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
      labelPosition: 'top',
      minSizeColumns: 3,
      preSizeColumns: 12,
      maxSizeColumns: 24,
      estatusGroup: true
    }
  },
  methods: {
    sortAndGroup(arr) {
      return this.groupFields(
        this.assignedGroup(
          this.sortFields(arr)
        )
      )
    },
    /**
     * [assignedGroup description]
     * @param  {array} arr [description]
     * @return {array} arrGroup [description]
     */
    assignedGroup(arr) {
      let firstChangeGroup = false
      let currentGroup = String(arr[0].FieldGroup)

      if (currentGroup === '' || currentGroup === null) {
        currentGroup = String(0)
      }
      arr[0].FieldGroup = String(currentGroup)

      for (let i = 0; i < arr.length; i++) {
        // change the first field group, change the band
        if (firstChangeGroup === false) {
          if (String(currentGroup) !== String(arr[i].FieldGroup)) {
            firstChangeGroup = true
          }
        }
        // if you change the field group for the first time and it is different
        // from 0, updates the field group, since it is another field group and
        // assigns the following field items to the current field group whose
        // field group is 0
        if (firstChangeGroup) {
          if (arr[i].FieldGroup === '0' || arr[i].FieldGroup === 0) {
            arr[i].FieldGroup = currentGroup
          } else {
            currentGroup = arr[i].FieldGroup
            arr[i].FieldGroup = currentGroup
          }
        }
        arr[i].GroupAssigned = currentGroup
      }
      return arr
    },
    /**
     * Sorts the column components according to the value that is obtained from
     * the array that contains the JSON objects in the data.SortNo property
     * @param array arr
     * @return {array} order by arr.data.SortNo
     */
    sortFields(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function(a, b) {
        return a.SeqNo - b.SeqNo
      })
    },
    /**
     * Group the arrangement into groups of columns that they contain, it must
     * be grouped after having the order
     * @param array array
     * @return {array} res
     */
    groupFields(arr) {
      var res = arr.reduce(
        function(res, currentValue) {
          if (res.indexOf(currentValue.GroupAssigned) === -1) {
            res.push(currentValue.GroupAssigned)
          }
          return res
        }, []
      )
        .map(function(_group) {
          return {
            groupFinal: _group,
            dataAttributes: arr.filter(function(_el) {
              return _el.GroupAssigned === _group
            })
              .map(function(_el) {
                return _el
              })
          }
        })
      // count and add the field numbers according to your group
      for (const i in res) {
        res[i].numberFields = res[i].dataAttributes.length
      }

      return res
    }
  }
}
</script>

<style scoped>
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
<style>
  .el-card__body {
    background-color: #f8f8f8;
  }
</style>
