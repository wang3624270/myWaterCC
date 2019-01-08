export default {
    dataBases:[
        {label:'WaterAll'},
        {label:'WaterMonth'},
        {label:'RealTimedData'},
        {label:'Limit_value'},
        {label:'surfaceWaterStand'},
        {label:'Targets'}
    ],
    delayTime(){
      return Math.random()*1000+1000;
    },
    total(){
        return Math.random().toFixed(5)*100000+100000;
    },
    list1:[{"id":1,"samcode":"20110216-J081","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"502","targetname":"总大肠菌群","samvaluedefind":"0"}, {"id":2,"samcode":"20110216-J081","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"205","targetname":"总硬度    ","samvaluedefind":" 342"}, {"id":3,"samcode":"20110216-J080","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"103","targetname":"浑浊度		","samvaluedefind":"2.3"}, {"id":4,"samcode":"20110216-J080","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"b15","targetname":"色度		","samvaluedefind":"2.5"}, {"id":5,"samcode":"20110216-J080","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"104","targetname":"臭和味		","samvaluedefind":"0"}, {"id":6,"samcode":"20110216-J080","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"105","targetname":"肉眼可见物","samvaluedefind":"0"}, {"id":7,"samcode":"20110216-J080","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"137","targetname":"pH	     	","samvaluedefind":"7.24"}, {"id":8,"samcode":"20110216-J080","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"516","targetname":"菌落总数	","samvaluedefind":"47"}, {"id":9,"samcode":"20110216-J080","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"502","targetname":"总大肠菌群","samvaluedefind":"0"},{"id":10,"samcode":"20110216-J080","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"205","targetname":"总硬度	   ","samvaluedefind":"477"},{"id":11,"samcode":"20110216-J079","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"103","targetname":"浑浊度	   ","samvaluedefind":"3.4"},{"id":12,"samcode":"20110216-J079","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"b15","targetname":"色度	   ","samvaluedefind":"7"},{"id":13,"samcode":"20110216-J079","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"104","targetname":"臭和味	   ","samvaluedefind":"0"},{"id":14,"samcode":"20110216-J079","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"105","targetname":"肉眼可见物","samvaluedefind":"0"},{"id":15,"samcode":"20110216-J079","wsupplyunit":"济南市供排水监测中心2011年02月份水质督察计划","wqitype":"监督检测","samaddr":"济南市供排水监测中心","samtime":"2011.02.15~16","targetcode":"137","targetname":"pH","samvaluedefind":"7.59"}],
    list2: [{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "45.7","samcode": "98262","samaddr": "山大辅仁学校供水泵房","targetname": "大肠埃希氏菌","checktype": "应急监测","wsupplyunit": "山大辅仁学校自建设施供水","targetcode": "515","id": 1,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "37","samcode": "98262","samaddr": "山大辅仁学校供水泵房","targetname": "菌落总数","checktype": "应急监测","wsupplyunit": "山大辅仁学校自建设施供水","targetcode": "516","id": 2,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "6","samcode": "98262","samaddr": "山大辅仁学校供水泵房","targetname": "耐热大肠菌群","checktype": "应急监测","wsupplyunit": "山大辅仁学校自建设施供水","targetcode": "503","id": 3,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "75.4","samcode": "98262","samaddr": "山大辅仁学校供水泵房","targetname": "总大肠菌群","checktype": "应急监测","wsupplyunit": "山大辅仁学校自建设施供水","targetcode": "502","id": 4,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "6.3","samcode": "98261","samaddr": "东山墅小区","targetname": "大肠埃希氏菌","checktype": "应急监测","wsupplyunit": "东山墅小区自建设施供水","targetcode": "515","id": 5,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "5","samcode": "98261","samaddr": "东山墅小区","targetname": "菌落总数","checktype": "应急监测","wsupplyunit": "东山墅小区自建设施供水","targetcode": "516","id": 6,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "4","samcode": "98261","samaddr": "东山墅小区","targetname": "耐热大肠菌群","checktype": "应急监测","wsupplyunit": "东山墅小区自建设施供水","targetcode": "503","id": 7,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "12.1","samcode": "98261","samaddr": "东山墅小区","targetname": "总大肠菌群","checktype": "应急监测","wsupplyunit": "东山墅小区自建设施供水","targetcode": "502","id": 8,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "7.5","samcode": "98260","samaddr": "历下燕山工业开发建设总公司设备间","targetname": "大肠埃希氏菌","checktype": "应急监测","wsupplyunit": "历下燕山工业开发建设总公司自建设施供水2","targetcode": "515","id": 9,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "6","samcode": "98260","samaddr": "历下燕山工业开发建设总公司设备间","targetname": "菌落总数","checktype": "应急监测","wsupplyunit": "历下燕山工业开发建设总公司自建设施供水2","targetcode": "516","id": 10,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "0","samcode": "98260","samaddr": "历下燕山工业开发建设总公司设备间","targetname": "耐热大肠菌群","checktype": "应急监测","wsupplyunit": "历下燕山工业开发建设总公司自建设施供水2","targetcode": "503","id": 11,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "18.9","samcode": "98260","samaddr": "历下燕山工业开发建设总公司设备间","targetname": "总大肠菌群","checktype": "应急监测","wsupplyunit": "历下燕山工业开发建设总公司自建设施供水2","targetcode": "502","id": 12,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "13.6","samcode": "98259","samaddr": "历下燕山工业开发建设总公司供水清水池","targetname": "大肠埃希氏菌","checktype": "应急监测","wsupplyunit": "历下燕山工业开发建设总公司自建设施供水1","targetcode": "515","id": 13,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "6","samcode": "98259","samaddr": "历下燕山工业开发建设总公司供水清水池","targetname": "菌落总数","checktype": "应急监测","wsupplyunit": "历下燕山工业开发建设总公司自建设施供水1","targetcode": "516","id": 14,"wqitype": "生活饮用水"},{"samtime": "2016-05-24T16:00:00.000Z","samvaluedefind": "1","samcode": "98259","samaddr": "历下燕山工业开发建设总公司供水清水池","targetname": "耐热大肠菌群","checktype": "应急监测","wsupplyunit": "历下燕山工业开发建设总公司自建设施供水1","targetcode": "503","id": 15,"wqitype": "生活饮用水"}],
    list3: [
        {

            "samtime": "2016-05-24T16:00:00.000Z",
            "samvaluedefind": "174",
            "samcode": "98262",
            "samaddr": "臭氧活性炭滤灌出水口",
            "targetname": "硝酸盐",
            "checktype": "科研监测",
            "wsupplyunit": "臭氧活性炭滤灌出水",
            "targetcode": "208",
            "id": 1,
            "wqitype": "进厂水","TestIndex":"口感较差！（0.42）"},
        {

            "samtime": "2016-05-24T16:00:00.000Z",
            "samvaluedefind": "0.37",
            "samcode": "982321",
            "samaddr": "茂岭花苑小区传达室",
            "targetname": "钾",
            "checktype": "应急监测",
            "wsupplyunit": "茂岭花苑小区地下水",
            "targetcode": "212",
            "id": 2,
            "wqitype": "生活饮用水","TestIndex":"口感较差！（0.13）"},
        {

            "samtime": "2016-05-24T16:00:00.000Z",
            "samvaluedefind": "97",
            "samcode": "398262D",
            "samaddr": "山大辅仁学校供水泵房",
            "targetname": "耐热大肠菌群",
            "checktype": "硝酸盐",
            "wsupplyunit": "山大辅仁学校自建设施供水",
            "targetcode": "208",
            "id": 3,
            "wqitype": "生活饮用水","TestIndex":"口感较差！（1.42）"},
        {

            "samtime": "2016-05-24T16:00:00.000Z",
            "samvaluedefind": "",
            "samcode": "20160908262",
            "samaddr": "东山墅小区自建设施供水",
            "targetname": "",
            "checktype": "应急监测",
            "wsupplyunit": "东山墅小区自建设施供水",
            "targetcode": "",
            "id": 4,
            "wqitype": "地下水源水","TestIndex":"口感较好！（2）"},
        {
            "samtime": "2016-05-24T16:00:00.000Z",
            "samvaluedefind": "210",
            "samcode": "20130212D",
            "samaddr": "二厂出水口",
            "targetname": "硝酸盐",
            "checktype": "应急监测",
            "wsupplyunit": "光大水务（济南）有限公司二厂出水",
            "targetcode": "208",
            "id": 5,
            "wqitype": "处理水","TestIndex":"口感较差！（0.82）"},

        {

            "samtime": "2016-05-24T16:00:00.000Z",
            "samvaluedefind": "",
            "samcode": "98259",
            "samaddr": "历下燕山工业开发建设总公司供水清水池",
            "targetname": "",
            "checktype": "应急监测",
            "wsupplyunit": "历下燕山工业开发建设总公司自建设施供水1",
            "targetcode": "",
            "id": 15,
            "wqitype": "生活饮用水","TestIndex":"口感较好！（2.82）"
        }
    ],
    list4: [
        {
            "id": "",
            "samcode": "98017-3D",
            "wqitype": "地表水源水",
            "checktype": "监督监测",
            "samaddr": "玉清水厂出水泵房",
            "samtime": "2016-05-02T16:00:00.000Z",
            "targetcode": "220",
            "targetname": "锌",
            "samvaluedefind": "0.05",
            "resultclass":"1",
            "oneclass":"1",
            "twoclass":"0",
            "threeclass":"0",
            "fourclass":"0",
            "fiveclass":"0"
        },
        {
            "id": "",
            "samcode": "98017",
            "wqitype": "地表水源水",
            "checktype": "监督监测",
            "samaddr": "玉清水厂出水泵房",
            "samtime": "2016-05-02T16:00:00.000Z",
            "targetcode": "220",
            "targetname": "锌",
            "samvaluedefind": "0.1",
            "resultclass":"1",
            "oneclass":"1",
            "twoclass":"0",
            "threeclass":"0",
            "fourclass":"0",
            "fiveclass":"0"
        }
    ],


}
