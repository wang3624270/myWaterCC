<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="指标编码">
                        <el-input v-model="form.targetcode" placeholder="请输入指标编码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" size="middle" icon="el-icon-search" :loading="loading">查询</el-button>
                        <el-button type="primary" @click="addIndex" size="middle" icon="el-icon-circle-plus-outline">新增</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-table :data="list" border style="width: 100%" size="middle" v-loading="loading">
                    <el-table-column prop="id" label="序号"></el-table-column>
                    <el-table-column prop="targetcode" label="指标编码"></el-table-column>
                    <el-table-column prop="targetname" label="指标名称"></el-table-column>
                    <el-table-column prop="danwei" label="单位"></el-table-column>
                    <el-table-column prop="oneclass" label="第一级"></el-table-column>
                    <el-table-column prop="twoclass" label="第二级"></el-table-column>
                    <el-table-column prop="threeclass" label="第三级"></el-table-column>
                    <el-table-column prop="fourclass" label="第四级"></el-table-column>
                    <el-table-column prop="fiveclass" label="第五级"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button @click="edit(scope.row)" type="text" size="mini">更新</el-button>
                            <el-button @click="deleteIndex(scope.row.targetcode)" type="text" size="mini">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <portal-pagination v-show="!loading"
                                   :page-size="pageSize"
                                   :total="total"
                                   :cur-page="pageCur"
                                   :click-callback="listen">
                </portal-pagination>
            </el-main>
        </el-container>
        <portal-ground-info ref="groundInfo" @refresh-list="search"></portal-ground-info>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import Pagination from '@/widgets/pagination';
    import {wqitypes} from '@/dictionary/waterCCOptions.js'
    import { DATETIMERANG_SHORTCUTS } from '@/kit/utils';
    import GroundInfo from './groundInfo.vue';

    export default {
        data() {
            return {
                form:{
                    targetcode:''
                },
                list:[],
                loading:false,

                pageCur: 1,
                pageSize: 15,
                total: 0
            }
        },
        components: {
            'portal-pagination': Pagination,
            'portal-ground-info': GroundInfo
        },
        mounted(){
            this.pageCur=1;
            this.init();
        },
        methods:{
            init(){
                this.loading=true;
                let params={
                    dataTable:'facewaterstand'
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
                params.pageSize=this.pageSize;
                WaterCCInterface.getGroundData(params).then( (res) => {
                    this.loading=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data;
                        this.list=data.content;
                        this.total=data.totalElements;
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
            },
            addIndex(){
                this.$refs.groundInfo.title='新增';
                this.$refs.groundInfo.show=true;
                this.$refs.groundInfo.isEdit=false;
            },
            edit(params){
                this.$refs.groundInfo.form=params;
                this.$refs.groundInfo.title='更新';
                this.$refs.groundInfo.isEdit=true;
                this.$refs.groundInfo.show=true;
            },
            deleteIndex(targetcode){
                this.$confirm('确认删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.loading=true;
                    let params={
                        targetcode:targetcode
                    };
                    WaterCCInterface.deleteGround(params).then( (res) => {
                        this.loading=false;
                        if (res.code == WaterCCInterface.SUCCESS) {
                            this.list=[];
                            this.pageCur=1;
                            this.search();
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        } else {
                            this.$message.error(`${res.msage}😅`);
                        }
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
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
