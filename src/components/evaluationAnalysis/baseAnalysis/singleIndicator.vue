<template>
    <div>
        <el-dialog :title="title" :visible.sync="show" width="1000px" append-to-body>
            <table v-loading="loading" width="100%" class="am-table am-table-compact am-table-bordered am-table-radius am-table-striped tpl-table-black " id="example-r">
                <tbody>
                <tr>
                    <td>样品数</td>
                    <td>检测次数</td>
                    <td>合格数</td>
                    <td>不合格数</td>
                    <td>合格率</td>
                    <td>最大值</td>
                    <td>最小值</td>
                    <td>平均值</td>
                </tr>
                <tr>
                    <td v-for="item in list">
                        {{item}}
                    </td>
                </tr>
                <!-- more data -->
                </tbody>
            </table>
            <div class="process-table" v-loading="loading">
                <div class="chart-block">
                    <div id="myChart" style="width:100%;min-width:600px;height:450px; margin-left: 0px;margin-top: 20px;margin-bottom: 0px"></div>
                </div>
            </div>
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
                form:{
                    samaddr:'',
                    targetcode:''
                },
                list:[],
                chartData:[],
                loading:false,
                show: false
            };
        },
        watch:{
            show(val){
                if(val==true){
                    this.loading=true;
                    let params=this.form;
                    WaterCCInterface.getSingleIndicatorData(params).then( (res) => {
                        this.loading=false;
                        if (res.code == WaterCCInterface.SUCCESS) {
                            let data=res.data['基本统计计数'];
                            this.list=data[0];
                            this.chartData=res.data['检测值出现频数'];
                            this.initChart();
                        } else {
                            this.$message.error(`${res.msage}😅`);
                        }
                    });
                }
            }
        },
        computed:{
            title:function () {
                return '【'+this.form.samaddr+'】的【'+this.form.targetcode+'】指标检测统计数';
            }
        },
        methods: {
            initChart(){
                import('@/kit/charts').then(({ 'default': echarts }) => {
                    this.myChart = echarts.init(document.getElementById('myChart'));
                    this.getData();
                });
            },
            getData() {
                this.draw();
            },
            draw() {
                let xData=[];
                let yData=[];
                this.chartData.forEach((item)=>{
                    xData.push(parseFloat(item[1]));
                    yData.push(item[2]);
                });
                console.log(xData);
                console.log(yData);
                let option = {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    title : {
                        text: '检测值出现频数',
                        x:'center'
                    },
                    xAxis: {
                        type: 'category',
                        data: xData
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yData,
                        type: 'bar'
                    }]
                };
                this.myChart.setOption(option);
            },
            close(){
                this.show=false;
            }
        }
    };
</script>
<style scoped>
</style>
