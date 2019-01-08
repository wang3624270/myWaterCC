<template>
    <div>
        <el-container>
            <el-header height="auto">
                <el-form  :model="form" size="middle" label-width="80px">
                    <el-form-item label="数据库">
                        <el-select v-model="form.dataDase" placeholder="请选择数据库" :clearable="true" class="unified-width">
                            <el-option v-for="item in dataBases" :label="item.label" :value="item.label" :key="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="URL">
                        <el-input v-model="form.url" placeholder="请输入URL" class="unified-width"></el-input>
                    </el-form-item>
                    <el-form-item label="端口">
                        <el-input  placeholder="请输入端口" class="unified-width"></el-input>
                    </el-form-item>
                    <el-form-item label="scheme">
                        <el-input  placeholder="请输入scheme" class="unified-width"></el-input>
                    </el-form-item>
                    <el-form-item label="用户名">
                        <el-input  placeholder="请输入用户名" class="unified-width"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input  placeholder="请输入密码" class="unified-width"></el-input>
                    </el-form-item>
                    <el-form-item label="表">
                        <el-input  placeholder="请输入表" class="unified-width"></el-input>
                    </el-form-item>
                    <el-form-item label="存储表名">
                        <el-input  placeholder="请输入存储表名" class="unified-width"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" size="middle" icon="el-icon-search" :loading="loading">导入</el-button>
                   </el-form-item>
                </el-form>
            </el-header>
        </el-container>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import commonTool from '@/dictionary/common'

    export default {
        data() {
            return {
                form:{
                    dataDase:'',
                    url:'',
                },
                loading:false,
                dataBases:commonTool.dataBases
            }
        },
        methods:{
            search(){
                this.loading=true;
                let delay=commonTool.delayTime();
                setTimeout(()=>{
                    this.loading=false;
                    this.$message.success('操作成功！😊');
                }, delay);
            }
        }
    }
</script>
<style scoped>
.unified-width{
    width:300px;
}
</style>
