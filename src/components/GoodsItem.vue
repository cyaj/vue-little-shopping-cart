<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="goods.id"
          v-model="isChecked"
        />
        <label class="custom-control-label" :for="goods.id">
          <img :src="goods.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ goods.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ goods.goods_price | formatPrice }}</span>
        <Count :count="goods.goods_count" @changeCount="changeCount"></Count>
      </div>
    </div>
  </div>
</template>

<script>
import Count from './Count'
export default {
  components: {
    Count,
  },
  props: {
    goods: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeCount(count) {
      this.$emit('changeCount', count, this.goods.id)
    },
  },
  computed: {
    isChecked: {
      get() {
        return this.goods.goods_state
      },
      set(value) {
        this.$emit('changeState', value, this.goods.id)
      },
    },
  },
}
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
      border-radius: 50%;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
