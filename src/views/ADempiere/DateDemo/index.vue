
<template>
  <reference :data-attributes="data"/>
</template>

<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.Date.json'
import Reference from '@/components/ADempiere/Reference'

export default {
  name: 'DateDemo',
  components: {
    Reference
  },
  data() {
    return {
      data: {
        ...dataJSON
      }
    }
  }
}
</script>
