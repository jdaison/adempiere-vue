
<template>
  <div class="app-container">
    <panel :data-attributes="dataAttributes" />
  </div>
</template>

<script>
/* json response prototype with attributes of the field and column */
import jsonButton from '@/views/ADempiere/data/field/dataAttributes.Button.json'
import jsonDate from '@/views/ADempiere/data/field/dataAttributes.Date.json'
import jsonInteger from '@/views/ADempiere/data/field/dataAttributes.Integer.json'
import jsonString from '@/views/ADempiere/data/field/dataAttributes.String.json'
import jsonText from '@/views/ADempiere/data/field/dataAttributes.Text.json'
import Panel from '@/components/ADempiere/Panel'

export default {
  name: 'Dynamic',
  components: {
    Panel
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
