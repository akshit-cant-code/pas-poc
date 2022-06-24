import React from "react";
import { useState } from "react";

var dataList = [];
function GetData(url) {
    const [dataList, temp] = useState({});
    fetch(url)
        .then(res => {
            if (res.status >= 400) {
                return "The server responded with an error";
            }
            res.json()
        }, (err) => {
            console.log('An error occurred', err);
        }
        )
        .then(
            (result) => {
                temp({
                    isLoaded: true,
                    dataList: result
                });
            })
    return dataList;
}


export default GetData;

