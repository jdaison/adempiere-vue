
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
          <el-card :header="item.groupFinal" shadow="hover">
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
      /*
      let arrSort = this.sortFields(arr)
      let arrAssigned = this.assignedGroup(arrSort)
      let arrGroup = this.groupFields(arrAssigned)
      return arrGroup
      */
    },
    /**
     * [assignedGroup description]
     * @param  {[type]} arr [description]
     * @return {[type]} arrGroup [description]
     */
    assignedGroup(arr) {
      let firstChangeGroup = false
      let currentGroup = String(arr[0].AD_FieldGroup_ID)

      if (currentGroup === '' || currentGroup === null) {
        currentGroup = String(0)
      }
      arr[0].AD_FieldGroup_ID = String(currentGroup)

      for (let i = 0; i < arr.length; i++) {
        // change the first field group, change the band
        if (firstChangeGroup === false) {
          if (String(currentGroup) !== String(arr[i].AD_FieldGroup_ID)) {
            firstChangeGroup = true
          }
        }
        // if you change the field group for the first time and it is different
        // from 0, updates the field group, since it is another field group and
        // assigns the following field items to the current field group whose
        // field group is 0
        if (firstChangeGroup) {
          if (arr[i].AD_FieldGroup_ID === '0' || arr[i].AD_FieldGroup_ID === 0) {
            arr[i].AD_FieldGroup_ID = currentGroup
          } else {
            currentGroup = arr[i].AD_FieldGroup_ID
            arr[i].AD_FieldGroup_ID = currentGroup
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
     * @return {[array]} order by arr.data.SortNo
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
     * @return {[array]}
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
