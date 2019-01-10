
<template>
  <div class="app-container">
    <panel :data-attributes="dataAttributes" />
  </div>
</template>

<script>
/* json response prototype with attributes of the field and column */
// import jsonAmount from '@/views/ADempiere/data/field/dataAttributes.Amount.json'
import jsonButton from '@/views/ADempiere/data/field/dataAttributes.Button.json'
// import jsonDate from '@/views/ADempiere/data/field/dataAttributes.Date.json'
// import jsonInteger from '@/views/ADempiere/data/field/dataAttributes.Integer.json'
// import jsonString from '@/views/ADempiere/data/field/dataAttributes.String.json'
import jsonText from '@/views/ADempiere/data/field/dataAttributes.Text.json'
import jsonYesNo from '@/views/ADempiere/data/field/dataAttributes.YesNo.json'
import Panel from '@/components/ADempiere/Panel'

export default {
  name: 'DynamicDemo',
  components: {
    Panel
  },
  data() {
    return {
      dataAttributes: [
        // jsonAmount,
        jsonButton,
        // jsonDate,
        // jsonInteger,
        // jsonString,
        jsonText,
        jsonYesNo
      ]
    }
  }
}
</script>
