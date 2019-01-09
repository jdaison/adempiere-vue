
<template>
  <el-tabs v-model="activeTab" :tab-position="tabPosition" type="border-card" @tab-click="handleClick">
    <el-tab-pane
      v-for="(item, key) in dataTabs"
      :label="item.nameTab"
      :name="item.nameTab"
      :id_tab="item.ID_Tab"
      :key="key" >
      <panel :data-attributes="item.dataAttributes" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Panel from '@/components/ADempiere/Panel'

export default {
  name: 'TabADempiere',
  components: {
    Panel
  },
  props: {
    // Receives the property that is an object with all the attributes
    dataTabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // Defines the first tab received as active
      activeTab: this.dataTabs[0].nameTab,
      tabPosition: 'top'
    }
  },
  methods: {
    handleClick(tab, event) {
      // alert(tab.$el.attributes.id_tab.value)
      console.log(tab.$el.attributes.id_tab.value)
    }
  }
}
</script>
