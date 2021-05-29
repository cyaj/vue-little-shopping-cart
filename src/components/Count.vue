<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="minus">-</button>
    <input
      type="number"
      class="form-control inp"
      v-model="counts"
      @change="inputFn"
    />
    <button type="button" class="btn btn-light" @click="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    minus() {
      if (this.counts <= 1) return
      this.counts--
    },
    add() {
      this.counts++
    },
    inputFn(e) {
      if (+e.target.value < 1) e.target.value = 1
    },
  },
  computed: {
    counts: {
      get() {
        return this.count
      },
      set(value) {
        if (value < 1) value = 1
        this.bus.$emit('changeCount', +value, this.id)
      },
    },
  },
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
}
</style>
