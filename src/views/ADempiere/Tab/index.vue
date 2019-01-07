
<template>
  <div class="app-container">
    <tab id="1" :data-attributes="dataAttributes" :tab-name="tabName" />
  </div>
</template>

<script>
import jsonButton from '@/views/ADempiere/data/field/dataAttributes.Button.json'
import jsonDate from '@/views/ADempiere/data/field/dataAttributes.Date.json'
import jsonInteger from '@/views/ADempiere/data/field/dataAttributes.Integer.json'
import jsonString from '@/views/ADempiere/data/field/dataAttributes.String.json'
import jsonText from '@/views/ADempiere/data/field/dataAttributes.Text.json'
import Tab from '@/components/ADempiere/Tab'

export default {
  name: 'TabDemo',
  components: {
    Tab
  },
  data() {
    return {
      tabName: 'Test',
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
