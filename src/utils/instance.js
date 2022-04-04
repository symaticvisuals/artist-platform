import axios from "axios";
import Cookies from "js-cookie";

const client = axios.create({ baseURL: "https://dev.4art.in" });
export const request = ({...options}) => {
    client.defaults.headers.common["Authorization"] = Cookies.get("jwt");
    const onSuccess = (response) => {
        return response;
    } 
    const onError = (error) => {
        return error;
    }
    return client(options).then(onSuccess).catch(onError);
}