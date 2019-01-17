
<template>
  <div class="app-container">
    <field :data-attributes="data" />
  </div>
</template>

<script>
import dataJson from '@/views/ADempiere/data/field/dataAttributes.DateTime.json'
import Field from '@/components/ADempiere/Field.vue'

export default {
  name: 'DateTimeDemo',
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

<style></style>
