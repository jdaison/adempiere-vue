
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      Context Variables<i class="el-icon-arrow-down el-icon--right"/>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>Automatic Commit</el-dropdown-item>
      <el-dropdown-item>Automatic New Record</el-dropdown-item>
      <el-dropdown-item>Window Tab Collapse</el-dropdown-item>
      <el-dropdown-item divided>
        <context-variables-modal/>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import ContextVariablesModal from '@/views/layout/components/ADempiere/ContextVariablesLayout/ContextVariablesModal.vue'
import dataJson from '@/views/ADempiere/data/contextData.json'

export default {
  name: 'ContextVariablesLayout',
  components: {
    ContextVariablesModal
  },
  data() {
    return {
      data: dataJson
    }
  },
  beforeCreate() {
    sessionStorage.xxx = 'XXX'
  },

  mounted() {
    /* Y si queremos acceder a la información de localStorage de manera secuencial,
       * entonces lo hacemos gracias a su método 'key' que devuelve la clave en
       * determinada posición
       */
    for (let i = 0, key = ''; i < localStorage.length; i++) {
      key = localStorage.key(i)
      console.log(key + ': ' + localStorage.getItem(localStorage.key(i)))
    }
  },
  methods: {
    getSessionStorage() {
      for (let i = 0, key = ''; i < localStorage.length; i++) {
        key = localStorage.key(i)
        console.log(key + ': ' + localStorage.getItem(localStorage.key(i)))
      }
    },
    openContext() {
      alert('Test')
    }
  }
}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
