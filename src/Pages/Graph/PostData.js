import React from "react";
import { useState } from "react";

function PostData(url, data) {
  const [dataList, temp] = useState({});
  fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (response.status >= 400) {
        return "The server responded with an error";
      }
      return response.json()
    }, (err) => {
      console.log('An error occurred', err);
    })
    .then((json) => temp(json));

  return dataList;
}

export default PostData;

