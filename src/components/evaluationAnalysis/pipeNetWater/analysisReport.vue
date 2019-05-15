<template>
    <div>
        <el-dialog title="管网水腐蚀指数分析详情" :visible.sync="show" width="1000px" append-to-body>
            <div class="img-f">
                <img src="./img/img.png" class="img-s">
            </div>
            <table width="100%" class="am-table am-table-compact am-table-bordered am-table-radius am-table-striped tpl-table-black " id="example-r">
                <tbody>
                <tr>
                    <td>采样编号</td>
                    <td>样品类别</td>
                    <td>检测性质</td>
                    <td>采样地点</td>
                    <td>检测时间</td>
                </tr>
                <tr>
                    <td>{{form.samcode}}</td>
                    <td>{{form.wqitype}}</td>
                    <td>{{form.checktype}}</td>
                    <td>{{form.samaddr}}</td>
                    <td>{{form.samtime}}</td>
                </tr>
                <!-- more data -->
                </tbody>
            </table>
            <table width="100%" class="am-table am-table-compact am-table-bordered am-table-radius am-table-striped tpl-table-black " id="example-r">
                <tbody>
                <tr>
                    <td width="100">LSI指数</td>
                    <td width="100">“(-16,18)有腐蚀趋势”</td>
                </tr>
                <tr>
                    <td width="100">RSI指数</td>
                    <td width="100">“(40,08)极严重腐蚀”</td>
                </tr>
                <tr>
                    <td width="100">LR</td>
                    <td width="100">“(0,4)可接受”</td>
                </tr>
                </tbody>
            </table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="close" >关闭</el-button>
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

                },
                show: false,
            };
        },
        watch:{
            show(val){
                if(val==true){

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
    .img-f{
        display:flex;
    }
    .img-s{
        margin:auto;
    }
</style>
