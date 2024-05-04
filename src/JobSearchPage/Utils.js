export const fetchApi = (apiParams = {}, successCb = () => { }, errorCb = () => { }) => {
    const body = JSON.stringify(apiParams);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => successCb(result))
        .catch((error) => errorCb(error));
}