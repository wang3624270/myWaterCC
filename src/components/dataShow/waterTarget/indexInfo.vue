<template>
    <div>
        <el-dialog :title="title" :visible.sync="show" width="600px" append-to-body :close-on-click-modal="false">
            <el-form :inline="true" :model="form" class="demo-form-inline" size="middle" label-width="90px">
                <el-form-item label="指标编码">
                    <el-input v-model="form.targetcode" placeholder="请输入指标编码" :disabled="isEdit"></el-input>
                </el-form-item>
                <el-form-item label="指标名称">
                    <el-input v-model="form.targetname" placeholder="请输入指标名称" :disabled="isEdit"></el-input>
                </el-form-item>
                <el-form-item label="限值描述">
                    <el-input v-model="form.limitdesc" placeholder="请输入限值描述"></el-input>
                </el-form-item>
                <el-form-item label="限值上限">
                    <el-input v-model="form.upperlimit" placeholder="请输入限值上限"></el-input>
                </el-form-item>
                <el-form-item label="限值下限">
                    <el-input v-model="form.lowerlimit" placeholder="请输入限值下限"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitIndex" >提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';

    export default {
        data() {
            return {
                form:{
                    targetcode:'',
                    targetname:'',
                    limitdesc:'',
                    upperlimit:'',
                    lowerlimit:''
                },
                isEdit:false,
                title:'',
                show: false,
                list:[],
                loading:false
            };
        },
        watch:{
            show(val){
                if(val==true){
                    if(this.isEdit==false){
                        this.form={
                            targetcode:'',
                            targetname:'',
                            limitdesc:'',
                            upperlimit:'',
                            lowerlimit:''
                        }
                    }
                }
            }
        },
        methods: {
            submitIndex(){
                this.loading=true;
                let params=this.form;
                if(this.isEdit==false){
                    WaterCCInterface.addTarget(params).then( (res) => {
                        this.loading=false;
                        if (res.code == WaterCCInterface.SUCCESS) {
                            this.show=false;
                            this.$message.success('操作成功！😊');
                            this.$emit('refresh-list');
                        } else {
                            this.$message.error(`${res.msage}😅`);
                        }
                    });
                }else{
                    WaterCCInterface.modifyTarget(params).then( (res) => {
                        this.loading=false;
                        if (res.code == WaterCCInterface.SUCCESS) {
                            this.show=false;
                            this.$message.success('操作成功！😊');
                            this.$emit('refresh-list');
                        } else {
                            this.$message.error(`${res.msage}😅`);
                        }
                    });
                }
            }
        }
    };
</script>
<style scoped>
</style>
