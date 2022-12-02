const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

app.listen(8000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
async function getArrInfoByRoute({ query }) {
  console.log(query);
  const url = "http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRoute";
  // const serviceKey =
  //   "3b8fT3jknHopLMG2c9X9Oie3fBGDDu1lUxG7z4kz5NhBXyRYE9HT6tj0b7f3XjF329+EV69Wwynx+0qO4LtJBw==";
  const serviceKey =
    "J3miO+8zpvkreFK5siLt1qsaitbnKTNX76soIQumktM7dcfjgeWHxANJT8nYJ6wo/R8pMkeeC+zuFwG6WIrxhw==";
  let response;
  try {
    response = await axios.get(url, {
      params: {
        serviceKey: serviceKey,
        stId: query.stId,
        busRouteId: query.busRouteId,
        ord: query.ord,
        resultType: "json",
      },
    });
  } catch (err) {
    console.log(err);
  }
  response = response.data;
  return response;
}
async function searchSTNTimeTableByIDService({ query }) {
  console.log(query);
  const url = "http://openapi.seoul.go.kr:8088/";
  // const serviceKey =
  //   "3b8fT3jknHopLMG2c9X9Oie3fBGDDu1lUxG7z4kz5NhBXyRYE9HT6tj0b7f3XjF329+EV69Wwynx+0qO4LtJBw==";
  const serviceKey = "6861506f5473696139355a6d765774";
  let response;
  const start_index = String(query.start_index);
  const end_index = String(query.end_index);
  const station_cd = String(query.station_cd);
  const week_tag = String(query.week_tag);
  const inout_tag = String(query.inout_tag);
  try {
    response = await axios.get(
      url +
        serviceKey +
        "/json" +
        "/SearchSTNTimeTableByIDService" +
        start_index +
        "/" +
        end_index +
        "/" +
        station_cd +
        "/" +
        week_tag +
        "/" +
        inout_tag
    );
  } catch (err) {
    console.log(err);
  }
  response = response.data;
  return response;
}

app.get("/api/getArrInfoByRoute", (req, res) => {
  getArrInfoByRoute(req).then((response) => {
    return res.send(response);
  });
});

app.get("/api/searchSTNTimeTableByIDService", (req, res) => {
  searchSTNTimeTableByIDService(req).then((response) => {
    return res.send(response);
  });
});
