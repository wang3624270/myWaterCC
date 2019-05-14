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
    getHealthRiskList(data = {}) {
        let url = `http://${host}/WQI/WHIEval`;
        return get(url, data);
    },
    addTarget(data = {}) {
        let url = `http://${host}/DataShow/waterTarget/addTarget`;
        return formPost(url, data);
    },
    modifyTarget(data = {}) {
        let url = `http://${host}/DataShow/waterTarget/modifyTarget`;
        return formPost(url, data);
    },
    getESdata(data = {}) {
        let url = `http://${host}/esTech/getESdata`;
        return get(url, data);
    },
    deleteTarget(data = {}) {
        let url = `http://${host}/DataShow/waterTarget/deleteTarget`;
        return formPost(url, data);
    },
    getGroundData(data = {}) {
        let url = `http://${host}/DataShow/groundwater/getdata`;
        return get(url, data);
    },
    addGround(data = {}) {
        let url = `http://${host}/DataShow/groundwater/addTarget`;
        return formPost(url, data);
    },
    modifyGround(data = {}) {
        let url = `http://${host}/DataShow/groundwater/modifyTarget`;
        return formPost(url, data);
    },
    deleteGround(data = {}) {
        let url = `http://${host}/DataShow//groundwater/deleteTarget`;
        return formPost(url, data);
    },
    getPCAEval(data = {}) {
        let url = `http://${host}/WQI/PCAEval`;
        return get(url, data);
    },
    getSingleFData(data = {}) {
        let url = `http://${host}/WQI/singleFData`;
        return get(url, data);
    },
    getSingleFactor(data = {}) {
        let url = `http://${host}/WQI/singleFactor`;
        return formPost(url, data);
    },
    getBPNetworkData(data = {}) {
        let url = `http://${host}/WQI/BPNetwork`;
        return get(url, data);
    },
    getSingleIndicatorData(data = {}) {
        let url = `http://${host}/WaterIndex/staticByBase`;
        return get(url, data);
    },
    getwuShuiBiodegradabilityData(data = {}) {
        let url = `http://${host}/WaterIndex/wuShuiBiodegradability`;
        return get(url, data);
    },




};
