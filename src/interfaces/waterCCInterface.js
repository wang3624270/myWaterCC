import Request from '../kit/Request';
import UrlConfig from '../kit/urlConfig';

const host = UrlConfig.waterCCApiHost;

function post(url, data) {
    //json序列化时去掉空值属性
    let jsonStr = JSON.stringify(data, function(k, v){
        if(v === 0) {
            return v;
        }
        if(!v) {
            return undefined;
        }
        if(Array.isArray(v) && v.length == 0){
            return undefined;
        }
        return v;
    });

    return Request({
        data: jsonStr,
        method: 'post',
        contentType: 'application/json',
        url
    });
}

function get(url, data) {
    return Request({
        data,
        method: 'get',
        url
    });
}

function formPost(url, data) {
    return Request({
        data: data,
        method: 'post',
        contentType: 'application/x-www-form-urlencoded',
        url
    });
}

export default {
    SUCCESS: 200,

    getWaterAllDataList(data = {}) {
        let url = `http://${host}/DataShow/WaterAll/findbymany`;
        return get(url, data);
    },
    getWaterMonthList(data = {}) {
        let url = `http://${host}/DataShow/WaterMonth/findbymany`;
        return get(url, data);
    },
    getWaterTargetList(data = {}) {
        let url = `http://${host}/DataShow/waterTarget/getdata`;
        return get(url, data);
    },




};
