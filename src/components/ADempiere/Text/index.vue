
<template>
  <textarea-base :data="data"/>
</template>

<script>
import TextareaBase from '@/components/ADempiere/TextAreaBase'
export default {
  name: 'Textarea',
  components: {
    TextareaBase
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
