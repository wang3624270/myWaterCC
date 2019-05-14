<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form :inline="true" :model="form" class="demo-form-inline" size="middle">
                    <el-form-item label="采样地点">
                        <el-select v-model="form.samaddr" placeholder="请选择采样地点">
                            <el-option v-for="item in samaddrs" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="样品类型">
                        <el-select v-model="form.wqitype" placeholder="请选择样品类型">
                            <el-option v-for="item in wqitypes" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" size="middle" icon="el-icon-search" :loading="loading">分析</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main v-loading="loading">
                <table width="100%" class="am-table am-table-compact am-table-bordered am-table-radius am-table-striped tpl-table-black " id="example-r">
                    <tbody>
                    <tr v-for="item in data">
                        <td v-for="subItem in item">
                            {{subItem}}
                        </td>
                    </tr>
                    <!-- more data -->
                    </tbody>
                </table>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import {wqitypes,samaddrs} from '@/dictionary/waterCCOptions.js'

    export default {
        data() {
            return {
                form:{
                    samaddr:'',
                    wqitype:''
                },
                samaddrs:samaddrs,
                wqitypes:wqitypes,
                data:'',
                loading:false
            }
        },
        methods:{
            search(){
                this.loading=true;
                let params=this.form;
                WaterCCInterface.getPCAEval(params).then( (res) => {
                    this.loading=false;
                    if (res.code == WaterCCInterface.SUCCESS) {
                        let data=res.data;
                        this.data=data;
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
