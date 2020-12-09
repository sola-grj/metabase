import React, { Component } from "react";
import echarts from 'echarts'
// import 'echarts/map/js/china'
import {china} from 'echarts/map/js/china'
import * as province from './GeoMiddle';
import * as mapdata from './ProvinceData'

import * as city from './GeoCity'
import * as citydata from './CityData'

import {seriesData} from './ProvinceData'
import {provincesdata} from "./ProvinceData";



class CMap extends Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   settings:props.settings,
    // };
  }
  // componentWillMount() {
  //   this.componentWillReceiveProps(this.props);
  // }

  componentDidMount() {
    this.setState({
      province,
      city,
    });
    china(echarts);
    this.initEcharts('china', '中国');
  }
  // 初始化echarts
  initEcharts(pName, Chinese_) {
    var myChart = echarts.init(document.getElementById('china-map'));
    var oBack = document.getElementById('back');

    var option = {



      title: {
        text: Chinese_ || pName,
        left: 'center',
      },

      tooltip: {
        trigger: 'item',


        formatter: function loadData(result){//回调函数，参数params具体格式参加官方API
          //鼠标放到某个地市上，显示这个地市的名称加人口数
          //例如 params.name：当前地市名称。params.value：你传入的json数据与当前地市匹配的一项。
          //params.data.value:你传入的json数据与当前地市匹配的一项中'value'对应的数据
          var metricName = _this.props.settings["map.metric"]
          console.log("自定制地图中的指标：" + _this.props.settings["map.metric"] + typeof (_this.props.settings["map.metric"]));
          return result.name+'<br />' + metricName + ":"+result.value;
        }
      },
      // tooltip: {
      //   trigger: 'item',
      //   formatter: function(params) {
      //     var res = params.name+'<br/>';
      //     var myseries = option.series;
      //     for (var i = 0; i < myseries.length; i++) {
      //       for(var j=0;j<myseries[i].data.length;j++){
      //         // console.log("series名字" + myseries[i].data[j].name)
      //         if(myseries[i].data[j].name==params.name){
      //           // res+=myseries[i].name +' : '+myseries[i].data[j].value+'</br>';
      //           res+="金额" +' : '+myseries[i].data[j].value+'</br>' ;
      //           res+="数量" +' : ' +myseries[i].data[j].value1 + '</br>';
      //         }
      //       }
      //     }
      //     return res;
      //   }
      // },
      // tooltip: {
      //   trigger: 'item',
      //   formatter:function(params,ticket, callback){
      //     return params.seriesName+'<br />'+params.name+'：'+params.value
      //   }
      // },
      // tooltip: {
      //   trigger: 'item',
      //   formatter: '{b}<br/>{c}',
      // },
      //左侧小导航图标
      visualMap: {
        show: true,
        x: 'left',
        y: 'top',
        splitList: this.props.splitList,
        color: ['#3D74CC', '#5A8EE0', '#6FA4F7', '#80B1FF', '#99C0FF', '#B3D0FF'],
      },
      mapkey : Chinese_ || pName,
      series: [
        {
          name: Chinese_ || pName,
          // name: mapkey,
          type: 'map',
          mapType: pName,
          roam: false, //是否开启鼠标缩放和平移漫游
          // data: this.props.mapData,
          // data: provincesdata,
          data: (Chinese_ || pName) === '中国' ? seriesData : provincesdata,
          // data: mapKey === '中国' ? seriesData : provincesdata,
          top: '3%', //组件距离容器的距离
          zoom: 1.1,
          selectedMode: 'single',

          label: {
            normal: {
              show: true, //显示省份标签
              textStyle: {color: '#585858', fontSize: 12}, //省份标签字体颜色
            },
            emphasis: {
              //对应的鼠标悬浮效果
              show: true,
              textStyle: {color: '#aaa'},
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 0.5, //区域边框宽度
              borderColor: '#A6E1FF', //区域边框颜色
              areaColor: '#fff', //区域颜色
            },

            emphasis: {
              borderWidth: 0.5,
              borderColor: '#FFD1A3',
              areaColor: '#FFDAA6',
            },
          },
        },
      ],
    };

    myChart.setOption(option);


    myChart.off('click');

    let _this = this;
    if (pName === 'china') {
      // 全国时，添加click 进入省级
      console.log("option.series.name——" + option.series[0].name)
      myChart.on('click', function(param) {
        for (var i = 0; i < mapdata.provincesText.length; i++) {
          if (param.name === mapdata.provincesText[i]) {
            //显示对应省份的方法
            const pName = mapdata.provinces[i];
            echarts.registerMap(mapdata.provincesText[i], _this.state.province.default[0][pName]);
            _this.initEcharts(mapdata.provincesText[i]);
            // 显示对应区县的方法
            myChart.on('click',function (param2) {
              for (var j = 0; j < citydata.citiesText.length; j++) {
                if (param2.name === citydata.citiesText[j]) {
                  const cName = citydata.cities[j];
                  echarts.registerMap(citydata.citiesText[i], _this.state.city.default[0][cName]);
                  _this.initEcharts(citydata.citiesText[i]);
                }

              }

            });


            break;
          }
        }
        if (param.componentType === 'series') {
          var provinceName = param.name;
        }
      });
    } else {
      // 省份，添加双击 回退到全国
      myChart.on('dblclick', function() {
        _this.initEcharts('china', '中国');
      });
    }
  }

  render() {

    return (
      <div>
        <button
          onClick={() => {
            this.initEcharts('china', '中国');
          }}
        >
          返回全国
        </button>
        <div
          style={{marginTop: '20px', width: '100%', height: document.body.clientHeight * 0.7}}
          id="china-map"
        />
        <div id="cont_city_map" style={{marginTop: '20px', width: '100%', height: document.body.clientHeight * 0.7}} />

      </div>

  );
  }
}

export default CMap;

