<template>
  <el-tooltip
    :content="dataAttributes.type + ': ' + dataAttributes.data.Help + ', ' + dataAttributes.data.Description"
    class="item"
    effect="dark"
    placement="top" >

    <div>
      <span v-if="dataAttributes.type.toLowerCase() != 'button'" class="demo-input-label" >
        {{ dataAttributes.data.Name }}
      </span>

      <component :is="componentLoader" :data="dataAttributes.data" />
      <component
        v-if="dataAttributes.data.IsRange && componentTypeRange.includes(dataAttributes.type)"
        :is="componentLoader"
        :data="dataAttributes.data" />
    </div>
  </el-tooltip>
</template>

<script>
/*
 * This is the base component for linking the components according to the
 * reference (or type of visualization) of each field
 */
export default {
  name: 'Reference',
  props: {
    // receives the property that is an object with all the attributes
    dataAttributes: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      componentTypeRange: [
        'Amount', 'Date', 'DateTime', 'Integer', 'Quantity', 'Time'
      ]
    }
  },
  computed: {
    // load the component that is indicated in the attributes of the received property
    componentLoader() {
      return () => import('./' + this.dataAttributes.type)
    }
  },
  beforeMount() {
    // if it is a range, it omits the minimum and the maximum value
    if (this.dataAttributes.data.IsRange) {
      this.dataAttributes.data.ValueMin = null
      this.dataAttributes.data.ValueMax = null
    }
  },
  methods: {
    loadComponent() {
      this.componentLoader().then(comp => {
        console.log(comp.data)
      })
    }
  }
}
</script>

<style></style>
