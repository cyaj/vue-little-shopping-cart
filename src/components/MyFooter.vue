<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        v-model="allChecked"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price"> ¥ {{ totalPrice }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ({{ totalNum }})
    </button>
  </div>
</template>

<script>
export default {
  props: {
    goodsList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    allChecked: {
      get() {
        return this.goodsList.every(item => item.goods_state)
      },
      set(value) {
        this.$emit('allCheck', value)
      },
    },
    totalPrice() {
      let price = 0
      this.goodsList.forEach(item => {
        if (item.goods_state) {
          price += item.goods_price * item.goods_count
        }
      })
      return price.toFixed(2)
    },
    totalNum() {
      let num = 0
      this.goodsList.forEach(item => {
        if (item.goods_state) {
          num += item.goods_count
        }
      })
      return num
    },
  },
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    // line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
  .custom-control-label::before {
    border-radius: 50%;
  }
}
</style>
