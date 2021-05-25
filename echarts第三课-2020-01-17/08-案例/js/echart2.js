{
    /*echart2 - 饼图*/
    /*数据源*/
    const source=[
        {value:5,name:'旅游'},
        {value:4,name:'饮食'},
        {value:4,name:'服装'},
        {value:3,name:'电影'},
        {value:2,name:'其它'}
    ];

    /*实例化echarts*/
    const chart = echarts.init(document.getElementById('echart2'),'walden');
    /*配置项
    *   title
    *       text '西虹市人民衣食住行消费比'
    *   dataset 数据集
    *       source 数据源
    *   series 系列集合
    *       type 系列类型，如pie
    *       roseType 南丁格尔图
    * */
    const option = {
        title:{
            text:'西虹市人民衣食住行消费比',
            left:'center'
        },
        dataset:{source},
        series:[
            {
                type:'pie',
                radius:'60%',
                roseType:true
            }
        ]
    };

    /*显示图表*/
    chart.setOption(option);
}
