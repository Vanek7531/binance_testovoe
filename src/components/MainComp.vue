<script setup lang="ts">
import { main } from "@/use/mainUse";
import { onBeforeMount, watch } from "vue";

const {  status, getStatus, columnsort, postDeals } =
  main();

onBeforeMount(async () => {
  getStatus();
	postDeals()
});
</script>
<template>
	<div class="columns">
		<div class="column" v-for="order in status" :key="order.STATUS_ID">
			{{ order.TITLE }}
			<div class="card" v-for ="item in columnsort(order.TITLE)" :key="item">
				<div>№{{item.OFFER_ID}}</div>
				<div>{{ item.CONTACT_TITLE }}</div>
				<div>{{item.SEGMENT_NAME}}</div>
				<div>{{item.OFFER_FIRST_RESPONSIBLE}}</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.columns{
	display: flex;
	justify-content: space-between;
	// gap: 20px;
}
.column{
	min-width: 100px;
	display: flex;
	gap: 20px;
	padding: 0 20px;
	flex-direction: column;
	border: 1px solid black;
	background: gray;
}

.card{
	border: 1px solid white;
	padding: 5px;
}

</style>
