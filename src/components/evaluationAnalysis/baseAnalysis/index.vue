<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="指标编码">
                        <el-input v-model="form.targetcode" placeholder="请输入指标编码"></el-input>
                    </el-form-item>
                    <el-form-item label="样品类别">
                        <el-select v-model="form.checktype" placeholder="请选择样品类别" :clearable="true">
                            <el-option v-for="item in checktypes" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="检测性质">
                        <el-select v-model="form.wqitype" placeholder="请选择检测性质" :clearable="true">
                            <el-option v-for="item in wqitypes" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="采样地点">
                        <el-input v-model="form.samaddr" placeholder="请输入采样地点"></el-input>
                    </el-form-item>
                    <el-form-item label="上级供水单位">
                        <el-input v-model="form.wsupplyunit" placeholder="请输入上级供水单位"></el-input>
                    </el-form-item>
                    <el-form-item label="起止时间">
                        <el-date-picker
                            v-model="dateRange"
                            type="daterange"
                            align="right"
                            placeholder="请选择日期范围"
                            :clearable="true"
                            :editable="false"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"
                            :picker-options="pickerOptions">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" size="middle" icon="el-icon-search" :loading="loading">查询</el-button>
                        <el-button type="primary" @click="getSingleIndicator" size="middle" :loading="loading">单指标统计</el-button>
                        <el-button type="primary" @click="getBaseStatistics" size="middle" :loading="loading">基本统计分析</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-table :data="list" border style="width: 100%" size="middle" v-loading="loading">
                    <el-table-column prop="id" label="序号"></el-table-column>
                    <el-table-column prop="samcode" label="采样编号"></el-table-column>
                    <el-table-column prop="wsupplyunit" label="上级供水单位"></el-table-column>
                    <el-table-column prop="checktype" label="检测性质"></el-table-column>
                    <el-table-column prop="wqitype" label="样品类别"></el-table-column>
                    <el-table-column prop="samaddr" label="采样地点"></el-table-column>
                    <el-table-column prop="samtime" label="检测时间"></el-table-column>
                    <el-table-column prop="targetcode" label="指标编码"></el-table-column>
                    <el-table-column prop="targetname" label=" 指标名称"></el-table-column>
                    <el-table-column prop="samvaluedefind" label="检测值"></el-table-column>
                </el-table>
                <portal-pagination v-show="!loading"
                                   :page-size="pageSize"
                                   :total="total"
                                   :cur-page="pageCur"
                                   :click-callback="listen">
                </portal-pagination>
            </el-main>
        </el-container>
        <portal-single-indicator ref="singleIndicator" @refresh-list="search"></portal-single-indicator>
        <portal-base-statistics ref="baseStatistics" @refresh-list="search"></portal-base-statistics>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import Pagination from '@/widgets/pagination';
    import {checktypes,wqitypes} from '@/dictionary/waterCCOptions.js'
    import { DATETIMERANG_SHORTCUTS } from '@/kit/utils';
    import SingleIndicator from './singleIndicator.vue';
    import BaseStatistics from './baseStatistics.vue';

    export default {
        data() {
            return {
                form:{
                    targetcode:'',
                    checktype:'',
                    wqitype:'',
                    samaddr:'',
                    wsupplyunit:'',
                    starttime:'',
                    endtime:''
                },
                dateRange:[],
                pickerOptions: Object.assign( {},
                    DATETIMERANG_SHORTCUTS
                ),
                checktypes:checktypes,
                wqitypes:wqitypes,
                list:[],
                loading:false,

                pageCur: 1,
                pageSize: 15,
                total: 0
            }
        },
        watch: {
            dateRange(val) {
                if(!val || val.length == 0){
                    this.form.starttime = '';
                    this.form.endtime = '';
                } else{
                    this.form.starttime = val[0];
                    this.form.endtime = val[1];
                }
            }
        },
        components: {
            'portal-pagination': Pagination,
            'portal-single-indicator':SingleIndicator,
            'portal-base-statistics':BaseStatistics
        },
        mounted(){
            this.pageCur=1;
            this.init();
        },
        methods:{
            init(){
                this.loading=true;
                let params={
                    dataTable:'waterall'
                };
                params.page=this.pageCur;
                params.size=this.pageSize;
                WaterCCInterface.getESdata(params).then( (res) => {
                    this.loading=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data.body;
                        this.list=data.list;
                        this.total=data.total;
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
            },
            search(){
                this.loading=true;
                let params=this.form;
                params.page=this.pageCur;
                params.size=this.pageSize;
                WaterCCInterface.getWaterAllDataList(params).then( (res) => {
                    this.loading=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data.body;
                        this.list=data.list;
                        this.total=data.total;
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
            },
            listen(pageSize, pageIndex) {
                this.pageSize = pageSize;
                this.pageCur = pageIndex;
                this.search();
            },
            getSingleIndicator(){
                this.$refs.singleIndicator.form=this.form;
                this.$refs.singleIndicator.show=true;
            },
            getBaseStatistics(){
                this.$refs.baseStatistics.show=true;
            }
        }
    }
</script>
<style scoped>

</style>
