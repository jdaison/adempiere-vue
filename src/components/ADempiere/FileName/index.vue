
<template>
  <text-base :data="data" :pattern="pattern"/>
</template>

<script>
import TextBase from '@/components/ADempiere/TextBase'
export default {
  name: 'FileName',
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
      input: '',
      pattern: '[A-Za-zñÑ0-9-_]{1,}'
    }
  }
}
</script>
