<script setup lang="ts">
import { main } from "@/use/mainUse";
import { onBeforeMount, watch } from "vue";

const {  orders, getOrder,  cheackTypeValute, spread } =
  main();

const props = defineProps({
	currency: {
      type: String,
      default: '',
    },
  })

onBeforeMount(async () => {
  getOrder();
});
</script>
<template>
	{{ currency }}
  <div v-if="orders">
    <div class="order">
      <div class="order-column">Name</div>
      <div class="order-column">Count</div>
      <div class="order-column">Spread</div>
      <div class="order-column">Price</div>
    </div>
    <div
      class="order"
      :class="order.USD.FROMSYMBOL === 'Ξ' ? 'border' : ''"
      v-for="(order, ids) in orders"
      :key="ids"
    >
      <!-- знаю что индекс для ключа использовать не стоит, но нет id -->
      <div class="order-pair order-column">
        <div>{{ cheackTypeValute(order[currency].FROMSYMBOL) }}</div>
      </div>
      <div class="order-amount order-column">
        <div>{{ order[currency].SUPPLY }}</div>
      </div>
      <div
        :class="spread(order.USD.CHANGEPCTHOUR) ? 'red' : 'green'"
        class="order-spread w"
      >
        <div>{{ order[currency].CHANGEPCTHOUR }}</div>
      </div>
      <div class="order-price order-column">
        <div>{{ order[currency].PRICE }}</div>
      </div>
    </div>
  </div>
	<div class="order-column" v-else>
		Упс произошла ошибка...
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
.order-column {
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
