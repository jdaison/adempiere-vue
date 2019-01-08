
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      Context Variables<i class="el-icon-arrow-down el-icon--right"/>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>Automatic Commit</el-dropdown-item>
      <el-dropdown-item>Automatic New Record</el-dropdown-item>
      <el-dropdown-item>Window Tab Collapse</el-dropdown-item>
      <el-dropdown-item divided/>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'ContextVariablesLayout',
  components: {

  },
  data() {
    return {
      data: 'dataJson'
    }
  },
  beforeCreate() {
    sessionStorage.test = 'Test Context Variable'
    alert(this.getSessionStorage('asd'))
  },

  mounted() {
    /*
       * And if we want to access the information of localStorage sequentially,
       * then we do it thanks to its 'key' method that returns the key in a
       * certain position
       */
    for (let i = 0, key = ''; i < localStorage.length; i++) {
      key = localStorage.key(i)
      console.log(key + ': ' + localStorage.getItem(localStorage.key(i)))
    }
  },
  methods: {
    getSessionStorages() {
      for (let i = 0, key = ''; i < localStorage.length; i++) {
        key = localStorage.key(i)
        console.log(key + ': ' + localStorage.getItem(localStorage.key(i)))
      }
    },
    openContext() {
      alert('Test')
    },
    /*
       * Clear the SessionStorage and therefore the context variables
       */
    clearSessionStorage() {
      sessionStorage.clear()
    },
    getSessionStorage(key) {
      return sessionStorage.getItem('test')
    }
  }
}
</script>
