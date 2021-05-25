{
    /*echart4 - 雷达图*/
    /*数据*/
    const data=[
        {
            value : [4300, 10000, 28000, 35000, 50000, 19000],
            name : '预算分配'
        },
        {
            value : [5000, 14000, 28000, 31000, 42000, 21000],
            name : '实际开销'
        }
    ]
    /*雷达轴*/
    const indicator=[
        { name: '销售', max: 6500},
        { name: '管理', max: 16000},
        { name: '信息技术', max: 30000},
        { name: '客服', max: 38000},
        { name: '研发', max: 52000},
        { name: '市场', max: 25000}
    ]

    /*实例化echarts*/
    const chart = echarts.init(document.getElementById('echart4'),'walden');

    /*配置项*/
    const option = {
        /*
        * title 标题
        *   text 主标题，如'西虹市财务开销'
        * */
        title:{
            text:'西虹市财务开销',
        },

        /*
        * tooltip 提示
        * */
        tooltip:{},


        /*legend 图例
        *   data 数据，如['预算分配', '实际开销']
        *   orient 排列方式
        *       vertical 竖排
        *       horizontal 横排，默认
        *   left 左边距，如0
        *   top 上边距，如32
        * */
        legend:{
            data:['预算分配', '实际开销'],
            orient:'vertical',
            left:0,
            top:32
        },


        /*
        * 雷达坐标系组件 radar
        *   indicator[] 雷达图的指示器，定义雷达的轴
        * */
        radar:{
            indicator
        },

        /*
        * series系列集合
        * type 图表类型
        *   radar 雷达图
        *   data 数据
        * */
        series:[
            {type:'radar',data}
        ]

    };
    // 使用刚指定的配置项和数据显示图表。
    chart.setOption(option);
}
