<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="指标编码">
                        <el-input  placeholder="请输入指标编码"></el-input>
                    </el-form-item>
                    <el-form-item label="采样地点">
                        <el-input  placeholder="请输入采样地点"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" size="middle" icon="el-icon-search" :loading="loading">等级分析</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-table :data="list" border style="width: 100%" size="middle" v-loading="loading">
                    <el-table-column type="index" label="序号"></el-table-column>
                    <el-table-column prop="samcode" label="采样编号"></el-table-column>
                    <el-table-column prop="wqitype" label="样品类别"></el-table-column>
                    <el-table-column prop="checktype" label="检测类型"></el-table-column>
                    <el-table-column prop="samaddr" label="采样地点"></el-table-column>
                    <el-table-column prop="samtime" label="检测时间"></el-table-column>
                    <el-table-column prop="targetcode" label="指标编码"></el-table-column>
                    <el-table-column prop="targetname" label="指标名称"></el-table-column>
                    <el-table-column prop="samvaluedefind" label="检测值"></el-table-column>
                    <el-table-column prop="resultclass" label="评价等级"></el-table-column>
                    <el-table-column prop="oneclass" label="一级超标倍数"></el-table-column>
                    <el-table-column prop="twoclass" label="二级超标倍数"></el-table-column>
                    <el-table-column prop="threeclass" label="三级超标倍数"></el-table-column>
                    <el-table-column prop="fourclass" label="四级超标倍数"></el-table-column>
                    <el-table-column prop="fiveclass" label="五级超标倍数"></el-table-column>
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
    import commonTool from '@/dictionary/common'

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
                total: 0,
            }
        },
        components: {
            'portal-pagination': Pagination
        },
        mounted(){

        },
        methods:{
            search(){
                this.loading=true;
                let delay=commonTool.delayTime();
                setTimeout(()=>{
                    this.loading=false;
                    this.list=commonTool.list4;
                    this.total=2;
                }, delay);
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
