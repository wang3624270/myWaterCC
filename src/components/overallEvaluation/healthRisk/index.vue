<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="采样编码">
                        <el-input v-model="form.samcode" placeholder="请输入采样编码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" size="middle" icon="el-icon-search" :loading="loading">等级分析</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-form ref="form" label-width="100px">
                    <el-form-item label="采样信息">
                        <pre>{{this.list[0]}}</pre>
                    </el-form-item>
                    <el-form-item label="指标及检测值">
                        <pre>{{this.list[1]}}</pre>
                    </el-form-item>
                    <el-form-item label="HWQI">
                        <pre>{{this.list[2]}}</pre>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';

    export default {
        data() {
            return {
                form:{
                    samcode:''
                },
                list:[],
                loading:false
            }
        },
        methods:{
            search(){
                this.loading=true;
                let params=this.form;
                WaterCCInterface.getHealthRiskList(params).then( (res) => {
                    this.loading=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data;
                        let arr=data.slice(1,data.length-1).split('},{');
                        this.list=arr;
                    } else {
                        this.$message.error(`${res.msage}😅`);
                    }
                });
            }
        }
    }
</script>
<style scoped>

</style>
