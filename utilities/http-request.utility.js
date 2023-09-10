// const axios = require("axios");
import axios from "axios";

export async function sendPostRequest(
  requestUrl,
  header,
  body,
  queryParams
) {
  const apiResponse = await axios({
    method: "post",
    url: requestUrl,
    headers: header,
    params: queryParams,
    data: body
  });
  return apiResponse;
}

export async function sendGetRequest(
  requestUrl,
  header,
  body,
  queryParams
) {
  const apiResponse = await axios({
    method: "get",
    url: requestUrl,
    headers: header,
    params: queryParams,
    data: body
  });
  return apiResponse;
}
