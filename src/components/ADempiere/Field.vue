
<template>
  <!-- If it is marked as a single field or it is within the FIELD_ONLY
    set, it will not display the label associated with the field -->
  <el-form-item
    v-show="dataAttributes.IsDisplayed && dataAttributes.IsActive"
    v-if="dataAttributes.IsFieldOnly === true ||
    evaluateOnlyField(dataAttributes.DisplayType)" >
    <component :is="afterLoader" :data="dataAttributes" />
  </el-form-item>
  <!-- On the contrary show the label associated with the column -->
  <el-form-item
    v-else
    v-show="dataAttributes.IsDisplayed && dataAttributes.IsActive"
    :label="dataAttributes.Name">
    <component :is="afterLoader" :data="dataAttributes" />
  </el-form-item>
</template>

<script>
import REFERENCES, { FIELD_ONLY, FIELD_RANGE } from '@/components/ADempiere/Field/references'

/**
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
      allFields: REFERENCES,
      fieldOnly: FIELD_ONLY,
      fieldRange: FIELD_RANGE
    }
  },
  computed: {
    // load the component that is indicated in the attributes of received property
    afterLoader() {
      var typeReference = this.evalutateType(this.dataAttributes.DisplayType)
      return () => import('./' + typeReference + '/')
    }
  },
  beforeMount() {
    this.checkValue()
    this.checkValueFormat()
  },
  methods: {
    /**
     * Parse the date format to be compatible with element-ui
     */
    checkValueFormat() {
      if (this.dataAttributes.DisplayType === 'Date' ||
        this.dataAttributes.DisplayType === 'DateTime') {
        if (this.dataAttributes.VFormat.search(/[Y]/) !== -1) {
          this.dataAttributes.VFormat = this.dataAttributes.VFormat.replace(/[Y]/gi, 'y')
        }
      }
      if (this.dataAttributes.DisplayType === 'Date') {
        if (this.dataAttributes.VFormat.search(/[m]/) !== -1) {
          this.dataAttributes.VFormat = this.dataAttributes.VFormat.replace(/[m]/gi, 'M')
        }
      }
    },
    /**
     * Evaluate the null data type to set it as undefined
     * Evaluate the char data ('Y'. 'N') to set it as false or true
     */
    checkValue() {
      var json = this.dataAttributes
      for (const item in json) {
        // parse null value
        if (json[item] == null) {
          json[item] = undefined
        }
        // parse boolean value
        if (json[item] === 'Y' || json[item] === 'y') {
          json[item] = true
        } else if (json[item] === 'N' || json[item] === 'n') {
          json[item] = false
        }
      }
      this.dataAttributes = json
    },
    /**
     * Evaluate the current field with the range type fields contained in the
     * constant FIELD_RANGE
     * @param  {[integer]} id [identifier of the type of display]
     * @return {[boolean]}
     */
    evaluateRange(id) {
      var arr = this.fieldRange
      for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id) { return true }
      }
      return false
    },
    /**
     * Evaluate the current field with the only fields contained in the
     * constant FIELD_ONLY
     * @param  {[integer]} id [identifier of the type of display]
     * @return {[boolean]}
     */
    evaluateOnlyField(id) {
      var arr = this.fieldOnly
      for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id) { return true }
      }
      return false
    },
    /**
     * Evaluate by the ID and name of the reference to call the component type
     * @param mixed param, received from data
     * @return string type, assigned value to folder after evaluating the parameter
     */
    evalutateType(param) {
      for (let i = 0; i < this.allFields.length; i++) {
        if (param === this.allFields[i].id || param === this.allFields[i].type) {
          if (this.allFields[i].support) {
            return this.allFields[i].type
          } else {
            return 'String'
          }
        }
      }
      return 'String'
    }
  }
}
</script>

<style scoped>
  /**
   * Reduce the spacing between the form element and its label
   */
  .el-form--label-top .el-form-item__label {
    padding-bottom: 0px !important;
  }

  /**
   * Separation between elements (item) of the form
   */
  .el-form-item {
    margin-bottom: 10px !important;
  }
</style>
<style>
  /* Global Styles */
  .el-textarea__inner {
    min-height: 36px !important;
    /*
    height: 36px auto !important;
    max-height: 54.2333px !important;
    */
  }
</style>
