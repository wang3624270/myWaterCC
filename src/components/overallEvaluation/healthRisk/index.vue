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
                </el-form>
            </el-header>
            <el-main v-loading="loading">
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
    import {samcodes} from '@/dictionary/waterCCOptions.js'

    export default {
        data() {
            return {
                form:{
                    samcode:''
                },
                samcodes:samcodes,
                list:[],
                loading:false
            }
        },
        watch:{
            'form.samcode'(val){
                this.search();
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
