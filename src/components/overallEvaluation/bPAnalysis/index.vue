<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="采样地点">
                        <el-select v-model="form.samaddr" placeholder="请选择采样地点" :clearable="true">
                            <el-option v-for="item in samaddrs" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="样品类别">
                        <el-select v-model="form.wqitype" placeholder="请选择样品类别" :clearable="true">
                            <el-option v-for="item in wqitypes" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" size="middle" :loading="loading">BP评估</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-table :data="list" border style="width: 100%" size="middle" v-loading="loading">
                    <el-table-column type="index" label="序号" width="50"></el-table-column>
                    <el-table-column prop="samcode" label="采样编号"></el-table-column>
                    <el-table-column prop="samaddr" label="采样地点"></el-table-column>
                    <el-table-column prop="wqitype" label="样品类别"></el-table-column>
                    <el-table-column label=" 评价结果及详情">
                        <template slot-scope="scope">
                            <el-button type="text" size="mini" @click="detail(scope.row.original)">{{scope.row.result}}</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <portal-evaluation-info ref="evaluationInfo" @refresh-list="search"></portal-evaluation-info>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import {samaddrs,wqitypes} from '@/dictionary/waterCCOptions.js'
    import EvaluationInfo from './evaluationInfo.vue';

    export default {
        data() {
            return {
                form:{
                    samaddr:'清水池',
                    wqitype:'出厂水'
                },
                samaddrs:samaddrs,
                wqitypes:wqitypes,
                list:[],
                loading:false,
            }
        },
        components: {
            'portal-evaluation-info': EvaluationInfo
        },
        mounted(){
            this.pageCur=1;
            this.search();
        },
        methods:{
            search(){
                this.loading=true;
                let params=this.form;
                WaterCCInterface.getBPNetworkData(params).then( (res) => {
                    this.loading=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data;
                        this.list=[];
                        if(data!=null && data.length>0){
                            data.forEach((item)=>{
                                let arr=item.split(',');
                                let param={
                                    samcode:arr[0].slice(1),
                                    samaddr:arr[1],
                                    wqitype:arr[2],
                                    result:arr[arr.length-2]+','+arr[arr.length-1],
                                    original:item
                                }
                                this.list.push(param);
                            });
                        }
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
            },
            detail(params){
                this.$refs.evaluationInfo.formData=params;
                this.$refs.evaluationInfo.show=true;
            }
        }
    }
</script>
<style scoped>

</style>
