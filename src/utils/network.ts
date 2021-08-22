import axios,{AxiosRequestConfig} from "axios";

export async function  makeNetworkCall(config:AxiosRequestConfig) {
   
    return await axios({
      ...config
    })
}