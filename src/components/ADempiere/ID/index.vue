<template>
  <number-base
    :data="data"
    :min="data.ValueMin"
  />

</template>
<script>
import NumberBase from '@/components/ADempiere/NumberBase'
export default {
  name: 'ID',
  components: { NumberBase },
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
<style></style>
