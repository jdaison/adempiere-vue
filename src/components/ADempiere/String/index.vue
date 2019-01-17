
<template>
  <text-base :data="data"/>
</template>
<script>
import TextBase from '@/components/ADempiere/TextBase'
export default {
  name: 'String',
  components: {
    TextBase
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
