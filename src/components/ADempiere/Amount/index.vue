<template>
  <number-base :data="data"/>
</template>

<script>
import NumberBase from '@/components/ADempiere/NumberBase'
export default {
  name: 'Amount',
  components: {
    NumberBase
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      val: 0
    }
  }
}
</script>
