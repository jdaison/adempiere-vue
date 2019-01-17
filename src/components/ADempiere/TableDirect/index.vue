<template>
  <select-base :data="data"/>
</template>
<script>
import SelectBase from '@/components/ADempiere/SelectBase'
export default {
  name: 'TableDirect',
  components: {
    SelectBase
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      val: []
    }
  }
}
</script>
