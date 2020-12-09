import React, { Component } from "react";
import echarts from 'echarts'
// import 'echarts/map/js/china'
import {china} from 'echarts/map/js/china'
import * as province from './GeoMiddle';
import * as mapdata from './ProvinceData'
import {seriesData} from './ProvinceData'
import $ from 'jquery'
import {geoCoordMap,provienceData} from "./geo";
// import geojson from 'echarts/map/json/china'

let geoJson = require("echarts/map/json/china" + '.json');

class CMap2 extends Component {
  componentDidMount() {
    this.setState({
      province,
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
          return result.name+'<br />数据:'+result.value;
        }
      },
      //左侧小导航图标
      visualMap: {
        show: true,
        x: 'left',
        y: 'top',
        splitList: this.props.splitList,
        color: ['#3D74CC', '#5A8EE0', '#6FA4F7', '#80B1FF', '#99C0FF', '#B3D0FF'],
      },

      series: [
        {
          name: Chinese_ || pName,
          type: 'map',
          mapType: pName,
          roam: false, //是否开启鼠标缩放和平移漫游
          // data: this.props.mapData,
          data: seriesData,
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
    myChart.on('click', function (result) {//回调函数，点击时触发，参数params格式参加官方API
      setTimeout(function () {
        $('#cont_pro_map').css('display','none');
        $('#cont_city_map').css('display','block');
        $('.retPro').css('display','block');
      }, 500);
      //选择地级市的单击事件
      var selectCity = result.name;
      console.log("selectCity名字" + selectCity)
      //alert(selectCity);
      //    调取后台数据
      // $.get('../'+selectCity+'.json', function (Citymap) {
      //   echarts.registerMap(selectCity, Citymap);
      //   var myChartCity = echarts.init(document.getElementById('cont_city_map'));
      //   myChartCity.setOption({
      //     tooltip: {
      //       trigger: 'item',
      //       formatter: function loadData(result){//回调函数，参数params具体格式参加官方API
      //         //鼠标放到某个地市上，显示这个地市的名称加人口数
      //         //例如 params.name：当前地市名称。params.value：你传入的json数据与当前地市匹配的一项。
      //         //params.data.value:你传入的json数据与当前地市匹配的一项中'value'对应的数据
      //         return result.name+'<br />数据:'+result.value;
      //       }
      //     },
      //     dataRange:{
      //       min:0,
      //       max:50,
      //       text:['高','低'],
      //       realtime:false,
      //       calculable:false,
      //       splitNumber:0,
      //       itemWidth:10,
      //       itemHeight:60,
      //       color:['lightskyblue','#f2f2f2']
      //     },
      //     title:{
      //       text:selectCity+'地图数据总览',
      //       //subtext:'',
      //       x:'center',
      //       y:'top',
      //       textAlign:'left'
      //     },
      //     series: [{
      //       type: 'map',
      //       map: selectCity ,//要和echarts.registerMap（）中第一个参数一致
      //       scaleLimit: { min: 0.8, max: 1.9 },//缩放
      //       mapLocation:{
      //         y:60
      //       },
      //       itemSytle:{
      //         emphasis:{label:{show:false}}
      //       },
      //       label: {
      //         normal: {
      //           show: true
      //         },
      //         emphasis: {
      //           show: true
      //         }
      //       },
      //       data : [
      //         {name:'大方县',value:'5'},
      //         {name:'金沙县',value:'0'},
      //         {name:'织金县',value:'10'},
      //         {name:'七星关区',value:'30'},
      //         {name:'纳雍县',value:'50'},
      //         {name:'赫章县',value:'15'}
      //       ]//dataParam//人口数据：例如[{name:'济南',value:'100万'},{name:'菏泽'，value:'100万'}......]
      //     }]
      //   })
      //   myChartCity.on('click',function(rel){
      //     setTimeout(function () {
      //       //$('#cont_pro_map').css('display','block');
      //       //$('#cont_city_map').css('display','none');
      //     }, 500);
      //
      //   })
      // });
    });
    myChart.off('click');
    let _this = this;

    // if (pName === 'china') {
    //   // 全国时，添加click 进入省级
    //   myChart.on('click', function(param) {
    //     var selectCity = param.name;
    //     console.log("选择得城市名称————" + selectCity);
    //     for (var i = 0; i < mapdata.provincesText.length; i++) {
    //       if (param.name === mapdata.provincesText[i]) {
    //         //显示对应省份的方法
    //         const pName = mapdata.provinces[i];
    //         echarts.registerMap(mapdata.provincesText[i], _this.state.province.default[0][pName]);
    //         _this.initEcharts(mapdata.provincesText[i]);
    //         break;
    //       }
    //     }
    //     if (param.componentType === 'series') {
    //       var provinceName = param.name;
    //     }
    //   });
    // } else {
    //   // 省份，添加双击 回退到全国
    //   myChart.on('dblclick', function() {
    //     _this.initEcharts('china', '中国');
    //   });
    // }
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
          id="cont_pro_map"
        />
        <div
          style={{marginTop: '20px', width: '100%', height: document.body.clientHeight * 0.7}}
          id="cont_city_map"
        />
      </div>
    );
  }
}

export default CMap2;

