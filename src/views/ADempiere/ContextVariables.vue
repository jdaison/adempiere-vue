
<template>
  <pre>
      asd
  </pre>
</template>

<script>
import dataJson from '@/views/ADempiere/data/contextData.json'
export default {
  name: 'ContextVariables',
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
    }
  }
}
</script>

<style></style>
