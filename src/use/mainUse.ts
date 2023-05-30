import axios from "axios";
import { ref } from "vue";
export const main = () => {

  const orders = ref();

  const cheackTypeValute = (symbol: string) => {
    return symbol === "Ξ"
      ? "ETH"
      : symbol === "Ƀ"
      ? "Bitcoin"
      : symbol === "Ł"
      ? "Litecoin"
      : "";
  };

  const spread = (orderChabgeHour: string) => {
    return orderChabgeHour.includes("-");
  };

  const getOrder = async () => {
    await axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD,EUR`
      )
      .then((res) => {
        orders.value = res.data.DISPLAY;
				setTimeout(() => {
					getOrder();
				}, 1000);
      }).catch((er)=>{
				console.log('er',er);
			})
    return orders.value;
  };

  return { orders, getOrder,  cheackTypeValute, spread };
};
