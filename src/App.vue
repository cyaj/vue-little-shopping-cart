<template>
  <div id="container">
    <MyHeader></MyHeader>
    <GoodsItem
      v-for="item in goodsList"
      :key="item.id"
      :goods="item"
      @changeState="changeState"
      @changeCount="changeCount"
    ></GoodsItem>
    <MyFooter :goodsList="goodsList" @allCheck="allCheck"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import GoodsItem from './components/GoodsItem'
import axios from 'axios'
export default {
  components: {
    MyHeader,
    MyFooter,
    GoodsItem,
  },
  data() {
    return {
      goodsList: [],
    }
  },
  async created() {
    const res = await axios({
      method: 'get',
      url: 'https://www.escook.cn/api/cart',
    })
    const { status, list } = res.data
    // console.log(res)
    if (status === 200) this.goodsList = list
  },
  methods: {
    // 复选框状态
    changeState(value, id) {
      this.goodsList.find(item => item.id === id).goods_state = value
    },
    // 全选功能
    allCheck(value) {
      this.goodsList.forEach(item => (item.goods_state = value))
    },
    // 改变数量
    changeCount(count, id) {
      this.goodsList.find(item => item.id === id).goods_count = count
    },
  },
}
</script>

<style scoped>
#container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
