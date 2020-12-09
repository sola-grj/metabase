/* eslint-disable no-color-literals */

import React, { Component } from "react";
import { t } from "ttag";
import LoadingSpinner from "metabase/components/LoadingSpinner";

import { isString } from "metabase/lib/schema_metadata";
import { MinColumnsError } from "metabase/visualizations/lib/errors";
import MetabaseSettings from "metabase/lib/settings";

import { formatValue } from "metabase/lib/formatting";

import ChartWithLegend from "./ChartWithLegend";
import LegacyChoropleth from "./LegacyChoropleth";
import LeafletChoropleth from "./LeafletChoropleth";

import {
  computeMinimalBounds,
  getCanonicalRowKey,
} from "metabase/visualizations/lib/mapping";

import d3 from "d3";
import ss from "simple-statistics";
import _ from "underscore";
import Color from "color";
import {china} from "echarts/map/js/china";
import echarts from "echarts";
import {seriesData} from '../visualizations/ProvinceData'
// import {provincesdata} from "../visualizations/ProvinceData";
import * as province from '../visualizations/GeoMiddle';

import * as mapdata from '../visualizations/ProvinceData'
import $ from 'jquery'
import * as city from '../visualizations/GeoCity'
import * as citydata from '../visualizations/CityData'
import { getComputedSettingsForSeries } from "metabase/visualizations/lib/settings/visualization";
import {getFriendlyName} from "metabase/visualizations/lib/utils";
import LineAreaBarChart from "../components/LineAreaBarChart.jsx";
// TODO COLOR
const HEAT_MAP_COLORS = ["#C4E4FF", "#81C5FF", "#51AEFF", "#1E96FF", "#0061B5"];
const HEAT_MAP_ZERO_COLOR = "#CCC";

export function getColorplethColorScale(
  color,
  { lightness = 92, darken = 0.2, darkenLast = 0.3, saturate = 0.1 } = {},
) {
  const lightColor = Color(color)
    .lightness(lightness)
    .saturate(saturate);

  const darkColor = Color(color)
    .darken(darken)
    .saturate(saturate);

  const scale = d3.scale
    .linear()
    .domain([0, 1])
    .range([lightColor.string(), darkColor.string()]);

  const colors = d3.range(0, 1.25, 0.25).map(value => scale(value));

  if (darkenLast) {
    colors[colors.length - 1] = Color(color)
      .darken(darkenLast)
      .saturate(saturate)
      .string();
  }

  return colors;
}

const geoJsonCache = new Map();
function loadGeoJson(geoJsonPath, callback) {
  if (geoJsonCache.has(geoJsonPath)) {
    setTimeout(() => callback(geoJsonCache.get(geoJsonPath)), 0);
  } else {
    d3.json(geoJsonPath, json => {
      geoJsonCache.set(geoJsonPath, json);
      callback(json);
    });
  }
}

export function getLegendTitles(groups, columnSettings) {
  const formatMetric = (value, compact) =>
    formatValue(value, { ...columnSettings, compact });

  const compact = shouldUseCompactFormatting(groups, formatMetric);

  return groups.map((group, index) => {
    const min = formatMetric(group[0], compact);
    const max = formatMetric(group[group.length - 1], compact);
    return index === groups.length - 1
      ? `${min} +` // the last value in the list
      : min !== max
        ? `${min} - ${max}` // typical case
        : min; // special case to avoid zero-width ranges e.g. $88-$88
  });
}

// if the average formatted length is greater than this, we switch to compact formatting
const AVERAGE_LENGTH_CUTOFF = 5;
function shouldUseCompactFormatting(groups, formatMetric) {
  const minValues = groups.map(([x]) => x);
  const maxValues = groups.slice(0, -1).map(group => group[group.length - 1]);
  const allValues = minValues.concat(maxValues);
  const formattedValues = allValues.map(value => formatMetric(value, false));
  const averageLength =
    formattedValues.reduce((sum, { length }) => sum + length, 0) /
    formattedValues.length;
  return averageLength > AVERAGE_LENGTH_CUTOFF;
}



class CMap extends Component {
  constructor(props, context) {
    // const myChart = echarts.init(document.getElementById('china-map'));
    super(props, context);
    // const myChart = echarts.init(document.getElementById('china-map'));

    // this.dataProcess()
    // this.state = {
    //   settings:props.settings,
    // };
  }
  componentWillMount() {
    const myChart = echarts.init(document.getElementById('china-map'));
    // this.props.settings["map.dimension"] = "adcode";
    // const myChart = echarts.init(document.getElementById('china-map'));
    // const adcode = this.props.settings["map.dimension"]
    // console.log("componentWillMount中的adcode————" + adcode)
  }

  transformSingleSeries(s, series, seriesIndex) {
    const { card, data } = s;
    // console.log("s是啥————" + JSON.stringify(s))
    // HACK: prevents cards from being transformed too many times
    if (data._transformed) {
      return [s];
    }

    const { cols, rows } = data;
    const settings = getComputedSettingsForSeries([s]);

    const dimensions = settings["graph.dimensions"].filter(d => d != null);
    const metrics = settings["graph.metrics"].filter(d => d != null);
    console.log("自定制地图中的，条形图的指标吗————" + metrics + "另一个" + dimensions)
    console.log("看看这里可以拿到吗————" + this.props.settings["map.dimension"]);

    return metrics

  }



  dataProcess() {
    console.log("dataprocess执行啦！！");


    const mapName = MetabaseSettings.get("custom-geojson", {})[
      this.props.settings["map.region"]
      ].name;

    const metricIndex = _.findIndex(
      this.props.series[0].data.cols,
      col => col.name ===  this.props.settings["map.metric"],
    );
    var [
      {
        data: { cols, rows },
      },
    ] = this.props.series;
    const dimensionIndex = _.findIndex(
      this.props.series[0].data.cols,
      col => col.name ===  this.props.settings["map.dimension"],
    );
    const getRowKey = row =>
      getCanonicalRowKey(row[dimensionIndex], this.props.settings["map.region"]);
    const getRowValue = row => row[metricIndex] || 0;
    var rowrow = this.props.series[0].data.rows;
    var maxVal = 0;
    for (const row of rowrow) {
      const key = getRowKey(row);
      const value = getRowValue(row);
      for(var j=0;j<seriesData.length;j++){
        // console.log(typeof (key),typeof (seriesData[j].code))
        if (key === seriesData[j].code ){
          // myseries[0].data[j].value = value;
          maxVal = maxVal > value ?  maxVal : value
          seriesData[j].value = value;
          // myseries[0].data[j][metricName.toString()] = value;
          // res+=metricName +' : '+myseries[0].data[j][metricName.toString()]+'</br>' ;
          // res+=metricName +' : '+myseries[0].data[j].value+'</br>' ;
          break
        }
      // else if (key === provincesdata[j].code){
      //     provincesdata[j].value = value;
      //   }
      }
    }
    this.getMax(maxVal);
    if (mapName === "全国") {
      this.initEcharts('china', '中国')
    }
    else {
      // echarts.registerMap(mapName.slice(0,-2), require('../map/mapJson/' + area.code + '.json'));
      // _this.initEcharts(param.name);
      // this.myChart.off('contextmenu');
      const mapArea = seriesData.find((element) =>element.name === mapName);
      echarts.registerMap(mapName, require('../map/mapJson/' + mapArea.code + '.json'));
      this.initEcharts(mapName);
    }

  }
  getMax() {
    const metricIndex = _.findIndex(
      this.props.series[0].data.cols,
      col => col.name ===  this.props.settings["map.metric"],
    );
    var [
      {
        data: { cols, rows },
      },
    ] = this.props.series;
    const dimensionIndex = _.findIndex(
      this.props.series[0].data.cols,
      col => col.name ===  this.props.settings["map.dimension"],
    );
    const getRowKey = row =>
      getCanonicalRowKey(row[dimensionIndex], this.props.settings["map.region"]);
    const getRowValue = row => row[metricIndex] || 0;
    var valueList = this.props.series[0].data.rows;
    var rowrow = this.props.series[0].data.rows;
    var maxVal = 0;
    for (const row of rowrow) {
      const key = getRowKey(row);
      const value = getRowValue(row);
      for(var j=0;j<seriesData.length;j++){
        // console.log(typeof (key),typeof (seriesData[j].code))
        if (key === seriesData[j].code ){
          // myseries[0].data[j].value = value;
          maxVal = maxVal > value ?  maxVal : value
          seriesData[j].value = value;
          // myseries[0].data[j][metricName.toString()] = value;
          // res+=metricName +' : '+myseries[0].data[j][metricName.toString()]+'</br>' ;
          // res+=metricName +' : '+myseries[0].data[j].value+'</br>' ;
          break
        }
        // else if (key === provincesdata[j].code){
        //     provincesdata[j].value = value;
        //   }
      }
    }
    return maxVal


  }

  // 初始化echarts
  initEcharts(pName, Chinese_) {
    // this.dataProcess();
    const myChart = echarts.init(document.getElementById('china-map'));
    // var oBack = document.getElementById('back');



    var option = {

      title: {
        text: Chinese_ || pName,
        left: 'center',
      },

      tooltip: {
        trigger: 'item',


        formatter: function loadData(params){//回调函数，参数params具体格式参加官方API
          //鼠标放到某个地市上，显示这个地市的名称加人口数
          //例如 params.name：当前地市名称。params.value：你传入的json数据与当前地市匹配的一项。
          //params.data.value:你传入的json数据与当前地市匹配的一项中'value'对应的数据
          // const { card, data } = s;
          var [
            {
              card,
              data: { cols, rows },
            },
          ] = _this.props.series;
          const test = MetabaseSettings.get("custom-geojson", {})[
            _this.props.settings["map.region"]
            ];

          // 自定制的多指标展示中的指标字段
          const newSeries = [].concat(
            ..._this.props.series.map((s, seriesIndex) =>
              _this.transformSingleSeries(s, _this.props.series, seriesIndex),
            ),
          );
          console.log("newSeries——" + newSeries,typeof (newSeries))
          const dimensionIndex = _.findIndex(
            _this.props.series[0].data.cols,
            col => col.name ===  _this.props.settings["map.dimension"],
          );
          // 对应指标的索引
          const metricIndex = _.findIndex(
            _this.props.series[0].data.cols,
            col => col.name ===  _this.props.settings["map.metric"],
          );
          const getRowKey = row =>
            getCanonicalRowKey(row[dimensionIndex], _this.props.settings["map.region"]);
          const getRowValue = row => row[metricIndex] || 0;
          // 自定制地图中的指标
          var metricName = _this.props.settings["map.metric"]

          var resultLis = new Array()
          var colList=new Array()
          for (let i = 0; i < cols.length; i++) {
            colList.push(cols[i].name)
          }
          // console.log("指标列表" + colList,typeof (colList))
          for (let i = 0; i < rows.length; i++) {
            // console.log(rows[i])
            var resultObj = new Object()
            for (let j = 0; j < colList.length; j++) {
              // console.log(colList[j] + "——————" + rows[i][j])
              resultObj[colList[j]] = rows[i][j]
            }
            resultLis.push(resultObj)
            // console.log("resultObj是——"+JSON.stringify(resultObj))

          }
          // console.log("resultLis是——",resultLis)
          const basicArea = seriesData.find((element) =>element.name === params.name);

          var res1 = params.name + '<br/>';
          for (let i = 0; i < resultLis.length; i++) {
            for (let j = 0; j < newSeries.length; j++) {

            if (basicArea.pcode) {
              if (params.name === resultLis[i].name) {
                var result2 = newSeries[j] + ':' + resultLis[i][newSeries[j]]+ '<br/>'
                res1 += result2
              }
            } else {
              if (resultLis[i].name.indexOf(params.name) != -1) {
                var result3 = newSeries[j] + ':' + resultLis[i][newSeries[j]]+ '<br/>'
                res1 += result3
              }
            }
            }
          }
          return res1
        }
      },
      //左侧小导航图标
      visualMap: {
        show: true,
        min: 0,
        max:this.getMax(),
        x: 'left',
        y: 'bottom',
        text: ['高', '低'],
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
          data: seriesData,
          // data: (Chinese_ || pName) === '中国' ? seriesData : provincesdata,
          // data: this.dataProcess(),
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
              label : {
                show:true,
                formatter:'{b}\n{c}'
              },
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

    // if (pName === 'china') {
    //   myChart.on('click',function (param) {
    //     pName = param.name
    //     const area = mapdata.seriesData.find((d) => d.name.includes(param.name))
    //     // console.log("点击的区域是——" + area.code)
    //     // console.log("点击的城市是——" + param.name)
    //     console.log("第一次的pName是——" + pName)
    //     echarts.registerMap(param.name, require('../map/mapJson/' + area.code + '.json'));
    //     _this.initEcharts(param.name);
    //     myChart.on('click',function (param2) {
    //       const area1 = mapdata.provincesdata.find((d) => d.name.includes(param2.name))
    //       pName = param2.name
    //       // console.log("点击的区域是——" + area1.code)
    //       // console.log("点击的城市是——" + param2.name)
    //       console.log("第二次的pName是——" + pName)
    //       echarts.registerMap(param2.name, require('../map/mapJson/' + area1.code + '.json'));
    //       _this.initEcharts(param2.name);
    //
    //     })
    //
    //   })
    // }
    // else {
    //   document.oncontextmenu = function () { return false; };
    //   myChart.on('contextmenu',function (param) {
    //     console.log(param.name)
    //
    //   })
    // }
    myChart.on('click',function (param) {
      pName = param.name
      console.log(param.name)
      const area = seriesData.find((element) =>element.name === param.name);
      if (area) {
        echarts.registerMap(param.name, require('../map/mapJson/' + area.code + '.json'));
        _this.initEcharts(param.name);
      }
      // console.log("自己写的area2——" +area,area.code,area.name)
      // var codeinfo = stu.find((element) => (element.name == infos));
      // const area = mapdata.seriesData.find((d) => d.name.includes(param.name))
      // console.log("点击的区域是——" + area.code)
      // console.log("点击的城市是——" + param.name)
      // console.log("第一次的pName是——" + pName)

      // myChart.on('click',function (param2) {
      //   const area1 = mapdata.provincesdata.find((d) => d.name.includes(param2.name))
      //   pName = param2.name
      //   // console.log("点击的区域是——" + area1.code)
      //   // console.log("点击的城市是——" + param2.name)
      //   console.log("第二次的pName是——" + pName)
      //   echarts.registerMap(param2.name, require('../map/mapJson/' + area1.code + '.json'));
      //   _this.initEcharts(param2.name);
      //
      // })

    })
    myChart.off('contextmenu')
    document.oncontextmenu = function () { return false; };
    myChart.on('contextmenu',function (param) {
      // console.log("返回时候的pNmae——" + param.name)
      // const area = mapdata.seriesData.find((d) => d.name.includes(param.name));
      const area = seriesData.find((element) =>element.name === param.name);
      console.log("返回时候的area——" + area.pcode,area.pname)
      if (area.pname != '中国') {
        echarts.registerMap(area.pname, require('../map/mapJson/' + area.pcode + '.json'));
        _this.initEcharts(area.pname);
      } else {
        _this.initEcharts('china', '中国');
      }
      // echarts.registerMap(area.pname, require('../map/mapJson/' + area.pcode + '.json'));
      // _this.initEcharts(area.pname);



    })



    // 以实现功能，但是上卷效率极低
    // if (pName === 'china') {
    //   // 全国时，添加click 进入省级
    //   // console.log("option.series.name——" + option.series[0].name)
    //   myChart.on('click', function(param) {
    //     for (var i = 0; i < mapdata.provincesText.length; i++) {
    //       num += 1;
    //       if (param.name === mapdata.provincesText[i]) {
    //         //显示对应省份的方法
    //         const pName = mapdata.provinces[i];
    //         echarts.registerMap(mapdata.provincesText[i], _this.state.province.default[0][pName]);
    //         _this.initEcharts(mapdata.provincesText[i]);
    //         myChart.off('click');
    //         // 显示对应区县的方法
    //         myChart.on('click',function (param2) {
    //
    //           for (var j = 0; j < citydata.citiesText.length; j++) {
    //             if (param2.name === citydata.citiesText[j]) {
    //               const cName = citydata.cities[j];
    //               echarts.registerMap(citydata.citiesText[i], _this.state.city.default[0][cName]);
    //               _this.initEcharts(citydata.citiesText[i]);
    //               break
    //             }
    //
    //           }
    //
    //         });
    //
    //
    //         break;
    //       }
    //     }
    //     if (param.componentType === 'series') {
    //       var provinceName = param.name;
    //     }
    //   });
    // } else {
    //   // 省份，添加双击 回退到全国
    //   // 阻止浏览器默认的右键行为
    //   document.oncontextmenu = function () { return false; };
    //   myChart.on('contextmenu', function(param) {
    //     console.log(num += 1)
    //     const area = citydata.QuSeriesData.find((d) => d.name.includes(param.name));
    //     console.log("这个area时什么？？",area)
    //     if (area) {
    //       echarts.registerMap(area.pname,require('echarts/map/json/province/liaoning' + '.json'))
    //       _this.initEcharts(area.pname)
    //       myChart.on('click',function (param2) {
    //         const area1 = citydata.citySeriesData.find((d) => d.name.includes(param2.name));
    //         echarts.registerMap(area1.name,require('../map/LiaoNing/shenyang' + '.json'))
    //         _this.initEcharts(area1.name)
    //         console.log("第二个area时什么？？",area1)
    //
    //       })
    //     }

        // var dqName = param.name;
        // for (var i = 0; i < citydata.QuSeriesData.length; i++) {
        //   if (dqName === citydata.QuSeriesData[i].name){
        //     _this.initEcharts(citydata.QuSeriesData[i].pname);
        //     myChart.on('click',function (param2) {
        //       for (var j = 0; j < citydata.citiesText.length; j++) {
        //         if (param2.name === citydata.citiesText[j]) {
        //           const cName = citydata.cities[j];
        //           echarts.registerMap(citydata.citiesText[i], _this.state.city.default[0][cName]);
        //           _this.initEcharts(citydata.citiesText[i]);
        //           myChart.off('click');
        //           break;
        //         }
        //
        //
        //       }
        //
        //     });
        //     break
        //   } else {
        //     myChart.on('contextmenu',function (param3) {
        //       _this.initEcharts('china', '中国');
        //       myChart.off('contextmenu');
        //     })
        //   }
        //
        // }
        // console.log("当前的名字吗？？" + dqName);
        // _this.initEcharts('china', '中国');
      // });
    // }
  }

  componentDidMount() {
    this.setState({
      province,
      city,
    });
    // china(echarts);
    // this.dataProcess();
    // const adcode = this.props.settings["map.dimension"]
    // console.log("componentDidMount中的adcode————" + adcode)

    // () => {
    //   this.dataProcess()}
    // this.initEcharts('china', '中国');

  }

  render() {
    // const myChart = echarts.init(document.getElementById('china-map'));

    // const adcode = this.props.settings["map.dimension"]
    // console.log("render中的adcode————" + adcode)
    // if (adcode === "code"){
    //   // eslint-disable-next-line no-debugger
    //   // debugger
    //   this.dataProcess();
    //   console.log("dataProcess执行啦！")
    // }

    return (
      // <ChartWithLegend
      // >
        <div  >

          <div style={{textAlign:"center"}}>
            <button
              // className={"Button ViewButton-fzsTLw dsgxYG sc-bdVaJa jqLGWU flex-no-shrink Button--medium"}
              className={"Button "}
              style={{backgroundColor:"rgb(203,204,206)"}}
              onClick={() => {
                this.dataProcess()
              }}

            >
              刷新
            </button>
          </div>

          {/*<div>*/}
          {/*  默认指标为：{this.props.settings["map.metric"]}*/}
          {/*</div>*/}

          <div
            // onMouseEnter={() => {
            //   this.initEcharts('china', '中国');
            // }}
            style={{marginTop: '20px', width: '100%', height: document.body.clientHeight * 0.7}}
            id="china-map"
          />
          {/*<div id="cont_city_map" style={{marginTop: '20px', width: '100%', height: document.body.clientHeight * 0.7}} />*/}
          {/*<div id="cont_pro_map" style={{marginTop: '20px', width: '100%', height: document.body.clientHeight * 0.7}} />*/}


        </div>

      // {/*</ChartWithLegend>*/}
      //ChartWithLegend__Chart___uA8y9



    );
  }
}
console.log("dom是否渲染了——————" + document.getElementById('china-map'))
{/*export default class ChoroplethMap extends Component {*/}
{/*        */}
{/*      }*/}
class ChoroplethMap extends Component {
  static propTypes = {};

  static minSize = { width: 4, height: 4 };

  static isSensible({ cols, rows }) {
    console.log(rows)
    return cols.length > 1 && isString(cols[0]);
  }

  static checkRenderable([
                           {
                             data: { cols, rows },
                           },
                         ]) {
    if (cols.length < 2) {
      throw new MinColumnsError(2, cols.length);
    }
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      geoJson: null,
      geoJsonPath: null,
    };
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  _getDetails(props) {
    return MetabaseSettings.get("custom-geojson", {})[
      props.settings["map.region"]
      ];
  }

  componentWillReceiveProps(nextProps) {
    const details = this._getDetails(nextProps);
    if (details) {
      let geoJsonPath;
      if (details.builtin) {
        geoJsonPath = details.url;
      } else {
        geoJsonPath = "api/geojson/" + nextProps.settings["map.region"];
      }
      if (this.state.geoJsonPath !== geoJsonPath) {
        this.setState({
          geoJson: null,
          geoJsonPath: geoJsonPath,
        });
        loadGeoJson(geoJsonPath, geoJson => {
          this.setState({
            geoJson: geoJson,
            geoJsonPath: geoJsonPath,
            minimalBounds: computeMinimalBounds(geoJson.features),
          });
        });
      }
    }
  }

  render() {
    const details = this._getDetails(this.props);
    if (!details) {
      return <div>{t`unknown map`}</div>;
    }

    const {
      series,
      className,
      gridSize,
      hovered,
      onHoverChange,
      visualizationIsClickable,
      onVisualizationClick,
      settings,
    } = this.props;
    const { geoJson, minimalBounds } = this.state;
    // console.log("发现一个series————" + settings["map.metric"]);
    // special case builtin maps to use legacy choropleth map
    let projection, projectionFrame;
    // projectionFrame is the lng/lat of the top left and bottom right corners
    if (settings["map.region"] === "us_states") {
      projection = d3.geo.albersUsa();
      projectionFrame = [[-135.0, 46.6], [-69.1, 21.7]];
    } else if (settings["map.region"] === "world_countries") {
      projection = d3.geo.mercator();
      projectionFrame = [[-170, 78], [180, -60]];
    } else {
      projection = null;
    }

    const nameProperty = details.region_name;
    const keyProperty = details.region_key;
    console.log("nameProperty.." + nameProperty)
    console.log("keyProperty.." + keyProperty)
    if (!geoJson) {
      return (
        <div className={className + " flex layout-centered"}>
          <LoadingSpinner />
        </div>
      );
    }

    const [
      {
        data: { cols, rows },
      },
    ] = series;
    const dimensionIndex = _.findIndex(
      cols,
      col => col.name === settings["map.dimension"],
    );
    const metricIndex = _.findIndex(
      cols,
      col => col.name === settings["map.metric"],
    );
    console.log("metricIndex。。。" + metricIndex)

    const getRowKey = row =>
      getCanonicalRowKey(row[dimensionIndex], settings["map.region"]);
    const getRowValue = row => row[metricIndex] || 0;
    const getFeatureName = feature => String(feature.properties[nameProperty]);
    const getFeatureKey = feature =>
      String(feature.properties[keyProperty]).toLowerCase();
    const getFeatureValue = feature => valuesMap[getFeatureKey(feature)];
    const rowByFeatureKey = new Map(rows.map(row => [getRowKey(row), row]));
    console.log("rowByFeatureKey.." + rowByFeatureKey)
    // console.log("指标索引：" + metricIndex)

    const getFeatureClickObject = (row, feature) => ({
      value: row[metricIndex],
      column: cols[metricIndex],
      dimensions: [
        {
          value:
            feature != null ? getFeatureName(feature) : row[dimensionIndex],
          column: cols[dimensionIndex],
        },
      ],
      origin: { row, cols },
      settings,
    });

    const isClickable =
      onVisualizationClick &&
      visualizationIsClickable(getFeatureClickObject(rows[0]));

    const onClickFeature =
      isClickable &&
      (click => {
        // row为从数据库中查出来的一条数据的信息 row的值130000,河北,888
        const row = rowByFeatureKey.get(getFeatureKey(click.feature));
        // console.log("原地图中的row" + row);
        if (row && onVisualizationClick) {
          onVisualizationClick({
            ...getFeatureClickObject(row),
            event: click.event,
          });
        }
      });
    const onHoverFeature =
      onHoverChange &&
      (hover => {
        const row = hover && rowByFeatureKey.get(getFeatureKey(hover.feature));
        if (row && onHoverChange) {

          onHoverChange({
            ...getFeatureClickObject(row, hover.feature),
            event: hover.event,
          });
        } else if (onHoverChange) {
          onHoverChange(null);
        }
      });

    const valuesMap = {};
    for (const row of rows) {
      const key = getRowKey(row);
      const value = getRowValue(row);
      valuesMap[key] = (valuesMap[key] || 0) + value;
    }
    // console.log(valuesMap)
    const domainSet = new Set(Object.values(valuesMap));
    const domain = Array.from(domainSet);

    const _heatMapColors = settings["map.colors"] || HEAT_MAP_COLORS;
    const heatMapColors = _heatMapColors.slice(-domain.length);

    const groups = ss.ckmeans(domain, heatMapColors.length);
    const groupBoundaries = groups.slice(1).map(cluster => cluster[0]);

    const colorScale = d3.scale
      .threshold()
      .domain(groupBoundaries)
      .range(heatMapColors);

    const columnSettings = settings.column(cols[metricIndex]);
    const legendTitles = getLegendTitles(groups, columnSettings);

    const getColor = feature => {
      const value = getFeatureValue(feature);
      // console.log("this value .." + value)
      return value == null ? HEAT_MAP_ZERO_COLOR : colorScale(value);
    };

    let aspectRatio;
    if (projection) {
      const [[minX, minY], [maxX, maxY]] = projectionFrame.map(projection);
      aspectRatio = (maxX - minX) / (maxY - minY);
    } else {
      aspectRatio =
        (minimalBounds.getEast() - minimalBounds.getWest()) /
        (minimalBounds.getNorth() - minimalBounds.getSouth());
    }

    return (
      <ChartWithLegend
        className={className}
        aspectRatio={aspectRatio}
        legendTitles={legendTitles}
        legendColors={heatMapColors}
        gridSize={gridSize}
        hovered={hovered}
        onHoverChange={onHoverChange}
        isDashboard={this.props.isDashboard}
      >
        {projection ? (
          <LegacyChoropleth
            series={series}
            geoJson={geoJson}
            getColor={getColor}
            onHoverFeature={onHoverFeature}
            onClickFeature={onClickFeature}
            projection={projection}
            projectionFrame={projectionFrame}
          />
        ) : (
          <LeafletChoropleth
            series={series}
            geoJson={geoJson}
            getColor={getColor}
            onHoverFeature={onHoverFeature}
            onClickFeature={onClickFeature}
            // onClickFeature={onHoverFeature}
            minimalBounds={minimalBounds}
          />
        )}
      </ChartWithLegend>
    );
  }
}



export default CMap;
