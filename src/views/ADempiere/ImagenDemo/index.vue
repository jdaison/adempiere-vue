<template>
  <div class="app-container">
    <field :data-attributes="data"/>

  </div>
</template>
<script>
import dataJSON from '@/views/ADempiere/data/field/dataAttributes.Imagen.json'
import Field from '@/components/ADempiere/Field'
export default {
  name: 'Imagen',
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
