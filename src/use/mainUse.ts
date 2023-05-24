import axios from "axios";
import { ref } from "vue";
export const main = () => {
  const someget = ref();
  let orderStream = {
    lastUpdateId: 202,
    bids: [
      ["0.0024", "10"],
      ["0.0023", "20"],
      ["0.0022", "30"],
    ],
    asks: [
      ["0.0026", "10"],
      ["0.0027", "20"],
      ["0.0028", "30"],
    ],
  };

  let orders = [
    {
      id: 1342,
      pair: "RTD_USDT",
      price: 0.2,
      amount: 0.001,
      side: true,
    },
    {
      id: 1343,
      pair: "RTD_USDT",
      price: 0.3,
      amount: 0.0015,
      side: false,
    },
  ];

  // var apiKey =
  //   "ba09f9c937fbba96620984f3c27729ccde41d56d22109bd06dde6a44b45552af";

  // var ccStreamer = new WebSocket(
  //   "wss://streamer.cryptocompare.com/v2?api_key=" + apiKey
  // );
  // ccStreamer.onopen = function onStreamOpen() {
  //   var subRequest = {
  //     action: "SubAdd",
  //     subs: ["21 ~ BTC"],
  //   };
  //   let a = ccStreamer.send(JSON.stringify(subRequest));
	// 	console.log('a',a);
  // };

  // ccStreamer.onmessage = function onStreamMessage(message) {
  //   var message = event.data;
  //   console.log("Received from Cryptocompare: " + message);
  // };

	const cheackTypeValute = (symbol:string) =>{
		return  symbol === 'Ξ' ? 'ETH' : symbol === 'Ƀ' ? 'Bitcoin' : symbol === 'Ł' ? 'Litecoin' : ''
	}

	const spread = (orderChabgeHour:string) => {
		return orderChabgeHour.includes('-')
	}

  const getOrder = () => {
		axios
		.get(
			"https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD"
		)
		.then((response) => {
			someget.value = response.data.DISPLAY;
		});
  };

  return { orderStream, orders, getOrder, someget, cheackTypeValute, spread };
};
