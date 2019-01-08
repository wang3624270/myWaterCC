<template>
    <div>
        <el-dialog :title="title" :visible.sync="show" width="600px" append-to-body>
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
        methods: {
            relate(accId,type){
                this.loading=true;
                let params={
                    accId:accId,
                    type:type,
                    sectionId:this.sectionId
                };
                CourseInterface.matchSectionAndResource(params).then( (res) => {
                    this.loading=false;
                    if (res.re == CourseInterface.SUCCESS) {
                        this.show = false;
                        this.$message.success('操作成功！😊');
                        this.$emit('refresh-list');
                    } else {
                        this.$message.error(`出错啦【${res.data}】，请稍后重试！😅`);
                    }
                });
            },
            submitIndex(){

            }
        }
    };
</script>
<style scoped>
</style>
