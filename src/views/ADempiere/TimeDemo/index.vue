<template>
  <div class="app-container">
    <field :data-attributes="data" />
  </div>
</template>

<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.Time.json'
import Field from '@/components/ADempiere/Field'
export default {
  name: 'TimeDemo',
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
<style></style>
