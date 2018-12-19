
<template>
  <div class="app-container">
    <fields :data-attributes="dataAttributes" />
  </div>
</template>

<script>
/* json response prototype with attributes of the field and column */
import jsonButton from '@/views/ADempiere/data/field/dataAttributes.Button.json'
import jsonDate from '@/views/ADempiere/data/field/dataAttributes.Date.json'
import jsonInteger from '@/views/ADempiere/data/field/dataAttributes.Integer.json'
import jsonString from '@/views/ADempiere/data/field/dataAttributes.String.json'
import jsonText from '@/views/ADempiere/data/field/dataAttributes.Text.json'
import Fields from '@/components/ADempiere/Fields'

export default {
  name: 'Dynamic',
  components: {
    Fields
  },
  data() {
    return {
      val: '',
      dataAttributes: [
        jsonText,
        jsonInteger,
        jsonDate,
        jsonButton,
        jsonString
      ]
    }
  }
}
</script>

<style>
</style>
