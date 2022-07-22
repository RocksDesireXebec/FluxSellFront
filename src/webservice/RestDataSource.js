import Axios from "axios";

export class RestDataSource{
    constructor(base_url){
        this.BASE_URL = base_url;
    }

    GetData(callback){
        this.SendRequest("get",this.BASE_URL,callback);
    }

    async Store(data,callback){
        this.SendRequest("post",this.BASE_URL,callback,data);
    }

    async SendRequest(method, url, callback, data){
        callback((await Axios.request({
            method : method,
            url : url,
            data : data
        })).data);
    }
}