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
  name: 'Field',
  props: {
    // receives the property that is an object with all the attributes
    dataAttributes: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      typeField: this.dataAttributes.type,
      componentTypeRange: [
        'Amount', 'Date', 'DateTime', 'Integer', 'Numbers', 'Quantity', 'Time'
      ]
    }
  },
  computed: {
    // load the component that is indicated in the attributes of the received property
    componentLoader() {
      var typeReference = this.evalutateType(this.dataAttributes.type)
      return () => import('./' + typeReference)
    }
  },
  beforeMount() {
    /*
    // if it is a range, it omits the minimum and the maximum value
    if (this.dataAttributes.data.IsRange) {
      this.dataAttributes.data.ValueMin = null
      this.dataAttributes.data.ValueMax = null
    }
    */
    this.evaluateNULL()

    if (this.dataAttributes.type === 'Date' && this.dataAttributes.type === 'DateTime') {
      if (this.dataAttributes.data.VFormat.search(/[Y]/) !== -1) { this.dataAttributes.data.VFormat = this.dataAttributes.data.VFormat.replace(/[Y]/gi, 'y') }
    }
    if (this.dataAttributes.type === 'Date') {
      if (this.dataAttributes.data.VFormat.search(/[m]/) !== -1) { this.dataAttributes.data.VFormat = this.dataAttributes.data.VFormat.replace(/[m]/gi, 'M') }
    }
  },
  methods: {
    loadComponent() {
      this.componentLoader().then(comp => {
        console.log(comp.data)
      })
    },
    /*
     + Evaluate the null data type to set it as undefined
     */
    evaluateNULL() {
      var json = this.dataAttributes.data
      for (const item in json) {
        if (json[item] == null) {
          json[item] = undefined
        }
      }
      this.dataAttributes.data = json
    },
    /*
     * Evaluate by the ID and name of the reference to call the component type
     */
    evalutateType(typeComponent) {
      // variable to return with the assigned value after evaluating the parameter
      var type = ''

      switch (typeComponent) {
        case 25:
        case 'Account':
          type = 'Account'
          break

        case 12:
        case 'Amount':
          type = 'Amount'
          break

        case 33:
        case 'Assignment':
          type = 'Assignment'
          break

        case 23:
        case 'Binary':
          type = 'Binary'
          break

        case 28:
        case 'Button':
          type = 'Button'
          break

        case 53370:
        case 'Chart':
          type = 'Chart'
          break

        case 27:
        case 'Color':
          type = 'Color'
          break

        case 37:
        case 'Costs+Prices':
        case 'CostsPrices':
          type = 'CostsPrices'
          break

        case 15:
        case 'Date':
          type = 'Date'
          break

        case 16:
        case 'Date+Time':
        case 'DateTime':
          type = 'DateTime'
          break

        case 39:
        case 'FileName':
          type = 'FileName'
          break

        case 38:
        case 'FilePath':
          type = 'FilePath'
          break

        case 53670:
        case 'FilePathOrName':
          type = 'FilePathOrName'
          break

        case 13:
        case 'ID':
          type = 'ID'
          break

        case 32:
        case 'Image':
          type = 'Image'
          break

        case 11:
        case 'Integer':
          type = 'Integer'
          break

        case 51:
        case 'Numbers':
          type = 'Numbers'
          break

        case 17:
        case 'List':
          type = 'List'
          break

        case 21:
        case 'Location (Address)':
        case 'Location/Address':
        case 'Location':
          type = 'Location'
          break

        case 31:
        case 'Locator (WH)':
        case 'Locator':
          type = 'Locator'
          break

        case 34:
        case 'Memo':
          type = 'Memo'
          break

        case 22:
        case 'Number':
          type = 'Number'
          break

        case 42:
        case 'Printer Name':
        case 'PrinterName':
          type = 'PrinterName'
          break

        case 35:
        case 'Product Attribute':
        case 'ProductAttribute':
          type = 'ProductAttribute'
          break

        case 29:
        case 'Quantity':
          type = 'Quantity'
          break

        case 30:
        case 'Search':
          type = 'Search'
          break

        case 10:
        case 'String':
          type = 'String'
          break

        case 18:
        case 'Table':
          type = 'Table'
          break

        case 19:
        case 'Table Direct':
        case 'TableDirect':
          type = 'TableDirect'
          break

        case 14:
        case 'Text':
          type = 'Text'
          break

        case 36:
        case 'Text Long':
        case 'TextLong':
          type = 'TextLong'
          break

        case 24:
        case 'Time':
          type = 'Time'
          break

        case 40:
        case 'URL':
          type = 'URL'
          break

        case 20:
        case 'Yes-No':
        case 'YesNo':
          type = 'YesNo'
          break
      } // end switch
      return type
    }
  }
}
</script>

<style></style>
