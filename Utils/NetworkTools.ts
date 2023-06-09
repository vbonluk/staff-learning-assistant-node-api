export interface ApiCallback {
    (isOK: Boolean, response: any): void
}

enum HttpMethod {
    get = 'GET',
    post = 'POST'
}

export function isFunction(callback: ApiCallback) {
    return typeof callback == "function";
}

export async function ApiPost(url: string, headers: {} , body: {}, callback?: ApiCallback) {
    return ApiCall(url, HttpMethod.post, headers, body, callback)
}

export async function ApiGet(url: string, headers: {}, body: {}, callback?: ApiCallback) {
    return ApiCall(url, HttpMethod.get, headers, body, callback)
}

export async function ApiCall(url: string, method: HttpMethod, headers: {}, body: {}, callback?: ApiCallback) {
    // https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
    // https://zenn.dev/junki555/articles/4ab67fc78ce64c
    // https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html
    // await fetch(url, {headers: headers, method: "POST", body: body})
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(url + "\n" + response.status);
    //         }
    //         return response.json();
    //     })
    //     .then((result) => {
    //         if (isFunction(callback)){
    //             callback(true, result);
    //         }
    //     })
    //     .catch(error => {
    //
    //     });
    try {
        const requestInit: RequestInit = {headers: headers, method: method.toString(), body: JSON.stringify(body)}
        console.log(requestInit)
        const response: Response = await fetch(url.toString(), requestInit);
        const responseJson = await response.json();
        if (callback && isFunction(callback)){
            callback(true, responseJson);
        }
        return responseJson
    } catch (error: any) {
        if (callback && isFunction(callback)){
            callback(false, error);
        }
        throw new Error(error)
    }
}
