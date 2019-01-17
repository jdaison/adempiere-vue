<template>
  <el-select
    v-model="val"
    :multiple="data.Multiple"
    :filterable="data.Filterable"
    :remote="data.Remote"
    :reserve-keyword="data.ReserveKeyword"
    :placeholder="data.Help"
    :readonly="data.IsReadOnly"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"/>
  </el-select>
</template>

<script>
export default {
  name: 'Search',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      val: [],
      loading: false,
      options: [],
      list: []
    }
  },
  beforeMount() {
    this.list = this.data.Options.map(item => {
      return { label: item, value: item }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    }
  }
}
</script>
