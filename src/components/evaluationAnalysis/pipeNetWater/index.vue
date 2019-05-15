<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="指标编码">
                        <el-input v-model="form.targetcode" placeholder="请输入指标编码"></el-input>
                    </el-form-item>
                    <el-form-item label="检测性质">
                        <el-select v-model="form.wqitype" placeholder="请选择检测性质" :clearable="true">
                            <el-option v-for="item in wqitypes" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="样品类别">
                        <el-select v-model="form.checktype" placeholder="请选择样品类别" :clearable="true">
                            <el-option v-for="item in checktypes" :label="item.label" :value="item.label" :key="item.label"></el-option>
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
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-table :data="list" border style="width: 100%" size="middle" v-loading="loading">
                    <el-table-column prop="id" label="序号" width="50"></el-table-column>
                    <el-table-column prop="samcode" label="采样编号"></el-table-column>
                    <el-table-column prop="wqitype" label="样品类别"></el-table-column>
                    <el-table-column prop="checktype" label="样品性质"></el-table-column>
                    <el-table-column prop="samaddr" label="采样地点"></el-table-column>
                    <el-table-column prop="samtime" label="检测时间"></el-table-column>
                    <el-table-column label="分析报告">
                        <template slot-scope="scope">
                            <el-button type="text" size="mini" @click="detail(scope.row)">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <portal-analysis-report ref="analysisReport" @refresh-list="search"></portal-analysis-report>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import {checktypes,wqitypes} from '@/dictionary/waterCCOptions.js'
    import { DATETIMERANG_SHORTCUTS } from '@/kit/utils';
    import AnalysisReport from './analysisReport.vue';
    import TimeFormatUtils from '@/kit/timeFormatUtils'

    export default {
        data() {
            return {
                form:{
                    targetcode:'',
                    checktype:'',
                    wqitype:'',
                    samaddr:'财政厅宿舍',
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
            'portal-analysis-report':AnalysisReport
        },
        mounted(){
            this.pageCur=1;
            this.search();
        },
        methods:{
            search(){
                this.loading=true;
                this.list=[];
                let params=this.form;
                WaterCCInterface.getModelindexData(params).then( (res) => {
                    this.loading=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data;
                        let num=1;
                        data.forEach((item)=>{
                            let part={
                                id:num++,
                                samcode:item[0],
                                wqitype:item[1],
                                checktype:item[2],
                                samaddr:item[3],
                                samtime:item[4]
                            }
                            this.list.push(part);
                        });
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
            },
            detail(params){
                this.$refs.analysisReport.form=params;
                this.$refs.analysisReport.show=true;
            }
        }
    }
</script>
<style scoped>

</style>
