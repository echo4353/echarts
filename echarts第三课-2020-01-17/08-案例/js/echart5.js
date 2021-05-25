{
    /*echart5 - 柱状图*/
    /*数据源*/
    const source=[
        ['时间','玉米','小麦','高粱'],
        [2017,1000,800,900],
        [2018,500,650,800],
        [2019,800,900,1200],
    ]

    /*实例化echarts*/
    const chart = echarts.init(document.getElementById('echart5'),'walden');

    /*配置项*/
    const option = {
        /*
        * title 标题
        *   text 主标题，如'西虹市农作物收成'
        * */
        title:{
            text:'西虹市农作物收成',
            left:'center'
        },
        tooltip:{},
        /*
        * dataset 数据集
        *   source 数据源
        * */
        dataset:{
            source
        },

        /*  xAxis
        *       type
        *           category 类目轴
        *   yAxis
        *       type
        *           value 数值轴
        */
        xAxis:{
            type:'category'
        },
        yAxis:{
            type:'value'
        },

        /*
        * series系列集合
        *   type 图表类型
        *       bar 柱状图
        * */
        series:[
            {type:'bar'},
            {type:'bar'},
            {type:'bar'},
        ]

    };
    // 使用刚指定的配置项和数据显示图表。
    chart.setOption(option);
}
