import axios from "axios";

async function getArrInfoByRoute(stId, busRouteId, ord) {
  const url = "http://127.0.0.1:8000/api/getArrInfoByRoute";
  const serviceKey =
    "3b8fT3jknHopLMG2c9X9Oie3fBGDDu1lUxG7z4kz5NhBXyRYE9HT6tj0b7f3XjF329+EV69Wwynx+0qO4LtJBw==";
  try {
    await axios
      .get(url, {
        params: {
          serviceKey: serviceKey,
          stId,
          busRouteId,
          ord,
        },
      })
      .then(async (res) => {
        const data = { ...res.data.msgBody.itemList[0] };
        console.log(data);
        return 10;
      });
  } catch (err) {
    console.log(err);
  }
}
export default getArrInfoByRoute;
