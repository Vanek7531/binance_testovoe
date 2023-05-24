<script setup lang="ts">
import { main } from '@/use/mainUse'
import { onBeforeMount, watch } from 'vue'

const { orderStream, orders, getOrder, someget, cheackTypeValute, spread } = main()

onBeforeMount(async () => {
  getOrder()
  // setInterval(() => {
  //   getOrder()
  // }, 1000)
})
</script>
<template>
  <!-- <pre>{{someget}}12</pre> -->
  <div class="order">
    <div class="w">Name</div>
    <div class="w">Count</div>
    <div class="w">Spread</div>
    <div class="w">Price</div>
  </div>
  <div
    class="order"
    :class="order.USD.FROMSYMBOL === 'Ξ' ? 'border' : ''"
    v-for="(order, ids) in someget" :key="ids"
  >
	<!-- знаю что индекс для ключа использовать не стоит, но нет id -->
    <div class="order-pair w">
      <div>{{ cheackTypeValute(order.USD.FROMSYMBOL) }}</div>
      <!-- <div v-else>Bitcoin</div> -->
    </div>
    <div class="order-amount w">
      <div>{{ order.USD.SUPPLY }}</div>
    </div>
    <div :class="spread(order.USD.CHANGEPCTHOUR) ? 'red' : 'green'" class="order-spread w">
      <div>{{order.USD.CHANGEPCTHOUR}}</div>
    </div>
    <div class="order-price w">
      <div>{{ order.USD.PRICE }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order {
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  border-collapse: collapse;
  margin-top: -2px;
  padding-top: 2px;
}
.w {
  text-align: center;

  min-width: 100px;
}
.border {
  position: relative;
  border: 2px solid red;
}

.red {
	color: red;
}
.green {
	color: green;
}
</style>
