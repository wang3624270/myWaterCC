<template>
    <div>
        <el-container>
            <el-main>
                <el-alert title="口感数据总览" type="success" :closable="false" center></el-alert>
                <el-table :data="list1" border style="width: 100%" size="middle" v-loading="loading1">
                    <el-table-column prop="id" label="序号"></el-table-column>
                    <el-table-column prop="samcode" label="采样编号"></el-table-column>
                    <el-table-column prop="wsupplyunit" label="上级供水单位"></el-table-column>
                    <el-table-column prop="wqitype" label="样品类别"></el-table-column>
                    <el-table-column prop="checktype" label="检测性质"></el-table-column>
                    <el-table-column prop="samaddr" label="采样地点"></el-table-column>
                    <el-table-column prop="samtime" label="检测时间"></el-table-column>
                    <el-table-column prop="targetcode" label="指标编号"></el-table-column>
                    <el-table-column prop="targetname" label="指标名称"></el-table-column>
                    <el-table-column prop="samvaluedefind" label="检测值"></el-table-column>
                </el-table>
                <portal-pagination v-show="!loading1"
                                   :page-size="pageSize1"
                                   :total="total1"
                                   :cur-page="pageCur1"
                                   :click-callback="listen">
                </portal-pagination>
            </el-main>
            <div class="process-table" v-loading="loading2">
                <div class="chart-block">
                    <div id="myChart" style="width:100%;min-width:600px;height:500px; margin-left: 10px;margin-top: 20px;margin-bottom: 20px"></div>
                </div>
            </div>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="采样编号">
                        <el-input  placeholder="请输入采样编号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search2" size="middle" icon="el-icon-search" :loading="loading3">计算</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-alert title="口感指数计算" type="success" :closable="false" center></el-alert>
            <el-main>
                <el-table :data="list2" border style="width: 100%" size="middle" v-loading="loading3">
                    <el-table-column prop="id" label="序号"></el-table-column>
                    <el-table-column prop="samcode" label="采样编号"></el-table-column>
                    <el-table-column prop="wsupplyunit" label="上级供水单位"></el-table-column>
                    <el-table-column prop="wqitype" label="样品类别"></el-table-column>
                    <el-table-column prop="checktype" label="检测类型"></el-table-column>
                    <el-table-column prop="samaddr" label="采样地点"></el-table-column>
                    <el-table-column prop="samtime" label="检测时间"></el-table-column>
                    <el-table-column prop="targetcode" label="指标编号"></el-table-column>
                    <el-table-column prop="targetname" label="指标名称"></el-table-column>
                    <el-table-column prop="samvaluedefind" label="检测值"></el-table-column>
                    <el-table-column prop="TestIndex" label="口感指数"></el-table-column>
                </el-table>
                <portal-pagination v-show="!loading3"
                                   :page-size="pageSize2"
                                   :total="total2"
                                   :cur-page="pageCur2"
                                   :click-callback="listen">
                </portal-pagination>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import Pagination from '@/widgets/pagination';
    import commonTool from '@/dictionary/common'

    export default {
        data() {
            return {
                form:{
                    targetcode:''
                },
                list1:[],
                list2:[],
                loading1:false,
                loading2:false,
                loading3:false,

                pageCur1: 1,
                pageSize1: 15,
                total1: 0,

                pageCur2: 1,
                pageSize2: 15,
                total2: 0
            }
        },
        components: {
            'portal-pagination': Pagination
        },
        mounted(){
            this.pageCur=1;
            this.search1();
            this.search2();
            this.initChart();
        },
        methods:{
            search1(){
                this.loading1=true;
                let delay=commonTool.delayTime();
                setTimeout(()=>{
                    this.loading1=false;
                    this.list1=commonTool.list2;
                    this.total1=commonTool.total();
                }, delay);
            },
            search2(){
                this.loading3=true;
                let delay=commonTool.delayTime();
                setTimeout(()=>{
                    this.loading3=false;
                    this.list2=commonTool.list3;
                    this.total2=commonTool.total();
                }, delay);
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
                        text: '样品指标检测数统计',
                        x:'center'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['20110216-J081','20110216-J078','20150407-0201D','98263','20080407-0201D','20150407D','2008-0417-0201D'],
                        axisLabel: {
                            interval:0,
                            rotate:30
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [30,25,24,24,23,21,10],
                        type: 'bar'
                    }],
                };
                this.myChart.setOption(option);
            },
            listen(pageSize, pageIndex) {
                this.pageSize = pageSize;
                this.pageCur = pageIndex;
                this.search();
            }
        }
    }
</script>
<style scoped>

</style>
