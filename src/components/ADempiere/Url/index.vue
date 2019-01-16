
<template>
  <el-input
    v-model="input"
    :disabled="data.Disabled"
    :format="data.FormatPattern"
    :minlength="data.MinLength"
    :maxlength="data.MaxLength"
    :readonly="data.IsReadOnly"
    placeholder="Please input URL"
    patron = "^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/"
    @blur="handlecheck"
  />
</template>

<script>
export default {
  name: 'Url',
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
  },
  methods: {
    handlecheck(e) {
      // Entry pattern, in this case only accepts numbers and letters
      var _Pattern = /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g
      var rex = RegExp(_Pattern)
      var value = e.target.value
      if (rex.test(value) && value.trim() !== '') {
        console.log('url good format')
      } else if (value.trim() === '') {
        console.log('url empty')
      } else {
        // alert("This URL worn format")
        // e.target.focus()
        console.log('url worn')
      }
    }

  }
}
</script>
