
<template>
  <div class="app-container">
    <field :data-attributes="data" />
  </div>
</template>

<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.Integer.json'
import Field from '@/components/ADempiere/Field.vue'

export default {
  name: 'IntegerDemo',
  components: {
    Field
  },
  data() {
    return {
      data: {
        ...dataJson
      }
    }
  }
}
</script>
