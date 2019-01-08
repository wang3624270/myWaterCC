<template>
    <div>
        <el-container>
            <el-main>
                <el-table :data="list" border style="width: 100%" size="middle" v-loading="loading">
                    <el-table-column type="index" label="表编号" width="80"></el-table-column>
                    <el-table-column prop="label" label="名称"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="mini">查看表信息</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
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

                },
                list:[],
                loading:false,
            }
        },
        mounted(){
            this.search();
        },
        methods:{
            search(){
                this.loading=true;
                let delay=commonTool.delayTime();
                setTimeout(()=>{
                    this.loading=false;
                    commonTool.dataBases.forEach((item)=>{
                       this.list.push({
                           label:item.label
                       });
                    });
                }, delay);
            }
        }
    }
</script>
<style scoped>

</style>
