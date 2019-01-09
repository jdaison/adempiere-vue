
<template>
  <div class="app-container">
    <tab :data-tabs="dataTabs" />
  </div>
</template>

<script>
import dataTab1 from '@/views/ADempiere/data/tab/dataTab1'
import dataTab2 from '@/views/ADempiere/data/tab/dataTab2'
import Tab from '@/components/ADempiere/Tab'

export default {
  name: 'TabDemo',
  components: {
    Tab
  },
  data() {
    return {
      tabName: 'Test',
      tab: dataTab1,
      dataTabs: [
        dataTab1,
        dataTab2
      ]
    }
  }
}
</script>
