<template>
  <el-input
    v-model="input"
    :minlength="data.MinLength"
    :maxlength="data.MaxLength"
    type="text"
    pattern="[A-Za-z/.0-9_-]{1,200}"
    placeholder="Please PrindsterPath input"
    @change="handlecheck"
  />
</template>

<script>
export default {
  name: 'FilePath',
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
      // Patron de entrada, en este caso solo acepta numeros y letras
      const pattern = /[A-Za-z/0-9]/
      return pattern.test()
    }

  }
}
</script>
