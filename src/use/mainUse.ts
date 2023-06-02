import axios from "axios";
import { ref } from "vue";
export const main = () => {
  const status = ref();
  const deals = ref();

  const getStatus = async () => {
    await axios
      .get(
        `https://nastintesthodl.stocrm.ru/api/external/v1/offer/all_statuses?SID=10813_0c0a9a2f86eab09196705a274378b64a&BOARD_ID=1843`
      )
      .then((res) => {
        status.value = res.data.RESPONSE;
        status.value = Object.values(status.value)
          .map((el) => el)
          .sort((a, b) => a.SORT - b.SORT);
      })
      .catch((er) => {
        console.log("er", er);
      });
    return status.value;
  };
  const postDeals = async () => {
    await axios
      .post(
        `https://nastintesthodl.stocrm.ru/api/external/v1/offers/get_from_filter?SID=10813_0c0a9a2f86eab09196705a274378b64a`,
        {
          SID: "10813_0c0a9a2f86eab09196705a274378b64a",
          FILTER: { BOARD_ID: 1843 },
          PAGE: 1,
          LIMIT: 10,
          REQUIRED_FIELDS: ["Поле_1", "Поле_2"],
        }
      )
      .then((res) => {
        deals.value = res.data.RESPONSE.DATA;
        console.log("POST22", res);
      })
      .catch((er) => {
        console.log("er", er);
      });
    return status.value;
  };
  const columnsort = (title: string) => {
    return deals.value.filter((el: any) => el.STATUS_NAME === title);
  };

  return { status, getStatus, postDeals, columnsort };
};
