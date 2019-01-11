initChart(){
    this.loading=true;
    import('@/kit/charts').then(({ 'default': echarts }) => {
        this.myChart1 = echarts.init(document.getElementById('myChart1'));
        this.myChart2 = echarts.init(document.getElementById('myChart2'));
        this.myChart3 = echarts.init(document.getElementById('myChart3'));
        this.myChart4 = echarts.init(document.getElementById('myChart4'));
        this.myChart5 = echarts.init(document.getElementById('myChart5'));
        this.getData();
    });
},
getData() {
    this.loading1=true;
    let params={};
    StatisticsInterface.getCourseSubjectInfo(params).then( (res) => {
        this.loading1=false;
        if (res.re == StatisticsInterface.SUCCESS) {
            let data=res.data;
            this.taskList=data.courseList;
            this.planList=data.planList;
            this.courses=data.courses;
            this.selectList=data.selectList;
            this.entryList=data.entryList;
            this.draw1();
            this.draw2();
            this.draw3();
            this.draw4();
            this.draw5();
        } else {
            this.$message.error(`出错啦【${res.data}】，请稍后重试！😅`);
        }
    });
},
draw1() {
    let legendData=[];
    this.subjects.forEach((item)=>{
        legendData.push(item.label);
        item.num=0;
    });
    this.taskList.forEach((item)=>{
        let subject=item.subject;
        this.subjects.forEach((part)=>{
            if(part.value==subject){
                part.num++;
            }
        });
    });
    let seriesData=[];
    this.subjects.forEach((item)=>{
        let ob={
            name:item.label,
            value:item.num
        }
        seriesData.push(ob);
    });
    let option = {
        title : {
            text: '现有课程计划中各学科门类占比',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: legendData
        },
        series : [
            {
                name: '学科门类',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:seriesData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    this.myChart1.setOption(option);
}
