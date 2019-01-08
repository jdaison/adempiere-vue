<template>
  <div class="app-container">
    <field :data-attributes="data" />
  </div>
</template>

<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.Amount.json'
import Field from '@/components/ADempiere/Field'
export default {
  name: 'AmountDemo',
  components: {
    Field
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
