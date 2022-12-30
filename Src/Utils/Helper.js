import { baseUrl } from "./Constant";

export const apiCallWithGet = async (url) => {
    let init = {
        method: "get",
        headers: {
            'Accept': 'application/json',
            "Content-Type": 'application/json',
            "Accept-Language": "en",
        },
    };
    let APIURL = baseUrl + "/" + url;
    //   console.log("data", { apiurl: APIURL ,token:token})

    return fetch(APIURL, init).then(response => response.json()).then(res => {
        return res

    }).catch(err => {
        return { status: false, message: err.toString() }
    })
}