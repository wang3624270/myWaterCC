<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="采样编码">
                        <el-select v-model="form.samcode" placeholder="请选择检测性质">
                            <el-option v-for="item in samcodes" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" size="middle" icon="el-icon-search" :loading="loading1==true || loading2==true">分析</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-alert title="单因子评估法---数据展示" type="success" :closable="false" center></el-alert>
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
                                   :page-size="pageSize"
                                   :total="total"
                                   :cur-page="pageCur"
                                   :click-callback="listen">
                </portal-pagination>
            </el-main>
            <el-alert title="单因子评估法---水质评估" type="success" :closable="false" center></el-alert>
            <el-main>
                <el-table :data="list2" border style="width: 100%" size="middle" v-loading="loading2" :show-header="false">
                    <el-table-column prop="data0"></el-table-column>
                    <el-table-column prop="data1"></el-table-column>
                    <el-table-column prop="data2"></el-table-column>
                    <el-table-column prop="data3" ></el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import Pagination from '@/widgets/pagination';
    import {samcodes} from '@/dictionary/waterCCOptions.js'

    export default {
        data() {
            return {
                form:{
                    samcode:''
                },
                list1:[],
                list2:[],
                loading1:false,
                loading2:false,
                samcodes:samcodes,

                pageCur: 1,
                pageSize: 15,
                total: 0,
            }
        },
        components: {
            'portal-pagination': Pagination
        },
        methods:{
            search(){
                this.pageCur=1;
                this.search1();
                this.search2();
            },
            search1(){
                this.loading1=true;
                let params=this.form;
                params.page=this.pageCur;
                params.size=this.pageSize;
                WaterCCInterface.getSingleFData(params).then( (res) => {
                    this.loading1=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data;
                        this.list1=data.list;
                        this.total=data.total;
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
            },
            search2(){
                this.loading2=true;
                let params=this.form;
                WaterCCInterface.getSingleFactor(params).then( (res) => {
                    this.loading2=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data;
                        let labels=['采样编号','上级供水单位','样品类别','检测类型','采样地点','检测时间','超标指标','单因子评估结果'];
                        let index=0;
                        let list=data.split(',');
                        for(let i=0;i<list.length;){
                            let item1=list[i];
                            let item2=list[i+1];
                            let ob={
                                data0:labels[index++],
                                data1:item1,
                                data2:labels[index++],
                                data3:item2,
                            }
                            this.list2.push(ob);
                            i+=2;
                        }
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
            },
            listen(pageSize, pageIndex) {
                this.pageSize = pageSize;
                this.pageCur = pageIndex;
                this.search1();
            }
        }
    }
</script>
<style scoped>
.span-style{
    width: 500px;
}
</style>
