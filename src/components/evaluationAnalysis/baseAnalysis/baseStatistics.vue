<template>
    <div>
        <el-dialog title="基本统计分析" :visible.sync="show" width="1000px" append-to-body>
            <div class="img-top" v-loading="loading">
                <div class="img-style"  v-if="!loading">
                    <img src="./img/chart1.png"  alt="" />
                </div>
                <div class="img-style"  v-if="!loading">
                    <img src="./img/chart2.png"  alt="" />
                </div>
                <div class="img-style"  v-if="!loading">
                    <img src="./img/chart3.png"  alt="" />
                </div>
                <div class="img-style"  v-if="!loading">
                    <img src="./img/chart4.png"  alt="" />
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="close" >关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import WaterCCInterface from '@/interfaces/waterCCInterface';
    import CommonTool from '@/dictionary/common'

    export default {
        data() {
            return {
                loading:false,
                show: false
            };
        },
        watch:{
            show(val){
                if(val==true){
                    this.loading=true;
                    let delay=CommonTool.delayTime();
                    setTimeout(()=>{
                        this.loading=false;
                    }, delay);
                }
            }
        },
        methods: {
            close(){
                this.show=false;
            }
        }
    };
</script>
<style scoped>
    .img-style{
        float: left;
        width: 470px;
        height: 300px;
    }
    .img-top{
        height: 600px;
    }
</style>
