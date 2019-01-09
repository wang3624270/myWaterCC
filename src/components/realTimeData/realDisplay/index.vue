<template>
    <div>
        <div class="process-table" v-loading="loading">
            <div class="chart-block">
                <div id="myChart" style="width:100%;min-width:600px;height:500px; margin-left: 10px;margin-top: 20px;margin-bottom: 20px"></div>
            </div>
        </div>
        <el-container>
            <el-main>
                <el-table :data="list" border style="width: 100%" size="middle" v-loading="loading">
                    <el-table-column type="index" label="序号"></el-table-column>
                    <el-table-column prop="samtime" label="采样时间"></el-table-column>
                    <el-table-column prop="checktime" label="检测时间"></el-table-column>
                    <el-table-column prop="targetcode" label="指标编号"></el-table-column>
                    <el-table-column prop="samvaluedefind" label="检测值"></el-table-column>
                    <el-table-column prop="samcode" label="采样编号"></el-table-column>
                    <el-table-column prop="lowerlimit" label="下限值"></el-table-column>
                    <el-table-column prop="ispass" label="是否合格"></el-table-column>
                    <el-table-column prop="samaddr" label="采样地点"></el-table-column>
                    <el-table-column prop="transfertime" label="上传时间"></el-table-column>
                    <el-table-column prop="wqitype" label="样品类型"></el-table-column>
                    <el-table-column prop="standardcode" label="标准编号"></el-table-column>
                    <el-table-column prop="upperlimit" label="上限值"></el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import CommonTool from '@/dictionary/common'
    import TimeFormatUtils from '@/kit/timeFormatUtils'

    export default {
        data() {
            return {
                form:{

                },
                list:[],
                loading:false
            }
        },
        mounted(){
            this.search();
        },
        methods:{
            search(){
                this.loading=true;
                let delay=CommonTool.delayTime();
                setTimeout(()=>{
                    this.loading=false;
                    let arr=CommonTool.list5;
                    let index=15;
                    this.list=arr.slice(0,15);
                    let currentTime=this.getCurrentTime();
                    this.list.forEach((item)=>{
                        item.transfertime=currentTime;
                    });
                    this.initChart();
                    setInterval(()=>{
                        index++;
                        let item=arr.slice(((index)%30).toFixed(0),((index+1)%30).toFixed(0))[0];
                        let ob=Object.assign({},item);
                        let time=this.getCurrentTime();
                        ob.transfertime=time;
                        this.list.unshift(ob);
                        this.list.pop();
                        this.draw();
                    },1000);
                }, delay);
            },
            getCurrentTime(){
                let date=new Date();
                return TimeFormatUtils.formatterDate(date)+' '+TimeFormatUtils.formatterTime(date);
            },
            initChart(){
                this.loading2=true;
                import('@/kit/charts').then(({ 'default': echarts }) => {
                    this.myChart = echarts.init(document.getElementById('myChart'));
                    this.getData();
                });
            },
            getData() {
                this.loading2=false;
                this.draw();
            },
            draw() {
                let xDate=[];
                let yDate=[];
                this.list.forEach((item)=>{
                    xDate.unshift(item.transfertime);
                    yDate.unshift(item.samvaluedefind);
                });
                let option = {
                    title : {
                        text: '271的检测值变化趋势',
                        x:'center'
                    },
                    grid:{
                        y2:80
                    },
                    xAxis: {
                        type: 'category',
                        data: xDate,
                        axisLabel: {
                            interval:0,
                            rotate:30
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yDate,
                        type: 'line',
                        itemStyle:{
                            normal:{
                                color:'#4ad2ff'
                            }
                        }
                    }]
                };
                this.myChart.setOption(option);
            }
        }
    }
</script>
<style scoped>

</style>
