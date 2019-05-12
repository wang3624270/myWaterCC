<template>
    <div>
        <el-dialog title="基于BP神经网络的水质评估报告" :visible.sync="show" width="1000px" append-to-body>
            <table width="100%" class="am-table am-table-compact am-table-bordered am-table-radius am-table-striped tpl-table-black " id="example-r">
                <tbody>
                <tr>
                    <td>样本编号</td>
                    <td colspan="2">{{samcode}}</td>
                    <td>样本取样时间</td>
                    <td colspan="2">{{date}}</td>
                </tr>
                <tr>
                    <td>样本名称</td>
                    <td colspan="5">{{samaddr}}{{wqitype}}</td>
                </tr>
                <tr>
                    <td>抽样计划</td>
                    <td colspan="5">水质综合评估</td>
                </tr>
                <tr>
                    <td>取样地点</td>
                    <td colspan="5">{{samaddr}}</td>
                </tr>
                <tr>
                    <td>评价依据</td>
                    <td colspan="5">《地表水环境质量标准》（GB3838-2002）</td>
                </tr>
                <tr>
                    <td width="100">样本分析时间</td>
                    <td colspan="2">2019-03-05 14:34:19</td>
                    <td>样本分析人员</td>
                    <td colspan="2">实验室分析员</td>
                </tr>
                <tr>
                    <td width="100">指标编号</td>
                    <td width="100">指标名称</td>
                    <td width="100">检测值</td>
                    <td width="100">指标编号</td>
                    <td width="100">指标名称</td>
                    <td width="100">检测值</td>
                </tr>
                <tr>
                    <td width="100">122</td>
                    <td width="100">高锰酸盐指数</td>
                    <td width="100">{{list[0]}}</td>
                    <td width="100">201</td>
                    <td width="100">硝酸盐(以N计)</td>
                    <td width="100">{{list[1]}}</td>
                </tr>
                <tr>
                    <td width="100">207</td>
                    <td width="100">氯化物</td>
                    <td width="100">{{list[2]}}</td>
                    <td width="100">208</td>
                    <td width="100">硫酸盐(以N计)</td>
                    <td width="100">{{list[3]}}</td>
                </tr>
                <tr>
                    <td width="100">216</td>
                    <td width="100">铁</td>
                    <td width="100">{{list[4]}}</td>
                    <td width="100">219</td>
                    <td width="100">铜</td>
                    <td width="100">{{list[5]}}</td>
                </tr>
                <tr>
                    <td width="100">220</td>
                    <td width="100">锌</td>
                    <td width="100">{{list[6]}}</td>
                    <td width="100">301</td>
                    <td width="100">氰化物</td>
                    <td width="100">{{list[7]}}</td>
                </tr>
                <tr>
                    <td width="100">302</td>
                    <td width="100">氟化物</td>
                    <td width="100">{{list[8]}}</td>
                    <td width="100">306</td>
                    <td width="100">砷</td>
                    <td width="100">{{list[9]}}</td>
                </tr>
                <tr>
                    <td width="100">307</td>
                    <td width="100">镉</td>
                    <td width="100">{{list[10]}}</td>
                    <td width="100">309</td>
                    <td width="100">铬（六价）</td>
                    <td width="100">{{list[11]}}</td>
                </tr>
                <tr>
                    <td width="100">310</td>
                    <td width="100">汞</td>
                    <td width="100">{{list[12]}}</td>
                    <td width="100">311</td>
                    <td width="100">铅</td>
                    <td width="100">{{list[13]}}</td>
                </tr>
                <tr>
                    <td width="100">312</td>
                    <td width="100">硒</td>
                    <td width="100">{{list[14]}}</td>
                    <td width="100"></td>
                    <td width="100"></td>
                    <td width="100"></td>
                </tr>
                <tr>
                    <td colspan="3">基于BP神经网络的水质评价分数</td>
                    <td colspan="3">{{score}}</td>
                </tr>
                <!-- more data -->
                </tbody>
            </table>
            <table width="100%" class="am-table am-table-compact am-table-bordered am-table-radius am-table-striped tpl-table-black " id="example-r">
                <tbody>
                <tr>
                    <td colspan="7">水质指数</td>
                </tr>
                <tr>
                    <td width="100">WQI-bp</td>
                    <td width="100">0 <= WQI-bp < 0.2</td>
                    <td width="100">0.2 <= WQI-bp < 0.4</td>
                    <td width="100">0.4 <= WQI-bp < 0.6</td>
                    <td width="100">0.6 <= WQI-bp < 0.8</td>
                    <td width="100">0.8 <= WQI-bp < 1.0</td>
                    <td width="100">{{result[0]}}</td>
                </tr>
                <tr>
                    <td width="100">评价结果</td>
                    <td width="100">1级,清洁</td>
                    <td width="100">2级,轻污染</td>
                    <td width="100">3级,污染</td>
                    <td width="100">4级,重污染</td>
                    <td width="100">5级,严重污染</td>
                    <td width="100">{{result[1]}}</td>
                </tr>
                </tbody>
            </table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="close" >关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';

    export default {
        data() {
            return {
                formData:'',
                samcode:'',
                samaddr:'',
                wqitype:'',
                result:'',
                original:'',
                date:'',
                list:[],
                score:'',
                show: false,
            };
        },
        watch:{
            show(val){
                if(val==true){
                    let arr=this.formData.split(',');
                    this.samcode=arr[0].slice(1);
                    this.samaddr=arr[1];
                    this.wqitype=arr[2];
                    this.date=arr[3];
                    this.result=[arr[arr.length-2].slice(1),arr[arr.length-1].slice(0,arr[arr.length-1].length-1)];
                    this.list=[];
                    for(let i=0;i<15;i++){
                        this.list.push(arr[4+i]);
                    }
                    this.list[14]=this.list[14].slice(0,4);
                    this.score=arr[19].slice(1,arr[19].length-1);
                }
            }
        },
        methods: {
            close(){
                this.show=false;
            }
        }
    };
</script>
<style scoped>
</style>
