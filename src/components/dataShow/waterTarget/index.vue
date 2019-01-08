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
                        <el-button type="primary" @click="addIndex" size="middle" icon="el-icon-circle-plus-outline">新增指标</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-table :data="list" border style="width: 100%" size="middle" v-loading="loading">
                    <el-table-column prop="id" label="序号"></el-table-column>
                    <el-table-column prop="targetcode" label="指标编码"></el-table-column>
                    <el-table-column prop="targetname" label="指标名称"></el-table-column>
                    <el-table-column prop="limitdesc" label="限值描述"></el-table-column>
                    <el-table-column prop="upperlimit" label="限值上限"></el-table-column>
                    <el-table-column prop="lowerlimit" label="限值下限"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button @click="edit(scope.row)" type="text" size="mini">更新</el-button>
                            <el-button @click="deleteIndex(scope.row.videoId)" type="text" size="mini">删除</el-button>
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
        <portal-index-info ref="indexInfo" @refresh-list="search"></portal-index-info>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import Pagination from '@/widgets/pagination';
    import {wqitypes} from '@/dictionary/waterCCOptions.js'
    import { DATETIMERANG_SHORTCUTS } from '@/kit/utils';
    import IndexInfo from './indexInfo.vue';

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
            'portal-index-info': IndexInfo
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
                WaterCCInterface.getWaterTargetList(params).then( (res) => {
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
                this.$refs.indexInfo.title='新增';
                this.$refs.indexInfo.show=true;
            },
            edit(params){
                this.$refs.indexInfo.form.targetcode=params.targetcode;
                this.$refs.indexInfo.form.targetname=params.targetname;
                this.$refs.indexInfo.title='更新';
                this.$refs.indexInfo.isEdit=true;
                this.$refs.indexInfo.show=true;
            },
            deleteIndex(){
                this.$confirm('确认删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
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
