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
                <el-form-item label="单位">
                    <el-input v-model="form.danwei" placeholder="请输入单位"></el-input>
                </el-form-item>
                <el-form-item label="第一级">
                    <el-input v-model="form.oneclass" placeholder="请输入第一级"></el-input>
                </el-form-item>
                <el-form-item label="第二级">
                    <el-input v-model="form.twoclass" placeholder="请输入第二级"></el-input>
                </el-form-item>
                <el-form-item label="第三级">
                    <el-input v-model="form.threeclass" placeholder="请输入第三级"></el-input>
                </el-form-item>
                <el-form-item label="第四级">
                    <el-input v-model="form.fourclass" placeholder="请输入第四级"></el-input>
                </el-form-item>
                <el-form-item label="第五级">
                    <el-input v-model="form.fiveclass" placeholder="请输入第五级"></el-input>
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
                    danwei:'',
                    oneclass:'',
                    twoclass:'',
                    threeclass:'',
                    fourclass:'',
                    fiveclass:''
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
                    WaterCCInterface.addGround(params).then( (res) => {
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
                    WaterCCInterface.modifyGround(params).then( (res) => {
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
