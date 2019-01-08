<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="指标编码">
                        <el-input v-model="form.targetcode" placeholder="请输入指标编码"></el-input>
                    </el-form-item>
                    <el-form-item label="样品类别">
                        <el-select v-model="form.wqitype" placeholder="请选择检测性质" :clearable="true">
                            <el-option v-for="item in wqitypes" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="采样地点">
                        <el-input v-model="form.samaddr" placeholder="请输入采样地点"></el-input>
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
                    <el-table-column prop="id" label="序号"></el-table-column>
                    <el-table-column prop="samaddr" label="采样地点"></el-table-column>
                    <el-table-column prop="samcode" label="采样编号"></el-table-column>
                    <el-table-column prop="wqitype" label="样品类别"></el-table-column>
                    <el-table-column prop="samtime" label="检测时间"></el-table-column>
                    <el-table-column prop="samstand" label="检测标准"></el-table-column>
                    <el-table-column prop="targetcode" label="指标编号"></el-table-column>
                    <el-table-column prop="targetname" label=" 指标名称"></el-table-column>
                    <el-table-column prop="samvalue" label="检测原始值"></el-table-column>
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
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import Pagination from '@/widgets/pagination';
    import {wqitypes} from '@/dictionary/waterCCOptions.js'
    import { DATETIMERANG_SHORTCUTS } from '@/kit/utils';

    export default {
        data() {
            return {
                form:{
                    targetcode:'',
                    wqitype:'',
                    samaddr:'',
                    starttime:'',
                    endtime:''
                },
                dateRange:[],
                pickerOptions: Object.assign( {},
                    DATETIMERANG_SHORTCUTS
                ),
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
            'portal-pagination': Pagination
        },
        mounted(){
            this.pageCur=1;
            this.search();
        },
        methods:{
            search(){
                this.loading=true;
                let params=this.form;
                params.page=this.pageCur-1;
                params.pageSize=this.pageSize;
                WaterCCInterface.getWaterMonthList(params).then( (res) => {
                    this.loading=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data;
                        this.list=data.dataList;
                        this.total=data.totalData;
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
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
