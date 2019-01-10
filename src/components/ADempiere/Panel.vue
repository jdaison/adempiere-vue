
<template>
  <el-form :label-position="labelPosition" label-width="200px">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover" header="Group Example">
          <pre>
{{ sortAndGroup(dataAttributes) }}
          </pre>
          <!--
          <template v-for="(item, key) in sortAndGroup(dataAttributes)" >
            <field :key="item.data.ID" :data-attributes="item" :data-key="key" />
          </template>
          -->
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
      labelPosition: 'top',
      estatusGroup: true
    }
  },
  methods: {
    /**
     * [sortAndGroup description]
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    sortAndGroup(arr) {
      const arrGroup = []
      const arrSort = this.sortFields(arr)
      console.log(arrGroup)
      let changeGroup = false
      let currentGroup = arrSort[0].data.GroupField

      if (currentGroup === '' || currentGroup === null) {
        currentGroup = String(0)
      }
      arrSort[0].data.GroupField = currentGroup
      for (let i = 0; i < arrSort.length; i++) {
        // cambia el grupo de campo o es diferente al inicial, cambia la bandera
        if (changeGroup === false) {
          if (String(currentGroup) !== String(arrSort[i].data.GroupField)) {
            changeGroup = true
          }
        }
        // si cambio el grupo de campo por primera vez y es diferente de 0,
        // actualiza el grupo de campo, ya que es otro grupo de campo
        // alert(currentGroup)
        // if (changeGroup && (currentGroup != '0' || currentGroup != 0)){
        if (changeGroup === true && currentGroup !== '0') {
          currentGroup = arrSort[i].data.GroupField
        }
        // cambia el valor del grupo de campo
        // arrSort[i].data.GroupField = String(currentGroup)
        console.log(currentGroup + ' condicion 2 ' + arrSort[i].type + ' ' + arrSort[i].data.GroupField)
        // console.log(JSON.stringify(i, undefined, 4))
        /* arrGroup.push({
          'groupField': currentGroup,
          fields: arrSort[i]
        })*/
      }
      return arrSort
    },
    /*
     * Sorts the column components according to the value that is obtained from
     * the array that contains the JSON objects in the data.SortNo property
     */
    sortFields(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function(a, b) {
        return a.data.SortNo - b.data.SortNo
      })
    },
    /**
     * Check if the value of the ITEM key is already found as the value of some
     * object in the array.
     * @param array array
     * @param string value
     * @return index of the element if it exists, otherwise false.
     */
    elementExist(array, value) {
      let i = 0
      while (i < array.length) {
        if (array[i].ITEM === value) {
          return i
        }
        i++
      }
      return false
    },
    /**
     * Group the arrangement into groups of columns that they contain, it must
     * be grouped after having the order
     */
    groupFiels(arr) {
      const result = []
      arr.forEach((e) => {
        const i = this.elementExist(result, e.ITEM)
        if (i === false) {
          // Si no existe, creo agrego un nuevo objeto.
          result.push({
            'groupField': e.ITEM,
            'VALOR': [e.VALOR]
          })
        } else {
          // Si el ya existe agrego el nuevo elemento a el array valor.
          result[i].VALOR.push(e.VALOR)
        }
        /*
        if (e.group > 0 || e.group == null) { }
        */
      })
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
