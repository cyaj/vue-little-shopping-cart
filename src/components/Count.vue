<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" :disabled="count === 1" @click="minus">-</button>
    <input
      type="number"
      class="form-control inp"
      :value="count"
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
  },
  methods: {
    minus() {
      if (this.count <= 1) return
      this.$emit('changeCount', this.count - 1)
    },
    add() {
      this.$emit('changeCount', this.count + 1)
    },
    inputFn(e) {
      let num = +e.target.value | 0
      if (num < 1) {
        num = 1
        e.target.value = num
      }
      this.$emit('changeCount', num)
      // 输入框数字取整
      e.target.value = +e.target.value | 0
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
