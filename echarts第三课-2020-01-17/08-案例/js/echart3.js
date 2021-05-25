{
    /*echart3 - 散点图*/

    /*维度*/
    const dimensions=['收入','年龄','人口','住址','时间']

    /*实例化echarts*/
    const chart = echarts.init(document.getElementById('echart3'),'walden');


    fetch('./lib/table.json')
        .then((res) => res.json())
        .then(data => {
            show(data);
            // console.log(data)
        })

    /*显示图标*/
    function show(source) {
        const option = {
            /*
            * title 标题
            *   text 主标题，如'西虹市人民收入和年龄关系'
            *   left 左对齐方式
            * */
            title:{
                text:'西虹市人民收入和年龄关系',
                left:'center'
            },

            /*
            * tooltip 提示
            * */
            tooltip:{},

            /*
            * 坐标轴
            *   type 坐标轴类型
            *       value  数值轴，适用于连续数据
            *   name 坐标轴名称
            *   axisLabel 坐标轴刻度标签的相关设置
            *       rotate 刻度标签旋转的角度
            * */
            xAxis:{
                type:'value',
                name:'年龄',
                axisLabel:{
                    rotate:50
                }
            },
            yAxis:{
                type:'value',
                name:'收入'
            },
            /*
            * dataset 数据集
            *   dimensions 维度映射 []
            *       string，如 '年龄'，等同于 {name: '年龄'}
            *   source 数据源
            * */
            dataset:{
                dimensions,
                source
            },

            /*
            * series系列集合
            *   type 图表类型
            *       scatter 散点图
            *   symbolSize 散点大小
            *   encode 编码映射
            *       x  x坐标系的维度映射，如'收入'
            *       y  y坐标系的维度映射，如'年龄'
            *       tooltip 提示映射，如[0, 1, 2, 3, 4]
            *   itemStyle 项目样式
            *       opacity 项目透明度
            * */
            series:[
                {
                    type:'scatter',
                    symbolSize:5,
                    encode:{
                        x:'年龄',
                        y:'收入',
                        tooltip:[0,1,2,3,4]
                    },
                    itemStyle:{
                        opacity:0.3
                    }
                }
            ]

        };
        // 使用刚指定的配置项和数据显示图表。
        chart.setOption(option);
    }
}
