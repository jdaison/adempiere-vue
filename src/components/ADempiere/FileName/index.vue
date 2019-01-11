<template>
  <el-input
    v-model="input"
    :minlength="data.MinLength"
    :maxlength="data.MaxLength"
    type="text"
    pattern="[A-Za-z.0-9_-]{1,15}"
    placeholder="Please PrindsterName input"
    @change="handlecheck"
  />
</template>

<script>
export default {
  name: 'FileName',
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
      const pattern = /[A-Za-z0-9]/
      return pattern.test()
    }

  }
}
</script>
