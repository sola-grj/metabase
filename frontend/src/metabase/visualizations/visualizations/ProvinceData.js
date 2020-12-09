import {
  computeMinimalBounds,
  getCanonicalRowKey,
} from "metabase/visualizations/lib/mapping";
import _ from "underscore";





export var provinces = [
  "shanghai",
  "chongqing",
  "beijing",
  "tianjin",
  "heilongjiang",
  "jilin",
  "liaoning",
  "neimenggu",
  "hebei",
  "shanxi",
  "shandong",
  "henan",
  "anhui",
  "jiangsu",
  "jiangxi",
  "zhejiang",
  "fujian",
  "guangdong",
  "aomen",
  "xianggang",
  "taiwan",
  "hainan",
  "hunan",
  "hubei",
  "shanxi1",
  "ningxia",
  "gansu",
  "sichuan",
  "guizhou",
  "guangxi",
  "yunnan",
  "qinghai",
  "xizang",
  "xinjiang",
  // etc.
];

export var provincesText = [
  "上海",
  "重庆",
  "北京",
  "天津",
  "黑龙江",
  "吉林",
  "辽宁",
  "内蒙古",
  "河北",
  "山西",
  "山东",
  "河南",
  "安徽",
  "江苏",
  "江西",
  "浙江",
  "福建",
  "广东",
  "澳门",
  "香港",
  "台湾",
  "海南",
  "湖南",
  "湖北",
  "陕西",
  "宁夏",
  "甘肃",
  "四川",
  "贵州",
  "广西",
  "云南",
  "青海",
  "西藏",
  "新疆",
// etc.
];
// 省级数据
export var seriesData = [
  // 34省
  { name: "上海", value: randomData(),code:"310000"},
  { name: "重庆", value: randomData(), code:"500000"},
  { name: "北京",  value: randomData(),code:"110000"},
  { name: "天津",  value: randomData(),code:"120000"},
  { name: "黑龙江",  value: randomData(),code:"230000"},
  { name: "吉林",  value: randomData(), code:"220000"},
  { name: "辽宁",   value: randomData(),code:"210000"},
  { name: "内蒙古",   value: randomData(),code:"150000"},
  { name: "河北",  value: randomData(),code:"130000",},
  { name: "山西", value: randomData(),code:"140000", },
  { name: "山东", value: randomData() ,code:"370000"},
  { name: "河南", value: randomData(),code:"410000"},
  { name: "安徽", value: randomData() ,code:"340000"},
  { name: "江苏", value: randomData(),code:"320000"},
  { name: "江西", value: randomData(),code:"360000"},
  { name: "浙江", value: randomData() ,code:"330000"},
  { name: "福建", value: randomData() ,code:"350000"},
  { name: "广东", value: randomData() ,code:"440000"},
  { name: "澳门", value: randomData() ,code:"820000"},
  { name: "香港", value: randomData() ,code:"810000"},
  { name: "台湾", value: randomData() ,code:"710000"},
  { name: "海南", value: randomData() ,code:"460000"},
  { name: "湖南", value: randomData() ,code:"430000"},
  { name: "湖北", value: randomData() ,code:"420000"},
  { name: "陕西", value: randomData() ,code:"610000"},
  { name: "宁夏", value: randomData() ,code:"640000"},
  { name: "甘肃", value: randomData() ,code:"620000"},
  { name: "四川", value: randomData() ,code:"510000"},
  { name: "贵州", value: randomData() ,code:"520000"},
  { name: "广西", value: randomData() ,code:"450000"},
  { name: "云南", value: randomData() ,code:"530000"},
  { name: "青海", value: randomData() ,code:"630000"},
  { name: "西藏", value: randomData() ,code:"540000"},
  { name: "新疆", value: randomData() ,code:"650000"},
  // 辽宁
  { name: '朝阳市', value: randomData() ,code:"211300",pcode:"100000",pname:"中国"},
  { name: '阜新市', value: randomData() ,code:"210900",pcode:"100000",pname:"中国"},
  { name: '铁岭市', value: randomData() ,code:"211200",pcode:"100000",pname:"中国"},
  { name: '沈阳市', value: randomData() ,code:"210100",pcode:"100000",pname:"中国"},
  { name: '抚顺市', value: randomData() ,code:"210400",pcode:"100000",pname:"中国"},
  { name: '锦州市', value: randomData() ,code:"210700",pcode:"100000",pname:"中国"},
  { name: '盘锦市', value: randomData() ,code:"211100",pcode:"100000",pname:"中国"},
  { name: '辽阳市', value: randomData() ,code:"211000",pcode:"100000",pname:"中国"},
  { name: '本溪市', value: randomData() ,code:"210500",pcode:"100000",pname:"中国"},
  { name: '鞍山市', value: randomData() ,code:"210300",pcode:"100000",pname:"中国"},
  { name: '营口市', value: randomData() ,code:"210800",pcode:"100000",pname:"中国"},
  { name: '大连市', value: randomData() ,code:"210200",pcode:"100000",pname:"中国"},
  { name: '葫芦岛市', value: randomData() ,code:"211400",pcode:"100000",pname:"中国"},
  { name: '丹东市', value: randomData() ,code:"210600",pcode:"100000",pname:"中国"},
  // 沈阳
  { name: '和平区',value: randomData(),code:"210102",pcode:"210000",pname:"辽宁"},
  {
    name: '康平县',
    value: randomData(),
    code:"210123",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '法库县',
    value: randomData(),
    code:"210124",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '新民市',
    value: randomData(),
    code:"210181",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '于洪区',
    value: randomData(),
    code:"210114",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '沈北新区',
    value: randomData(),
    code:"210102",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '皇姑区',
    value: randomData(),
    code:"210105",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '大东区',
    value: randomData(),
    code:"210104",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '浑南区',
    value: randomData(),
    code:"210112",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '铁西区(sy)',
    value: randomData(),
    code:"210106",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '辽中区',
    value: randomData(),
    code:"210115",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '苏家屯区',
    value: randomData(),
    code:"210111",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '沈河区',
    value: randomData(),
    code:"210103",
    pcode:"210000",pname:"辽宁"
  },
  // 丹东
  {
    name: '元宝区',
    value: randomData(),
    code:"210602",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '振兴区',
    value: randomData(),
    code:"210603",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '振安区',
    value: randomData(),
    code:"210604",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '宽甸满族自治县',
    value: randomData(),
    code:"210624",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '东港市',
    value: randomData(),
    code:"210681",
    pcode:"210000",pname:"辽宁"
  },
  {
    name: '凤城市',
    value: randomData(),
    code:"210682",
    pcode:"210000",pname:"辽宁"
  },
  // 铁岭
  {name: '银州区', value: randomData(), code:"211202", pcode:"210000",pname: '辽宁'},
  {name: '清河区', value: randomData(), code:"211204", pcode:"210000",pname: '辽宁'},
  {name: '铁岭县', value: randomData(), code:"211221", pcode:"210000",pname: '辽宁'},
  {name: '西丰县', value: randomData(), code:"211223", pcode:"210000",pname: '辽宁'},
  {name: '昌图县', value: randomData(), code:"211224", pcode:"210000",pname: '辽宁'},
  {name: '调兵山市', value: randomData(), code:"211281", pcode:"210000",pname: '辽宁'},
  {name: '开原市', value: randomData(), code:"211282", pcode:"210000",pname: '辽宁'},
  // 抚顺
  {name: '新抚区', value: randomData(), code:"210402", pcode:"210000",pname: '辽宁'},
  {name: '东洲区', value: randomData(), code:"210403", pcode:"210000",pname: '辽宁'},
  {name: '望花区', value: randomData(), code:"210404", pcode:"210000",pname: '辽宁'},
  {name: '顺城区', value: randomData(), code:"210411", pcode:"210000",pname: '辽宁'},
  {name: '抚顺县', value: randomData(), code:"210421", pcode:"210000",pname: '辽宁'},
  {name: '新宾满族自治县', value: randomData(), code:"210422", pcode:"210000",pname: '辽宁'},
  {name: '清原满族自治县', value: randomData(), code:"210423", pcode:"210000",pname: '辽宁'},
  // 本溪
  {name: '平山区', value: randomData(), code:"210502", pcode:"210000",pname: '辽宁'},
  {name: '溪湖区', value: randomData(), code:"210503", pcode:"210000",pname: '辽宁'},
  {name: '明山区', value: randomData(), code:"210504", pcode:"210000",pname: '辽宁'},
  {name: '南芬区', value: randomData(), code:"210505", pcode:"210000",pname: '辽宁'},
  {name: '本溪满族自治县', value: randomData(), code:"210521", pcode:"210000",pname: '辽宁'},
  {name: '桓仁满族自治县', value: randomData(), code:"210522", pcode:"210000",pname: '辽宁'},
  // 辽阳
  {name: '白塔区', value: randomData(), code:"211002", pcode:"210000",pname: '辽宁'},
  {name: '文圣区', value: randomData(), code:"211003", pcode:"210000",pname: '辽宁'},
  {name: '宏伟区', value: randomData(), code:"211004", pcode:"210000",pname: '辽宁'},
  {name: '弓长岭区', value: randomData(), code:"211005", pcode:"210000",pname: '辽宁'},
  {name: '太子河区', value: randomData(), code:"211011", pcode:"210000",pname: '辽宁'},
  {name: '辽阳县', value: randomData(), code:"211021", pcode:"210000",pname: '辽宁'},
  {name: '灯塔市', value: randomData(), code:"211081", pcode:"210000",pname: '辽宁'},
  // 鞍山
  {name: '铁东区(as)', value: randomData(), code:"210302", pcode:"210000",pname: '辽宁'},
  {name: '铁西区(as)', value: randomData(), code:"210303", pcode:"210000",pname: '辽宁'},
  {name: '立山区', value: randomData(), code:"210304", pcode:"210000",pname: '辽宁'},
  {name: '千山区', value: randomData(), code:"210311", pcode:"210000",pname: '辽宁'},
  {name: '台安县', value: randomData(), code:"210321", pcode:"210000",pname: '辽宁'},
  {name: '岫岩满族自治县', value: randomData(), code:"210323", pcode:"210000",pname: '辽宁'},
  {name: '海城市', value: randomData(), code:"210381", pcode:"210000",pname: '辽宁'},
  // 大连
  {name: '中山区', value: randomData(), code:"210202", pcode:"210000",pname: '辽宁'},
  {name: '西岗区', value: randomData(), code:"210203", pcode:"210000",pname: '辽宁'},
  {name: '沙河口区', value: randomData(), code:"210204", pcode:"210000",pname: '辽宁'},
  {name: '甘井子区', value: randomData(), code:"210211", pcode:"210000",pname: '辽宁'},
  {name: '旅顺口区', value: randomData(), code:"210212", pcode:"210000",pname: '辽宁'},
  {name: '金州区', value: randomData(), code:"210213", pcode:"210000",pname: '辽宁'},
  {name: '普兰店区', value: randomData(), code:"210214", pcode:"210000",pname: '辽宁'},
  {name: '长海县', value: randomData(), code:"210224", pcode:"210000",pname: '辽宁'},
  {name: '瓦房店市', value: randomData(), code:"210281", pcode:"210000",pname: '辽宁'},
  {name: '庄河市', value: randomData(), code:"210283", pcode:"210000",pname: '辽宁'},
  // 营口
  {name: '站前区', value: randomData(), code:"210802", pcode:"210000",pname: '辽宁'},
  {name: '西市区', value: randomData(), code:"210803", pcode:"210000",pname: '辽宁'},
  {name: '鲅鱼圈区', value: randomData(), code:"210804", pcode:"210000",pname: '辽宁'},
  {name: '老边区', value: randomData(), code:"210811", pcode:"210000",pname: '辽宁'},
  {name: '盖州市', value: randomData(), code:"210881", pcode:"210000",pname: '辽宁'},
  {name: '大石桥市', value: randomData(), code:"210882", pcode:"210000",pname: '辽宁'},
  // 盘锦
  {name: '双台子区', value: randomData(), code:"211102", pcode:"210000",pname: '辽宁'},
  {name: '兴隆台区', value: randomData(), code:"211103", pcode:"210000",pname: '辽宁'},
  {name: '大洼区', value: randomData(), code:"211104", pcode:"210000",pname: '辽宁'},
  {name: '盘山县', value: randomData(), code:"211122", pcode:"210000",pname: '辽宁'},

  // 锦州
  {name: '古塔区', value: randomData(), code:"210702", pcode:"210000",pname: '辽宁'},
  {name: '凌河区', value: randomData(), code:"210703", pcode:"210000",pname: '辽宁'},
  {name: '太和区', value: randomData(), code:"210711", pcode:"210000",pname: '辽宁'},
  {name: '黑山县', value: randomData(), code:"210726", pcode:"210000",pname: '辽宁'},
  {name: '义县', value: randomData(), code:"210727", pcode:"210000",pname: '辽宁'},
  {name: '凌海市', value: randomData(), code:"210781", pcode:"210000",pname: '辽宁'},
  {name: '北镇市', value: randomData(), code:"210782", pcode:"210000",pname: '辽宁'},

  // 阜新
  {name: '海州区', value: randomData(), code:"210902",pcode:"210000", pname: '辽宁'},
  {name: '新邱区', value: randomData(), code:"210903", pcode:"210000",pname: '辽宁'},
  {name: '太平区', value: randomData(), code:"210904", pcode:"210000",pname: '辽宁'},
  {name: '清河门区', value: randomData(), code:"210905", pcode:"210000",pname: '辽宁'},
  {name: '细河区', value: randomData(), code:"210911", pcode:"210000",pname: '辽宁'},
  {name: '阜新蒙古族自治县', value: randomData(), code:"210921", pcode:"210000",pname: '辽宁'},
  {name: '彰武县', value: randomData(), code:"210922", pcode:"210000",pname: '辽宁'},

  // 葫芦岛
  {name: '连山区', value: randomData(), code:"211402", pcode:"210000",pname: '辽宁'},
  {name: '龙港区', value: randomData(), code:"211403", pcode:"210000",pname: '辽宁'},
  {name: '南票区', value: randomData(), code:"211404", pcode:"210000",pname: '辽宁'},
  {name: '绥中县', value: randomData(), code:"211421", pcode:"210000",pname: '辽宁'},
  {name: '建昌县', value: randomData(), code:"211422", pcode:"210000",pname: '辽宁'},
  {name: '兴城市', value: randomData(), code:"211481", pcode:"210000",pname: '辽宁'},
  // 朝阳
  {name: '双塔区', value: randomData(), code:"211302", pcode:"210000",pname: '辽宁'},
  {name: '龙城区', value: randomData(), code:"211303", pcode:"210000",pname: '辽宁'},
  {name: '朝阳县', value: randomData(), code:"211321", pcode:"210000",pname: '辽宁'},
  {name: '建平县', value: randomData(), code:"211322", pcode:"210000",pname: '辽宁'},
  {name: '喀喇沁左翼蒙古族自治县', value: randomData(), code:"211324", pcode:"210000",pname: '辽宁'},
  {name: '北票市', value: randomData(), code:"211381", pcode:"210000",pname: '辽宁'},
  {name: '凌源市', value: randomData(), code:"211382", pcode:"210000",pname: '辽宁'},


  // 黑龙江
  {name: '哈尔滨市', value: randomData(), code:"230100", pcode: '100000', pname: '中国'},
  {name: '齐齐哈尔市', value: randomData(), code:"230200", pcode: '100000', pname: '中国'},
  {name: '鸡西市', value: randomData(), code:"230300", pcode: '100000', pname: '中国'},
  {name: '鹤岗市', value: randomData(), code:"230400", pcode: '100000', pname: '中国'},
  {name: '双鸭山市', value: randomData(), code:"230500", pcode: '100000', pname: '中国'},
  {name: '大庆市', value: randomData(), code:"230600", pcode: '100000', pname: '中国'},
  {name: '伊春市', value: randomData(), code:"230700", pcode: '100000', pname: '中国'},
  {name: '佳木斯市', value: randomData(), code:"230800", pcode: '100000', pname: '中国'},
  {name: '七台河市', value: randomData(), code:"230900", pcode: '100000', pname: '中国'},
  {name: '牡丹江市', value: randomData(), code:"231000", pcode: '100000', pname: '中国'},
  {name: '黑河市', value: randomData(), code:"231100", pcode: '100000', pname: '中国'},
  {name: '绥化市', value: randomData(), code:"231200", pcode: '100000', pname: '中国'},
  {name: '大兴安岭地区', value: randomData(), code:"232700", pcode: '100000', pname: '中国'},

  // 哈尔滨
  {name: '道里区', value: randomData(), code:"230102", pcode: '230000', pname: '黑龙江'},
  {name: '南岗区', value: randomData(), code:"230103", pcode: '230000', pname: '黑龙江'},
  {name: '道外区', value: randomData(), code:"230104", pcode: '230000', pname: '黑龙江'},
  {name: '平房区', value: randomData(), code:"230108", pcode: '230000', pname: '黑龙江'},
  {name: '松北区', value: randomData(), code:"230109", pcode: '230000', pname: '黑龙江'},
  {name: '香坊区', value: randomData(), code:"230110", pcode: '230000', pname: '黑龙江'},
  {name: '呼兰区', value: randomData(), code:"230111", pcode: '230000', pname: '黑龙江'},
  {name: '阿城区', value: randomData(), code:"230112", pcode: '230000', pname: '黑龙江'},
  {name: '双城区', value: randomData(), code:"230113", pcode: '230000', pname: '黑龙江'},
  {name: '依兰县', value: randomData(), code:"230123", pcode: '230000', pname: '黑龙江'},
  {name: '方正县', value: randomData(), code:"230124", pcode: '230000', pname: '黑龙江'},
  {name: '宾县', value: randomData(), code:"230125", pcode: '230000', pname: '黑龙江'},
  {name: '巴彦县', value: randomData(), code:"230126", pcode: '230000', pname: '黑龙江'},
  {name: '木兰县', value: randomData(), code:"230127", pcode: '230000', pname: '黑龙江'},
  {name: '通河县', value: randomData(), code:"230128", pcode: '230000', pname: '黑龙江'},
  {name: '延寿县', value: randomData(), code:"230129", pcode: '230000', pname: '黑龙江'},
  {name: '尚志市', value: randomData(), code:"230183", pcode: '230000', pname: '黑龙江'},
  {name: '五常市', value: randomData(), code:"230184", pcode: '230000', pname: '黑龙江'},
  // 齐齐哈尔
  {name: '龙沙区', value: randomData(), code:"230202", pcode: '230000', pname: '黑龙江'},
  {name: '建华区', value: randomData(), code:"230203", pcode: '230000', pname: '黑龙江'},
  {name: '铁锋区', value: randomData(), code:"230204", pcode: '230000', pname: '黑龙江'},
  {name: '昂昂溪区', value: randomData(), code:"230205", pcode: '230000', pname: '黑龙江'},
  {name: '富拉尔基区', value: randomData(), code:"230206", pcode: '230000', pname: '黑龙江'},
  {name: '碾子山区', value: randomData(), code:"230207", pcode: '230000', pname: '黑龙江'},
  {name: '梅里斯达斡尔族区', value: randomData(), code:"230208", pcode: '230000', pname: '黑龙江'},
  {name: '龙江县', value: randomData(), code:"230221", pcode: '230000', pname: '黑龙江'},
  {name: '依安县', value: randomData(), code:"230223", pcode: '230000', pname: '黑龙江'},
  {name: '泰来县', value: randomData(), code:"230224", pcode: '230000', pname: '黑龙江'},
  {name: '甘南县', value: randomData(), code:"230225", pcode: '230000', pname: '黑龙江'},
  {name: '富裕县', value: randomData(), code:"230227", pcode: '230000', pname: '黑龙江'},
  {name: '克山县', value: randomData(), code:"230229", pcode: '230000', pname: '黑龙江'},
  {name: '克东县', value: randomData(), code:"230230", pcode: '230000', pname: '黑龙江'},
  {name: '拜泉县', value: randomData(), code:"230231", pcode: '230000', pname: '黑龙江'},
  {name: '讷河市', value: randomData(), code:"230281", pcode: '230000', pname: '黑龙江'},
  // 鸡西
  {name: '鸡冠区', value: randomData(), code:"230302", pcode: '230000', pname: '黑龙江'},
  {name: '恒山区', value: randomData(), code:"230303", pcode: '230000', pname: '黑龙江'},
  {name: '滴道区', value: randomData(), code:"230304", pcode: '230000', pname: '黑龙江'},
  {name: '梨树区', value: randomData(), code:"230305", pcode: '230000', pname: '黑龙江'},
  {name: '城子河区', value: randomData(), code:"230306", pcode: '230000', pname: '黑龙江'},
  {name: '麻山区', value: randomData(), code:"230307", pcode: '230000', pname: '黑龙江'},
  {name: '鸡东县', value: randomData(), code:"230321", pcode: '230000', pname: '黑龙江'},
  {name: '虎林市', value: randomData(), code:"230381", pcode: '230000', pname: '黑龙江'},
  {name: '密山市', value: randomData(), code:"230382", pcode: '230000', pname: '黑龙江'},
  //鹤岗
  {name: '向阳区', value: randomData(), code:"230402", pcode: '230000', pname: '黑龙江'},
  {name: '工农区', value: randomData(), code:"230403", pcode: '230000', pname: '黑龙江'},
  {name: '南山区', value: randomData(), code:"230404", pcode: '230000', pname: '黑龙江'},
  {name: '兴安区', value: randomData(), code:"230405", pcode: '230000', pname: '黑龙江'},
  {name: '东山区', value: randomData(), code:"230406", pcode: '230000', pname: '黑龙江'},
  {name: '兴山区', value: randomData(), code:"230407", pcode: '230000', pname: '黑龙江'},
  {name: '萝北县', value: randomData(), code:"230421", pcode: '230000', pname: '黑龙江'},
  {name: '绥滨县', value: randomData(), code:"230422", pcode: '230000', pname: '黑龙江'},

  // 双鸭山
  {name: '尖山区', value: randomData(), code:"230502", pcode: '230000', pname: '黑龙江'},
  {name: '岭东区', value: randomData(), code:"230503", pcode: '230000', pname: '黑龙江'},
  {name: '四方台区', value: randomData(), code:"230505", pcode: '230000', pname: '黑龙江'},
  {name: '宝山区', value: randomData(), code:"230506", pcode: '230000', pname: '黑龙江'},
  {name: '集贤县', value: randomData(), code:"230521", pcode: '230000', pname: '黑龙江'},
  {name: '友谊县', value: randomData(), code:"230522", pcode: '230000', pname: '黑龙江'},
  {name: '宝清县', value: randomData(), code:"230523", pcode: '230000', pname: '黑龙江'},
  {name: '饶河县', value: randomData(), code:"230524", pcode: '230000', pname: '黑龙江'},

  // 大庆
  {name: '萨尔图区', value: randomData(), code:"230602", pcode: '230000', pname: '黑龙江'},
  {name: '龙凤区', value: randomData(), code:"230603", pcode: '230000', pname: '黑龙江'},
  {name: '让胡路区', value: randomData(), code:"230604", pcode: '230000', pname: '黑龙江'},
  {name: '红岗区', value: randomData(), code:"230605", pcode: '230000', pname: '黑龙江'},
  {name: '大同区', value: randomData(), code:"230606", pcode: '230000', pname: '黑龙江'},
  {name: '肇州县', value: randomData(), code:"230621", pcode: '230000', pname: '黑龙江'},
  {name: '肇源县', value: randomData(), code:"230622", pcode: '230000', pname: '黑龙江'},
  {name: '林甸县', value: randomData(), code:"230623", pcode: '230000', pname: '黑龙江'},
  {name: '杜尔伯特蒙古族自治县', value: randomData(), code:"230624", pcode: '230000', pname: '黑龙江'},
  //伊春
  {name: '伊春区', value: randomData(), code:"230702", pcode: '230000', pname: '黑龙江'},
  {name: '南岔区', value: randomData(), code:"230703", pcode: '230000', pname: '黑龙江'},
  {name: '友好区', value: randomData(), code:"230704", pcode: '230000', pname: '黑龙江'},
  {name: '西林区', value: randomData(), code:"230705", pcode: '230000', pname: '黑龙江'},
  {name: '翠峦区', value: randomData(), code:"230706", pcode: '230000', pname: '黑龙江'},
  {name: '新青区', value: randomData(), code:"230707", pcode: '230000', pname: '黑龙江'},
  {name: '美溪区', value: randomData(), code:"230708", pcode: '230000', pname: '黑龙江'},
  {name: '金山屯区', value: randomData(), code:"230709", pcode: '230000', pname: '黑龙江'},
  {name: '五营区', value: randomData(), code:"230710", pcode: '230000', pname: '黑龙江'},
  {name: '乌马河区', value: randomData(), code:"230711", pcode: '230000', pname: '黑龙江'},
  {name: '汤旺河区', value: randomData(), code:"230712", pcode: '230000', pname: '黑龙江'},
  {name: '带岭区', value: randomData(), code:"230713", pcode: '230000', pname: '黑龙江'},
  {name: '乌伊岭区', value: randomData(), code:"230714", pcode: '230000', pname: '黑龙江'},
  {name: '红星区', value: randomData(), code:"230715", pcode: '230000', pname: '黑龙江'},
  {name: '上甘岭区', value: randomData(), code:"230716", pcode: '230000', pname: '黑龙江'},
  {name: '嘉荫县', value: randomData(), code:"230722", pcode: '230000', pname: '黑龙江'},
  {name: '铁力市', value: randomData(), code:"230781", pcode: '230000', pname: '黑龙江'},
  // 佳木斯
  {name: '向阳区', value: randomData(), code:"230803", pcode: '230000', pname: '黑龙江'},
  {name: '前进区', value: randomData(), code:"230804", pcode: '230000', pname: '黑龙江'},
  {name: '东风区', value: randomData(), code:"230805", pcode: '230000', pname: '黑龙江'},
  {name: '郊区', value: randomData(), code:"230811", pcode: '230000', pname: '黑龙江'},
  {name: '桦南县', value: randomData(), code:"230822", pcode: '230000', pname: '黑龙江'},
  {name: '桦川县', value: randomData(), code:"230826", pcode: '230000', pname: '黑龙江'},
  {name: '汤原县', value: randomData(), code:"230828", pcode: '230000', pname: '黑龙江'},
  {name: '同江市', value: randomData(), code:"230881", pcode: '230000', pname: '黑龙江'},
  {name: '富锦市', value: randomData(), code:"230882", pcode: '230000', pname: '黑龙江'},
  {name: '抚远市', value: randomData(), code:"230883", pcode: '230000', pname: '黑龙江'},

  //七台河
  {name: '新兴区', value: randomData(), code:"230902", pcode: '230000', pname: '黑龙江'},
  {name: '桃山区', value: randomData(), code:"230903", pcode: '230000', pname: '黑龙江'},
  {name: '茄子河区', value: randomData(), code:"230904", pcode: '230000', pname: '黑龙江'},
  {name: '勃利县', value: randomData(), code:"230921", pcode: '230000', pname: '黑龙江'},
  //牡丹江
  {name: '东安区', value: randomData(), code:"231002", pcode: '230000', pname: '黑龙江'},
  {name: '阳明区', value: randomData(), code:"231003", pcode: '230000', pname: '黑龙江'},
  {name: '爱民区', value: randomData(), code:"231004", pcode: '230000', pname: '黑龙江'},
  {name: '西安区', value: randomData(), code:"231005", pcode: '230000', pname: '黑龙江'},
  {name: '林口县', value: randomData(), code:"231025", pcode: '230000', pname: '黑龙江'},
  {name: '绥芬河市', value: randomData(), code:"231081", pcode: '230000', pname: '黑龙江'},
  {name: '海林市', value: randomData(), code:"231083", pcode: '230000', pname: '黑龙江'},
  {name: '宁安市', value: randomData(), code:"231084", pcode: '230000', pname: '黑龙江'},
  {name: '穆棱市', value: randomData(), code:"231085", pcode: '230000', pname: '黑龙江'},
  {name: '东宁市', value: randomData(), code:"231086", pcode: '230000', pname: '黑龙江'},
  //黑河
  {name: '爱辉区', value: randomData(), code:"231102", pcode: '230000', pname: '黑龙江'},
  {name: '嫩江县', value: randomData(), code:"231121", pcode: '230000', pname: '黑龙江'},
  {name: '逊克县', value: randomData(), code:"231123", pcode: '230000', pname: '黑龙江'},
  {name: '孙吴县', value: randomData(), code:"231124", pcode: '230000', pname: '黑龙江'},
  {name: '北安市', value: randomData(), code:"231181", pcode: '230000', pname: '黑龙江'},
  {name: '五大连池市', value: randomData(), code:"231182", pcode: '230000', pname: '黑龙江'},
  //绥化
  {name: '北林区', value: randomData(), code:"231202", pcode: '230000', pname: '黑龙江'},
  {name: '望奎县', value: randomData(), code:"231221", pcode: '230000', pname: '黑龙江'},
  {name: '兰西县', value: randomData(), code:"231222", pcode: '230000', pname: '黑龙江'},
  {name: '青冈县', value: randomData(), code:"231223", pcode: '230000', pname: '黑龙江'},
  {name: '庆安县', value: randomData(), code:"231224", pcode: '230000', pname: '黑龙江'},
  {name: '明水县', value: randomData(), code:"231225", pcode: '230000', pname: '黑龙江'},
  {name: '绥棱县', value: randomData(), code:"231226", pcode: '230000', pname: '黑龙江'},
  {name: '安达市', value: randomData(), code:"231281", pcode: '230000', pname: '黑龙江'},
  {name: '肇东市', value: randomData(), code:"231282", pcode: '230000', pname: '黑龙江'},
  {name: '海伦市', value: randomData(), code:"231283", pcode: '230000', pname: '黑龙江'},
  //大兴安岭
  {name: '漠河县', value: randomData(), code:"232701", pcode: '230000', pname: '黑龙江'},
  {name: '加格达奇区', value: randomData(), code:"232718", pcode: '230000', pname: '黑龙江'},
  {name: '呼玛县', value: randomData(), code:"232721", pcode: '230000', pname: '黑龙江'},
  {name: '塔河县', value: randomData(), code:"232722", pcode: '230000', pname: '黑龙江'},


  // 吉林
  {name: '长春市', value: randomData(), code: '220100', pcode: '100000', pname: '中国'},
  {name: '吉林市', value: randomData(), code: '220200', pcode: '100000', pname: '中国'},
  {name: '四平市', value: randomData(), code: '220300', pcode: '100000', pname: '中国'},
  {name: '辽源市', value: randomData(), code: '220400', pcode: '100000', pname: '中国'},
  {name: '通化市', value: randomData(), code: '220500', pcode: '100000', pname: '中国'},
  {name: '白山市', value: randomData(), code: '220600', pcode: '100000', pname: '中国'},
  {name: '松原市', value: randomData(), code: '220700', pcode: '100000', pname: '中国'},
  {name: '白城市', value: randomData(), code: '220800', pcode: '100000', pname: '中国'},
  {name: '延边朝鲜族自治州', value: randomData(), code: '222400', pcode: '100000', pname: '中国'},

  // 长春
  {name: '南关区', value: randomData(), code: '220102', pcode: '220000', pname: '吉林'},
  {name: '宽城区', value: randomData(), code: '220103', pcode: '220000', pname: '吉林'},
  {name: '朝阳区', value: randomData(), code: '220104', pcode: '220000', pname: '吉林'},
  {name: '二道区', value: randomData(), code: '220105', pcode: '220000', pname: '吉林'},
  {name: '绿园区', value: randomData(), code: '220106', pcode: '220000', pname: '吉林'},
  {name: '双阳区', value: randomData(), code: '220112', pcode: '220000', pname: '吉林'},
  {name: '九台区', value: randomData(), code: '220113', pcode: '220000', pname: '吉林'},
  {name: '农安县', value: randomData(), code: '220122', pcode: '220000', pname: '吉林'},
  {name: '榆树市', value: randomData(), code: '220182', pcode: '220000', pname: '吉林'},
  {name: '德惠市', value: randomData(), code: '220183', pcode: '220000', pname: '吉林'},

  // 吉林
  {name: '昌邑区', value: randomData(), code: '220202', pcode: '220000', pname: '吉林'},
  {name: '龙潭区', value: randomData(), code: '220203', pcode: '220000', pname: '吉林'},
  {name: '船营区', value: randomData(), code: '220204', pcode: '220000', pname: '吉林'},
  {name: '丰满区', value: randomData(), code: '220211', pcode: '220000', pname: '吉林'},
  {name: '永吉县', value: randomData(), code: '220221', pcode: '220000', pname: '吉林'},
  {name: '蛟河市', value: randomData(), code: '220281', pcode: '220000', pname: '吉林'},
  {name: '桦甸市', value: randomData(), code: '220282', pcode: '220000', pname: '吉林'},
  {name: '舒兰市', value: randomData(), code: '220283', pcode: '220000', pname: '吉林'},
  {name: '磐石市', value: randomData(), code: '220284', pcode: '220000', pname: '吉林'},

  // 四平
  {name: '铁西区(sp)', value: randomData(), code: '220302', pcode: '220000', pname: '吉林'},
  {name: '铁东区(sp)', value: randomData(), code: '220303', pcode: '220000', pname: '吉林'},
  {name: '梨树县', value: randomData(), code: '220322', pcode: '220000', pname: '吉林'},
  {name: '伊通满族自治县', value: randomData(), code: '220323', pcode: '220000', pname: '吉林'},
  {name: '公主岭市', value: randomData(), code: '220381', pcode: '220000', pname: '吉林'},
  {name: '双辽市', value: randomData(), code: '220382', pcode: '220000', pname: '吉林'},

  // 辽源
  {name: '龙山区', value: randomData(), code: '220402', pcode: '220000', pname: '吉林'},
  {name: '西安区', value: randomData(), code: '220403', pcode: '220000', pname: '吉林'},
  {name: '东丰县', value: randomData(), code: '220421', pcode: '220000', pname: '吉林'},
  {name: '东辽县', value: randomData(), code: '220422', pcode: '220000', pname: '吉林'},

  //通化
  {name: '东昌区', value: randomData(), code: '220502', pcode: '220000', pname: '吉林'},
  {name: '二道江区', value: randomData(), code: '220503', pcode: '220000', pname: '吉林'},
  {name: '通化县', value: randomData(), code: '220521', pcode: '220000', pname: '吉林'},
  {name: '辉南县', value: randomData(), code: '220523', pcode: '220000', pname: '吉林'},
  {name: '柳河县', value: randomData(), code: '220524', pcode: '220000', pname: '吉林'},
  {name: '梅河口市', value: randomData(), code: '220581', pcode: '220000', pname: '吉林'},
  {name: '集安市', value: randomData(), code: '220582', pcode: '220000', pname: '吉林'},

  // 白山
  {name: '浑江区', value: randomData(), code: '220602', pcode: '220000', pname: '吉林'},
  {name: '江源区', value: randomData(), code: '220605', pcode: '220000', pname: '吉林'},
  {name: '抚松县', value: randomData(), code: '220621', pcode: '220000', pname: '吉林'},
  {name: '靖宇县', value: randomData(), code: '220622', pcode: '220000', pname: '吉林'},
  {name: '长白朝鲜族自治县', value: randomData(), code: '220623', pcode: '220000', pname: '吉林'},
  {name: '临江市', value: randomData(), code: '220681', pcode: '220000', pname: '吉林'},

  // 松原
  {name: '宁江区', value: randomData(), code: '220702', pcode: '220000', pname: '吉林'},
  {name: '前郭尔罗斯蒙古族自治县', value: randomData(), code: '220721', pcode: '220000', pname: '吉林'},
  {name: '长岭县', value: randomData(), code: '220722', pcode: '220000', pname: '吉林'},
  {name: '乾安县', value: randomData(), code: '220723', pcode: '220000', pname: '吉林'},
  {name: '扶余市', value: randomData(), code: '220781', pcode: '220000', pname: '吉林'},

  // 白城
  {name: '洮北区', value: randomData(), code: '220802', pcode: '220000', pname: '吉林'},
  {name: '镇赉县', value: randomData(), code: '220821', pcode: '220000', pname: '吉林'},
  {name: '通榆县', value: randomData(), code: '220822', pcode: '220000', pname: '吉林'},
  {name: '洮南市', value: randomData(), code: '220881', pcode: '220000', pname: '吉林'},
  {name: '大安市', value: randomData(), code: '220882', pcode: '220000', pname: '吉林'},

  // 延边朝鲜族自治州
  {name: '延吉市', value: randomData(), code: '222401', pcode: '220000', pname: '吉林'},
  {name: '图们市', value: randomData(), code: '222402', pcode: '220000', pname: '吉林'},
  {name: '敦化市', value: randomData(), code: '222403', pcode: '220000', pname: '吉林'},
  {name: '珲春市', value: randomData(), code: '222404', pcode: '220000', pname: '吉林'},
  {name: '龙井市', value: randomData(), code: '222405', pcode: '220000', pname: '吉林'},
  {name: '和龙市', value: randomData(), code: '222406', pcode: '220000', pname: '吉林'},
  {name: '汪清县', value: randomData(), code: '222424', pcode: '220000', pname: '吉林'},
  {name: '安图县', value: randomData(), code: '222426', pcode: '220000', pname: '吉林'},

  // 内蒙古
  {name: '呼和浩特市', value: randomData(), code: '150100', pcode: '100000', pname: '中国'},
  {name: '包头市', value: randomData(), code: '150200', pcode: '100000', pname: '中国'},
  {name: '乌海市', value: randomData(), code: '150300', pcode: '100000', pname: '中国'},
  {name: '赤峰市', value: randomData(), code: '150400', pcode: '100000', pname: '中国'},
  {name: '通辽市', value: randomData(), code: '150500', pcode: '100000', pname: '中国'},
  {name: '鄂尔多斯市', value: randomData(), code: '150600', pcode: '100000', pname: '中国'},
  {name: '呼伦贝尔市', value: randomData(), code: '150700', pcode: '100000', pname: '中国'},
  {name: '巴彦淖尔市', value: randomData(), code: '150800', pcode: '100000', pname: '中国'},
  {name: '乌兰察布市', value: randomData(), code: '150900', pcode: '100000', pname: '中国'},
  {name: '兴安盟', value: randomData(), code: '152200', pcode: '100000', pname: '中国'},
  {name: '锡林郭勒盟', value: randomData(), code: '152500', pcode: '100000', pname: '中国'},
  {name: '阿拉善盟', value: randomData(), code: '152900', pcode: '100000', pname: '中国'},

  // 呼和浩特
  {name: '新城区', value: randomData(), code: '150102', pcode: '150000', pname: '内蒙古'},
  {name: '回民区', value: randomData(), code: '150103', pcode: '150000', pname: '内蒙古'},
  {name: '玉泉区', value: randomData(), code: '150104', pcode: '150000', pname: '内蒙古'},
  {name: '赛罕区', value: randomData(), code: '150105', pcode: '150000', pname: '内蒙古'},
  {name: '土默特左旗', value: randomData(), code: '150121', pcode: '150000', pname: '内蒙古'},
  {name: '托克托县', value: randomData(), code: '150122', pcode: '150000', pname: '内蒙古'},
  {name: '和林格尔县', value: randomData(), code: '150123', pcode: '150000', pname: '内蒙古'},
  {name: '清水河县', value: randomData(), code: '150124', pcode: '150000', pname: '内蒙古'},
  {name: '武川县', value: randomData(), code: '150125', pcode: '150000', pname: '内蒙古'},

  // 包头
  {name: '东河区', value: randomData(), code: '150202', pcode: '150000', pname: '内蒙古'},
  {name: '昆都仑区', value: randomData(), code: '150203', pcode: '150000', pname: '内蒙古'},
  {name: '青山区', value: randomData(), code: '150204', pcode: '150000', pname: '内蒙古'},
  {name: '石拐区', value: randomData(), code: '150205', pcode: '150000', pname: '内蒙古'},
  {name: '白云鄂博矿区', value: randomData(), code: '150206', pcode: '150000', pname: '内蒙古'},
  {name: '九原区', value: randomData(), code: '150207', pcode: '150000', pname: '内蒙古'},
  {name: '土默特右旗', value: randomData(), code: '150221', pcode: '150000', pname: '内蒙古'},
  {name: '固阳县', value: randomData(), code: '150222', pcode: '150000', pname: '内蒙古'},
  {name: '达尔罕茂明安联合旗', value: randomData(), code: '150223', pcode: '150000', pname: '内蒙古'},
  // 乌海
  // 赤峰
  {name: '红山区', value: randomData(), code: '150402', pcode: '150000', pname: '内蒙古'},
  {name: '元宝山区', value: randomData(), code: '150403', pcode: '150000', pname: '内蒙古'},
  {name: '松山区', value: randomData(), code: '150404', pcode: '150000', pname: '内蒙古'},
  {name: '阿鲁科尔沁旗', value: randomData(), code: '150421', pcode: '150000', pname: '内蒙古'},
  {name: '巴林左旗', value: randomData(), code: '150422', pcode: '150000', pname: '内蒙古'},
  {name: '巴林右旗', value: randomData(), code: '150423', pcode: '150000', pname: '内蒙古'},
  {name: '林西县', value: randomData(), code: '150424', pcode: '150000', pname: '内蒙古'},
  {name: '克什克腾旗', value: randomData(), code: '150425', pcode: '150000', pname: '内蒙古'},
  {name: '翁牛特旗', value: randomData(), code: '150426', pcode: '150000', pname: '内蒙古'},
  {name: '喀喇沁旗', value: randomData(), code: '150428', pcode: '150000', pname: '内蒙古'},
  {name: '宁城县', value: randomData(), code: '150429', pcode: '150000', pname: '内蒙古'},
  {name: '敖汉旗', value: randomData(), code: '150430', pcode: '150000', pname: '内蒙古'},

  // 通辽
  {name: '科尔沁区', value: randomData(), code: '150502', pcode: '150000', pname: '内蒙古'},
  {name: '科尔沁左翼中旗', value: randomData(), code: '150521', pcode: '150000', pname: '内蒙古'},
  {name: '科尔沁左翼后旗', value: randomData(), code: '150522', pcode: '150000', pname: '内蒙古'},
  {name: '开鲁县', value: randomData(), code: '150523', pcode: '150000', pname: '内蒙古'},
  {name: '库伦旗', value: randomData(), code: '150524', pcode: '150000', pname: '内蒙古'},
  {name: '奈曼旗', value: randomData(), code: '150525', pcode: '150000', pname: '内蒙古'},
  {name: '扎鲁特旗', value: randomData(), code: '150526', pcode: '150000', pname: '内蒙古'},
  {name: '霍林郭勒市', value: randomData(), code: '150581', pcode: '150000', pname: '内蒙古'},

  // 鄂尔多斯
  {name: '东胜区', value: randomData(), code: '150602', pcode: '150000', pname: '内蒙古'},
  {name: '康巴什区', value: randomData(), code: '150603', pcode: '150000', pname: '内蒙古'},
  {name: '达拉特旗', value: randomData(), code: '150621', pcode: '150000', pname: '内蒙古'},
  {name: '准格尔旗', value: randomData(), code: '150622', pcode: '150000', pname: '内蒙古'},
  {name: '鄂托克前旗', value: randomData(), code: '150623', pcode: '150000', pname: '内蒙古'},
  {name: '鄂托克旗', value: randomData(), code: '150624', pcode: '150000', pname: '内蒙古'},
  {name: '杭锦旗', value: randomData(), code: '150625', pcode: '150000', pname: '内蒙古'},
  {name: '乌审旗', value: randomData(), code: '150626', pcode: '150000', pname: '内蒙古'},
  {name: '伊金霍洛旗', value: randomData(), code: '150627', pcode: '150000', pname: '内蒙古'},

  // 呼伦贝尔
  {name: '海拉尔区', value: randomData(), code: '150702', pcode: '150000', pname: '内蒙古'},
  {name: '扎赉诺尔区', value: randomData(), code: '150703', pcode: '150000', pname: '内蒙古'},
  {name: '阿荣旗', value: randomData(), code: '150721', pcode: '150000', pname: '内蒙古'},
  {name: '莫力达瓦达斡尔族自治旗', value: randomData(), code: '150722', pcode: '150000', pname: '内蒙古'},
  {name: '鄂伦春自治旗', value: randomData(), code: '150723', pcode: '150000', pname: '内蒙古'},
  {name: '鄂温克族自治旗', value: randomData(), code: '150724', pcode: '150000', pname: '内蒙古'},
  {name: '陈巴尔虎旗', value: randomData(), code: '150725', pcode: '150000', pname: '内蒙古'},
  {name: '新巴尔虎左旗', value: randomData(), code: '150726', pcode: '150000', pname: '内蒙古'},
  {name: '新巴尔虎右旗', value: randomData(), code: '150727', pcode: '150000', pname: '内蒙古'},
  {name: '满洲里市', value: randomData(), code: '150781', pcode: '150000', pname: '内蒙古'},
  {name: '牙克石市', value: randomData(), code: '150782', pcode: '150000', pname: '内蒙古'},
  {name: '扎兰屯市', value: randomData(), code: '150783', pcode: '150000', pname: '内蒙古'},
  {name: '额尔古纳市', value: randomData(), code: '150784', pcode: '150000', pname: '内蒙古'},
  {name: '根河市', value: randomData(), code: '150785', pcode: '150000', pname: '内蒙古'},
  // 巴彦卓尔
  {name: '临河区', value: randomData(), code: '150802', pcode: '150000', pname: '内蒙古'},
  {name: '五原县', value: randomData(), code: '150821', pcode: '150000', pname: '内蒙古'},
  {name: '磴口县', value: randomData(), code: '150822', pcode: '150000', pname: '内蒙古'},
  {name: '乌拉特前旗', value: randomData(), code: '150823', pcode: '150000', pname: '内蒙古'},
  {name: '乌拉特中旗', value: randomData(), code: '150824', pcode: '150000', pname: '内蒙古'},
  {name: '乌拉特后旗', value: randomData(), code: '150825', pcode: '150000', pname: '内蒙古'},
  {name: '杭锦后旗', value: randomData(), code: '150826', pcode: '150000', pname: '内蒙古'},

  // 乌兰察布
  {name: '集宁区', value: randomData(), code: '150902', pcode: '150000', pname: '内蒙古'},
  {name: '卓资县', value: randomData(), code: '150921', pcode: '150000', pname: '内蒙古'},
  {name: '化德县', value: randomData(), code: '150922', pcode: '150000', pname: '内蒙古'},
  {name: '商都县', value: randomData(), code: '150923', pcode: '150000', pname: '内蒙古'},
  {name: '兴和县', value: randomData(), code: '150924', pcode: '150000', pname: '内蒙古'},
  {name: '凉城县', value: randomData(), code: '150925', pcode: '150000', pname: '内蒙古'},
  {name: '察哈尔右翼前旗', value: randomData(), code: '150926', pcode: '150000', pname: '内蒙古'},
  {name: '察哈尔右翼中旗', value: randomData(), code: '150927', pcode: '150000', pname: '内蒙古'},
  {name: '察哈尔右翼后旗', value: randomData(), code: '150928', pcode: '150000', pname: '内蒙古'},
  {name: '四子王旗', value: randomData(), code: '150929', pcode: '150000', pname: '内蒙古'},
  {name: '丰镇市', value: randomData(), code: '150981', pcode: '150000', pname: '内蒙古'},

  // 兴安盟
  {name: '乌兰浩特市', value: randomData(), code: '152201', pcode: '150000', pname: '内蒙古'},
  {name: '阿尔山市', value: randomData(), code: '152202', pcode: '150000', pname: '内蒙古'},
  {name: '科尔沁右翼前旗', value: randomData(), code: '152221', pcode: '150000', pname: '内蒙古'},
  {name: '科尔沁右翼中旗', value: randomData(), code: '152222', pcode: '150000', pname: '内蒙古'},
  {name: '扎赉特旗', value: randomData(), code: '152223', pcode: '150000', pname: '内蒙古'},
  {name: '突泉县', value: randomData(), code: '152224', pcode: '150000', pname: '内蒙古'},
  // 锡林郭勒盟
  {name: '二连浩特市', value: randomData(), code: '152501', pcode: '150000', pname: '内蒙古'},
  {name: '锡林浩特市', value: randomData(), code: '152502', pcode: '150000', pname: '内蒙古'},
  {name: '阿巴嘎旗', value: randomData(), code: '152522', pcode: '150000', pname: '内蒙古'},
  {name: '苏尼特左旗', value: randomData(), code: '152523', pcode: '150000', pname: '内蒙古'},
  {name: '苏尼特右旗', value: randomData(), code: '152524', pcode: '150000', pname: '内蒙古'},
  {name: '东乌珠穆沁旗', value: randomData(), code: '152525', pcode: '150000', pname: '内蒙古'},
  {name: '西乌珠穆沁旗', value: randomData(), code: '152526', pcode: '150000', pname: '内蒙古'},
  {name: '太仆寺旗', value: randomData(), code: '152527', pcode: '150000', pname: '内蒙古'},
  {name: '镶黄旗', value: randomData(), code: '152528', pcode: '150000', pname: '内蒙古'},
  {name: '正镶白旗', value: randomData(), code: '152529', pcode: '150000', pname: '内蒙古'},
  {name: '正蓝旗', value: randomData(), code: '152530', pcode: '150000', pname: '内蒙古'},
  {name: '多伦县', value: randomData(), code: '152531', pcode: '150000', pname: '内蒙古'},

  // 阿拉善盟
  {name: '阿拉善左旗', value: randomData(), code: '152921', pcode: '150000', pname: '内蒙古'},
  {name: '阿拉善右旗', value: randomData(), code: '152922', pcode: '150000', pname: '内蒙古'},
  {name: '额济纳旗', value: randomData(), code: '152923', pcode: '150000', pname: '内蒙古'},

  // 北京
  {name: '东城区', value: randomData(), code: '110101', pcode: '100000', pname: '中国'},
  {name: '西城区', value: randomData(), code: '110102', pcode: '100000', pname: '中国'},
  {name: '朝阳区', value: randomData(), code: '110105', pcode: '100000', pname: '中国'},
  {name: '丰台区', value: randomData(), code: '110106', pcode: '100000', pname: '中国'},
  {name: '石景山区', value: randomData(), code: '110107', pcode: '100000', pname: '中国'},
  {name: '海淀区', value: randomData(), code: '110108', pcode: '100000', pname: '中国'},
  {name: '门头沟区', value: randomData(), code: '110109', pcode: '100000', pname: '中国'},
  {name: '房山区', value: randomData(), code: '110111', pcode: '100000', pname: '中国'},
  {name: '通州区', value: randomData(), code: '110112', pcode: '100000', pname: '中国'},
  {name: '顺义区', value: randomData(), code: '110113', pcode: '100000', pname: '中国'},
  {name: '昌平区', value: randomData(), code: '110114', pcode: '100000', pname: '中国'},
  {name: '大兴区', value: randomData(), code: '110115', pcode: '100000', pname: '中国'},
  {name: '怀柔区', value: randomData(), code: '110116', pcode: '100000', pname: '中国'},
  {name: '平谷区', value: randomData(), code: '110117', pcode: '100000', pname: '中国'},
  {name: '密云区', value: randomData(), code: '110118', pcode: '100000', pname: '中国'},
  {name: '延庆区', value: randomData(), code: '110119', pcode: '100000', pname: '中国'},

  // 天津
  {name: '和平区', value: randomData(), code: '120101', pcode: '100000', pname: '中国'},
  {name: '河东区', value: randomData(), code: '120102', pcode: '100000', pname: '中国'},
  {name: '河西区', value: randomData(), code: '120103', pcode: '100000', pname: '中国'},
  {name: '南开区', value: randomData(), code: '120104', pcode: '100000', pname: '中国'},
  {name: '河北区', value: randomData(), code: '120105', pcode: '100000', pname: '中国'},
  {name: '红桥区', value: randomData(), code: '120106', pcode: '100000', pname: '中国'},
  {name: '东丽区', value: randomData(), code: '120110', pcode: '100000', pname: '中国'},
  {name: '西青区', value: randomData(), code: '120111', pcode: '100000', pname: '中国'},
  {name: '津南区', value: randomData(), code: '120112', pcode: '100000', pname: '中国'},
  {name: '北辰区', value: randomData(), code: '120113', pcode: '100000', pname: '中国'},
  {name: '武清区', value: randomData(), code: '120114', pcode: '100000', pname: '中国'},
  {name: '宝坻区', value: randomData(), code: '120115', pcode: '100000', pname: '中国'},
  {name: '滨海新区', value: randomData(), code: '120116', pcode: '100000', pname: '中国'},
  {name: '宁河区', value: randomData(), code: '120117', pcode: '100000', pname: '中国'},
  {name: '静海区', value: randomData(), code: '120118', pcode: '100000', pname: '中国'},
  {name: '蓟州区', value: randomData(), code: '120119', pcode: '100000', pname: '中国'},

  // 上海
  {name: '黄浦区', value: randomData(), code: '310101', pcode: '100000', pname: '中国'},
  {name: '徐汇区', value: randomData(), code: '310104', pcode: '100000', pname: '中国'},
  {name: '长宁区', value: randomData(), code: '310105', pcode: '100000', pname: '中国'},
  {name: '静安区', value: randomData(), code: '310106', pcode: '100000', pname: '中国'},
  {name: '普陀区', value: randomData(), code: '310107', pcode: '100000', pname: '中国'},
  {name: '虹口区', value: randomData(), code: '310109', pcode: '100000', pname: '中国'},
  {name: '杨浦区', value: randomData(), code: '310110', pcode: '100000', pname: '中国'},
  {name: '闵行区', value: randomData(), code: '310112', pcode: '100000', pname: '中国'},
  {name: '宝山区', value: randomData(), code: '310113', pcode: '100000', pname: '中国'},
  {name: '嘉定区', value: randomData(), code: '310114', pcode: '100000', pname: '中国'},
  {name: '浦东新区', value: randomData(), code: '310115', pcode: '100000', pname: '中国'},
  {name: '金山区', value: randomData(), code: '310116', pcode: '100000', pname: '中国'},
  {name: '松江区', value: randomData(), code: '310117', pcode: '100000', pname: '中国'},
  {name: '青浦区', value: randomData(), code: '310118', pcode: '100000', pname: '中国'},
  {name: '奉贤区', value: randomData(), code: '310120', pcode: '100000', pname: '中国'},
  {name: '崇明区', value: randomData(), code: '310151', pcode: '100000', pname: '中国'},

  // 重庆
  {name: '万州区', value: randomData(), code: '500101', pcode: '100000', pname: '中国'},
  {name: '涪陵区', value: randomData(), code: '500102', pcode: '100000', pname: '中国'},
  {name: '渝中区', value: randomData(), code: '500103', pcode: '100000', pname: '中国'},
  {name: '大渡口区', value: randomData(), code: '500104', pcode: '100000', pname: '中国'},
  {name: '江北区', value: randomData(), code: '500105', pcode: '100000', pname: '中国'},
  {name: '沙坪坝区', value: randomData(), code: '500106', pcode: '100000', pname: '中国'},
  {name: '九龙坡区', value: randomData(), code: '500107', pcode: '100000', pname: '中国'},
  {name: '南岸区', value: randomData(), code: '500108', pcode: '100000', pname: '中国'},
  {name: '北碚区', value: randomData(), code: '500109', pcode: '100000', pname: '中国'},
  {name: '綦江区', value: randomData(), code: '500110', pcode: '100000', pname: '中国'},
  {name: '大足区', value: randomData(), code: '500111', pcode: '100000', pname: '中国'},
  {name: '渝北区', value: randomData(), code: '500112', pcode: '100000', pname: '中国'},
  {name: '巴南区', value: randomData(), code: '500113', pcode: '100000', pname: '中国'},
  {name: '黔江区', value: randomData(), code: '500114', pcode: '100000', pname: '中国'},
  {name: '长寿区', value: randomData(), code: '500115', pcode: '100000', pname: '中国'},
  {name: '江津区', value: randomData(), code: '500116', pcode: '100000', pname: '中国'},
  {name: '合川区', value: randomData(), code: '500117', pcode: '100000', pname: '中国'},
  {name: '永川区', value: randomData(), code: '500118', pcode: '100000', pname: '中国'},
  {name: '南川区', value: randomData(), code: '500119', pcode: '100000', pname: '中国'},
  {name: '璧山区', value: randomData(), code: '500120', pcode: '100000', pname: '中国'},
  {name: '铜梁区', value: randomData(), code: '500151', pcode: '100000', pname: '中国'},
  {name: '潼南区', value: randomData(), code: '500152', pcode: '100000', pname: '中国'},
  {name: '荣昌区', value: randomData(), code: '500153', pcode: '100000', pname: '中国'},
  {name: '开州区', value: randomData(), code: '500154', pcode: '100000', pname: '中国'},
  {name: '梁平县', value: randomData(), code: '500155', pcode: '100000', pname: '中国'},
  {name: '武隆县', value: randomData(), code: '500156', pcode: '100000', pname: '中国'},
  {name: '城口县', value: randomData(), code: '500229', pcode: '100000', pname: '中国'},
  {name: '丰都县', value: randomData(), code: '500230', pcode: '100000', pname: '中国'},
  {name: '垫江县', value: randomData(), code: '500231', pcode: '100000', pname: '中国'},
  {name: '忠县', value: randomData(), code: '500233', pcode: '100000', pname: '中国'},
  {name: '云阳县', value: randomData(), code: '500235', pcode: '100000', pname: '中国'},
  {name: '奉节县', value: randomData(), code: '500236', pcode: '100000', pname: '中国'},
  {name: '巫山县', value: randomData(), code: '500237', pcode: '100000', pname: '中国'},
  {name: '巫溪县', value: randomData(), code: '500238', pcode: '100000', pname: '中国'},
  {name: '石柱土家族自治县', value: randomData(), code: '500240', pcode: '100000', pname: '中国'},
  {name: '秀山土家族苗族自治县', value: randomData(), code: '500241', pcode: '100000', pname: '中国'},
  {name: '酉阳土家族苗族自治县', value: randomData(), code: '500242', pcode: '100000', pname: '中国'},
  {name: '彭水苗族土家族自治县', value: randomData(), code: '500243', pcode: '100000', pname: '中国'},

  // 河北
  {name: '石家庄市', value: randomData(), code: '130100', pcode: '100000', pname: '中国'},
  {name: '唐山市', value: randomData(), code: '130200', pcode: '100000', pname: '中国'},
  {name: '秦皇岛市', value: randomData(), code: '130300', pcode: '100000', pname: '中国'},
  {name: '邯郸市', value: randomData(), code: '130400', pcode: '100000', pname: '中国'},
  {name: '邢台市', value: randomData(), code: '130500', pcode: '100000', pname: '中国'},
  {name: '保定市', value: randomData(), code: '130600', pcode: '100000', pname: '中国'},
  {name: '张家口市', value: randomData(), code: '130700', pcode: '100000', pname: '中国'},
  {name: '承德市', value: randomData(), code: '130800', pcode: '100000', pname: '中国'},
  {name: '沧州市', value: randomData(), code: '130900', pcode: '100000', pname: '中国'},
  {name: '廊坊市', value: randomData(), code: '131000', pcode: '100000', pname: '中国'},
  {name: '衡水市', value: randomData(), code: '131100', pcode: '100000', pname: '中国'},

  // 石家庄
  {name: '长安区', value: randomData(), code: '130102', pcode: '130000', pname: '河北'},
  {name: '桥西区', value: randomData(), code: '130104', pcode: '130000', pname: '河北'},
  {name: '新华区', value: randomData(), code: '130105', pcode: '130000', pname: '河北'},
  {name: '井陉矿区', value: randomData(), code: '130107', pcode: '130000', pname: '河北'},
  {name: '裕华区', value: randomData(), code: '130108', pcode: '130000', pname: '河北'},
  {name: '藁城区', value: randomData(), code: '130109', pcode: '130000', pname: '河北'},
  {name: '鹿泉区', value: randomData(), code: '130110', pcode: '130000', pname: '河北'},
  {name: '栾城区', value: randomData(), code: '130111', pcode: '130000', pname: '河北'},
  {name: '井陉县', value: randomData(), code: '130121', pcode: '130000', pname: '河北'},
  {name: '正定县', value: randomData(), code: '130123', pcode: '130000', pname: '河北'},
  {name: '行唐县', value: randomData(), code: '130125', pcode: '130000', pname: '河北'},
  {name: '灵寿县', value: randomData(), code: '130126', pcode: '130000', pname: '河北'},
  {name: '高邑县', value: randomData(), code: '130127', pcode: '130000', pname: '河北'},
  {name: '深泽县', value: randomData(), code: '130128', pcode: '130000', pname: '河北'},
  {name: '赞皇县', value: randomData(), code: '130129', pcode: '130000', pname: '河北'},
  {name: '无极县', value: randomData(), code: '130130', pcode: '130000', pname: '河北'},
  {name: '平山县', value: randomData(), code: '130131', pcode: '130000', pname: '河北'},
  {name: '元氏县', value: randomData(), code: '130132', pcode: '130000', pname: '河北'},
  {name: '赵县', value: randomData(), code: '130133', pcode: '130000', pname: '河北'},
  {name: '辛集市', value: randomData(), code: '130181', pcode: '130000', pname: '河北'},
  {name: '晋州市', value: randomData(), code: '130183', pcode: '130000', pname: '河北'},
  {name: '新乐市', value: randomData(), code: '130184', pcode: '130000', pname: '河北'},

  // 唐山
  {name: '滦县', value: randomData(), code: '130223', pcode: '130000', pname: '河北'},
  {name: '路南区', value: randomData(), code: '130202', pcode: '130000', pname: '河北'},
  {name: '路北区', value: randomData(), code: '130203', pcode: '130000', pname: '河北'},
  {name: '古冶区', value: randomData(), code: '130204', pcode: '130000', pname: '河北'},
  {name: '开平区', value: randomData(), code: '130205', pcode: '130000', pname: '河北'},
  {name: '丰南区', value: randomData(), code: '130207', pcode: '130000', pname: '河北'},
  {name: '丰润区', value: randomData(), code: '130208', pcode: '130000', pname: '河北'},
  {name: '曹妃甸区', value: randomData(), code: '130209', pcode: '130000', pname: '河北'},
  {name: '滦南县', value: randomData(), code: '130224', pcode: '130000', pname: '河北'},
  {name: '乐亭县', value: randomData(), code: '130225', pcode: '130000', pname: '河北'},
  {name: '迁西县', value: randomData(), code: '130227', pcode: '130000', pname: '河北'},
  {name: '玉田县', value: randomData(), code: '130229', pcode: '130000', pname: '河北'},
  {name: '遵化市', value: randomData(), code: '130281', pcode: '130000', pname: '河北'},
  {name: '迁安市', value: randomData(), code: '130283', pcode: '130000', pname: '河北'},
  {name: '滦州市', value: randomData(), code: '130284', pcode: '130000', pname: '河北'},

  // 秦皇岛
  {name: '海港区', value: randomData(), code: '130302', pcode: '130000', pname: '河北'},
  {name: '山海关区', value: randomData(), code: '130303', pcode: '130000', pname: '河北'},
  {name: '北戴河区', value: randomData(), code: '130304', pcode: '130000', pname: '河北'},
  {name: '抚宁区', value: randomData(), code: '130306', pcode: '130000', pname: '河北'},
  {name: '青龙满族自治县', value: randomData(), code: '130321', pcode: '130000', pname: '河北'},
  {name: '昌黎县', value: randomData(), code: '130322', pcode: '130000', pname: '河北'},
  {name: '卢龙县', value: randomData(), code: '130324', pcode: '130000', pname: '河北'},

  // 邯郸
  {name: '邯山区', value: randomData(), code: '130402', pcode: '130000', pname: '河北'},
  {name: '丛台区', value: randomData(), code: '130403', pcode: '130000', pname: '河北'},
  {name: '复兴区', value: randomData(), code: '130404', pcode: '130000', pname: '河北'},
  {name: '峰峰矿区', value: randomData(), code: '130406', pcode: '130000', pname: '河北'},
  {name: '肥乡区', value: randomData(), code: '130407', pcode: '130000', pname: '河北'},
  {name: '永年区', value: randomData(), code: '130408', pcode: '130000', pname: '河北'},
  {name: '临漳县', value: randomData(), code: '130423', pcode: '130000', pname: '河北'},
  {name: '成安县', value: randomData(), code: '130424', pcode: '130000', pname: '河北'},
  {name: '大名县', value: randomData(), code: '130425', pcode: '130000', pname: '河北'},
  {name: '涉县', value: randomData(), code: '130426', pcode: '130000', pname: '河北'},
  {name: '磁县', value: randomData(), code: '130427', pcode: '130000', pname: '河北'},
  {name: '邱县', value: randomData(), code: '130430', pcode: '130000', pname: '河北'},
  {name: '鸡泽县', value: randomData(), code: '130431', pcode: '130000', pname: '河北'},
  {name: '广平县', value: randomData(), code: '130432', pcode: '130000', pname: '河北'},
  {name: '馆陶县', value: randomData(), code: '130433', pcode: '130000', pname: '河北'},
  {name: '魏县', value: randomData(), code: '130434', pcode: '130000', pname: '河北'},
  {name: '曲周县', value: randomData(), code: '130435', pcode: '130000', pname: '河北'},
  {name: '武安市', value: randomData(), code: '130481', pcode: '130000', pname: '河北'},

  // 邢台
  {name: '桥东区', value: randomData(), code: '130502', pcode: '130000', pname: '河北'},
  {name: '桥西区', value: randomData(), code: '130503', pcode: '130000', pname: '河北'},
  {name: '邢台县', value: randomData(), code: '130521', pcode: '130000', pname: '河北'},
  {name: '临城县', value: randomData(), code: '130522', pcode: '130000', pname: '河北'},
  {name: '内丘县', value: randomData(), code: '130523', pcode: '130000', pname: '河北'},
  {name: '柏乡县', value: randomData(), code: '130524', pcode: '130000', pname: '河北'},
  {name: '隆尧县', value: randomData(), code: '130525', pcode: '130000', pname: '河北'},
  {name: '任县', value: randomData(), code: '130526', pcode: '130000', pname: '河北'},
  {name: '南和县', value: randomData(), code: '130527', pcode: '130000', pname: '河北'},
  {name: '宁晋县', value: randomData(), code: '130528', pcode: '130000', pname: '河北'},
  {name: '巨鹿县', value: randomData(), code: '130529', pcode: '130000', pname: '河北'},
  {name: '新河县', value: randomData(), code: '130530', pcode: '130000', pname: '河北'},
  {name: '广宗县', value: randomData(), code: '130531', pcode: '130000', pname: '河北'},
  {name: '平乡县', value: randomData(), code: '130532', pcode: '130000', pname: '河北'},
  {name: '威县', value: randomData(), code: '130533', pcode: '130000', pname: '河北'},
  {name: '清河县', value: randomData(), code: '130534', pcode: '130000', pname: '河北'},
  {name: '临西县', value: randomData(), code: '130535', pcode: '130000', pname: '河北'},
  {name: '南宫市', value: randomData(), code: '130581', pcode: '130000', pname: '河北'},
  {name: '沙河市', value: randomData(), code: '130582', pcode: '130000', pname: '河北'},
  // 保定
  {name: '竞秀区', value: randomData(), code: '130602', pcode: '130000', pname: '河北'},
  {name: '莲池区', value: randomData(), code: '130606', pcode: '130000', pname: '河北'},
  {name: '满城区', value: randomData(), code: '130607', pcode: '130000', pname: '河北'},
  {name: '清苑区', value: randomData(), code: '130608', pcode: '130000', pname: '河北'},
  {name: '徐水区', value: randomData(), code: '130609', pcode: '130000', pname: '河北'},
  {name: '涞水县', value: randomData(), code: '130623', pcode: '130000', pname: '河北'},
  {name: '阜平县', value: randomData(), code: '130624', pcode: '130000', pname: '河北'},
  {name: '定兴县', value: randomData(), code: '130626', pcode: '130000', pname: '河北'},
  {name: '唐县', value: randomData(), code: '130627', pcode: '130000', pname: '河北'},
  {name: '高阳县', value: randomData(), code: '130628', pcode: '130000', pname: '河北'},
  {name: '容城县', value: randomData(), code: '130629', pcode: '130000', pname: '河北'},
  {name: '涞源县', value: randomData(), code: '130630', pcode: '130000', pname: '河北'},
  {name: '望都县', value: randomData(), code: '130631', pcode: '130000', pname: '河北'},
  {name: '安新县', value: randomData(), code: '130632', pcode: '130000', pname: '河北'},
  {name: '易县', value: randomData(), code: '130633', pcode: '130000', pname: '河北'},
  {name: '曲阳县', value: randomData(), code: '130634', pcode: '130000', pname: '河北'},
  {name: '蠡县', value: randomData(), code: '130635', pcode: '130000', pname: '河北'},
  {name: '顺平县', value: randomData(), code: '130636', pcode: '130000', pname: '河北'},
  {name: '博野县', value: randomData(), code: '130637', pcode: '130000', pname: '河北'},
  {name: '雄县', value: randomData(), code: '130638', pcode: '130000', pname: '河北'},
  {name: '涿州市', value: randomData(), code: '130681', pcode: '130000', pname: '河北'},
  {name: '定州市', value: randomData(), code: '130682', pcode: '130000', pname: '河北'},
  {name: '安国市', value: randomData(), code: '130683', pcode: '130000', pname: '河北'},
  {name: '高碑店市', value: randomData(), code: '130684', pcode: '130000', pname: '河北'},

  // 张家口
  {name: '桥东区', value: randomData(), code: '130702', pcode: '130000', pname: '河北'},
  {name: '桥西区', value: randomData(), code: '130703', pcode: '130000', pname: '河北'},
  {name: '宣化区', value: randomData(), code: '130705', pcode: '130000', pname: '河北'},
  {name: '下花园区', value: randomData(), code: '130706', pcode: '130000', pname: '河北'},
  {name: '万全区', value: randomData(), code: '130708', pcode: '130000', pname: '河北'},
  {name: '崇礼区', value: randomData(), code: '130709', pcode: '130000', pname: '河北'},
  {name: '张北县', value: randomData(), code: '130722', pcode: '130000', pname: '河北'},
  {name: '康保县', value: randomData(), code: '130723', pcode: '130000', pname: '河北'},
  {name: '沽源县', value: randomData(), code: '130724', pcode: '130000', pname: '河北'},
  {name: '尚义县', value: randomData(), code: '130725', pcode: '130000', pname: '河北'},
  {name: '蔚县', value: randomData(), code: '130726', pcode: '130000', pname: '河北'},
  {name: '阳原县', value: randomData(), code: '130727', pcode: '130000', pname: '河北'},
  {name: '怀安县', value: randomData(), code: '130728', pcode: '130000', pname: '河北'},
  {name: '怀来县', value: randomData(), code: '130730', pcode: '130000', pname: '河北'},
  {name: '涿鹿县', value: randomData(), code: '130731', pcode: '130000', pname: '河北'},
  {name: '赤城县', value: randomData(), code: '130732', pcode: '130000', pname: '河北'},
  // 承德
  {name: '双桥区', value: randomData(), code: '130802', pcode: '130000', pname: '河北'},
  {name: '双滦区', value: randomData(), code: '130803', pcode: '130000', pname: '河北'},
  {name: '鹰手营子矿区', value: randomData(), code: '130804', pcode: '130000', pname: '河北'},
  {name: '承德县', value: randomData(), code: '130821', pcode: '130000', pname: '河北'},
  {name: '兴隆县', value: randomData(), code: '130822', pcode: '130000', pname: '河北'},
  {name: '滦平县', value: randomData(), code: '130824', pcode: '130000', pname: '河北'},
  {name: '隆化县', value: randomData(), code: '130825', pcode: '130000', pname: '河北'},
  {name: '丰宁满族自治县', value: randomData(), code: '130826', pcode: '130000', pname: '河北'},
  {name: '宽城满族自治县', value: randomData(), code: '130827', pcode: '130000', pname: '河北'},
  {name: '围场满族蒙古族自治县', value: randomData(), code: '130828', pcode: '130000', pname: '河北'},
  {name: '平泉市', value: randomData(), code: '130881', pcode: '130000', pname: '河北'},

  // 沧州
  {name: '新华区', value: randomData(), code: '130902', pcode: '130000', pname: '河北'},
  {name: '运河区', value: randomData(), code: '130903', pcode: '130000', pname: '河北'},
  {name: '沧县', value: randomData(), code: '130921', pcode: '130000', pname: '河北'},
  {name: '青县', value: randomData(), code: '130922', pcode: '130000', pname: '河北'},
  {name: '东光县', value: randomData(), code: '130923', pcode: '130000', pname: '河北'},
  {name: '海兴县', value: randomData(), code: '130924', pcode: '130000', pname: '河北'},
  {name: '盐山县', value: randomData(), code: '130925', pcode: '130000', pname: '河北'},
  {name: '肃宁县', value: randomData(), code: '130926', pcode: '130000', pname: '河北'},
  {name: '南皮县', value: randomData(), code: '130927', pcode: '130000', pname: '河北'},
  {name: '吴桥县', value: randomData(), code: '130928', pcode: '130000', pname: '河北'},
  {name: '献县', value: randomData(), code: '130929', pcode: '130000', pname: '河北'},
  {name: '孟村回族自治县', value: randomData(), code: '130930', pcode: '130000', pname: '河北'},
  {name: '泊头市', value: randomData(), code: '130981', pcode: '130000', pname: '河北'},
  {name: '任丘市', value: randomData(), code: '130982', pcode: '130000', pname: '河北'},
  {name: '黄骅市', value: randomData(), code: '130983', pcode: '130000', pname: '河北'},
  {name: '河间市', value: randomData(), code: '130984', pcode: '130000', pname: '河北'},
  // 廊坊
  {name: '安次区', value: randomData(), code: '131002', pcode: '130000', pname: '河北'},
  {name: '广阳区', value: randomData(), code: '131003', pcode: '130000', pname: '河北'},
  {name: '固安县', value: randomData(), code: '131022', pcode: '130000', pname: '河北'},
  {name: '永清县', value: randomData(), code: '131023', pcode: '130000', pname: '河北'},
  {name: '香河县', value: randomData(), code: '131024', pcode: '130000', pname: '河北'},
  {name: '大城县', value: randomData(), code: '131025', pcode: '130000', pname: '河北'},
  {name: '文安县', value: randomData(), code: '131026', pcode: '130000', pname: '河北'},
  {name: '大厂回族自治县', value: randomData(), code: '131028', pcode: '130000', pname: '河北'},
  {name: '霸州市', value: randomData(), code: '131081', pcode: '130000', pname: '河北'},
  {name: '三河市', value: randomData(), code: '131082', pcode: '130000', pname: '河北'},

  // 衡水
  {name: '桃城区', value: randomData(), code: '131102', pcode: '130000', pname: '河北'},
  {name: '冀州区', value: randomData(), code: '131103', pcode: '130000', pname: '河北'},
  {name: '枣强县', value: randomData(), code: '131121', pcode: '130000', pname: '河北'},
  {name: '武邑县', value: randomData(), code: '131122', pcode: '130000', pname: '河北'},
  {name: '武强县', value: randomData(), code: '131123', pcode: '130000', pname: '河北'},
  {name: '饶阳县', value: randomData(), code: '131124', pcode: '130000', pname: '河北'},
  {name: '安平县', value: randomData(), code: '131125', pcode: '130000', pname: '河北'},
  {name: '故城县', value: randomData(), code: '131126', pcode: '130000', pname: '河北'},
  {name: '景县', value: randomData(), code: '131127', pcode: '130000', pname: '河北'},
  {name: '阜城县', value: randomData(), code: '131128', pcode: '130000', pname: '河北'},
  {name: '深州市', value: randomData(), code: '131182', pcode: '130000', pname: '河北'},

  // 山西
  {name: '太原市', value: randomData(), code: '140100', pcode: '100000', pname: '中国'},
  {name: '大同市', value: randomData(), code: '140200', pcode: '100000', pname: '中国'},
  {name: '阳泉市', value: randomData(), code: '140300', pcode: '100000', pname: '中国'},
  {name: '长治市', value: randomData(), code: '140400', pcode: '100000', pname: '中国'},
  {name: '晋城市', value: randomData(), code: '140500', pcode: '100000', pname: '中国'},
  {name: '朔州市', value: randomData(), code: '140600', pcode: '100000', pname: '中国'},
  {name: '晋中市', value: randomData(), code: '140700', pcode: '100000', pname: '中国'},
  {name: '运城市', value: randomData(), code: '140800', pcode: '100000', pname: '中国'},
  {name: '忻州市', value: randomData(), code: '140900', pcode: '100000', pname: '中国'},
  {name: '临汾市', value: randomData(), code: '141000', pcode: '100000', pname: '中国'},
  {name: '吕梁市', value: randomData(), code: '141100', pcode: '100000', pname: '中国'},
  // 山西各个区域
  {name: "长治县", value: randomData(), code: '140421', pcode: '140000', pname: '山西'},
  {name: "怀仁县", value: randomData(), code: '140624', pcode: '140000', pname: '山西'},
  {name: "屯留县", value: randomData(), code: '140424', pcode: '140000', pname: '山西'},
  {name: "潞城市", value: randomData(), code: '140481', pcode: '140000', pname: '山西'},
  {name: "大同县", value: randomData(), code: '140227', pcode: '140000', pname: '山西'},
  {name: "南郊区", value: randomData(), code: '140211', pcode: '140000', pname: '山西'},
  {name: '尧都区', value: randomData(), code: '141002', pcode: '140000', pname: '山西'},
  {name: '曲沃县', value: randomData(), code: '141021', pcode: '140000', pname: '山西'},
  {name: '翼城县', value: randomData(), code: '141022', pcode: '140000', pname: '山西'},
  {name: '襄汾县', value: randomData(), code: '141023', pcode: '140000', pname: '山西'},
  {name: '洪洞县', value: randomData(), code: '141024', pcode: '140000', pname: '山西'},
  {name: '古县', value: randomData(), code: '141025', pcode: '140000', pname: '山西'},
  {name: '安泽县', value: randomData(), code: '141026', pcode: '140000', pname: '山西'},
  {name: '浮山县', value: randomData(), code: '141027', pcode: '140000', pname: '山西'},
  {name: '吉县', value: randomData(), code: '141028', pcode: '140000', pname: '山西'},
  {name: '乡宁县', value: randomData(), code: '141029', pcode: '140000', pname: '山西'},
  {name: '大宁县', value: randomData(), code: '141030', pcode: '140000', pname: '山西'},
  {name: '隰县', value: randomData(), code: '141031', pcode: '140000', pname: '山西'},
  {name: '永和县', value: randomData(), code: '141032', pcode: '140000', pname: '山西'},
  {name: '蒲县', value: randomData(), code: '141033', pcode: '140000', pname: '山西'},
  {name: '汾西县', value: randomData(), code: '141034', pcode: '140000', pname: '山西'},
  {name: '侯马市', value: randomData(), code: '141081', pcode: '140000', pname: '山西'},
  {name: '霍州市', value: randomData(), code: '141082', pcode: '140000', pname: '山西'},
  {name: '离石区', value: randomData(), code: '141102', pcode: '140000', pname: '山西'},
  {name: '文水县', value: randomData(), code: '141121', pcode: '140000', pname: '山西'},
  {name: '交城县', value: randomData(), code: '141122', pcode: '140000', pname: '山西'},
  {name: '兴县', value: randomData(), code: '141123', pcode: '140000', pname: '山西'},
  {name: '临县', value: randomData(), code: '141124', pcode: '140000', pname: '山西'},
  {name: '柳林县', value: randomData(), code: '141125', pcode: '140000', pname: '山西'},
  {name: '石楼县', value: randomData(), code: '141126', pcode: '140000', pname: '山西'},
  {name: '岚县', value: randomData(), code: '141127', pcode: '140000', pname: '山西'},
  {name: '方山县', value: randomData(), code: '141128', pcode: '140000', pname: '山西'},
  {name: '中阳县', value: randomData(), code: '141129', pcode: '140000', pname: '山西'},
  {name: '交口县', value: randomData(), code: '141130', pcode: '140000', pname: '山西'},
  {name: '孝义市', value: randomData(), code: '141181', pcode: '140000', pname: '山西'},
  {name: '汾阳市', value: randomData(), code: '141182', pcode: '140000', pname: '山西'},
  {name: '新荣区', value: randomData(), code: '140212', pcode: '140000', pname: '山西'},
  {name: '平城区', value: randomData(), code: '140213', pcode: '140000', pname: '山西'},
  {name: '云冈区', value: randomData(), code: '140214', pcode: '140000', pname: '山西'},
  {name: '云州区', value: randomData(), code: '140215', pcode: '140000', pname: '山西'},
  {name: '阳高县', value: randomData(), code: '140221', pcode: '140000', pname: '山西'},
  {name: '天镇县', value: randomData(), code: '140222', pcode: '140000', pname: '山西'},
  {name: '广灵县', value: randomData(), code: '140223', pcode: '140000', pname: '山西'},
  {name: '灵丘县', value: randomData(), code: '140224', pcode: '140000', pname: '山西'},
  {name: '浑源县', value: randomData(), code: '140225', pcode: '140000', pname: '山西'},
  {name: '左云县', value: randomData(), code: '140226', pcode: '140000', pname: '山西'},
  {name: '小店区', value: randomData(), code: '140105', pcode: '140000', pname: '山西'},
  {name: '迎泽区', value: randomData(), code: '140106', pcode: '140000', pname: '山西'},
  {name: '杏花岭区', value: randomData(), code: '140107', pcode: '140000', pname: '山西'},
  {name: '尖草坪区', value: randomData(), code: '140108', pcode: '140000', pname: '山西'},
  {name: '万柏林区', value: randomData(), code: '140109', pcode: '140000', pname: '山西'},
  {name: '晋源区', value: randomData(), code: '140110', pcode: '140000', pname: '山西'},
  {name: '清徐县', value: randomData(), code: '140121', pcode: '140000', pname: '山西'},
  {name: '阳曲县', value: randomData(), code: '140122', pcode: '140000', pname: '山西'},
  {name: '娄烦县', value: randomData(), code: '140123', pcode: '140000', pname: '山西'},
  {name: '古交市', value: randomData(), code: '140181', pcode: '140000', pname: '山西'},
  {name: '忻府区', value: randomData(), code: '140902', pcode: '140000', pname: '山西'},
  {name: '定襄县', value: randomData(), code: '140921', pcode: '140000', pname: '山西'},
  {name: '五台县', value: randomData(), code: '140922', pcode: '140000', pname: '山西'},
  {name: '代县', value: randomData(), code: '140923', pcode: '140000', pname: '山西'},
  {name: '繁峙县', value: randomData(), code: '140924', pcode: '140000', pname: '山西'},
  {name: '宁武县', value: randomData(), code: '140925', pcode: '140000', pname: '山西'},
  {name: '静乐县', value: randomData(), code: '140926', pcode: '140000', pname: '山西'},
  {name: '神池县', value: randomData(), code: '140927', pcode: '140000', pname: '山西'},
  {name: '五寨县', value: randomData(), code: '140928', pcode: '140000', pname: '山西'},
  {name: '岢岚县', value: randomData(), code: '140929', pcode: '140000', pname: '山西'},
  {name: '河曲县', value: randomData(), code: '140930', pcode: '140000', pname: '山西'},
  {name: '保德县', value: randomData(), code: '140931', pcode: '140000', pname: '山西'},
  {name: '偏关县', value: randomData(), code: '140932', pcode: '140000', pname: '山西'},
  {name: '原平市', value: randomData(), code: '140981', pcode: '140000', pname: '山西'},
  {name: '榆次区', value: randomData(), code: '140702', pcode: '140000', pname: '山西'},
  {name: '榆社县', value: randomData(), code: '140721', pcode: '140000', pname: '山西'},
  {name: '左权县', value: randomData(), code: '140722', pcode: '140000', pname: '山西'},
  {name: '和顺县', value: randomData(), code: '140723', pcode: '140000', pname: '山西'},
  {name: '昔阳县', value: randomData(), code: '140724', pcode: '140000', pname: '山西'},
  {name: '寿阳县', value: randomData(), code: '140725', pcode: '140000', pname: '山西'},
  {name: '太谷县', value: randomData(), code: '140726', pcode: '140000', pname: '山西'},
  {name: '祁县', value: randomData(), code: '140727', pcode: '140000', pname: '山西'},
  {name: '平遥县', value: randomData(), code: '140728', pcode: '140000', pname: '山西'},
  {name: '灵石县', value: randomData(), code: '140729', pcode: '140000', pname: '山西'},
  {name: '介休市', value: randomData(), code: '140781', pcode: '140000', pname: '山西'},
  {name: '城区', value: randomData(), code: '140502', pcode: '140000', pname: '山西'},
  {name: '沁水县', value: randomData(), code: '140521', pcode: '140000', pname: '山西'},
  {name: '阳城县', value: randomData(), code: '140522', pcode: '140000', pname: '山西'},
  {name: '陵川县', value: randomData(), code: '140524', pcode: '140000', pname: '山西'},
  {name: '泽州县', value: randomData(), code: '140525', pcode: '140000', pname: '山西'},
  {name: '高平市', value: randomData(), code: '140581', pcode: '140000', pname: '山西'},
  {name: '朔城区', value: randomData(), code: '140602', pcode: '140000', pname: '山西'},
  {name: '平鲁区', value: randomData(), code: '140603', pcode: '140000', pname: '山西'},
  {name: '山阴县', value: randomData(), code: '140621', pcode: '140000', pname: '山西'},
  {name: '应县', value: randomData(), code: '140622', pcode: '140000', pname: '山西'},
  {name: '右玉县', value: randomData(), code: '140623', pcode: '140000', pname: '山西'},
  {name: '怀仁市', value: randomData(), code: '140681', pcode: '140000', pname: '山西'},
  {name: '盐湖区', value: randomData(), code: '140802', pcode: '140000', pname: '山西'},
  {name: '临猗县', value: randomData(), code: '140821', pcode: '140000', pname: '山西'},
  {name: '万荣县', value: randomData(), code: '140822', pcode: '140000', pname: '山西'},
  {name: '闻喜县', value: randomData(), code: '140823', pcode: '140000', pname: '山西'},
  {name: '稷山县', value: randomData(), code: '140824', pcode: '140000', pname: '山西'},
  {name: '新绛县', value: randomData(), code: '140825', pcode: '140000', pname: '山西'},
  {name: '绛县', value: randomData(), code: '140826', pcode: '140000', pname: '山西'},
  {name: '垣曲县', value: randomData(), code: '140827', pcode: '140000', pname: '山西'},
  {name: '夏县', value: randomData(), code: '140828', pcode: '140000', pname: '山西'},
  {name: '平陆县', value: randomData(), code: '140829', pcode: '140000', pname: '山西'},
  {name: '芮城县', value: randomData(), code: '140830', pcode: '140000', pname: '山西'},
  {name: '永济市', value: randomData(), code: '140881', pcode: '140000', pname: '山西'},
  {name: '河津市', value: randomData(), code: '140882', pcode: '140000', pname: '山西'},
  {name: '潞州区', value: randomData(), code: '140403', pcode: '140000', pname: '山西'},
  {name: '上党区', value: randomData(), code: '140404', pcode: '140000', pname: '山西'},
  {name: '屯留区', value: randomData(), code: '140405', pcode: '140000', pname: '山西'},
  {name: '潞城区', value: randomData(), code: '140406', pcode: '140000', pname: '山西'},
  {name: '襄垣县', value: randomData(), code: '140423', pcode: '140000', pname: '山西'},
  {name: '平顺县', value: randomData(), code: '140425', pcode: '140000', pname: '山西'},
  {name: '黎城县', value: randomData(), code: '140426', pcode: '140000', pname: '山西'},
  {name: '壶关县', value: randomData(), code: '140427', pcode: '140000', pname: '山西'},
  {name: '长子县', value: randomData(), code: '140428', pcode: '140000', pname: '山西'},
  {name: '武乡县', value: randomData(), code: '140429', pcode: '140000', pname: '山西'},
  {name: '沁县', value: randomData(), code: '140430', pcode: '140000', pname: '山西'},
  {name: '沁源县', value: randomData(), code: '140431', pcode: '140000', pname: '山西'},
  {name: '城区', value: randomData(), code: '140302', pcode: '140000', pname: '山西'},
  {name: '矿区', value: randomData(), code: '140303', pcode: '140000', pname: '山西'},
  {name: '郊区', value: randomData(), code: '140311', pcode: '140000', pname: '山西'},
  {name: '平定县', value: randomData(), code: '140321', pcode: '140000', pname: '山西'},
  {name: '盂县', value: randomData(), code: '140322', pcode: '140000', pname: '山西'},

  // 山东
  {name: '济南市', value: randomData(), code: '370100', pcode: '100000', pname: '中国'},
  {name: '青岛市', value: randomData(), code: '370200', pcode: '100000', pname: '中国'},
  {name: '淄博市', value: randomData(), code: '370300', pcode: '100000', pname: '中国'},
  {name: '枣庄市', value: randomData(), code: '370400', pcode: '100000', pname: '中国'},
  {name: '东营市', value: randomData(), code: '370500', pcode: '100000', pname: '中国'},
  {name: '烟台市', value: randomData(), code: '370600', pcode: '100000', pname: '中国'},
  {name: '潍坊市', value: randomData(), code: '370700', pcode: '100000', pname: '中国'},
  {name: '济宁市', value: randomData(), code: '370800', pcode: '100000', pname: '中国'},
  {name: '泰安市', value: randomData(), code: '370900', pcode: '100000', pname: '中国'},
  {name: '威海市', value: randomData(), code: '371000', pcode: '100000', pname: '中国'},
  {name: '日照市', value: randomData(), code: '371100', pcode: '100000', pname: '中国'},
  {name: '临沂市', value: randomData(), code: '371300', pcode: '100000', pname: '中国'},
  {name: '德州市', value: randomData(), code: '371400', pcode: '100000', pname: '中国'},
  {name: '聊城市', value: randomData(), code: '371500', pcode: '100000', pname: '中国'},
  {name: '滨州市', value: randomData(), code: '371600', pcode: '100000', pname: '中国'},
  {name: '菏泽市', value: randomData(), code: '371700', pcode: '100000', pname: '中国'},
  // 山东各个区域
  {name: '济阳县', value: randomData(), code: '370125', pcode: '370000', pname: '山东'},
  {name: '东营区', value: randomData(), code: '370502', pcode: '370000', pname: '山东'},
  {name: '河口区', value: randomData(), code: '370503', pcode: '370000', pname: '山东'},
  {name: '垦利区', value: randomData(), code: '370505', pcode: '370000', pname: '山东'},
  {name: '利津县', value: randomData(), code: '370522', pcode: '370000', pname: '山东'},
  {name: '广饶县', value: randomData(), code: '370523', pcode: '370000', pname: '山东'},
  {name: '兰山区', value: randomData(), code: '371302', pcode: '370000', pname: '山东'},
  {name: '罗庄区', value: randomData(), code: '371311', pcode: '370000', pname: '山东'},
  {name: '河东区', value: randomData(), code: '371312', pcode: '370000', pname: '山东'},
  {name: '沂南县', value: randomData(), code: '371321', pcode: '370000', pname: '山东'},
  {name: '郯城县', value: randomData(), code: '371322', pcode: '370000', pname: '山东'},
  {name: '沂水县', value: randomData(), code: '371323', pcode: '370000', pname: '山东'},
  {name: '兰陵县', value: randomData(), code: '371324', pcode: '370000', pname: '山东'},
  {name: '费县', value: randomData(), code: '371325', pcode: '370000', pname: '山东'},
  {name: '平邑县', value: randomData(), code: '371326', pcode: '370000', pname: '山东'},
  {name: '莒南县', value: randomData(), code: '371327', pcode: '370000', pname: '山东'},
  {name: '蒙阴县', value: randomData(), code: '371328', pcode: '370000', pname: '山东'},
  {name: '临沭县', value: randomData(), code: '371329', pcode: '370000', pname: '山东'},
  {name: '环翠区', value: randomData(), code: '371002', pcode: '370000', pname: '山东'},
  {name: '文登区', value: randomData(), code: '371003', pcode: '370000', pname: '山东'},
  {name: '荣成市', value: randomData(), code: '371082', pcode: '370000', pname: '山东'},
  {name: '乳山市', value: randomData(), code: '371083', pcode: '370000', pname: '山东'},
  {name: '德城区', value: randomData(), code: '371402', pcode: '370000', pname: '山东'},
  {name: '陵城区', value: randomData(), code: '371403', pcode: '370000', pname: '山东'},
  {name: '宁津县', value: randomData(), code: '371422', pcode: '370000', pname: '山东'},
  {name: '庆云县', value: randomData(), code: '371423', pcode: '370000', pname: '山东'},
  {name: '临邑县', value: randomData(), code: '371424', pcode: '370000', pname: '山东'},
  {name: '齐河县', value: randomData(), code: '371425', pcode: '370000', pname: '山东'},
  {name: '平原县', value: randomData(), code: '371426', pcode: '370000', pname: '山东'},
  {name: '夏津县', value: randomData(), code: '371427', pcode: '370000', pname: '山东'},
  {name: '武城县', value: randomData(), code: '371428', pcode: '370000', pname: '山东'},
  {name: '乐陵市', value: randomData(), code: '371481', pcode: '370000', pname: '山东'},
  {name: '禹城市', value: randomData(), code: '371482', pcode: '370000', pname: '山东'},
  {name: '东港区', value: randomData(), code: '371102', pcode: '370000', pname: '山东'},
  {name: '岚山区', value: randomData(), code: '371103', pcode: '370000', pname: '山东'},
  {name: '五莲县', value: randomData(), code: '371121', pcode: '370000', pname: '山东'},
  {name: '莒县', value: randomData(), code: '371122', pcode: '370000', pname: '山东'},
  {name: '市中区', value: randomData(), code: '370402', pcode: '370000', pname: '山东'},
  {name: '薛城区', value: randomData(), code: '370403', pcode: '370000', pname: '山东'},
  {name: '峄城区', value: randomData(), code: '370404', pcode: '370000', pname: '山东'},
  {name: '台儿庄区', value: randomData(), code: '370405', pcode: '370000', pname: '山东'},
  {name: '山亭区', value: randomData(), code: '370406', pcode: '370000', pname: '山东'},
  {name: '滕州市', value: randomData(), code: '370481', pcode: '370000', pname: '山东'},
  {name: '泰山区', value: randomData(), code: '370902', pcode: '370000', pname: '山东'},
  {name: '岱岳区', value: randomData(), code: '370911', pcode: '370000', pname: '山东'},
  {name: '宁阳县', value: randomData(), code: '370921', pcode: '370000', pname: '山东'},
  {name: '东平县', value: randomData(), code: '370923', pcode: '370000', pname: '山东'},
  {name: '新泰市', value: randomData(), code: '370982', pcode: '370000', pname: '山东'},
  {name: '肥城市', value: randomData(), code: '370983', pcode: '370000', pname: '山东'},
  {name: '历下区', value: randomData(), code: '370102', pcode: '370000', pname: '山东'},
  {name: '市中区', value: randomData(), code: '370103', pcode: '370000', pname: '山东'},
  {name: '槐荫区', value: randomData(), code: '370104', pcode: '370000', pname: '山东'},
  {name: '天桥区', value: randomData(), code: '370105', pcode: '370000', pname: '山东'},
  {name: '历城区', value: randomData(), code: '370112', pcode: '370000', pname: '山东'},
  {name: '长清区', value: randomData(), code: '370113', pcode: '370000', pname: '山东'},
  {name: '章丘区', value: randomData(), code: '370114', pcode: '370000', pname: '山东'},
  {name: '济阳区', value: randomData(), code: '370115', pcode: '370000', pname: '山东'},
  {name: '莱芜区', value: randomData(), code: '370116', pcode: '370000', pname: '山东'},
  {name: '钢城区', value: randomData(), code: '370117', pcode: '370000', pname: '山东'},
  {name: '平阴县', value: randomData(), code: '370124', pcode: '370000', pname: '山东'},
  {name: '商河县', value: randomData(), code: '370126', pcode: '370000', pname: '山东'},
  {name: '任城区', value: randomData(), code: '370811', pcode: '370000', pname: '山东'},
  {name: '兖州区', value: randomData(), code: '370812', pcode: '370000', pname: '山东'},
  {name: '微山县', value: randomData(), code: '370826', pcode: '370000', pname: '山东'},
  {name: '鱼台县', value: randomData(), code: '370827', pcode: '370000', pname: '山东'},
  {name: '金乡县', value: randomData(), code: '370828', pcode: '370000', pname: '山东'},
  {name: '嘉祥县', value: randomData(), code: '370829', pcode: '370000', pname: '山东'},
  {name: '汶上县', value: randomData(), code: '370830', pcode: '370000', pname: '山东'},
  {name: '泗水县', value: randomData(), code: '370831', pcode: '370000', pname: '山东'},
  {name: '梁山县', value: randomData(), code: '370832', pcode: '370000', pname: '山东'},
  {name: '曲阜市', value: randomData(), code: '370881', pcode: '370000', pname: '山东'},
  {name: '邹城市', value: randomData(), code: '370883', pcode: '370000', pname: '山东'},
  {name: '淄川区', value: randomData(), code: '370302', pcode: '370000', pname: '山东'},
  {name: '张店区', value: randomData(), code: '370303', pcode: '370000', pname: '山东'},
  {name: '博山区', value: randomData(), code: '370304', pcode: '370000', pname: '山东'},
  {name: '临淄区', value: randomData(), code: '370305', pcode: '370000', pname: '山东'},
  {name: '周村区', value: randomData(), code: '370306', pcode: '370000', pname: '山东'},
  {name: '桓台县', value: randomData(), code: '370321', pcode: '370000', pname: '山东'},
  {name: '高青县', value: randomData(), code: '370322', pcode: '370000', pname: '山东'},
  {name: '沂源县', value: randomData(), code: '370323', pcode: '370000', pname: '山东'},
  {name: '滨城区', value: randomData(), code: '371602', pcode: '370000', pname: '山东'},
  {name: '沾化区', value: randomData(), code: '371603', pcode: '370000', pname: '山东'},
  {name: '惠民县', value: randomData(), code: '371621', pcode: '370000', pname: '山东'},
  {name: '阳信县', value: randomData(), code: '371622', pcode: '370000', pname: '山东'},
  {name: '无棣县', value: randomData(), code: '371623', pcode: '370000', pname: '山东'},
  {name: '博兴县', value: randomData(), code: '371625', pcode: '370000', pname: '山东'},
  {name: '邹平市', value: randomData(), code: '371681', pcode: '370000', pname: '山东'},
  {name: '潍城区', value: randomData(), code: '370702', pcode: '370000', pname: '山东'},
  {name: '寒亭区', value: randomData(), code: '370703', pcode: '370000', pname: '山东'},
  {name: '坊子区', value: randomData(), code: '370704', pcode: '370000', pname: '山东'},
  {name: '奎文区', value: randomData(), code: '370705', pcode: '370000', pname: '山东'},
  {name: '临朐县', value: randomData(), code: '370724', pcode: '370000', pname: '山东'},
  {name: '昌乐县', value: randomData(), code: '370725', pcode: '370000', pname: '山东'},
  {name: '青州市', value: randomData(), code: '370781', pcode: '370000', pname: '山东'},
  {name: '诸城市', value: randomData(), code: '370782', pcode: '370000', pname: '山东'},
  {name: '寿光市', value: randomData(), code: '370783', pcode: '370000', pname: '山东'},
  {name: '安丘市', value: randomData(), code: '370784', pcode: '370000', pname: '山东'},
  {name: '高密市', value: randomData(), code: '370785', pcode: '370000', pname: '山东'},
  {name: '昌邑市', value: randomData(), code: '370786', pcode: '370000', pname: '山东'},
  {name: '芝罘区', value: randomData(), code: '370602', pcode: '370000', pname: '山东'},
  {name: '福山区', value: randomData(), code: '370611', pcode: '370000', pname: '山东'},
  {name: '牟平区', value: randomData(), code: '370612', pcode: '370000', pname: '山东'},
  {name: '莱山区', value: randomData(), code: '370613', pcode: '370000', pname: '山东'},
  {name: '长岛县', value: randomData(), code: '370634', pcode: '370000', pname: '山东'},
  {name: '龙口市', value: randomData(), code: '370681', pcode: '370000', pname: '山东'},
  {name: '莱阳市', value: randomData(), code: '370682', pcode: '370000', pname: '山东'},
  {name: '莱州市', value: randomData(), code: '370683', pcode: '370000', pname: '山东'},
  {name: '蓬莱市', value: randomData(), code: '370684', pcode: '370000', pname: '山东'},
  {name: '招远市', value: randomData(), code: '370685', pcode: '370000', pname: '山东'},
  {name: '栖霞市', value: randomData(), code: '370686', pcode: '370000', pname: '山东'},
  {name: '海阳市', value: randomData(), code: '370687', pcode: '370000', pname: '山东'},
  {name: '东昌府区', value: randomData(), code: '371502', pcode: '370000', pname: '山东'},
  {name: '阳谷县', value: randomData(), code: '371521', pcode: '370000', pname: '山东'},
  {name: '莘县', value: randomData(), code: '371522', pcode: '370000', pname: '山东'},
  {name: '茌平区', value: randomData(), code: '371523', pcode: '370000', pname: '山东'},
  {name: '东阿县', value: randomData(), code: '371524', pcode: '370000', pname: '山东'},
  {name: '冠县', value: randomData(), code: '371525', pcode: '370000', pname: '山东'},
  {name: '高唐县', value: randomData(), code: '371526', pcode: '370000', pname: '山东'},
  {name: '临清市', value: randomData(), code: '371581', pcode: '370000', pname: '山东'},
  {name: '牡丹区', value: randomData(), code: '371702', pcode: '370000', pname: '山东'},
  {name: '定陶区', value: randomData(), code: '371703', pcode: '370000', pname: '山东'},
  {name: '曹县', value: randomData(), code: '371721', pcode: '370000', pname: '山东'},
  {name: '单县', value: randomData(), code: '371722', pcode: '370000', pname: '山东'},
  {name: '成武县', value: randomData(), code: '371723', pcode: '370000', pname: '山东'},
  {name: '巨野县', value: randomData(), code: '371724', pcode: '370000', pname: '山东'},
  {name: '郓城县', value: randomData(), code: '371725', pcode: '370000', pname: '山东'},
  {name: '鄄城县', value: randomData(), code: '371726', pcode: '370000', pname: '山东'},
  {name: '东明县', value: randomData(), code: '371728', pcode: '370000', pname: '山东'},
  {name: '市南区', value: randomData(), code: '370202', pcode: '370000', pname: '山东'},
  {name: '市北区', value: randomData(), code: '370203', pcode: '370000', pname: '山东'},
  {name: '黄岛区', value: randomData(), code: '370211', pcode: '370000', pname: '山东'},
  {name: '崂山区', value: randomData(), code: '370212', pcode: '370000', pname: '山东'},
  {name: '李沧区', value: randomData(), code: '370213', pcode: '370000', pname: '山东'},
  {name: '城阳区', value: randomData(), code: '370214', pcode: '370000', pname: '山东'},
  {name: '即墨区', value: randomData(), code: '370215', pcode: '370000', pname: '山东'},
  {name: '胶州市', value: randomData(), code: '370281', pcode: '370000', pname: '山东'},
  {name: '平度市', value: randomData(), code: '370283', pcode: '370000', pname: '山东'},
  {name: '莱西市', value: randomData(), code: '370285', pcode: '370000', pname: '山东'},
  // 河南
  {name: '郑州市', value: randomData(), code: '410100', pcode: '100000', pname: '中国'},
  {name: '开封市', value: randomData(), code: '410200', pcode: '100000', pname: '中国'},
  {name: '洛阳市', value: randomData(), code: '410300', pcode: '100000', pname: '中国'},
  {name: '平顶山市', value: randomData(), code: '410400', pcode: '100000', pname: '中国'},
  {name: '安阳市', value: randomData(), code: '410500', pcode: '100000', pname: '中国'},
  {name: '鹤壁市', value: randomData(), code: '410600', pcode: '100000', pname: '中国'},
  {name: '新乡市', value: randomData(), code: '410700', pcode: '100000', pname: '中国'},
  {name: '焦作市', value: randomData(), code: '410800', pcode: '100000', pname: '中国'},
  {name: '濮阳市', value: randomData(), code: '410900', pcode: '100000', pname: '中国'},
  {name: '许昌市', value: randomData(), code: '411000', pcode: '100000', pname: '中国'},
  {name: '漯河市', value: randomData(), code: '411100', pcode: '100000', pname: '中国'},
  {name: '三门峡市', value: randomData(), code: '411200', pcode: '100000', pname: '中国'},
  {name: '南阳市', value: randomData(), code: '411300', pcode: '100000', pname: '中国'},
  {name: '商丘市', value: randomData(), code: '411400', pcode: '100000', pname: '中国'},
  {name: '信阳市', value: randomData(), code: '411500', pcode: '100000', pname: '中国'},
  {name: '周口市', value: randomData(), code: '411600', pcode: '100000', pname: '中国'},
  {name: '驻马店市', value: randomData(), code: '411700', pcode: '100000', pname: '中国'},
  {name: '济源市', value: randomData(), code: '419001', pcode: '100000', pname: '中国'},
  // 河南各个区域
  {name: '邓州市', value: randomData(), code: '411381', pcode: '410000', pname: '河南'},
  {name: '方城县', value: randomData(), code: '411322', pcode: '410000', pname: '河南'},
  {name: '南召县', value: randomData(), code: '411321', pcode: '410000', pname: '河南'},
  {name: '内乡县', value: randomData(), code: '411325', pcode: '410000', pname: '河南'},
  {name: '社旗县', value: randomData(), code: '411327', pcode: '410000', pname: '河南'},
  {name: '唐河县', value: randomData(), code: '411328', pcode: '410000', pname: '河南'},
  {name: '桐柏县', value: randomData(), code: '411330', pcode: '410000', pname: '河南'},
  {name: '西峡县', value: randomData(), code: '411323', pcode: '410000', pname: '河南'},
  {name: '新野县', value: randomData(), code: '411329', pcode: '410000', pname: '河南'},
  {name: '镇平县', value: randomData(), code: '411324', pcode: '410000', pname: '河南'},
  {name: '淅川县', value: randomData(), code: '411326', pcode: '410000', pname: '河南'},
  {name: '宛城区', value: randomData(), code: '411302', pcode: '410000', pname: '河南'},
  {name: '卧龙区', value: randomData(), code: '411303', pcode: '410000', pname: '河南'},
  {name: '淮阳县', value: randomData(), code: '411626', pcode: '410000', pname: '河南'},
  {name: '湖滨区', value: randomData(), code: '411202', pcode: '410000', pname: '河南'},
  {name: '陕州区', value: randomData(), code: '411203', pcode: '410000', pname: '河南'},
  {name: '渑池县', value: randomData(), code: '411221', pcode: '410000', pname: '河南'},
  {name: '卢氏县', value: randomData(), code: '411224', pcode: '410000', pname: '河南'},
  {name: '义马市', value: randomData(), code: '411281', pcode: '410000', pname: '河南'},
  {name: '灵宝市', value: randomData(), code: '411282', pcode: '410000', pname: '河南'},
  {name: '浉河区', value: randomData(), code: '411502', pcode: '410000', pname: '河南'},
  {name: '平桥区', value: randomData(), code: '411503', pcode: '410000', pname: '河南'},
  {name: '罗山县', value: randomData(), code: '411521', pcode: '410000', pname: '河南'},
  {name: '光山县', value: randomData(), code: '411522', pcode: '410000', pname: '河南'},
  {name: '新县', value: randomData(), code: '411523', pcode: '410000', pname: '河南'},
  {name: '商城县', value: randomData(), code: '411524', pcode: '410000', pname: '河南'},
  {name: '固始县', value: randomData(), code: '411525', pcode: '410000', pname: '河南'},
  {name: '潢川县', value: randomData(), code: '411526', pcode: '410000', pname: '河南'},
  {name: '淮滨县', value: randomData(), code: '411527', pcode: '410000', pname: '河南'},
  {name: '息县', value: randomData(), code: '411528', pcode: '410000', pname: '河南'},
  {name: '南阳市', value: randomData(), code: '411300', pcode: '410000', pname: '河南'},
  {name: '川汇区', value: randomData(), code: '411602', pcode: '410000', pname: '河南'},
  {name: '扶沟县', value: randomData(), code: '411621', pcode: '410000', pname: '河南'},
  {name: '西华县', value: randomData(), code: '411622', pcode: '410000', pname: '河南'},
  {name: '商水县', value: randomData(), code: '411623', pcode: '410000', pname: '河南'},
  {name: '沈丘县', value: randomData(), code: '411624', pcode: '410000', pname: '河南'},
  {name: '郸城县', value: randomData(), code: '411625', pcode: '410000', pname: '河南'},
  {name: '淮阳区', value: randomData(), code: '411626', pcode: '410000', pname: '河南'},
  {name: '太康县', value: randomData(), code: '411627', pcode: '410000', pname: '河南'},
  {name: '鹿邑县', value: randomData(), code: '411628', pcode: '410000', pname: '河南'},
  {name: '项城市', value: randomData(), code: '411681', pcode: '410000', pname: '河南'},
  {name: '梁园区', value: randomData(), code: '411402', pcode: '410000', pname: '河南'},
  {name: '睢阳区', value: randomData(), code: '411403', pcode: '410000', pname: '河南'},
  {name: '民权县', value: randomData(), code: '411421', pcode: '410000', pname: '河南'},
  {name: '睢县', value: randomData(), code: '411422', pcode: '410000', pname: '河南'},
  {name: '宁陵县', value: randomData(), code: '411423', pcode: '410000', pname: '河南'},
  {name: '柘城县', value: randomData(), code: '411424', pcode: '410000', pname: '河南'},
  {name: '虞城县', value: randomData(), code: '411425', pcode: '410000', pname: '河南'},
  {name: '夏邑县', value: randomData(), code: '411426', pcode: '410000', pname: '河南'},
  {name: '永城市', value: randomData(), code: '411481', pcode: '410000', pname: '河南'},
  {name: '文峰区', value: randomData(), code: '410502', pcode: '410000', pname: '河南'},
  {name: '北关区', value: randomData(), code: '410503', pcode: '410000', pname: '河南'},
  {name: '殷都区', value: randomData(), code: '410505', pcode: '410000', pname: '河南'},
  {name: '龙安区', value: randomData(), code: '410506', pcode: '410000', pname: '河南'},
  {name: '安阳县', value: randomData(), code: '410522', pcode: '410000', pname: '河南'},
  {name: '汤阴县', value: randomData(), code: '410523', pcode: '410000', pname: '河南'},
  {name: '滑县', value: randomData(), code: '410526', pcode: '410000', pname: '河南'},
  {name: '内黄县', value: randomData(), code: '410527', pcode: '410000', pname: '河南'},
  {name: '林州市', value: randomData(), code: '410581', pcode: '410000', pname: '河南'},
  {name: '新华区', value: randomData(), code: '410402', pcode: '410000', pname: '河南'},
  {name: '卫东区', value: randomData(), code: '410403', pcode: '410000', pname: '河南'},
  {name: '石龙区', value: randomData(), code: '410404', pcode: '410000', pname: '河南'},
  {name: '湛河区', value: randomData(), code: '410411', pcode: '410000', pname: '河南'},
  {name: '宝丰县', value: randomData(), code: '410421', pcode: '410000', pname: '河南'},
  {name: '叶县', value: randomData(), code: '410422', pcode: '410000', pname: '河南'},
  {name: '鲁山县', value: randomData(), code: '410423', pcode: '410000', pname: '河南'},
  {name: '郏县', value: randomData(), code: '410425', pcode: '410000', pname: '河南'},
  {name: '舞钢市', value: randomData(), code: '410481', pcode: '410000', pname: '河南'},
  {name: '汝州市', value: randomData(), code: '410482', pcode: '410000', pname: '河南'},
  {name: '龙亭区', value: randomData(), code: '410202', pcode: '410000', pname: '河南'},
  {name: '顺河回族区', value: randomData(), code: '410203', pcode: '410000', pname: '河南'},
  {name: '鼓楼区', value: randomData(), code: '410204', pcode: '410000', pname: '河南'},
  {name: '禹王台区', value: randomData(), code: '410205', pcode: '410000', pname: '河南'},
  {name: '祥符区', value: randomData(), code: '410212', pcode: '410000', pname: '河南'},
  {name: '杞县', value: randomData(), code: '410221', pcode: '410000', pname: '河南'},
  {name: '通许县', value: randomData(), code: '410222', pcode: '410000', pname: '河南'},
  {name: '尉氏县', value: randomData(), code: '410223', pcode: '410000', pname: '河南'},
  {name: '兰考县', value: randomData(), code: '410225', pcode: '410000', pname: '河南'},
  {name: '红旗区', value: randomData(), code: '410702', pcode: '410000', pname: '河南'},
  {name: '卫滨区', value: randomData(), code: '410703', pcode: '410000', pname: '河南'},
  {name: '凤泉区', value: randomData(), code: '410704', pcode: '410000', pname: '河南'},
  {name: '牧野区', value: randomData(), code: '410711', pcode: '410000', pname: '河南'},
  {name: '新乡县', value: randomData(), code: '410721', pcode: '410000', pname: '河南'},
  {name: '获嘉县', value: randomData(), code: '410724', pcode: '410000', pname: '河南'},
  {name: '原阳县', value: randomData(), code: '410725', pcode: '410000', pname: '河南'},
  {name: '延津县', value: randomData(), code: '410726', pcode: '410000', pname: '河南'},
  {name: '封丘县', value: randomData(), code: '410727', pcode: '410000', pname: '河南'},
  {name: '长垣市', value: randomData(), code: '410728', pcode: '410000', pname: '河南'},
  {name: '卫辉市', value: randomData(), code: '410781', pcode: '410000', pname: '河南'},
  {name: '辉县市', value: randomData(), code: '410782', pcode: '410000', pname: '河南'},
  {name: '老城区', value: randomData(), code: '410302', pcode: '410000', pname: '河南'},
  {name: '西工区', value: randomData(), code: '410303', pcode: '410000', pname: '河南'},
  {name: '瀍河回族区', value: randomData(), code: '410304', pcode: '410000', pname: '河南'},
  {name: '涧西区', value: randomData(), code: '410305', pcode: '410000', pname: '河南'},
  {name: '吉利区', value: randomData(), code: '410306', pcode: '410000', pname: '河南'},
  {name: '洛龙区', value: randomData(), code: '410311', pcode: '410000', pname: '河南'},
  {name: '孟津县', value: randomData(), code: '410322', pcode: '410000', pname: '河南'},
  {name: '新安县', value: randomData(), code: '410323', pcode: '410000', pname: '河南'},
  {name: '栾川县', value: randomData(), code: '410324', pcode: '410000', pname: '河南'},
  {name: '嵩县', value: randomData(), code: '410325', pcode: '410000', pname: '河南'},
  {name: '汝阳县', value: randomData(), code: '410326', pcode: '410000', pname: '河南'},
  {name: '宜阳县', value: randomData(), code: '410327', pcode: '410000', pname: '河南'},
  {name: '洛宁县', value: randomData(), code: '410328', pcode: '410000', pname: '河南'},
  {name: '伊川县', value: randomData(), code: '410329', pcode: '410000', pname: '河南'},
  {name: '偃师市', value: randomData(), code: '410381', pcode: '410000', pname: '河南'},
  {name: '济源市', value: randomData(), code: '419001', pcode: '410000', pname: '河南'},
  {name: '源汇区', value: randomData(), code: '411102', pcode: '410000', pname: '河南'},
  {name: '郾城区', value: randomData(), code: '411103', pcode: '410000', pname: '河南'},
  {name: '召陵区', value: randomData(), code: '411104', pcode: '410000', pname: '河南'},
  {name: '舞阳县', value: randomData(), code: '411121', pcode: '410000', pname: '河南'},
  {name: '临颍县', value: randomData(), code: '411122', pcode: '410000', pname: '河南'},
  {name: '华龙区', value: randomData(), code: '410902', pcode: '410000', pname: '河南'},
  {name: '清丰县', value: randomData(), code: '410922', pcode: '410000', pname: '河南'},
  {name: '南乐县', value: randomData(), code: '410923', pcode: '410000', pname: '河南'},
  {name: '范县', value: randomData(), code: '410926', pcode: '410000', pname: '河南'},
  {name: '台前县', value: randomData(), code: '410927', pcode: '410000', pname: '河南'},
  {name: '濮阳县', value: randomData(), code: '410928', pcode: '410000', pname: '河南'},
  {name: '解放区', value: randomData(), code: '410802', pcode: '410000', pname: '河南'},
  {name: '中站区', value: randomData(), code: '410803', pcode: '410000', pname: '河南'},
  {name: '马村区', value: randomData(), code: '410804', pcode: '410000', pname: '河南'},
  {name: '山阳区', value: randomData(), code: '410811', pcode: '410000', pname: '河南'},
  {name: '修武县', value: randomData(), code: '410821', pcode: '410000', pname: '河南'},
  {name: '博爱县', value: randomData(), code: '410822', pcode: '410000', pname: '河南'},
  {name: '武陟县', value: randomData(), code: '410823', pcode: '410000', pname: '河南'},
  {name: '温县', value: randomData(), code: '410825', pcode: '410000', pname: '河南'},
  {name: '沁阳市', value: randomData(), code: '410882', pcode: '410000', pname: '河南'},
  {name: '孟州市', value: randomData(), code: '410883', pcode: '410000', pname: '河南'},
  {name: '魏都区', value: randomData(), code: '411002', pcode: '410000', pname: '河南'},
  {name: '建安区', value: randomData(), code: '411003', pcode: '410000', pname: '河南'},
  {name: '鄢陵县', value: randomData(), code: '411024', pcode: '410000', pname: '河南'},
  {name: '襄城县', value: randomData(), code: '411025', pcode: '410000', pname: '河南'},
  {name: '禹州市', value: randomData(), code: '411081', pcode: '410000', pname: '河南'},
  {name: '长葛市', value: randomData(), code: '411082', pcode: '410000', pname: '河南'},
  {name: '中原区', value: randomData(), code: '410102', pcode: '410000', pname: '河南'},
  {name: '二七区', value: randomData(), code: '410103', pcode: '410000', pname: '河南'},
  {name: '管城回族区', value: randomData(), code: '410104', pcode: '410000', pname: '河南'},
  {name: '金水区', value: randomData(), code: '410105', pcode: '410000', pname: '河南'},
  {name: '上街区', value: randomData(), code: '410106', pcode: '410000', pname: '河南'},
  {name: '惠济区', value: randomData(), code: '410108', pcode: '410000', pname: '河南'},
  {name: '中牟县', value: randomData(), code: '410122', pcode: '410000', pname: '河南'},
  {name: '巩义市', value: randomData(), code: '410181', pcode: '410000', pname: '河南'},
  {name: '荥阳市', value: randomData(), code: '410182', pcode: '410000', pname: '河南'},
  {name: '新密市', value: randomData(), code: '410183', pcode: '410000', pname: '河南'},
  {name: '新郑市', value: randomData(), code: '410184', pcode: '410000', pname: '河南'},
  {name: '登封市', value: randomData(), code: '410185', pcode: '410000', pname: '河南'},
  {name: '驿城区', value: randomData(), code: '411702', pcode: '410000', pname: '河南'},
  {name: '西平县', value: randomData(), code: '411721', pcode: '410000', pname: '河南'},
  {name: '上蔡县', value: randomData(), code: '411722', pcode: '410000', pname: '河南'},
  {name: '平舆县', value: randomData(), code: '411723', pcode: '410000', pname: '河南'},
  {name: '正阳县', value: randomData(), code: '411724', pcode: '410000', pname: '河南'},
  {name: '确山县', value: randomData(), code: '411725', pcode: '410000', pname: '河南'},
  {name: '泌阳县', value: randomData(), code: '411726', pcode: '410000', pname: '河南'},
  {name: '汝南县', value: randomData(), code: '411727', pcode: '410000', pname: '河南'},
  {name: '遂平县', value: randomData(), code: '411728', pcode: '410000', pname: '河南'},
  {name: '新蔡县', value: randomData(), code: '411729', pcode: '410000', pname: '河南'},
  {name: '鹤山区', value: randomData(), code: '410602', pcode: '410000', pname: '河南'},
  {name: '山城区', value: randomData(), code: '410603', pcode: '410000', pname: '河南'},
  {name: '淇滨区', value: randomData(), code: '410611', pcode: '410000', pname: '河南'},
  {name: '浚县', value: randomData(), code: '410621', pcode: '410000', pname: '河南'},
  {name: '淇县', value: randomData(), code: '410622', pcode: '410000', pname: '河南'},
  // 江苏
  {name: '南京市', value: randomData(), code: '320100', pcode: '100000', pname: '中国'},
  {name: '无锡市', value: randomData(), code: '320200', pcode: '100000', pname: '中国'},
  {name: '徐州市', value: randomData(), code: '320300', pcode: '100000', pname: '中国'},
  {name: '常州市', value: randomData(), code: '320400', pcode: '100000', pname: '中国'},
  {name: '苏州市', value: randomData(), code: '320500', pcode: '100000', pname: '中国'},
  {name: '南通市', value: randomData(), code: '320600', pcode: '100000', pname: '中国'},
  {name: '连云港市', value: randomData(), code: '320700', pcode: '100000', pname: '中国'},
  {name: '淮安市', value: randomData(), code: '320800', pcode: '100000', pname: '中国'},
  {name: '盐城市', value: randomData(), code: '320900', pcode: '100000', pname: '中国'},
  {name: '扬州市', value: randomData(), code: '321000', pcode: '100000', pname: '中国'},
  {name: '镇江市', value: randomData(), code: '321100', pcode: '100000', pname: '中国'},
  {name: '泰州市', value: randomData(), code: '321200', pcode: '100000', pname: '中国'},
  {name: '宿迁市', value: randomData(), code: '321300', pcode: '100000', pname: '中国'},
  // 江苏各个区域
  {name: '玄武区', value: randomData(), code: '320102', pcode: '320000', pname: '江苏'},
  {name: '秦淮区', value: randomData(), code: '320104', pcode: '320000', pname: '江苏'},
  {name: '建邺区', value: randomData(), code: '320105', pcode: '320000', pname: '江苏'},
  {name: '鼓楼区', value: randomData(), code: '320106', pcode: '320000', pname: '江苏'},
  {name: '浦口区', value: randomData(), code: '320111', pcode: '320000', pname: '江苏'},
  {name: '栖霞区', value: randomData(), code: '320113', pcode: '320000', pname: '江苏'},
  {name: '雨花台区', value: randomData(), code: '320114', pcode: '320000', pname: '江苏'},
  {name: '江宁区', value: randomData(), code: '320115', pcode: '320000', pname: '江苏'},
  {name: '六合区', value: randomData(), code: '320116', pcode: '320000', pname: '江苏'},
  {name: '溧水区', value: randomData(), code: '320117', pcode: '320000', pname: '江苏'},
  {name: '高淳区', value: randomData(), code: '320118', pcode: '320000', pname: '江苏'},
  {name: '崇川区', value: randomData(), code: '320602', pcode: '320000', pname: '江苏'},
  {name: '港闸区', value: randomData(), code: '320611', pcode: '320000', pname: '江苏'},
  {name: '通州区', value: randomData(), code: '320612', pcode: '320000', pname: '江苏'},
  {name: '如东县', value: randomData(), code: '320623', pcode: '320000', pname: '江苏'},
  {name: '启东市', value: randomData(), code: '320681', pcode: '320000', pname: '江苏'},
  {name: '如皋市', value: randomData(), code: '320682', pcode: '320000', pname: '江苏'},
  {name: '海门市', value: randomData(), code: '320684', pcode: '320000', pname: '江苏'},
  {name: '海安市', value: randomData(), code: '320685', pcode: '320000', pname: '江苏'},
  {name: '宿城区', value: randomData(), code: '321302', pcode: '320000', pname: '江苏'},
  {name: '宿豫区', value: randomData(), code: '321311', pcode: '320000', pname: '江苏'},
  {name: '沭阳县', value: randomData(), code: '321322', pcode: '320000', pname: '江苏'},
  {name: '泗阳县', value: randomData(), code: '321323', pcode: '320000', pname: '江苏'},
  {name: '泗洪县', value: randomData(), code: '321324', pcode: '320000', pname: '江苏'},
  {name: '天宁区', value: randomData(), code: '320402', pcode: '320000', pname: '江苏'},
  {name: '钟楼区', value: randomData(), code: '320404', pcode: '320000', pname: '江苏'},
  {name: '新北区', value: randomData(), code: '320411', pcode: '320000', pname: '江苏'},
  {name: '武进区', value: randomData(), code: '320412', pcode: '320000', pname: '江苏'},
  {name: '金坛区', value: randomData(), code: '320413', pcode: '320000', pname: '江苏'},
  {name: '溧阳市', value: randomData(), code: '320481', pcode: '320000', pname: '江苏'},
  {name: '鼓楼区', value: randomData(), code: '320302', pcode: '320000', pname: '江苏'},
  {name: '云龙区', value: randomData(), code: '320303', pcode: '320000', pname: '江苏'},
  {name: '贾汪区', value: randomData(), code: '320305', pcode: '320000', pname: '江苏'},
  {name: '泉山区', value: randomData(), code: '320311', pcode: '320000', pname: '江苏'},
  {name: '铜山区', value: randomData(), code: '320312', pcode: '320000', pname: '江苏'},
  {name: '丰县', value: randomData(), code: '320321', pcode: '320000', pname: '江苏'},
  {name: '沛县', value: randomData(), code: '320322', pcode: '320000', pname: '江苏'},
  {name: '睢宁县', value: randomData(), code: '320324', pcode: '320000', pname: '江苏'},
  {name: '新沂市', value: randomData(), code: '320381', pcode: '320000', pname: '江苏'},
  {name: '邳州市', value: randomData(), code: '320382', pcode: '320000', pname: '江苏'},
  {name: '广陵区', value: randomData(), code: '321002', pcode: '320000', pname: '江苏'},
  {name: '邗江区', value: randomData(), code: '321003', pcode: '320000', pname: '江苏'},
  {name: '江都区', value: randomData(), code: '321012', pcode: '320000', pname: '江苏'},
  {name: '宝应县', value: randomData(), code: '321023', pcode: '320000', pname: '江苏'},
  {name: '仪征市', value: randomData(), code: '321081', pcode: '320000', pname: '江苏'},
  {name: '高邮市', value: randomData(), code: '321084', pcode: '320000', pname: '江苏'},
  {name: '锡山区', value: randomData(), code: '320205', pcode: '320000', pname: '江苏'},
  {name: '惠山区', value: randomData(), code: '320206', pcode: '320000', pname: '江苏'},
  {name: '滨湖区', value: randomData(), code: '320211', pcode: '320000', pname: '江苏'},
  {name: '梁溪区', value: randomData(), code: '320213', pcode: '320000', pname: '江苏'},
  {name: '新吴区', value: randomData(), code: '320214', pcode: '320000', pname: '江苏'},
  {name: '江阴市', value: randomData(), code: '320281', pcode: '320000', pname: '江苏'},
  {name: '宜兴市', value: randomData(), code: '320282', pcode: '320000', pname: '江苏'},
  {name: '海陵区', value: randomData(), code: '321202', pcode: '320000', pname: '江苏'},
  {name: '高港区', value: randomData(), code: '321203', pcode: '320000', pname: '江苏'},
  {name: '姜堰区', value: randomData(), code: '321204', pcode: '320000', pname: '江苏'},
  {name: '兴化市', value: randomData(), code: '321281', pcode: '320000', pname: '江苏'},
  {name: '靖江市', value: randomData(), code: '321282', pcode: '320000', pname: '江苏'},
  {name: '泰兴市', value: randomData(), code: '321283', pcode: '320000', pname: '江苏'},
  {name: '淮安区', value: randomData(), code: '320803', pcode: '320000', pname: '江苏'},
  {name: '淮阴区', value: randomData(), code: '320804', pcode: '320000', pname: '江苏'},
  {name: '清江浦区', value: randomData(), code: '320812', pcode: '320000', pname: '江苏'},
  {name: '洪泽区', value: randomData(), code: '320813', pcode: '320000', pname: '江苏'},
  {name: '涟水县', value: randomData(), code: '320826', pcode: '320000', pname: '江苏'},
  {name: '盱眙县', value: randomData(), code: '320830', pcode: '320000', pname: '江苏'},
  {name: '金湖县', value: randomData(), code: '320831', pcode: '320000', pname: '江苏'},
  {name: '亭湖区', value: randomData(), code: '320902', pcode: '320000', pname: '江苏'},
  {name: '盐都区', value: randomData(), code: '320903', pcode: '320000', pname: '江苏'},
  {name: '大丰区', value: randomData(), code: '320904', pcode: '320000', pname: '江苏'},
  {name: '响水县', value: randomData(), code: '320921', pcode: '320000', pname: '江苏'},
  {name: '滨海县', value: randomData(), code: '320922', pcode: '320000', pname: '江苏'},
  {name: '阜宁县', value: randomData(), code: '320923', pcode: '320000', pname: '江苏'},
  {name: '射阳县', value: randomData(), code: '320924', pcode: '320000', pname: '江苏'},
  {name: '建湖县', value: randomData(), code: '320925', pcode: '320000', pname: '江苏'},
  {name: '东台市', value: randomData(), code: '320981', pcode: '320000', pname: '江苏'},
  {name: '虎丘区', value: randomData(), code: '320505', pcode: '320000', pname: '江苏'},
  {name: '吴中区', value: randomData(), code: '320506', pcode: '320000', pname: '江苏'},
  {name: '相城区', value: randomData(), code: '320507', pcode: '320000', pname: '江苏'},
  {name: '姑苏区', value: randomData(), code: '320508', pcode: '320000', pname: '江苏'},
  {name: '吴江区', value: randomData(), code: '320509', pcode: '320000', pname: '江苏'},
  {name: '苏州工业园区', value: randomData(), code: '320571', pcode: '320000', pname: '江苏'},
  {name: '常熟市', value: randomData(), code: '320581', pcode: '320000', pname: '江苏'},
  {name: '张家港市', value: randomData(), code: '320582', pcode: '320000', pname: '江苏'},
  {name: '昆山市', value: randomData(), code: '320583', pcode: '320000', pname: '江苏'},
  {name: '太仓市', value: randomData(), code: '320585', pcode: '320000', pname: '江苏'},
  {name: '连云区', value: randomData(), code: '320703', pcode: '320000', pname: '江苏'},
  {name: '海州区', value: randomData(), code: '320706', pcode: '320000', pname: '江苏'},
  {name: '赣榆区', value: randomData(), code: '320707', pcode: '320000', pname: '江苏'},
  {name: '东海县', value: randomData(), code: '320722', pcode: '320000', pname: '江苏'},
  {name: '灌云县', value: randomData(), code: '320723', pcode: '320000', pname: '江苏'},
  {name: '灌南县', value: randomData(), code: '320724', pcode: '320000', pname: '江苏'},
  {name: '京口区', value: randomData(), code: '321102', pcode: '320000', pname: '江苏'},
  {name: '润州区', value: randomData(), code: '321111', pcode: '320000', pname: '江苏'},
  {name: '丹徒区', value: randomData(), code: '321112', pcode: '320000', pname: '江苏'},
  {name: '丹阳市', value: randomData(), code: '321181', pcode: '320000', pname: '江苏'},
  {name: '扬中市', value: randomData(), code: '321182', pcode: '320000', pname: '江苏'},
  {name: '句容市', value: randomData(), code: '321183', pcode: '320000', pname: '江苏'},

  // 安徽
  {name: '合肥市', value: randomData(), code: '340100', pcode: '100000', pname: '中国'},
  {name: '芜湖市', value: randomData(), code: '340200', pcode: '100000', pname: '中国'},
  {name: '蚌埠市', value: randomData(), code: '340300', pcode: '100000', pname: '中国'},
  {name: '淮南市', value: randomData(), code: '340400', pcode: '100000', pname: '中国'},
  {name: '马鞍山市', value: randomData(), code: '340500', pcode: '100000', pname: '中国'},
  {name: '淮北市', value: randomData(), code: '340600', pcode: '100000', pname: '中国'},
  {name: '铜陵市', value: randomData(), code: '340700', pcode: '100000', pname: '中国'},
  {name: '安庆市', value: randomData(), code: '340800', pcode: '100000', pname: '中国'},
  {name: '黄山市', value: randomData(), code: '341000', pcode: '100000', pname: '中国'},
  {name: '滁州市', value: randomData(), code: '341100', pcode: '100000', pname: '中国'},
  {name: '阜阳市', value: randomData(), code: '341200', pcode: '100000', pname: '中国'},
  {name: '宿州市', value: randomData(), code: '341300', pcode: '100000', pname: '中国'},
  {name: '六安市', value: randomData(), code: '341500', pcode: '100000', pname: '中国'},
  {name: '亳州市', value: randomData(), code: '341600', pcode: '100000', pname: '中国'},
  {name: '池州市', value: randomData(), code: '341700', pcode: '100000', pname: '中国'},
  {name: '宣城市', value: randomData(), code: '341800', pcode: '100000', pname: '中国'},
  // 安徽各个区域
  {name: '谯城区', value: randomData(), code: '341602', pcode: '340000', pname: '安徽'},
  {name: '涡阳县', value: randomData(), code: '341621', pcode: '340000', pname: '安徽'},
  {name: '蒙城县', value: randomData(), code: '341622', pcode: '340000', pname: '安徽'},
  {name: '利辛县', value: randomData(), code: '341623', pcode: '340000', pname: '安徽'},
  {name: '金安区', value: randomData(), code: '341502', pcode: '340000', pname: '安徽'},
  {name: '裕安区', value: randomData(), code: '341503', pcode: '340000', pname: '安徽'},
  {name: '叶集区', value: randomData(), code: '341504', pcode: '340000', pname: '安徽'},
  {name: '霍邱县', value: randomData(), code: '341522', pcode: '340000', pname: '安徽'},
  {name: '舒城县', value: randomData(), code: '341523', pcode: '340000', pname: '安徽'},
  {name: '金寨县', value: randomData(), code: '341524', pcode: '340000', pname: '安徽'},
  {name: '霍山县', value: randomData(), code: '341525', pcode: '340000', pname: '安徽'},
  {name: '瑶海区', value: randomData(), code: '340102', pcode: '340000', pname: '安徽'},
  {name: '庐阳区', value: randomData(), code: '340103', pcode: '340000', pname: '安徽'},
  {name: '蜀山区', value: randomData(), code: '340104', pcode: '340000', pname: '安徽'},
  {name: '包河区', value: randomData(), code: '340111', pcode: '340000', pname: '安徽'},
  {name: '长丰县', value: randomData(), code: '340121', pcode: '340000', pname: '安徽'},
  {name: '肥东县', value: randomData(), code: '340122', pcode: '340000', pname: '安徽'},
  {name: '肥西县', value: randomData(), code: '340123', pcode: '340000', pname: '安徽'},
  {name: '庐江县', value: randomData(), code: '340124', pcode: '340000', pname: '安徽'},
  {name: '巢湖市', value: randomData(), code: '340181', pcode: '340000', pname: '安徽'},
  {name: '迎江区', value: randomData(), code: '340802', pcode: '340000', pname: '安徽'},
  {name: '大观区', value: randomData(), code: '340803', pcode: '340000', pname: '安徽'},
  {name: '宜秀区', value: randomData(), code: '340811', pcode: '340000', pname: '安徽'},
  {name: '怀宁县', value: randomData(), code: '340822', pcode: '340000', pname: '安徽'},
  {name: '太湖县', value: randomData(), code: '340825', pcode: '340000', pname: '安徽'},
  {name: '宿松县', value: randomData(), code: '340826', pcode: '340000', pname: '安徽'},
  {name: '望江县', value: randomData(), code: '340827', pcode: '340000', pname: '安徽'},
  {name: '岳西县', value: randomData(), code: '340828', pcode: '340000', pname: '安徽'},
  {name: '桐城市', value: randomData(), code: '340881', pcode: '340000', pname: '安徽'},
  {name: '潜山市', value: randomData(), code: '340882', pcode: '340000', pname: '安徽'},
  {name: '宣州区', value: randomData(), code: '341802', pcode: '340000', pname: '安徽'},
  {name: '郎溪县', value: randomData(), code: '341821', pcode: '340000', pname: '安徽'},
  {name: '广德市', value: randomData(), code: '341822', pcode: '340000', pname: '安徽'},
  {name: '泾县', value: randomData(), code: '341823', pcode: '340000', pname: '安徽'},
  {name: '绩溪县', value: randomData(), code: '341824', pcode: '340000', pname: '安徽'},
  {name: '旌德县', value: randomData(), code: '341825', pcode: '340000', pname: '安徽'},
  {name: '宁国市', value: randomData(), code: '341881', pcode: '340000', pname: '安徽'},
  {name: '埇桥区', value: randomData(), code: '341302', pcode: '340000', pname: '安徽'},
  {name: '砀山县', value: randomData(), code: '341321', pcode: '340000', pname: '安徽'},
  {name: '萧县', value: randomData(), code: '341322', pcode: '340000', pname: '安徽'},
  {name: '灵璧县', value: randomData(), code: '341323', pcode: '340000', pname: '安徽'},
  {name: '泗县', value: randomData(), code: '341324', pcode: '340000', pname: '安徽'},
  {name: '贵池区', value: randomData(), code: '341702', pcode: '340000', pname: '安徽'},
  {name: '东至县', value: randomData(), code: '341721', pcode: '340000', pname: '安徽'},
  {name: '石台县', value: randomData(), code: '341722', pcode: '340000', pname: '安徽'},
  {name: '青阳县', value: randomData(), code: '341723', pcode: '340000', pname: '安徽'},
  {name: '淮北市', value: randomData(), code: '340600', pcode: '340000', pname: '安徽'},
  {name: '大通区', value: randomData(), code: '340402', pcode: '340000', pname: '安徽'},
  {name: '田家庵区', value: randomData(), code: '340403', pcode: '340000', pname: '安徽'},
  {name: '谢家集区', value: randomData(), code: '340404', pcode: '340000', pname: '安徽'},
  {name: '八公山区', value: randomData(), code: '340405', pcode: '340000', pname: '安徽'},
  {name: '潘集区', value: randomData(), code: '340406', pcode: '340000', pname: '安徽'},
  {name: '凤台县', value: randomData(), code: '340421', pcode: '340000', pname: '安徽'},
  {name: '寿县', value: randomData(), code: '340422', pcode: '340000', pname: '安徽'},
  {name: '琅琊区', value: randomData(), code: '341102', pcode: '340000', pname: '安徽'},
  {name: '南谯区', value: randomData(), code: '341103', pcode: '340000', pname: '安徽'},
  {name: '来安县', value: randomData(), code: '341122', pcode: '340000', pname: '安徽'},
  {name: '全椒县', value: randomData(), code: '341124', pcode: '340000', pname: '安徽'},
  {name: '定远县', value: randomData(), code: '341125', pcode: '340000', pname: '安徽'},
  {name: '凤阳县', value: randomData(), code: '341126', pcode: '340000', pname: '安徽'},
  {name: '天长市', value: randomData(), code: '341181', pcode: '340000', pname: '安徽'},
  {name: '明光市', value: randomData(), code: '341182', pcode: '340000', pname: '安徽'},
  {name: '镜湖区', value: randomData(), code: '340202', pcode: '340000', pname: '安徽'},
  {name: '弋江区', value: randomData(), code: '340203', pcode: '340000', pname: '安徽'},
  {name: '鸠江区', value: randomData(), code: '340207', pcode: '340000', pname: '安徽'},
  {name: '三山区', value: randomData(), code: '340208', pcode: '340000', pname: '安徽'},
  {name: '芜湖县', value: randomData(), code: '340221', pcode: '340000', pname: '安徽'},
  {name: '繁昌县', value: randomData(), code: '340222', pcode: '340000', pname: '安徽'},
  {name: '南陵县', value: randomData(), code: '340223', pcode: '340000', pname: '安徽'},
  {name: '无为县', value: randomData(), code: '340225', pcode: '340000', pname: '安徽'},
  {name: '龙子湖区', value: randomData(), code: '340302', pcode: '340000', pname: '安徽'},
  {name: '蚌山区', value: randomData(), code: '340303', pcode: '340000', pname: '安徽'},
  {name: '禹会区', value: randomData(), code: '340304', pcode: '340000', pname: '安徽'},
  {name: '淮上区', value: randomData(), code: '340311', pcode: '340000', pname: '安徽'},
  {name: '怀远县', value: randomData(), code: '340321', pcode: '340000', pname: '安徽'},
  {name: '五河县', value: randomData(), code: '340322', pcode: '340000', pname: '安徽'},
  {name: '固镇县', value: randomData(), code: '340323', pcode: '340000', pname: '安徽'},
  {name: '铜官区', value: randomData(), code: '340705', pcode: '340000', pname: '安徽'},
  {name: '义安区', value: randomData(), code: '340706', pcode: '340000', pname: '安徽'},
  {name: '郊区', value: randomData(), code: '340711', pcode: '340000', pname: '安徽'},
  {name: '枞阳县', value: randomData(), code: '340722', pcode: '340000', pname: '安徽'},
  {name: '颍州区', value: randomData(), code: '341202', pcode: '340000', pname: '安徽'},
  {name: '颍东区', value: randomData(), code: '341203', pcode: '340000', pname: '安徽'},
  {name: '颍泉区', value: randomData(), code: '341204', pcode: '340000', pname: '安徽'},
  {name: '临泉县', value: randomData(), code: '341221', pcode: '340000', pname: '安徽'},
  {name: '太和县', value: randomData(), code: '341222', pcode: '340000', pname: '安徽'},
  {name: '阜南县', value: randomData(), code: '341225', pcode: '340000', pname: '安徽'},
  {name: '颍上县', value: randomData(), code: '341226', pcode: '340000', pname: '安徽'},
  {name: '界首市', value: randomData(), code: '341282', pcode: '340000', pname: '安徽'},
  {name: '花山区', value: randomData(), code: '340503', pcode: '340000', pname: '安徽'},
  {name: '雨山区', value: randomData(), code: '340504', pcode: '340000', pname: '安徽'},
  {name: '博望区', value: randomData(), code: '340506', pcode: '340000', pname: '安徽'},
  {name: '当涂县', value: randomData(), code: '340521', pcode: '340000', pname: '安徽'},
  {name: '含山县', value: randomData(), code: '340522', pcode: '340000', pname: '安徽'},
  {name: '和县', value: randomData(), code: '340523', pcode: '340000', pname: '安徽'},
  {name: '屯溪区', value: randomData(), code: '341002', pcode: '340000', pname: '安徽'},
  {name: '黄山区', value: randomData(), code: '341003', pcode: '340000', pname: '安徽'},
  {name: '徽州区', value: randomData(), code: '341004', pcode: '340000', pname: '安徽'},
  {name: '歙县', value: randomData(), code: '341021', pcode: '340000', pname: '安徽'},
  {name: '休宁县', value: randomData(), code: '341022', pcode: '340000', pname: '安徽'},
  {name: '黟县', value: randomData(), code: '341023', pcode: '340000', pname: '安徽'},
  {name: '祁门县', value: randomData(), code: '341024', pcode: '340000', pname: '安徽'},

  // 浙江
  {name: '杭州市', value: randomData(), code: '330100', pcode: '100000', pname: '中国'},
  {name: '宁波市', value: randomData(), code: '330200', pcode: '100000', pname: '中国'},
  {name: '温州市', value: randomData(), code: '330300', pcode: '100000', pname: '中国'},
  {name: '嘉兴市', value: randomData(), code: '330400', pcode: '100000', pname: '中国'},
  {name: '湖州市', value: randomData(), code: '330500', pcode: '100000', pname: '中国'},
  {name: '绍兴市', value: randomData(), code: '330600', pcode: '100000', pname: '中国'},
  {name: '金华市', value: randomData(), code: '330700', pcode: '100000', pname: '中国'},
  {name: '衢州市', value: randomData(), code: '330800', pcode: '100000', pname: '中国'},
  {name: '舟山市', value: randomData(), code: '330900', pcode: '100000', pname: '中国'},
  {name: '台州市', value: randomData(), code: '331000', pcode: '100000', pname: '中国'},
  {name: '丽水市', value: randomData(), code: '331100', pcode: '100000', pname: '中国'},
  // 浙江各个区域
  {name: '江山市', value: randomData(), code: '330881', pcode: '330000', pname: '浙江'},
  {name: '常山县', value: randomData(), code: '330822', pcode: '330000', pname: '浙江'},
  {name: '开化县', value: randomData(), code: '330824', pcode: '330000', pname: '浙江'},
  {name: '柯城区', value: randomData(), code: '330802', pcode: '330000', pname: '浙江'},
  {name: '龙游县', value: randomData(), code: '330825', pcode: '330000', pname: '浙江'},
  {name: '衢江区', value: randomData(), code: '330803', pcode: '330000', pname: '浙江'},
  {name: '莲都区', value: randomData(), code: '331102', pcode: '330000', pname: '浙江'},
  {name: '青田县', value: randomData(), code: '331121', pcode: '330000', pname: '浙江'},
  {name: '缙云县', value: randomData(), code: '331122', pcode: '330000', pname: '浙江'},
  {name: '遂昌县', value: randomData(), code: '331123', pcode: '330000', pname: '浙江'},
  {name: '松阳县', value: randomData(), code: '331124', pcode: '330000', pname: '浙江'},
  {name: '云和县', value: randomData(), code: '331125', pcode: '330000', pname: '浙江'},
  {name: '庆元县', value: randomData(), code: '331126', pcode: '330000', pname: '浙江'},
  {name: '景宁畲族自治县', value: randomData(), code: '331127', pcode: '330000', pname: '浙江'},
  {name: '龙泉市', value: randomData(), code: '331181', pcode: '330000', pname: '浙江'},
  {name: '椒江区', value: randomData(), code: '331002', pcode: '330000', pname: '浙江'},
  {name: '黄岩区', value: randomData(), code: '331003', pcode: '330000', pname: '浙江'},
  {name: '路桥区', value: randomData(), code: '331004', pcode: '330000', pname: '浙江'},
  {name: '三门县', value: randomData(), code: '331022', pcode: '330000', pname: '浙江'},
  {name: '天台县', value: randomData(), code: '331023', pcode: '330000', pname: '浙江'},
  {name: '仙居县', value: randomData(), code: '331024', pcode: '330000', pname: '浙江'},
  {name: '温岭市', value: randomData(), code: '331081', pcode: '330000', pname: '浙江'},
  {name: '临海市', value: randomData(), code: '331082', pcode: '330000', pname: '浙江'},
  {name: '玉环市', value: randomData(), code: '331083', pcode: '330000', pname: '浙江'},
  {name: '南湖区', value: randomData(), code: '330402', pcode: '330000', pname: '浙江'},
  {name: '秀洲区', value: randomData(), code: '330411', pcode: '330000', pname: '浙江'},
  {name: '嘉善县', value: randomData(), code: '330421', pcode: '330000', pname: '浙江'},
  {name: '海盐县', value: randomData(), code: '330424', pcode: '330000', pname: '浙江'},
  {name: '海宁市', value: randomData(), code: '330481', pcode: '330000', pname: '浙江'},
  {name: '平湖市', value: randomData(), code: '330482', pcode: '330000', pname: '浙江'},
  {name: '桐乡市', value: randomData(), code: '330483', pcode: '330000', pname: '浙江'},
  {name: '海曙区', value: randomData(), code: '330203', pcode: '330000', pname: '浙江'},
  {name: '江北区', value: randomData(), code: '330205', pcode: '330000', pname: '浙江'},
  {name: '北仑区', value: randomData(), code: '330206', pcode: '330000', pname: '浙江'},
  {name: '镇海区', value: randomData(), code: '330211', pcode: '330000', pname: '浙江'},
  {name: '鄞州区', value: randomData(), code: '330212', pcode: '330000', pname: '浙江'},
  {name: '奉化区', value: randomData(), code: '330213', pcode: '330000', pname: '浙江'},
  {name: '象山县', value: randomData(), code: '330225', pcode: '330000', pname: '浙江'},
  {name: '宁海县', value: randomData(), code: '330226', pcode: '330000', pname: '浙江'},
  {name: '余姚市', value: randomData(), code: '330281', pcode: '330000', pname: '浙江'},
  {name: '慈溪市', value: randomData(), code: '330282', pcode: '330000', pname: '浙江'},
  {name: '上城区', value: randomData(), code: '330102', pcode: '330000', pname: '浙江'},
  {name: '下城区', value: randomData(), code: '330103', pcode: '330000', pname: '浙江'},
  {name: '江干区', value: randomData(), code: '330104', pcode: '330000', pname: '浙江'},
  {name: '拱墅区', value: randomData(), code: '330105', pcode: '330000', pname: '浙江'},
  {name: '西湖区', value: randomData(), code: '330106', pcode: '330000', pname: '浙江'},
  {name: '滨江区', value: randomData(), code: '330108', pcode: '330000', pname: '浙江'},
  {name: '萧山区', value: randomData(), code: '330109', pcode: '330000', pname: '浙江'},
  {name: '余杭区', value: randomData(), code: '330110', pcode: '330000', pname: '浙江'},
  {name: '富阳区', value: randomData(), code: '330111', pcode: '330000', pname: '浙江'},
  {name: '临安区', value: randomData(), code: '330112', pcode: '330000', pname: '浙江'},
  {name: '桐庐县', value: randomData(), code: '330122', pcode: '330000', pname: '浙江'},
  {name: '淳安县', value: randomData(), code: '330127', pcode: '330000', pname: '浙江'},
  {name: '建德市', value: randomData(), code: '330182', pcode: '330000', pname: '浙江'},
  {name: '鹿城区', value: randomData(), code: '330302', pcode: '330000', pname: '浙江'},
  {name: '龙湾区', value: randomData(), code: '330303', pcode: '330000', pname: '浙江'},
  {name: '瓯海区', value: randomData(), code: '330304', pcode: '330000', pname: '浙江'},
  {name: '洞头区', value: randomData(), code: '330305', pcode: '330000', pname: '浙江'},
  {name: '永嘉县', value: randomData(), code: '330324', pcode: '330000', pname: '浙江'},
  {name: '平阳县', value: randomData(), code: '330326', pcode: '330000', pname: '浙江'},
  {name: '苍南县', value: randomData(), code: '330327', pcode: '330000', pname: '浙江'},
  {name: '文成县', value: randomData(), code: '330328', pcode: '330000', pname: '浙江'},
  {name: '泰顺县', value: randomData(), code: '330329', pcode: '330000', pname: '浙江'},
  {name: '瑞安市', value: randomData(), code: '330381', pcode: '330000', pname: '浙江'},
  {name: '乐清市', value: randomData(), code: '330382', pcode: '330000', pname: '浙江'},
  {name: '龙港市', value: randomData(), code: '330383', pcode: '330000', pname: '浙江'},
  {name: '吴兴区', value: randomData(), code: '330502', pcode: '330000', pname: '浙江'},
  {name: '南浔区', value: randomData(), code: '330503', pcode: '330000', pname: '浙江'},
  {name: '德清县', value: randomData(), code: '330521', pcode: '330000', pname: '浙江'},
  {name: '长兴县', value: randomData(), code: '330522', pcode: '330000', pname: '浙江'},
  {name: '安吉县', value: randomData(), code: '330523', pcode: '330000', pname: '浙江'},
  {name: '越城区', value: randomData(), code: '330602', pcode: '330000', pname: '浙江'},
  {name: '柯桥区', value: randomData(), code: '330603', pcode: '330000', pname: '浙江'},
  {name: '上虞区', value: randomData(), code: '330604', pcode: '330000', pname: '浙江'},
  {name: '新昌县', value: randomData(), code: '330624', pcode: '330000', pname: '浙江'},
  {name: '诸暨市', value: randomData(), code: '330681', pcode: '330000', pname: '浙江'},
  {name: '嵊州市', value: randomData(), code: '330683', pcode: '330000', pname: '浙江'},
  {name: '定海区', value: randomData(), code: '330902', pcode: '330000', pname: '浙江'},
  {name: '普陀区', value: randomData(), code: '330903', pcode: '330000', pname: '浙江'},
  {name: '岱山县', value: randomData(), code: '330921', pcode: '330000', pname: '浙江'},
  {name: '嵊泗县', value: randomData(), code: '330922', pcode: '330000', pname: '浙江'},
  {name: '衢州市', value: randomData(), code: '330800', pcode: '330000', pname: '浙江'},
  {name: '婺城区', value: randomData(), code: '330702', pcode: '330000', pname: '浙江'},
  {name: '金东区', value: randomData(), code: '330703', pcode: '330000', pname: '浙江'},
  {name: '武义县', value: randomData(), code: '330723', pcode: '330000', pname: '浙江'},
  {name: '浦江县', value: randomData(), code: '330726', pcode: '330000', pname: '浙江'},
  {name: '磐安县', value: randomData(), code: '330727', pcode: '330000', pname: '浙江'},
  {name: '兰溪市', value: randomData(), code: '330781', pcode: '330000', pname: '浙江'},
  {name: '义乌市', value: randomData(), code: '330782', pcode: '330000', pname: '浙江'},
  {name: '东阳市', value: randomData(), code: '330783', pcode: '330000', pname: '浙江'},
  {name: '永康市', value: randomData(), code: '330784', pcode: '330000', pname: '浙江'},

  // 江西
  {name: '南昌市', value: randomData(), code: '360100', pcode: '100000', pname: '中国'},
  {name: '景德镇市', value: randomData(), code: '360200', pcode: '100000', pname: '中国'},
  {name: '萍乡市', value: randomData(), code: '360300', pcode: '100000', pname: '中国'},
  {name: '九江市', value: randomData(), code: '360400', pcode: '100000', pname: '中国'},
  {name: '新余市', value: randomData(), code: '360500', pcode: '100000', pname: '中国'},
  {name: '鹰潭市', value: randomData(), code: '360600', pcode: '100000', pname: '中国'},
  {name: '赣州市', value: randomData(), code: '360700', pcode: '100000', pname: '中国'},
  {name: '吉安市', value: randomData(), code: '360800', pcode: '100000', pname: '中国'},
  {name: '宜春市', value: randomData(), code: '360900', pcode: '100000', pname: '中国'},
  {name: '抚州市', value: randomData(), code: '361000', pcode: '100000', pname: '中国'},
  {name: '上饶市', value: randomData(), code: '361100', pcode: '100000', pname: '中国'},
  // 江西各个区域
  {name: '信州区', value: randomData(), code: '361102', pcode: '360000', pname: '江西'},
  {name: '广丰区', value: randomData(), code: '361103', pcode: '360000', pname: '江西'},
  {name: '广信区', value: randomData(), code: '361121', pcode: '360000', pname: '江西'},
  {name: '玉山县', value: randomData(), code: '361123', pcode: '360000', pname: '江西'},
  {name: '铅山县', value: randomData(), code: '361124', pcode: '360000', pname: '江西'},
  {name: '横峰县', value: randomData(), code: '361125', pcode: '360000', pname: '江西'},
  {name: '弋阳县', value: randomData(), code: '361126', pcode: '360000', pname: '江西'},
  {name: '余干县', value: randomData(), code: '361127', pcode: '360000', pname: '江西'},
  {name: '鄱阳县', value: randomData(), code: '361128', pcode: '360000', pname: '江西'},
  {name: '万年县', value: randomData(), code: '361129', pcode: '360000', pname: '江西'},
  {name: '婺源县', value: randomData(), code: '361130', pcode: '360000', pname: '江西'},
  {name: '德兴市', value: randomData(), code: '361181', pcode: '360000', pname: '江西'},
  {name: '濂溪区', value: randomData(), code: '360402', pcode: '360000', pname: '江西'},
  {name: '浔阳区', value: randomData(), code: '360403', pcode: '360000', pname: '江西'},
  {name: '柴桑区', value: randomData(), code: '360404', pcode: '360000', pname: '江西'},
  {name: '武宁县', value: randomData(), code: '360423', pcode: '360000', pname: '江西'},
  {name: '修水县', value: randomData(), code: '360424', pcode: '360000', pname: '江西'},
  {name: '永修县', value: randomData(), code: '360425', pcode: '360000', pname: '江西'},
  {name: '德安县', value: randomData(), code: '360426', pcode: '360000', pname: '江西'},
  {name: '都昌县', value: randomData(), code: '360428', pcode: '360000', pname: '江西'},
  {name: '湖口县', value: randomData(), code: '360429', pcode: '360000', pname: '江西'},
  {name: '彭泽县', value: randomData(), code: '360430', pcode: '360000', pname: '江西'},
  {name: '瑞昌市', value: randomData(), code: '360481', pcode: '360000', pname: '江西'},
  {name: '共青城市', value: randomData(), code: '360482', pcode: '360000', pname: '江西'},
  {name: '庐山市', value: randomData(), code: '360483', pcode: '360000', pname: '江西'},
  {name: '东湖区', value: randomData(), code: '360102', pcode: '360000', pname: '江西'},
  {name: '西湖区', value: randomData(), code: '360103', pcode: '360000', pname: '江西'},
  {name: '青云谱区', value: randomData(), code: '360104', pcode: '360000', pname: '江西'},
  {name: '湾里区', value: randomData(), code: '360105', pcode: '360000', pname: '江西'},
  {name: '青山湖区', value: randomData(), code: '360111', pcode: '360000', pname: '江西'},
  {name: '新建区', value: randomData(), code: '360112', pcode: '360000', pname: '江西'},
  {name: '南昌县', value: randomData(), code: '360121', pcode: '360000', pname: '江西'},
  {name: '安义县', value: randomData(), code: '360123', pcode: '360000', pname: '江西'},
  {name: '进贤县', value: randomData(), code: '360124', pcode: '360000', pname: '江西'},
  {name: '吉州区', value: randomData(), code: '360802', pcode: '360000', pname: '江西'},
  {name: '青原区', value: randomData(), code: '360803', pcode: '360000', pname: '江西'},
  {name: '吉安县', value: randomData(), code: '360821', pcode: '360000', pname: '江西'},
  {name: '吉水县', value: randomData(), code: '360822', pcode: '360000', pname: '江西'},
  {name: '峡江县', value: randomData(), code: '360823', pcode: '360000', pname: '江西'},
  {name: '新干县', value: randomData(), code: '360824', pcode: '360000', pname: '江西'},
  {name: '永丰县', value: randomData(), code: '360825', pcode: '360000', pname: '江西'},
  {name: '泰和县', value: randomData(), code: '360826', pcode: '360000', pname: '江西'},
  {name: '遂川县', value: randomData(), code: '360827', pcode: '360000', pname: '江西'},
  {name: '万安县', value: randomData(), code: '360828', pcode: '360000', pname: '江西'},
  {name: '安福县', value: randomData(), code: '360829', pcode: '360000', pname: '江西'},
  {name: '永新县', value: randomData(), code: '360830', pcode: '360000', pname: '江西'},
  {name: '井冈山市', value: randomData(), code: '360881', pcode: '360000', pname: '江西'},
  {name: '袁州区', value: randomData(), code: '360902', pcode: '360000', pname: '江西'},
  {name: '奉新县', value: randomData(), code: '360921', pcode: '360000', pname: '江西'},
  {name: '万载县', value: randomData(), code: '360922', pcode: '360000', pname: '江西'},
  {name: '上高县', value: randomData(), code: '360923', pcode: '360000', pname: '江西'},
  {name: '宜丰县', value: randomData(), code: '360924', pcode: '360000', pname: '江西'},
  {name: '靖安县', value: randomData(), code: '360925', pcode: '360000', pname: '江西'},
  {name: '铜鼓县', value: randomData(), code: '360926', pcode: '360000', pname: '江西'},
  {name: '丰城市', value: randomData(), code: '360981', pcode: '360000', pname: '江西'},
  {name: '樟树市', value: randomData(), code: '360982', pcode: '360000', pname: '江西'},
  {name: '高安市', value: randomData(), code: '360983', pcode: '360000', pname: '江西'},
  {name: '临川区', value: randomData(), code: '361002', pcode: '360000', pname: '江西'},
  {name: '东乡区', value: randomData(), code: '361003', pcode: '360000', pname: '江西'},
  {name: '南城县', value: randomData(), code: '361021', pcode: '360000', pname: '江西'},
  {name: '黎川县', value: randomData(), code: '361022', pcode: '360000', pname: '江西'},
  {name: '南丰县', value: randomData(), code: '361023', pcode: '360000', pname: '江西'},
  {name: '崇仁县', value: randomData(), code: '361024', pcode: '360000', pname: '江西'},
  {name: '乐安县', value: randomData(), code: '361025', pcode: '360000', pname: '江西'},
  {name: '宜黄县', value: randomData(), code: '361026', pcode: '360000', pname: '江西'},
  {name: '金溪县', value: randomData(), code: '361027', pcode: '360000', pname: '江西'},
  {name: '资溪县', value: randomData(), code: '361028', pcode: '360000', pname: '江西'},
  {name: '广昌县', value: randomData(), code: '361030', pcode: '360000', pname: '江西'},
  {name: '渝水区', value: randomData(), code: '360502', pcode: '360000', pname: '江西'},
  {name: '分宜县', value: randomData(), code: '360521', pcode: '360000', pname: '江西'},
  {name: '昌江区', value: randomData(), code: '360202', pcode: '360000', pname: '江西'},
  {name: '珠山区', value: randomData(), code: '360203', pcode: '360000', pname: '江西'},
  {name: '浮梁县', value: randomData(), code: '360222', pcode: '360000', pname: '江西'},
  {name: '乐平市', value: randomData(), code: '360281', pcode: '360000', pname: '江西'},
  {name: '安源区', value: randomData(), code: '360302', pcode: '360000', pname: '江西'},
  {name: '湘东区', value: randomData(), code: '360313', pcode: '360000', pname: '江西'},
  {name: '莲花县', value: randomData(), code: '360321', pcode: '360000', pname: '江西'},
  {name: '上栗县', value: randomData(), code: '360322', pcode: '360000', pname: '江西'},
  {name: '芦溪县', value: randomData(), code: '360323', pcode: '360000', pname: '江西'},
  {name: '章贡区', value: randomData(), code: '360702', pcode: '360000', pname: '江西'},
  {name: '南康区', value: randomData(), code: '360703', pcode: '360000', pname: '江西'},
  {name: '赣县区', value: randomData(), code: '360704', pcode: '360000', pname: '江西'},
  {name: '信丰县', value: randomData(), code: '360722', pcode: '360000', pname: '江西'},
  {name: '大余县', value: randomData(), code: '360723', pcode: '360000', pname: '江西'},
  {name: '上犹县', value: randomData(), code: '360724', pcode: '360000', pname: '江西'},
  {name: '崇义县', value: randomData(), code: '360725', pcode: '360000', pname: '江西'},
  {name: '安远县', value: randomData(), code: '360726', pcode: '360000', pname: '江西'},
  {name: '龙南县', value: randomData(), code: '360727', pcode: '360000', pname: '江西'},
  {name: '定南县', value: randomData(), code: '360728', pcode: '360000', pname: '江西'},
  {name: '全南县', value: randomData(), code: '360729', pcode: '360000', pname: '江西'},
  {name: '宁都县', value: randomData(), code: '360730', pcode: '360000', pname: '江西'},
  {name: '于都县', value: randomData(), code: '360731', pcode: '360000', pname: '江西'},
  {name: '兴国县', value: randomData(), code: '360732', pcode: '360000', pname: '江西'},
  {name: '会昌县', value: randomData(), code: '360733', pcode: '360000', pname: '江西'},
  {name: '寻乌县', value: randomData(), code: '360734', pcode: '360000', pname: '江西'},
  {name: '石城县', value: randomData(), code: '360735', pcode: '360000', pname: '江西'},
  {name: '瑞金市', value: randomData(), code: '360781', pcode: '360000', pname: '江西'},
  {name: '月湖区', value: randomData(), code: '360602', pcode: '360000', pname: '江西'},
  {name: '余江区', value: randomData(), code: '360603', pcode: '360000', pname: '江西'},
  {name: '贵溪市', value: randomData(), code: '360681', pcode: '360000', pname: '江西'},

  // 福建
  {name: '福州市', value: randomData(), code: '350100', pcode: '100000', pname: '中国'},
  {name: '厦门市', value: randomData(), code: '350200', pcode: '100000', pname: '中国'},
  {name: '莆田市', value: randomData(), code: '350300', pcode: '100000', pname: '中国'},
  {name: '三明市', value: randomData(), code: '350400', pcode: '100000', pname: '中国'},
  {name: '泉州市', value: randomData(), code: '350500', pcode: '100000', pname: '中国'},
  {name: '漳州市', value: randomData(), code: '350600', pcode: '100000', pname: '中国'},
  {name: '南平市', value: randomData(), code: '350700', pcode: '100000', pname: '中国'},
  {name: '龙岩市', value: randomData(), code: '350800', pcode: '100000', pname: '中国'},
  {name: '宁德市', value: randomData(), code: '350900', pcode: '100000', pname: '中国'},
  // 福建各个区域
  {name: '光泽县', value: randomData(), code: '350723', pcode: '350000', pname: '福建'},
  {name: '建阳区', value: randomData(), code: '350784', pcode: '350000', pname: '福建'},
  {name: '建瓯市', value: randomData(), code: '350783', pcode: '350000', pname: '福建'},
  {name: '浦城县', value: randomData(), code: '350722', pcode: '350000', pname: '福建'},
  {name: '邵武市', value: randomData(), code: '350781', pcode: '350000', pname: '福建'},
  {name: '顺昌县', value: randomData(), code: '350721', pcode: '350000', pname: '福建'},
  {name: '松溪县', value: randomData(), code: '350724', pcode: '350000', pname: '福建'},
  {name: '武夷山市', value: randomData(), code: '350782', pcode: '350000', pname: '福建'},
  {name: '延平区', value: randomData(), code: '350702', pcode: '350000', pname: '福建'},
  {name: '政和县', value: randomData(), code: '350725', pcode: '350000', pname: '福建'},
  {name: '梅列区', value: randomData(), code: '350402', pcode: '350000', pname: '福建'},
  {name: '三元区', value: randomData(), code: '350403', pcode: '350000', pname: '福建'},
  {name: '明溪县', value: randomData(), code: '350421', pcode: '350000', pname: '福建'},
  {name: '清流县', value: randomData(), code: '350423', pcode: '350000', pname: '福建'},
  {name: '宁化县', value: randomData(), code: '350424', pcode: '350000', pname: '福建'},
  {name: '大田县', value: randomData(), code: '350425', pcode: '350000', pname: '福建'},
  {name: '尤溪县', value: randomData(), code: '350426', pcode: '350000', pname: '福建'},
  {name: '沙县', value: randomData(), code: '350427', pcode: '350000', pname: '福建'},
  {name: '将乐县', value: randomData(), code: '350428', pcode: '350000', pname: '福建'},
  {name: '泰宁县', value: randomData(), code: '350429', pcode: '350000', pname: '福建'},
  {name: '建宁县', value: randomData(), code: '350430', pcode: '350000', pname: '福建'},
  {name: '永安市', value: randomData(), code: '350481', pcode: '350000', pname: '福建'},
  {name: '延平区', value: randomData(), code: '350702', pcode: '350000', pname: '福建'},
  {name: '建阳区', value: randomData(), code: '350703', pcode: '350000', pname: '福建'},
  {name: '顺昌县', value: randomData(), code: '350721', pcode: '350000', pname: '福建'},
  {name: '浦城县', value: randomData(), code: '350722', pcode: '350000', pname: '福建'},
  {name: '光泽县', value: randomData(), code: '350723', pcode: '350000', pname: '福建'},
  {name: '松溪县', value: randomData(), code: '350724', pcode: '350000', pname: '福建'},
  {name: '政和县', value: randomData(), code: '350725', pcode: '350000', pname: '福建'},
  {name: '邵武市', value: randomData(), code: '350781', pcode: '350000', pname: '福建'},
  {name: '武夷山市', value: randomData(), code: '350782', pcode: '350000', pname: '福建'},
  {name: '建瓯市', value: randomData(), code: '350783', pcode: '350000', pname: '福建'},
  {name: '思明区', value: randomData(), code: '350203', pcode: '350000', pname: '福建'},
  {name: '海沧区', value: randomData(), code: '350205', pcode: '350000', pname: '福建'},
  {name: '湖里区', value: randomData(), code: '350206', pcode: '350000', pname: '福建'},
  {name: '集美区', value: randomData(), code: '350211', pcode: '350000', pname: '福建'},
  {name: '同安区', value: randomData(), code: '350212', pcode: '350000', pname: '福建'},
  {name: '翔安区', value: randomData(), code: '350213', pcode: '350000', pname: '福建'},
  {name: '蕉城区', value: randomData(), code: '350902', pcode: '350000', pname: '福建'},
  {name: '霞浦县', value: randomData(), code: '350921', pcode: '350000', pname: '福建'},
  {name: '古田县', value: randomData(), code: '350922', pcode: '350000', pname: '福建'},
  {name: '屏南县', value: randomData(), code: '350923', pcode: '350000', pname: '福建'},
  {name: '寿宁县', value: randomData(), code: '350924', pcode: '350000', pname: '福建'},
  {name: '周宁县', value: randomData(), code: '350925', pcode: '350000', pname: '福建'},
  {name: '柘荣县', value: randomData(), code: '350926', pcode: '350000', pname: '福建'},
  {name: '福安市', value: randomData(), code: '350981', pcode: '350000', pname: '福建'},
  {name: '福鼎市', value: randomData(), code: '350982', pcode: '350000', pname: '福建'},
  {name: '鲤城区', value: randomData(), code: '350502', pcode: '350000', pname: '福建'},
  {name: '丰泽区', value: randomData(), code: '350503', pcode: '350000', pname: '福建'},
  {name: '洛江区', value: randomData(), code: '350504', pcode: '350000', pname: '福建'},
  {name: '泉港区', value: randomData(), code: '350505', pcode: '350000', pname: '福建'},
  {name: '惠安县', value: randomData(), code: '350521', pcode: '350000', pname: '福建'},
  {name: '安溪县', value: randomData(), code: '350524', pcode: '350000', pname: '福建'},
  {name: '永春县', value: randomData(), code: '350525', pcode: '350000', pname: '福建'},
  {name: '德化县', value: randomData(), code: '350526', pcode: '350000', pname: '福建'},
  {name: '金门县', value: randomData(), code: '350527', pcode: '350000', pname: '福建'},
  {name: '石狮市', value: randomData(), code: '350581', pcode: '350000', pname: '福建'},
  {name: '晋江市', value: randomData(), code: '350582', pcode: '350000', pname: '福建'},
  {name: '南安市', value: randomData(), code: '350583', pcode: '350000', pname: '福建'},
  {name: '芗城区', value: randomData(), code: '350602', pcode: '350000', pname: '福建'},
  {name: '龙文区', value: randomData(), code: '350603', pcode: '350000', pname: '福建'},
  {name: '云霄县', value: randomData(), code: '350622', pcode: '350000', pname: '福建'},
  {name: '漳浦县', value: randomData(), code: '350623', pcode: '350000', pname: '福建'},
  {name: '诏安县', value: randomData(), code: '350624', pcode: '350000', pname: '福建'},
  {name: '长泰县', value: randomData(), code: '350625', pcode: '350000', pname: '福建'},
  {name: '东山县', value: randomData(), code: '350626', pcode: '350000', pname: '福建'},
  {name: '南靖县', value: randomData(), code: '350627', pcode: '350000', pname: '福建'},
  {name: '平和县', value: randomData(), code: '350628', pcode: '350000', pname: '福建'},
  {name: '华安县', value: randomData(), code: '350629', pcode: '350000', pname: '福建'},
  {name: '龙海市', value: randomData(), code: '350681', pcode: '350000', pname: '福建'},
  {name: '鼓楼区', value: randomData(), code: '350102', pcode: '350000', pname: '福建'},
  {name: '台江区', value: randomData(), code: '350103', pcode: '350000', pname: '福建'},
  {name: '仓山区', value: randomData(), code: '350104', pcode: '350000', pname: '福建'},
  {name: '马尾区', value: randomData(), code: '350105', pcode: '350000', pname: '福建'},
  {name: '晋安区', value: randomData(), code: '350111', pcode: '350000', pname: '福建'},
  {name: '长乐区', value: randomData(), code: '350112', pcode: '350000', pname: '福建'},
  {name: '闽侯县', value: randomData(), code: '350121', pcode: '350000', pname: '福建'},
  {name: '连江县', value: randomData(), code: '350122', pcode: '350000', pname: '福建'},
  {name: '罗源县', value: randomData(), code: '350123', pcode: '350000', pname: '福建'},
  {name: '闽清县', value: randomData(), code: '350124', pcode: '350000', pname: '福建'},
  {name: '永泰县', value: randomData(), code: '350125', pcode: '350000', pname: '福建'},
  {name: '平潭县', value: randomData(), code: '350128', pcode: '350000', pname: '福建'},
  {name: '福清市', value: randomData(), code: '350181', pcode: '350000', pname: '福建'},
  {name: '莆田市', value: randomData(), code: '350300', pcode: '350000', pname: '福建'},
  {name: '新罗区', value: randomData(), code: '350802', pcode: '350000', pname: '福建'},
  {name: '永定区', value: randomData(), code: '350803', pcode: '350000', pname: '福建'},
  {name: '长汀县', value: randomData(), code: '350821', pcode: '350000', pname: '福建'},
  {name: '上杭县', value: randomData(), code: '350823', pcode: '350000', pname: '福建'},
  {name: '武平县', value: randomData(), code: '350824', pcode: '350000', pname: '福建'},
  {name: '连城县', value: randomData(), code: '350825', pcode: '350000', pname: '福建'},
  {name: '漳平市', value: randomData(), code: '350881', pcode: '350000', pname: '福建'},
  {name: '信州区', value: randomData(), code: '361102', pcode: '350000', pname: '福建'},
  {name: '广丰区', value: randomData(), code: '361103', pcode: '350000', pname: '福建'},
  {name: '广信区', value: randomData(), code: '361121', pcode: '350000', pname: '福建'},
  {name: '玉山县', value: randomData(), code: '361123', pcode: '350000', pname: '福建'},
  {name: '铅山县', value: randomData(), code: '361124', pcode: '350000', pname: '福建'},
  {name: '横峰县', value: randomData(), code: '361125', pcode: '350000', pname: '福建'},
  {name: '弋阳县', value: randomData(), code: '361126', pcode: '350000', pname: '福建'},
  {name: '余干县', value: randomData(), code: '361127', pcode: '350000', pname: '福建'},
  {name: '鄱阳县', value: randomData(), code: '361128', pcode: '350000', pname: '福建'},
  {name: '万年县', value: randomData(), code: '361129', pcode: '350000', pname: '福建'},
  {name: '婺源县', value: randomData(), code: '361130', pcode: '350000', pname: '福建'},
  {name: '德兴市', value: randomData(), code: '361181', pcode: '350000', pname: '福建'},
  {name: '濂溪区', value: randomData(), code: '360402', pcode: '350000', pname: '福建'},
  {name: '浔阳区', value: randomData(), code: '360403', pcode: '350000', pname: '福建'},
  {name: '柴桑区', value: randomData(), code: '360404', pcode: '350000', pname: '福建'},
  {name: '武宁县', value: randomData(), code: '360423', pcode: '350000', pname: '福建'},
  {name: '修水县', value: randomData(), code: '360424', pcode: '350000', pname: '福建'},
  {name: '永修县', value: randomData(), code: '360425', pcode: '350000', pname: '福建'},
  {name: '德安县', value: randomData(), code: '360426', pcode: '350000', pname: '福建'},
  {name: '都昌县', value: randomData(), code: '360428', pcode: '350000', pname: '福建'},
  {name: '湖口县', value: randomData(), code: '360429', pcode: '350000', pname: '福建'},
  {name: '彭泽县', value: randomData(), code: '360430', pcode: '350000', pname: '福建'},
  {name: '瑞昌市', value: randomData(), code: '360481', pcode: '350000', pname: '福建'},
  {name: '共青城市', value: randomData(), code: '360482', pcode: '350000', pname: '福建'},
  {name: '庐山市', value: randomData(), code: '360483', pcode: '350000', pname: '福建'},
  {name: '东湖区', value: randomData(), code: '360102', pcode: '350000', pname: '福建'},
  {name: '西湖区', value: randomData(), code: '360103', pcode: '350000', pname: '福建'},
  {name: '青云谱区', value: randomData(), code: '360104', pcode: '350000', pname: '福建'},
  {name: '湾里区', value: randomData(), code: '360105', pcode: '350000', pname: '福建'},
  {name: '青山湖区', value: randomData(), code: '360111', pcode: '350000', pname: '福建'},
  {name: '新建区', value: randomData(), code: '360112', pcode: '350000', pname: '福建'},
  {name: '南昌县', value: randomData(), code: '360121', pcode: '350000', pname: '福建'},
  {name: '安义县', value: randomData(), code: '360123', pcode: '350000', pname: '福建'},
  {name: '进贤县', value: randomData(), code: '360124', pcode: '350000', pname: '福建'},
  {name: '吉州区', value: randomData(), code: '360802', pcode: '350000', pname: '福建'},
  {name: '青原区', value: randomData(), code: '360803', pcode: '350000', pname: '福建'},
  {name: '吉安县', value: randomData(), code: '360821', pcode: '350000', pname: '福建'},
  {name: '吉水县', value: randomData(), code: '360822', pcode: '350000', pname: '福建'},
  {name: '峡江县', value: randomData(), code: '360823', pcode: '350000', pname: '福建'},
  {name: '新干县', value: randomData(), code: '360824', pcode: '350000', pname: '福建'},
  {name: '永丰县', value: randomData(), code: '360825', pcode: '350000', pname: '福建'},
  {name: '泰和县', value: randomData(), code: '360826', pcode: '350000', pname: '福建'},
  {name: '遂川县', value: randomData(), code: '360827', pcode: '350000', pname: '福建'},
  {name: '万安县', value: randomData(), code: '360828', pcode: '350000', pname: '福建'},
  {name: '安福县', value: randomData(), code: '360829', pcode: '350000', pname: '福建'},
  {name: '永新县', value: randomData(), code: '360830', pcode: '350000', pname: '福建'},
  {name: '井冈山市', value: randomData(), code: '360881', pcode: '350000', pname: '福建'},
  {name: '袁州区', value: randomData(), code: '360902', pcode: '350000', pname: '福建'},
  {name: '奉新县', value: randomData(), code: '360921', pcode: '350000', pname: '福建'},
  {name: '万载县', value: randomData(), code: '360922', pcode: '350000', pname: '福建'},
  {name: '上高县', value: randomData(), code: '360923', pcode: '350000', pname: '福建'},
  {name: '宜丰县', value: randomData(), code: '360924', pcode: '350000', pname: '福建'},
  {name: '靖安县', value: randomData(), code: '360925', pcode: '350000', pname: '福建'},
  {name: '铜鼓县', value: randomData(), code: '360926', pcode: '350000', pname: '福建'},
  {name: '丰城市', value: randomData(), code: '360981', pcode: '350000', pname: '福建'},
  {name: '樟树市', value: randomData(), code: '360982', pcode: '350000', pname: '福建'},
  {name: '高安市', value: randomData(), code: '360983', pcode: '350000', pname: '福建'},
  {name: '临川区', value: randomData(), code: '361002', pcode: '350000', pname: '福建'},
  {name: '东乡区', value: randomData(), code: '361003', pcode: '350000', pname: '福建'},
  {name: '南城县', value: randomData(), code: '361021', pcode: '350000', pname: '福建'},
  {name: '黎川县', value: randomData(), code: '361022', pcode: '350000', pname: '福建'},
  {name: '南丰县', value: randomData(), code: '361023', pcode: '350000', pname: '福建'},
  {name: '崇仁县', value: randomData(), code: '361024', pcode: '350000', pname: '福建'},
  {name: '乐安县', value: randomData(), code: '361025', pcode: '350000', pname: '福建'},
  {name: '宜黄县', value: randomData(), code: '361026', pcode: '350000', pname: '福建'},
  {name: '金溪县', value: randomData(), code: '361027', pcode: '350000', pname: '福建'},
  {name: '资溪县', value: randomData(), code: '361028', pcode: '350000', pname: '福建'},
  {name: '广昌县', value: randomData(), code: '361030', pcode: '350000', pname: '福建'},
  {name: '渝水区', value: randomData(), code: '360502', pcode: '350000', pname: '福建'},
  {name: '分宜县', value: randomData(), code: '360521', pcode: '350000', pname: '福建'},
  {name: '昌江区', value: randomData(), code: '360202', pcode: '350000', pname: '福建'},
  {name: '珠山区', value: randomData(), code: '360203', pcode: '350000', pname: '福建'},
  {name: '浮梁县', value: randomData(), code: '360222', pcode: '350000', pname: '福建'},
  {name: '乐平市', value: randomData(), code: '360281', pcode: '350000', pname: '福建'},
  {name: '安源区', value: randomData(), code: '360302', pcode: '350000', pname: '福建'},
  {name: '湘东区', value: randomData(), code: '360313', pcode: '350000', pname: '福建'},
  {name: '莲花县', value: randomData(), code: '360321', pcode: '350000', pname: '福建'},
  {name: '上栗县', value: randomData(), code: '360322', pcode: '350000', pname: '福建'},
  {name: '芦溪县', value: randomData(), code: '360323', pcode: '350000', pname: '福建'},
  {name: '章贡区', value: randomData(), code: '360702', pcode: '350000', pname: '福建'},
  {name: '南康区', value: randomData(), code: '360703', pcode: '350000', pname: '福建'},
  {name: '赣县区', value: randomData(), code: '360704', pcode: '350000', pname: '福建'},
  {name: '信丰县', value: randomData(), code: '360722', pcode: '350000', pname: '福建'},
  {name: '大余县', value: randomData(), code: '360723', pcode: '350000', pname: '福建'},
  {name: '上犹县', value: randomData(), code: '360724', pcode: '350000', pname: '福建'},
  {name: '崇义县', value: randomData(), code: '360725', pcode: '350000', pname: '福建'},
  {name: '安远县', value: randomData(), code: '360726', pcode: '350000', pname: '福建'},
  {name: '龙南县', value: randomData(), code: '360727', pcode: '350000', pname: '福建'},
  {name: '定南县', value: randomData(), code: '360728', pcode: '350000', pname: '福建'},
  {name: '全南县', value: randomData(), code: '360729', pcode: '350000', pname: '福建'},
  {name: '宁都县', value: randomData(), code: '360730', pcode: '350000', pname: '福建'},
  {name: '于都县', value: randomData(), code: '360731', pcode: '350000', pname: '福建'},
  {name: '兴国县', value: randomData(), code: '360732', pcode: '350000', pname: '福建'},
  {name: '会昌县', value: randomData(), code: '360733', pcode: '350000', pname: '福建'},
  {name: '寻乌县', value: randomData(), code: '360734', pcode: '350000', pname: '福建'},
  {name: '石城县', value: randomData(), code: '360735', pcode: '350000', pname: '福建'},
  {name: '瑞金市', value: randomData(), code: '360781', pcode: '350000', pname: '福建'},
  {name: '月湖区', value: randomData(), code: '360602', pcode: '350000', pname: '福建'},
  {name: '余江区', value: randomData(), code: '360603', pcode: '350000', pname: '福建'},
  {name: '贵溪市', value: randomData(), code: '360681', pcode: '350000', pname: '福建'},
  {name: '城厢区', value: randomData(), code: '350302', pcode: '350000', pname: '福建'},
  {name: '涵江区', value: randomData(), code: '350303', pcode: '350000', pname: '福建'},
  {name: '荔城区', value: randomData(), code: '350304', pcode: '350000', pname: '福建'},
  {name: '仙游县', value: randomData(), code: '350322', pcode: '350000', pname: '福建'},
  {name: '秀屿区', value: randomData(), code: '350305', pcode: '350000', pname: '福建'},

  // 广东
  // 汕头
  {name: '龙湖区', value: randomData(), code: '440507', pcode: '440000', pname: '广东'},
  {name: '金平区', value: randomData(), code: '440511', pcode: '440000', pname: '广东'},
  {name: '濠江区', value: randomData(), code: '440512', pcode: '440000', pname: '广东'},
  {name: '潮阳区', value: randomData(), code: '440513', pcode: '440000', pname: '广东'},
  {name: '潮南区', value: randomData(), code: '440514', pcode: '440000', pname: '广东'},
  {name: '澄海区', value: randomData(), code: '440515', pcode: '440000', pname: '广东'},
  {name: '南澳县', value: randomData(), code: '440523', pcode: '440000', pname: '广东'},
  {name: '广州市', value: randomData(), code: '440100', pcode: '100000', pname: '中国'},
  {name: '韶关市', value: randomData(), code: '440200', pcode: '100000', pname: '中国'},
  {name: '深圳市', value: randomData(), code: '440300', pcode: '100000', pname: '中国'},
  {name: '珠海市', value: randomData(), code: '440400', pcode: '100000', pname: '中国'},
  {name: '汕头市', value: randomData(), code: '440500', pcode: '100000', pname: '中国'},
  {name: '佛山市', value: randomData(), code: '440600', pcode: '100000', pname: '中国'},
  {name: '江门市', value: randomData(), code: '440700', pcode: '100000', pname: '中国'},
  {name: '湛江市', value: randomData(), code: '440800', pcode: '100000', pname: '中国'},
  {name: '茂名市', value: randomData(), code: '440900', pcode: '100000', pname: '中国'},
  {name: '肇庆市', value: randomData(), code: '441200', pcode: '100000', pname: '中国'},
  {name: '惠州市', value: randomData(), code: '441300', pcode: '100000', pname: '中国'},
  {name: '梅州市', value: randomData(), code: '441400', pcode: '100000', pname: '中国'},
  {name: '汕尾市', value: randomData(), code: '441500', pcode: '100000', pname: '中国'},
  {name: '河源市', value: randomData(), code: '441600', pcode: '100000', pname: '中国'},
  {name: '阳江市', value: randomData(), code: '441700', pcode: '100000', pname: '中国'},
  {name: '清远市', value: randomData(), code: '441800', pcode: '100000', pname: '中国'},
  {name: '东莞市', value: randomData(), code: '441900', pcode: '100000', pname: '中国'},
  {name: '中山市', value: randomData(), code: '442000', pcode: '100000', pname: '中国'},
  {name: '东沙群岛', value: randomData(), code: '442100', pcode: '100000', pname: '中国'},
  {name: '潮州市', value: randomData(), code: '445100', pcode: '100000', pname: '中国'},
  {name: '揭阳市', value: randomData(), code: '445200', pcode: '100000', pname: '中国'},
  {name: '云浮市', value: randomData(), code: '445300', pcode: '100000', pname: '中国'},
  // 广东各个区域
  {name: '东沙群岛', value: randomData(), code: '442100', pcode: '440000', pname: '广东'},
  {name: '东莞市', value: randomData(), code: '441900', pcode: '440000', pname: '广东'},
  {name: '中山市', value: randomData(), code: '442000', pcode: '440000', pname: '广东'},
  {name: '云城区', value: randomData(), code: '445302', pcode: '440000', pname: '广东'},
  {name: '云安区', value: randomData(), code: '445303', pcode: '440000', pname: '广东'},
  {name: '新兴县', value: randomData(), code: '445321', pcode: '440000', pname: '广东'},
  {name: '郁南县', value: randomData(), code: '445322', pcode: '440000', pname: '广东'},
  {name: '罗定市', value: randomData(), code: '445381', pcode: '440000', pname: '广东'},
  {name: '禅城区', value: randomData(), code: '440604', pcode: '440000', pname: '广东'},
  {name: '南海区', value: randomData(), code: '440605', pcode: '440000', pname: '广东'},
  {name: '顺德区', value: randomData(), code: '440606', pcode: '440000', pname: '广东'},
  {name: '三水区', value: randomData(), code: '440607', pcode: '440000', pname: '广东'},
  {name: '高明区', value: randomData(), code: '440608', pcode: '440000', pname: '广东'},
  {name: '荔湾区', value: randomData(), code: '440103', pcode: '440000', pname: '广东'},
  {name: '越秀区', value: randomData(), code: '440104', pcode: '440000', pname: '广东'},
  {name: '海珠区', value: randomData(), code: '440105', pcode: '440000', pname: '广东'},
  {name: '天河区', value: randomData(), code: '440106', pcode: '440000', pname: '广东'},
  {name: '白云区', value: randomData(), code: '440111', pcode: '440000', pname: '广东'},
  {name: '黄埔区', value: randomData(), code: '440112', pcode: '440000', pname: '广东'},
  {name: '番禺区', value: randomData(), code: '440113', pcode: '440000', pname: '广东'},
  {name: '花都区', value: randomData(), code: '440114', pcode: '440000', pname: '广东'},
  {name: '南沙区', value: randomData(), code: '440115', pcode: '440000', pname: '广东'},
  {name: '从化区', value: randomData(), code: '440117', pcode: '440000', pname: '广东'},
  {name: '增城区', value: randomData(), code: '440118', pcode: '440000', pname: '广东'},
  {name: '惠城区', value: randomData(), code: '441302', pcode: '440000', pname: '广东'},
  {name: '惠阳区', value: randomData(), code: '441303', pcode: '440000', pname: '广东'},
  {name: '博罗县', value: randomData(), code: '441322', pcode: '440000', pname: '广东'},
  {name: '惠东县', value: randomData(), code: '441323', pcode: '440000', pname: '广东'},
  {name: '龙门县', value: randomData(), code: '441324', pcode: '440000', pname: '广东'},
  {name: '榕城区', value: randomData(), code: '445202', pcode: '440000', pname: '广东'},
  {name: '揭东区', value: randomData(), code: '445203', pcode: '440000', pname: '广东'},
  {name: '揭西县', value: randomData(), code: '445222', pcode: '440000', pname: '广东'},
  {name: '惠来县', value: randomData(), code: '445224', pcode: '440000', pname: '广东'},
  {name: '普宁市', value: randomData(), code: '445281', pcode: '440000', pname: '广东'},
  {name: '梅江区', value: randomData(), code: '441402', pcode: '440000', pname: '广东'},
  {name: '梅县区', value: randomData(), code: '441403', pcode: '440000', pname: '广东'},
  {name: '大埔县', value: randomData(), code: '441422', pcode: '440000', pname: '广东'},
  {name: '丰顺县', value: randomData(), code: '441423', pcode: '440000', pname: '广东'},
  {name: '五华县', value: randomData(), code: '441424', pcode: '440000', pname: '广东'},
  {name: '平远县', value: randomData(), code: '441426', pcode: '440000', pname: '广东'},
  {name: '蕉岭县', value: randomData(), code: '441427', pcode: '440000', pname: '广东'},
  {name: '兴宁市', value: randomData(), code: '441481', pcode: '440000', pname: '广东'},
  {name: '汕头市', value: randomData(), code: '440500', pcode: '440000', pname: '广东'},
  {name: '城区', value: randomData(), code: '441502', pcode: '440000', pname: '广东'},
  {name: '海丰县', value: randomData(), code: '441521', pcode: '440000', pname: '广东'},
  {name: '陆河县', value: randomData(), code: '441523', pcode: '440000', pname: '广东'},
  {name: '陆丰市', value: randomData(), code: '441581', pcode: '440000', pname: '广东'},
  {name: '蓬江区', value: randomData(), code: '440703', pcode: '440000', pname: '广东'},
  {name: '江海区', value: randomData(), code: '440704', pcode: '440000', pname: '广东'},
  {name: '新会区', value: randomData(), code: '440705', pcode: '440000', pname: '广东'},
  {name: '台山市', value: randomData(), code: '440781', pcode: '440000', pname: '广东'},
  {name: '开平市', value: randomData(), code: '440783', pcode: '440000', pname: '广东'},
  {name: '鹤山市', value: randomData(), code: '440784', pcode: '440000', pname: '广东'},
  {name: '恩平市', value: randomData(), code: '440785', pcode: '440000', pname: '广东'},
  {name: '源城区', value: randomData(), code: '441602', pcode: '440000', pname: '广东'},
  {name: '紫金县', value: randomData(), code: '441621', pcode: '440000', pname: '广东'},
  {name: '龙川县', value: randomData(), code: '441622', pcode: '440000', pname: '广东'},
  {name: '连平县', value: randomData(), code: '441623', pcode: '440000', pname: '广东'},
  {name: '和平县', value: randomData(), code: '441624', pcode: '440000', pname: '广东'},
  {name: '东源县', value: randomData(), code: '441625', pcode: '440000', pname: '广东'},
  {name: '罗湖区', value: randomData(), code: '440303', pcode: '440000', pname: '广东'},
  {name: '福田区', value: randomData(), code: '440304', pcode: '440000', pname: '广东'},
  {name: '南山区', value: randomData(), code: '440305', pcode: '440000', pname: '广东'},
  {name: '宝安区', value: randomData(), code: '440306', pcode: '440000', pname: '广东'},
  {name: '龙岗区', value: randomData(), code: '440307', pcode: '440000', pname: '广东'},
  {name: '盐田区', value: randomData(), code: '440308', pcode: '440000', pname: '广东'},
  {name: '龙华区', value: randomData(), code: '440309', pcode: '440000', pname: '广东'},
  {name: '坪山区', value: randomData(), code: '440310', pcode: '440000', pname: '广东'},
  {name: '光明区', value: randomData(), code: '440311', pcode: '440000', pname: '广东'},
  {name: '清城区', value: randomData(), code: '441802', pcode: '440000', pname: '广东'},
  {name: '清新区', value: randomData(), code: '441803', pcode: '440000', pname: '广东'},
  {name: '佛冈县', value: randomData(), code: '441821', pcode: '440000', pname: '广东'},
  {name: '阳山县', value: randomData(), code: '441823', pcode: '440000', pname: '广东'},
  {name: '连山壮族瑶族自治县', value: randomData(), code: '441825', pcode: '440000', pname: '广东'},
  {name: '连南瑶族自治县', value: randomData(), code: '441826', pcode: '440000', pname: '广东'},
  {name: '英德市', value: randomData(), code: '441881', pcode: '440000', pname: '广东'},
  {name: '连州市', value: randomData(), code: '441882', pcode: '440000', pname: '广东'},
  {name: '赤坎区', value: randomData(), code: '440802', pcode: '440000', pname: '广东'},
  {name: '霞山区', value: randomData(), code: '440803', pcode: '440000', pname: '广东'},
  {name: '坡头区', value: randomData(), code: '440804', pcode: '440000', pname: '广东'},
  {name: '麻章区', value: randomData(), code: '440811', pcode: '440000', pname: '广东'},
  {name: '遂溪县', value: randomData(), code: '440823', pcode: '440000', pname: '广东'},
  {name: '徐闻县', value: randomData(), code: '440825', pcode: '440000', pname: '广东'},
  {name: '廉江市', value: randomData(), code: '440881', pcode: '440000', pname: '广东'},
  {name: '雷州市', value: randomData(), code: '440882', pcode: '440000', pname: '广东'},
  {name: '吴川市', value: randomData(), code: '440883', pcode: '440000', pname: '广东'},
  {name: '湘桥区', value: randomData(), code: '445102', pcode: '440000', pname: '广东'},
  {name: '潮安区', value: randomData(), code: '445103', pcode: '440000', pname: '广东'},
  {name: '饶平县', value: randomData(), code: '445122', pcode: '440000', pname: '广东'},
  {name: '香洲区', value: randomData(), code: '440402', pcode: '440000', pname: '广东'},
  {name: '斗门区', value: randomData(), code: '440403', pcode: '440000', pname: '广东'},
  {name: '金湾区', value: randomData(), code: '440404', pcode: '440000', pname: '广东'},
  {name: '端州区', value: randomData(), code: '441202', pcode: '440000', pname: '广东'},
  {name: '鼎湖区', value: randomData(), code: '441203', pcode: '440000', pname: '广东'},
  {name: '高要区', value: randomData(), code: '441204', pcode: '440000', pname: '广东'},
  {name: '广宁县', value: randomData(), code: '441223', pcode: '440000', pname: '广东'},
  {name: '怀集县', value: randomData(), code: '441224', pcode: '440000', pname: '广东'},
  {name: '封开县', value: randomData(), code: '441225', pcode: '440000', pname: '广东'},
  {name: '德庆县', value: randomData(), code: '441226', pcode: '440000', pname: '广东'},
  {name: '四会市', value: randomData(), code: '441284', pcode: '440000', pname: '广东'},
  {name: '茂南区', value: randomData(), code: '440902', pcode: '440000', pname: '广东'},
  {name: '电白区', value: randomData(), code: '440904', pcode: '440000', pname: '广东'},
  {name: '高州市', value: randomData(), code: '440981', pcode: '440000', pname: '广东'},
  {name: '化州市', value: randomData(), code: '440982', pcode: '440000', pname: '广东'},
  {name: '信宜市', value: randomData(), code: '440983', pcode: '440000', pname: '广东'},
  {name: '江城区', value: randomData(), code: '441702', pcode: '440000', pname: '广东'},
  {name: '阳东区', value: randomData(), code: '441704', pcode: '440000', pname: '广东'},
  {name: '阳西县', value: randomData(), code: '441721', pcode: '440000', pname: '广东'},
  {name: '阳春市', value: randomData(), code: '441781', pcode: '440000', pname: '广东'},
  {name: '武江区', value: randomData(), code: '440203', pcode: '440000', pname: '广东'},
  {name: '浈江区', value: randomData(), code: '440204', pcode: '440000', pname: '广东'},
  {name: '曲江区', value: randomData(), code: '440205', pcode: '440000', pname: '广东'},
  {name: '始兴县', value: randomData(), code: '440222', pcode: '440000', pname: '广东'},
  {name: '仁化县', value: randomData(), code: '440224', pcode: '440000', pname: '广东'},
  {name: '翁源县', value: randomData(), code: '440229', pcode: '440000', pname: '广东'},
  {name: '乳源瑶族自治县', value: randomData(), code: '440232', pcode: '440000', pname: '广东'},
  {name: '新丰县', value: randomData(), code: '440233', pcode: '440000', pname: '广东'},
  {name: '乐昌市', value: randomData(), code: '440281', pcode: '440000', pname: '广东'},
  {name: '南雄市', value: randomData(), code: '440282', pcode: '440000', pname: '广东'},
  // 湖南
  {name: '长沙市', value: randomData(), code: '430100', pcode: '100000', pname: '中国'},
  {name: '株洲市', value: randomData(), code: '430200', pcode: '100000', pname: '中国'},
  {name: '湘潭市', value: randomData(), code: '430300', pcode: '100000', pname: '中国'},
  {name: '衡阳市', value: randomData(), code: '430400', pcode: '100000', pname: '中国'},
  {name: '邵阳市', value: randomData(), code: '430500', pcode: '100000', pname: '中国'},
  {name: '岳阳市', value: randomData(), code: '430600', pcode: '100000', pname: '中国'},
  {name: '常德市', value: randomData(), code: '430700', pcode: '100000', pname: '中国'},
  {name: '张家界市', value: randomData(), code: '430800', pcode: '100000', pname: '中国'},
  {name: '益阳市', value: randomData(), code: '430900', pcode: '100000', pname: '中国'},
  {name: '郴州市', value: randomData(), code: '431000', pcode: '100000', pname: '中国'},
  {name: '永州市', value: randomData(), code: '431100', pcode: '100000', pname: '中国'},
  {name: '怀化市', value: randomData(), code: '431200', pcode: '100000', pname: '中国'},
  {name: '娄底市', value: randomData(), code: '431300', pcode: '100000', pname: '中国'},
  {name: '湘西土家族苗族自治州', value: randomData(), code: '433100', pcode: '100000', pname: '中国'},
  // 湖南各个区域
  {name: '娄星区', value: randomData(), code: '431302', pcode: '430000', pname: '湖南'},
  {name: '株洲县', value: randomData(), code: '430221', pcode: '430000', pname: '湖南'},
  {name: '双峰县', value: randomData(), code: '431321', pcode: '430000', pname: '湖南'},
  {name: '新化县', value: randomData(), code: '431322', pcode: '430000', pname: '湖南'},
  {name: '冷水江市', value: randomData(), code: '431381', pcode: '430000', pname: '湖南'},
  {name: '涟源市', value: randomData(), code: '431382', pcode: '430000', pname: '湖南'},
  {name: '岳阳楼区', value: randomData(), code: '430602', pcode: '430000', pname: '湖南'},
  {name: '云溪区', value: randomData(), code: '430603', pcode: '430000', pname: '湖南'},
  {name: '君山区', value: randomData(), code: '430611', pcode: '430000', pname: '湖南'},
  {name: '岳阳县', value: randomData(), code: '430621', pcode: '430000', pname: '湖南'},
  {name: '华容县', value: randomData(), code: '430623', pcode: '430000', pname: '湖南'},
  {name: '湘阴县', value: randomData(), code: '430624', pcode: '430000', pname: '湖南'},
  {name: '平江县', value: randomData(), code: '430626', pcode: '430000', pname: '湖南'},
  {name: '汨罗市', value: randomData(), code: '430681', pcode: '430000', pname: '湖南'},
  {name: '临湘市', value: randomData(), code: '430682', pcode: '430000', pname: '湖南'},
  {name: '武陵区', value: randomData(), code: '430702', pcode: '430000', pname: '湖南'},
  {name: '鼎城区', value: randomData(), code: '430703', pcode: '430000', pname: '湖南'},
  {name: '安乡县', value: randomData(), code: '430721', pcode: '430000', pname: '湖南'},
  {name: '汉寿县', value: randomData(), code: '430722', pcode: '430000', pname: '湖南'},
  {name: '澧县', value: randomData(), code: '430723', pcode: '430000', pname: '湖南'},
  {name: '临澧县', value: randomData(), code: '430724', pcode: '430000', pname: '湖南'},
  {name: '桃源县', value: randomData(), code: '430725', pcode: '430000', pname: '湖南'},
  {name: '石门县', value: randomData(), code: '430726', pcode: '430000', pname: '湖南'},
  {name: '津市市', value: randomData(), code: '430781', pcode: '430000', pname: '湖南'},
  {name: '永定区', value: randomData(), code: '430802', pcode: '430000', pname: '湖南'},
  {name: '武陵源区', value: randomData(), code: '430811', pcode: '430000', pname: '湖南'},
  {name: '慈利县', value: randomData(), code: '430821', pcode: '430000', pname: '湖南'},
  {name: '桑植县', value: randomData(), code: '430822', pcode: '430000', pname: '湖南'},
  {name: '鹤城区', value: randomData(), code: '431202', pcode: '430000', pname: '湖南'},
  {name: '中方县', value: randomData(), code: '431221', pcode: '430000', pname: '湖南'},
  {name: '沅陵县', value: randomData(), code: '431222', pcode: '430000', pname: '湖南'},
  {name: '辰溪县', value: randomData(), code: '431223', pcode: '430000', pname: '湖南'},
  {name: '溆浦县', value: randomData(), code: '431224', pcode: '430000', pname: '湖南'},
  {name: '会同县', value: randomData(), code: '431225', pcode: '430000', pname: '湖南'},
  {name: '麻阳苗族自治县', value: randomData(), code: '431226', pcode: '430000', pname: '湖南'},
  {name: '新晃侗族自治县', value: randomData(), code: '431227', pcode: '430000', pname: '湖南'},
  {name: '芷江侗族自治县', value: randomData(), code: '431228', pcode: '430000', pname: '湖南'},
  {name: '靖州苗族侗族自治县', value: randomData(), code: '431229', pcode: '430000', pname: '湖南'},
  {name: '通道侗族自治县', value: randomData(), code: '431230', pcode: '430000', pname: '湖南'},
  {name: '洪江市', value: randomData(), code: '431281', pcode: '430000', pname: '湖南'},
  {name: '荷塘区', value: randomData(), code: '430202', pcode: '430000', pname: '湖南'},
  {name: '芦淞区', value: randomData(), code: '430203', pcode: '430000', pname: '湖南'},
  {name: '石峰区', value: randomData(), code: '430204', pcode: '430000', pname: '湖南'},
  {name: '天元区', value: randomData(), code: '430211', pcode: '430000', pname: '湖南'},
  {name: '渌口区', value: randomData(), code: '430212', pcode: '430000', pname: '湖南'},
  {name: '攸县', value: randomData(), code: '430223', pcode: '430000', pname: '湖南'},
  {name: '茶陵县', value: randomData(), code: '430224', pcode: '430000', pname: '湖南'},
  {name: '炎陵县', value: randomData(), code: '430225', pcode: '430000', pname: '湖南'},
  {name: '醴陵市', value: randomData(), code: '430281', pcode: '430000', pname: '湖南'},
  {name: '零陵区', value: randomData(), code: '431102', pcode: '430000', pname: '湖南'},
  {name: '冷水滩区', value: randomData(), code: '431103', pcode: '430000', pname: '湖南'},
  {name: '祁阳县', value: randomData(), code: '431121', pcode: '430000', pname: '湖南'},
  {name: '东安县', value: randomData(), code: '431122', pcode: '430000', pname: '湖南'},
  {name: '双牌县', value: randomData(), code: '431123', pcode: '430000', pname: '湖南'},
  {name: '道县', value: randomData(), code: '431124', pcode: '430000', pname: '湖南'},
  {name: '江永县', value: randomData(), code: '431125', pcode: '430000', pname: '湖南'},
  {name: '宁远县', value: randomData(), code: '431126', pcode: '430000', pname: '湖南'},
  {name: '蓝山县', value: randomData(), code: '431127', pcode: '430000', pname: '湖南'},
  {name: '新田县', value: randomData(), code: '431128', pcode: '430000', pname: '湖南'},
  {name: '江华瑶族自治县', value: randomData(), code: '431129', pcode: '430000', pname: '湖南'},
  {name: '湘潭市', value: randomData(), code: '430300', pcode: '430000', pname: '湖南'},
  {name: '吉首市', value: randomData(), code: '433101', pcode: '430000', pname: '湖南'},
  {name: '泸溪县', value: randomData(), code: '433122', pcode: '430000', pname: '湖南'},
  {name: '凤凰县', value: randomData(), code: '433123', pcode: '430000', pname: '湖南'},
  {name: '花垣县', value: randomData(), code: '433124', pcode: '430000', pname: '湖南'},
  {name: '保靖县', value: randomData(), code: '433125', pcode: '430000', pname: '湖南'},
  {name: '古丈县', value: randomData(), code: '433126', pcode: '430000', pname: '湖南'},
  {name: '永顺县', value: randomData(), code: '433127', pcode: '430000', pname: '湖南'},
  {name: '龙山县', value: randomData(), code: '433130', pcode: '430000', pname: '湖南'},
  {name: '资阳区', value: randomData(), code: '430902', pcode: '430000', pname: '湖南'},
  {name: '赫山区', value: randomData(), code: '430903', pcode: '430000', pname: '湖南'},
  {name: '南县', value: randomData(), code: '430921', pcode: '430000', pname: '湖南'},
  {name: '桃江县', value: randomData(), code: '430922', pcode: '430000', pname: '湖南'},
  {name: '安化县', value: randomData(), code: '430923', pcode: '430000', pname: '湖南'},
  {name: '沅江市', value: randomData(), code: '430981', pcode: '430000', pname: '湖南'},
  {name: '珠晖区', value: randomData(), code: '430405', pcode: '430000', pname: '湖南'},
  {name: '雁峰区', value: randomData(), code: '430406', pcode: '430000', pname: '湖南'},
  {name: '石鼓区', value: randomData(), code: '430407', pcode: '430000', pname: '湖南'},
  {name: '蒸湘区', value: randomData(), code: '430408', pcode: '430000', pname: '湖南'},
  {name: '南岳区', value: randomData(), code: '430412', pcode: '430000', pname: '湖南'},
  {name: '衡阳县', value: randomData(), code: '430421', pcode: '430000', pname: '湖南'},
  {name: '衡南县', value: randomData(), code: '430422', pcode: '430000', pname: '湖南'},
  {name: '衡山县', value: randomData(), code: '430423', pcode: '430000', pname: '湖南'},
  {name: '衡东县', value: randomData(), code: '430424', pcode: '430000', pname: '湖南'},
  {name: '祁东县', value: randomData(), code: '430426', pcode: '430000', pname: '湖南'},
  {name: '耒阳市', value: randomData(), code: '430481', pcode: '430000', pname: '湖南'},
  {name: '常宁市', value: randomData(), code: '430482', pcode: '430000', pname: '湖南'},
  {name: '双清区', value: randomData(), code: '430502', pcode: '430000', pname: '湖南'},
  {name: '大祥区', value: randomData(), code: '430503', pcode: '430000', pname: '湖南'},
  {name: '北塔区', value: randomData(), code: '430511', pcode: '430000', pname: '湖南'},
  {name: '邵东市', value: randomData(), code: '430521', pcode: '430000', pname: '湖南'},
  {name: '新邵县', value: randomData(), code: '430522', pcode: '430000', pname: '湖南'},
  {name: '邵阳县', value: randomData(), code: '430523', pcode: '430000', pname: '湖南'},
  {name: '隆回县', value: randomData(), code: '430524', pcode: '430000', pname: '湖南'},
  {name: '洞口县', value: randomData(), code: '430525', pcode: '430000', pname: '湖南'},
  {name: '绥宁县', value: randomData(), code: '430527', pcode: '430000', pname: '湖南'},
  {name: '新宁县', value: randomData(), code: '430528', pcode: '430000', pname: '湖南'},
  {name: '城步苗族自治县', value: randomData(), code: '430529', pcode: '430000', pname: '湖南'},
  {name: '武冈市', value: randomData(), code: '430581', pcode: '430000', pname: '湖南'},
  {name: '北湖区', value: randomData(), code: '431002', pcode: '430000', pname: '湖南'},
  {name: '苏仙区', value: randomData(), code: '431003', pcode: '430000', pname: '湖南'},
  {name: '桂阳县', value: randomData(), code: '431021', pcode: '430000', pname: '湖南'},
  {name: '宜章县', value: randomData(), code: '431022', pcode: '430000', pname: '湖南'},
  {name: '永兴县', value: randomData(), code: '431023', pcode: '430000', pname: '湖南'},
  {name: '嘉禾县', value: randomData(), code: '431024', pcode: '430000', pname: '湖南'},
  {name: '临武县', value: randomData(), code: '431025', pcode: '430000', pname: '湖南'},
  {name: '汝城县', value: randomData(), code: '431026', pcode: '430000', pname: '湖南'},
  {name: '桂东县', value: randomData(), code: '431027', pcode: '430000', pname: '湖南'},
  {name: '安仁县', value: randomData(), code: '431028', pcode: '430000', pname: '湖南'},
  {name: '资兴市', value: randomData(), code: '431081', pcode: '430000', pname: '湖南'},
  {name: '芙蓉区', value: randomData(), code: '430102', pcode: '430000', pname: '湖南'},
  {name: '天心区', value: randomData(), code: '430103', pcode: '430000', pname: '湖南'},
  {name: '岳麓区', value: randomData(), code: '430104', pcode: '430000', pname: '湖南'},
  {name: '开福区', value: randomData(), code: '430105', pcode: '430000', pname: '湖南'},
  {name: '雨花区', value: randomData(), code: '430111', pcode: '430000', pname: '湖南'},
  {name: '望城区', value: randomData(), code: '430112', pcode: '430000', pname: '湖南'},
  {name: '长沙县', value: randomData(), code: '430121', pcode: '430000', pname: '湖南'},
  {name: '浏阳市', value: randomData(), code: '430181', pcode: '430000', pname: '湖南'},
  {name: '宁乡市', value: randomData(), code: '430182', pcode: '430000', pname: '湖南'},
  // 湖北
  {name: '武汉市', value: randomData(), code: '420100', pcode: '100000', pname: '中国'},
  {name: '黄石市', value: randomData(), code: '420200', pcode: '100000', pname: '中国'},
  {name: '十堰市', value: randomData(), code: '420300', pcode: '100000', pname: '中国'},
  {name: '宜昌市', value: randomData(), code: '420500', pcode: '100000', pname: '中国'},
  {name: '襄阳市', value: randomData(), code: '420600', pcode: '100000', pname: '中国'},
  {name: '鄂州市', value: randomData(), code: '420700', pcode: '100000', pname: '中国'},
  {name: '荆门市', value: randomData(), code: '420800', pcode: '100000', pname: '中国'},
  {name: '孝感市', value: randomData(), code: '420900', pcode: '100000', pname: '中国'},
  {name: '荆州市', value: randomData(), code: '421000', pcode: '100000', pname: '中国'},
  {name: '黄冈市', value: randomData(), code: '421100', pcode: '100000', pname: '中国'},
  {name: '咸宁市', value: randomData(), code: '421200', pcode: '100000', pname: '中国'},
  {name: '随州市', value: randomData(), code: '421300', pcode: '100000', pname: '中国'},
  {name: '恩施土家族苗族自治州', value: randomData(), code: '422800', pcode: '100000', pname: '中国'},
  {name: '仙桃市', value: randomData(), code: '429004', pcode: '100000', pname: '中国'},
  {name: '潜江市', value: randomData(), code: '429005', pcode: '100000', pname: '中国'},
  {name: '天门市', value: randomData(), code: '429006', pcode: '100000', pname: '中国'},
  {name: '神农架林区', value: randomData(), code: '429021', pcode: '100000', pname: '中国'},
  // 湖北各个区域
  {name: '仙桃市', value: randomData(), code: '429004', pcode: '420000', pname: '湖北'},
  {name: '茅箭区', value: randomData(), code: '420302', pcode: '420000', pname: '湖北'},
  {name: '张湾区', value: randomData(), code: '420303', pcode: '420000', pname: '湖北'},
  {name: '郧阳区', value: randomData(), code: '420304', pcode: '420000', pname: '湖北'},
  {name: '郧西县', value: randomData(), code: '420322', pcode: '420000', pname: '湖北'},
  {name: '竹山县', value: randomData(), code: '420323', pcode: '420000', pname: '湖北'},
  {name: '竹溪县', value: randomData(), code: '420324', pcode: '420000', pname: '湖北'},
  {name: '房县', value: randomData(), code: '420325', pcode: '420000', pname: '湖北'},
  {name: '丹江口市', value: randomData(), code: '420381', pcode: '420000', pname: '湖北'},
  {name: '咸宁市', value: randomData(), code: '421200', pcode: '420000', pname: '湖北'},
  {name: '天门市', value: randomData(), code: '429006', pcode: '420000', pname: '湖北'},
  {name: '孝感市', value: randomData(), code: '420900', pcode: '420000', pname: '湖北'},
  {name: '西陵区', value: randomData(), code: '420502', pcode: '420000', pname: '湖北'},
  {name: '伍家岗区', value: randomData(), code: '420503', pcode: '420000', pname: '湖北'},
  {name: '点军区', value: randomData(), code: '420504', pcode: '420000', pname: '湖北'},
  {name: '猇亭区', value: randomData(), code: '420505', pcode: '420000', pname: '湖北'},
  {name: '夷陵区', value: randomData(), code: '420506', pcode: '420000', pname: '湖北'},
  {name: '远安县', value: randomData(), code: '420525', pcode: '420000', pname: '湖北'},
  {name: '兴山县', value: randomData(), code: '420526', pcode: '420000', pname: '湖北'},
  {name: '秭归县', value: randomData(), code: '420527', pcode: '420000', pname: '湖北'},
  {name: '长阳土家族自治县', value: randomData(), code: '420528', pcode: '420000', pname: '湖北'},
  {name: '五峰土家族自治县', value: randomData(), code: '420529', pcode: '420000', pname: '湖北'},
  {name: '宜都市', value: randomData(), code: '420581', pcode: '420000', pname: '湖北'},
  {name: '当阳市', value: randomData(), code: '420582', pcode: '420000', pname: '湖北'},
  {name: '枝江市', value: randomData(), code: '420583', pcode: '420000', pname: '湖北'},
  {name: '恩施市', value: randomData(), code: '422801', pcode: '420000', pname: '湖北'},
  {name: '利川市', value: randomData(), code: '422802', pcode: '420000', pname: '湖北'},
  {name: '建始县', value: randomData(), code: '422822', pcode: '420000', pname: '湖北'},
  {name: '巴东县', value: randomData(), code: '422823', pcode: '420000', pname: '湖北'},
  {name: '宣恩县', value: randomData(), code: '422825', pcode: '420000', pname: '湖北'},
  {name: '咸丰县', value: randomData(), code: '422826', pcode: '420000', pname: '湖北'},
  {name: '来凤县', value: randomData(), code: '422827', pcode: '420000', pname: '湖北'},
  {name: '鹤峰县', value: randomData(), code: '422828', pcode: '420000', pname: '湖北'},
  {name: '江岸区', value: randomData(), code: '420102', pcode: '420000', pname: '湖北'},
  {name: '江汉区', value: randomData(), code: '420103', pcode: '420000', pname: '湖北'},
  {name: '硚口区', value: randomData(), code: '420104', pcode: '420000', pname: '湖北'},
  {name: '汉阳区', value: randomData(), code: '420105', pcode: '420000', pname: '湖北'},
  {name: '武昌区', value: randomData(), code: '420106', pcode: '420000', pname: '湖北'},
  {name: '青山区', value: randomData(), code: '420107', pcode: '420000', pname: '湖北'},
  {name: '洪山区', value: randomData(), code: '420111', pcode: '420000', pname: '湖北'},
  {name: '东西湖区', value: randomData(), code: '420112', pcode: '420000', pname: '湖北'},
  {name: '汉南区', value: randomData(), code: '420113', pcode: '420000', pname: '湖北'},
  {name: '蔡甸区', value: randomData(), code: '420114', pcode: '420000', pname: '湖北'},
  {name: '江夏区', value: randomData(), code: '420115', pcode: '420000', pname: '湖北'},
  {name: '黄陂区', value: randomData(), code: '420116', pcode: '420000', pname: '湖北'},
  {name: '新洲区', value: randomData(), code: '420117', pcode: '420000', pname: '湖北'},
  {name: '潜江市', value: randomData(), code: '429005', pcode: '420000', pname: '湖北'},
  {name: '神农架林区', value: randomData(), code: '429021', pcode: '420000', pname: '湖北'},
  {name: '沙市区', value: randomData(), code: '421002', pcode: '420000', pname: '湖北'},
  {name: '荆州区', value: randomData(), code: '421003', pcode: '420000', pname: '湖北'},
  {name: '公安县', value: randomData(), code: '421022', pcode: '420000', pname: '湖北'},
  {name: '监利县', value: randomData(), code: '421023', pcode: '420000', pname: '湖北'},
  {name: '江陵县', value: randomData(), code: '421024', pcode: '420000', pname: '湖北'},
  {name: '石首市', value: randomData(), code: '421081', pcode: '420000', pname: '湖北'},
  {name: '洪湖市', value: randomData(), code: '421083', pcode: '420000', pname: '湖北'},
  {name: '松滋市', value: randomData(), code: '421087', pcode: '420000', pname: '湖北'},
  {name: '东宝区', value: randomData(), code: '420802', pcode: '420000', pname: '湖北'},
  {name: '掇刀区', value: randomData(), code: '420804', pcode: '420000', pname: '湖北'},
  {name: '沙洋县', value: randomData(), code: '420822', pcode: '420000', pname: '湖北'},
  {name: '钟祥市', value: randomData(), code: '420881', pcode: '420000', pname: '湖北'},
  {name: '京山市', value: randomData(), code: '420882', pcode: '420000', pname: '湖北'},
  {name: '襄城区', value: randomData(), code: '420602', pcode: '420000', pname: '湖北'},
  {name: '樊城区', value: randomData(), code: '420606', pcode: '420000', pname: '湖北'},
  {name: '襄州区', value: randomData(), code: '420607', pcode: '420000', pname: '湖北'},
  {name: '南漳县', value: randomData(), code: '420624', pcode: '420000', pname: '湖北'},
  {name: '谷城县', value: randomData(), code: '420625', pcode: '420000', pname: '湖北'},
  {name: '保康县', value: randomData(), code: '420626', pcode: '420000', pname: '湖北'},
  {name: '老河口市', value: randomData(), code: '420682', pcode: '420000', pname: '湖北'},
  {name: '枣阳市', value: randomData(), code: '420683', pcode: '420000', pname: '湖北'},
  {name: '宜城市', value: randomData(), code: '420684', pcode: '420000', pname: '湖北'},
  {name: '梁子湖区', value: randomData(), code: '420702', pcode: '420000', pname: '湖北'},
  {name: '华容区', value: randomData(), code: '420703', pcode: '420000', pname: '湖北'},
  {name: '鄂城区', value: randomData(), code: '420704', pcode: '420000', pname: '湖北'},
  {name: '曾都区', value: randomData(), code: '421303', pcode: '420000', pname: '湖北'},
  {name: '随县', value: randomData(), code: '421321', pcode: '420000', pname: '湖北'},
  {name: '广水市', value: randomData(), code: '421381', pcode: '420000', pname: '湖北'},
  {name: '黄州区', value: randomData(), code: '421102', pcode: '420000', pname: '湖北'},
  {name: '团风县', value: randomData(), code: '421121', pcode: '420000', pname: '湖北'},
  {name: '红安县', value: randomData(), code: '421122', pcode: '420000', pname: '湖北'},
  {name: '罗田县', value: randomData(), code: '421123', pcode: '420000', pname: '湖北'},
  {name: '英山县', value: randomData(), code: '421124', pcode: '420000', pname: '湖北'},
  {name: '浠水县', value: randomData(), code: '421125', pcode: '420000', pname: '湖北'},
  {name: '蕲春县', value: randomData(), code: '421126', pcode: '420000', pname: '湖北'},
  {name: '黄梅县', value: randomData(), code: '421127', pcode: '420000', pname: '湖北'},
  {name: '麻城市', value: randomData(), code: '421181', pcode: '420000', pname: '湖北'},
  {name: '武穴市', value: randomData(), code: '421182', pcode: '420000', pname: '湖北'},
  {name: '黄石港区', value: randomData(), code: '420202', pcode: '420000', pname: '湖北'},
  {name: '西塞山区', value: randomData(), code: '420203', pcode: '420000', pname: '湖北'},
  {name: '下陆区', value: randomData(), code: '420204', pcode: '420000', pname: '湖北'},
  {name: '铁山区', value: randomData(), code: '420205', pcode: '420000', pname: '湖北'},
  {name: '阳新县', value: randomData(), code: '420222', pcode: '420000', pname: '湖北'},
  {name: '大冶市', value: randomData(), code: '420281', pcode: '420000', pname: '湖北'},

  // 广西
  {name: '南宁市', value: randomData(), code: '450100', pcode: '100000', pname: '中国'},
  {name: '柳州市', value: randomData(), code: '450200', pcode: '100000', pname: '中国'},
  {name: '桂林市', value: randomData(), code: '450300', pcode: '100000', pname: '中国'},
  {name: '梧州市', value: randomData(), code: '450400', pcode: '100000', pname: '中国'},
  {name: '北海市', value: randomData(), code: '450500', pcode: '100000', pname: '中国'},
  {name: '防城港市', value: randomData(), code: '450600', pcode: '100000', pname: '中国'},
  {name: '钦州市', value: randomData(), code: '450700', pcode: '100000', pname: '中国'},
  {name: '贵港市', value: randomData(), code: '450800', pcode: '100000', pname: '中国'},
  {name: '玉林市', value: randomData(), code: '450900', pcode: '100000', pname: '中国'},
  {name: '百色市', value: randomData(), code: '451000', pcode: '100000', pname: '中国'},
  {name: '贺州市', value: randomData(), code: '451100', pcode: '100000', pname: '中国'},
  {name: '河池市', value: randomData(), code: '451200', pcode: '100000', pname: '中国'},
  {name: '来宾市', value: randomData(), code: '451300', pcode: '100000', pname: '中国'},
  {name: '崇左市', value: randomData(), code: '451400', pcode: '100000', pname: '中国'},
  // 广西各个区域
  {name: '右江区', value: randomData(), code: '451002', pcode: '450000', pname: '广西'},
  {name: '田阳区', value: randomData(), code: '451021', pcode: '450000', pname: '广西'},
  {name: '田东县', value: randomData(), code: '451022', pcode: '450000', pname: '广西'},
  {name: '平果县', value: randomData(), code: '451023', pcode: '450000', pname: '广西'},
  {name: '德保县', value: randomData(), code: '451024', pcode: '450000', pname: '广西'},
  {name: '那坡县', value: randomData(), code: '451026', pcode: '450000', pname: '广西'},
  {name: '凌云县', value: randomData(), code: '451027', pcode: '450000', pname: '广西'},
  {name: '乐业县', value: randomData(), code: '451028', pcode: '450000', pname: '广西'},
  {name: '田林县', value: randomData(), code: '451029', pcode: '450000', pname: '广西'},
  {name: '西林县', value: randomData(), code: '451030', pcode: '450000', pname: '广西'},
  {name: '隆林各族自治县', value: randomData(), code: '451031', pcode: '450000', pname: '广西'},
  {name: '靖西市', value: randomData(), code: '451081', pcode: '450000', pname: '广西'},
  {name: '玉州区', value: randomData(), code: '450902', pcode: '450000', pname: '广西'},
  {name: '福绵区', value: randomData(), code: '450903', pcode: '450000', pname: '广西'},
  {name: '容县', value: randomData(), code: '450921', pcode: '450000', pname: '广西'},
  {name: '陆川县', value: randomData(), code: '450922', pcode: '450000', pname: '广西'},
  {name: '博白县', value: randomData(), code: '450923', pcode: '450000', pname: '广西'},
  {name: '兴业县', value: randomData(), code: '450924', pcode: '450000', pname: '广西'},
  {name: '北流市', value: randomData(), code: '450981', pcode: '450000', pname: '广西'},
  {name: '兴宁区', value: randomData(), code: '450102', pcode: '450000', pname: '广西'},
  {name: '青秀区', value: randomData(), code: '450103', pcode: '450000', pname: '广西'},
  {name: '江南区', value: randomData(), code: '450105', pcode: '450000', pname: '广西'},
  {name: '西乡塘区', value: randomData(), code: '450107', pcode: '450000', pname: '广西'},
  {name: '良庆区', value: randomData(), code: '450108', pcode: '450000', pname: '广西'},
  {name: '邕宁区', value: randomData(), code: '450109', pcode: '450000', pname: '广西'},
  {name: '武鸣区', value: randomData(), code: '450110', pcode: '450000', pname: '广西'},
  {name: '隆安县', value: randomData(), code: '450123', pcode: '450000', pname: '广西'},
  {name: '马山县', value: randomData(), code: '450124', pcode: '450000', pname: '广西'},
  {name: '上林县', value: randomData(), code: '450125', pcode: '450000', pname: '广西'},
  {name: '宾阳县', value: randomData(), code: '450126', pcode: '450000', pname: '广西'},
  {name: '横县', value: randomData(), code: '450127', pcode: '450000', pname: '广西'},
  {name: '海城区', value: randomData(), code: '450502', pcode: '450000', pname: '广西'},
  {name: '银海区', value: randomData(), code: '450503', pcode: '450000', pname: '广西'},
  {name: '铁山港区', value: randomData(), code: '450512', pcode: '450000', pname: '广西'},
  {name: '合浦县', value: randomData(), code: '450521', pcode: '450000', pname: '广西'},
  {name: '南宁市', value: randomData(), code: '450100', pcode: '450000', pname: '广西'},
  {name: '江州区', value: randomData(), code: '451402', pcode: '450000', pname: '广西'},
  {name: '扶绥县', value: randomData(), code: '451421', pcode: '450000', pname: '广西'},
  {name: '宁明县', value: randomData(), code: '451422', pcode: '450000', pname: '广西'},
  {name: '龙州县', value: randomData(), code: '451423', pcode: '450000', pname: '广西'},
  {name: '大新县', value: randomData(), code: '451424', pcode: '450000', pname: '广西'},
  {name: '天等县', value: randomData(), code: '451425', pcode: '450000', pname: '广西'},
  {name: '凭祥市', value: randomData(), code: '451481', pcode: '450000', pname: '广西'},
  {name: '兴宾区', value: randomData(), code: '451302', pcode: '450000', pname: '广西'},
  {name: '忻城县', value: randomData(), code: '451321', pcode: '450000', pname: '广西'},
  {name: '象州县', value: randomData(), code: '451322', pcode: '450000', pname: '广西'},
  {name: '武宣县', value: randomData(), code: '451323', pcode: '450000', pname: '广西'},
  {name: '金秀瑶族自治县', value: randomData(), code: '451324', pcode: '450000', pname: '广西'},
  {name: '合山市', value: randomData(), code: '451381', pcode: '450000', pname: '广西'},
  {name: '城中区', value: randomData(), code: '450202', pcode: '450000', pname: '广西'},
  {name: '鱼峰区', value: randomData(), code: '450203', pcode: '450000', pname: '广西'},
  {name: '柳南区', value: randomData(), code: '450204', pcode: '450000', pname: '广西'},
  {name: '柳北区', value: randomData(), code: '450205', pcode: '450000', pname: '广西'},
  {name: '柳江区', value: randomData(), code: '450206', pcode: '450000', pname: '广西'},
  {name: '柳城县', value: randomData(), code: '450222', pcode: '450000', pname: '广西'},
  {name: '鹿寨县', value: randomData(), code: '450223', pcode: '450000', pname: '广西'},
  {name: '融安县', value: randomData(), code: '450224', pcode: '450000', pname: '广西'},
  {name: '融水苗族自治县', value: randomData(), code: '450225', pcode: '450000', pname: '广西'},
  {name: '三江侗族自治县', value: randomData(), code: '450226', pcode: '450000', pname: '广西'},
  {name: '秀峰区', value: randomData(), code: '450302', pcode: '450000', pname: '广西'},
  {name: '叠彩区', value: randomData(), code: '450303', pcode: '450000', pname: '广西'},
  {name: '象山区', value: randomData(), code: '450304', pcode: '450000', pname: '广西'},
  {name: '七星区', value: randomData(), code: '450305', pcode: '450000', pname: '广西'},
  {name: '雁山区', value: randomData(), code: '450311', pcode: '450000', pname: '广西'},
  {name: '临桂区', value: randomData(), code: '450312', pcode: '450000', pname: '广西'},
  {name: '阳朔县', value: randomData(), code: '450321', pcode: '450000', pname: '广西'},
  {name: '灵川县', value: randomData(), code: '450323', pcode: '450000', pname: '广西'},
  {name: '全州县', value: randomData(), code: '450324', pcode: '450000', pname: '广西'},
  {name: '兴安县', value: randomData(), code: '450325', pcode: '450000', pname: '广西'},
  {name: '永福县', value: randomData(), code: '450326', pcode: '450000', pname: '广西'},
  {name: '灌阳县', value: randomData(), code: '450327', pcode: '450000', pname: '广西'},
  {name: '龙胜各族自治县', value: randomData(), code: '450328', pcode: '450000', pname: '广西'},
  {name: '资源县', value: randomData(), code: '450329', pcode: '450000', pname: '广西'},
  {name: '平乐县', value: randomData(), code: '450330', pcode: '450000', pname: '广西'},
  {name: '恭城瑶族自治县', value: randomData(), code: '450332', pcode: '450000', pname: '广西'},
  {name: '荔浦市', value: randomData(), code: '450381', pcode: '450000', pname: '广西'},
  {name: '万秀区', value: randomData(), code: '450403', pcode: '450000', pname: '广西'},
  {name: '长洲区', value: randomData(), code: '450405', pcode: '450000', pname: '广西'},
  {name: '龙圩区', value: randomData(), code: '450406', pcode: '450000', pname: '广西'},
  {name: '苍梧县', value: randomData(), code: '450421', pcode: '450000', pname: '广西'},
  {name: '藤县', value: randomData(), code: '450422', pcode: '450000', pname: '广西'},
  {name: '蒙山县', value: randomData(), code: '450423', pcode: '450000', pname: '广西'},
  {name: '岑溪市', value: randomData(), code: '450481', pcode: '450000', pname: '广西'},
  {name: '金城江区', value: randomData(), code: '451202', pcode: '450000', pname: '广西'},
  {name: '宜州区', value: randomData(), code: '451203', pcode: '450000', pname: '广西'},
  {name: '南丹县', value: randomData(), code: '451221', pcode: '450000', pname: '广西'},
  {name: '天峨县', value: randomData(), code: '451222', pcode: '450000', pname: '广西'},
  {name: '凤山县', value: randomData(), code: '451223', pcode: '450000', pname: '广西'},
  {name: '东兰县', value: randomData(), code: '451224', pcode: '450000', pname: '广西'},
  {name: '罗城仫佬族自治县', value: randomData(), code: '451225', pcode: '450000', pname: '广西'},
  {name: '环江毛南族自治县', value: randomData(), code: '451226', pcode: '450000', pname: '广西'},
  {name: '巴马瑶族自治县', value: randomData(), code: '451227', pcode: '450000', pname: '广西'},
  {name: '都安瑶族自治县', value: randomData(), code: '451228', pcode: '450000', pname: '广西'},
  {name: '大化瑶族自治县', value: randomData(), code: '451229', pcode: '450000', pname: '广西'},
  {name: '玉林市', value: randomData(), code: '450900', pcode: '450000', pname: '广西'},
  {name: '百色市', value: randomData(), code: '451000', pcode: '450000', pname: '广西'},
  {name: '港北区', value: randomData(), code: '450802', pcode: '450000', pname: '广西'},
  {name: '港南区', value: randomData(), code: '450803', pcode: '450000', pname: '广西'},
  {name: '覃塘区', value: randomData(), code: '450804', pcode: '450000', pname: '广西'},
  {name: '平南县', value: randomData(), code: '450821', pcode: '450000', pname: '广西'},
  {name: '桂平市', value: randomData(), code: '450881', pcode: '450000', pname: '广西'},
  {name: '八步区', value: randomData(), code: '451102', pcode: '450000', pname: '广西'},
  {name: '平桂区', value: randomData(), code: '451103', pcode: '450000', pname: '广西'},
  {name: '昭平县', value: randomData(), code: '451121', pcode: '450000', pname: '广西'},
  {name: '钟山县', value: randomData(), code: '451122', pcode: '450000', pname: '广西'},
  {name: '富川瑶族自治县', value: randomData(), code: '451123', pcode: '450000', pname: '广西'},
  {name: '钦南区', value: randomData(), code: '450702', pcode: '450000', pname: '广西'},
  {name: '钦北区', value: randomData(), code: '450703', pcode: '450000', pname: '广西'},
  {name: '灵山县', value: randomData(), code: '450721', pcode: '450000', pname: '广西'},
  {name: '浦北县', value: randomData(), code: '450722', pcode: '450000', pname: '广西'},
  {name: '港口区', value: randomData(), code: '450602', pcode: '450000', pname: '广西'},
  {name: '防城区', value: randomData(), code: '450603', pcode: '450000', pname: '广西'},
  {name: '上思县', value: randomData(), code: '450621', pcode: '450000', pname: '广西'},
  {name: '东兴市', value: randomData(), code: '450681', pcode: '450000', pname: '广西'},
  // 云南
  {name: '昆明市', value: randomData(), code: '530100', pcode: '100000', pname: '中国'},
  {name: '曲靖市', value: randomData(), code: '530300', pcode: '100000', pname: '中国'},
  {name: '玉溪市', value: randomData(), code: '530400', pcode: '100000', pname: '中国'},
  {name: '保山市', value: randomData(), code: '530500', pcode: '100000', pname: '中国'},
  {name: '昭通市', value: randomData(), code: '530600', pcode: '100000', pname: '中国'},
  {name: '丽江市', value: randomData(), code: '530700', pcode: '100000', pname: '中国'},
  {name: '普洱市', value: randomData(), code: '530800', pcode: '100000', pname: '中国'},
  {name: '临沧市', value: randomData(), code: '530900', pcode: '100000', pname: '中国'},
  {name: '楚雄彝族自治州', value: randomData(), code: '532300', pcode: '100000', pname: '中国'},
  {name: '红河哈尼族彝族自治州', value: randomData(), code: '532500', pcode: '100000', pname: '中国'},
  {name: '文山壮族苗族自治州', value: randomData(), code: '532600', pcode: '100000', pname: '中国'},
  {name: '西双版纳傣族自治州', value: randomData(), code: '532800', pcode: '100000', pname: '中国'},
  {name: '大理白族自治州', value: randomData(), code: '532900', pcode: '100000', pname: '中国'},
  {name: '德宏傣族景颇族自治州', value: randomData(), code: '533100', pcode: '100000', pname: '中国'},
  {name: '怒江傈僳族自治州', value: randomData(), code: '533300', pcode: '100000', pname: '中国'},
  {name: '迪庆藏族自治州', value: randomData(), code: '533400', pcode: '100000', pname: '中国'},
  // 云南各个区域
  {name: '临翔区', value: randomData(), code: '530902', pcode: '530000', pname: '云南'},
  {name: '凤庆县', value: randomData(), code: '530921', pcode: '530000', pname: '云南'},
  {name: '云县', value: randomData(), code: '530922', pcode: '530000', pname: '云南'},
  {name: '永德县', value: randomData(), code: '530923', pcode: '530000', pname: '云南'},
  {name: '镇康县', value: randomData(), code: '530924', pcode: '530000', pname: '云南'},
  {name: '双江拉祜族佤族布朗族傣族自治县', value: randomData(), code: '530925', pcode: '530000', pname: '云南'},
  {name: '耿马傣族佤族自治县', value: randomData(), code: '530926', pcode: '530000', pname: '云南'},
  {name: '沧源佤族自治县', value: randomData(), code: '530927', pcode: '530000', pname: '云南'},
  {name: '古城区', value: randomData(), code: '530702', pcode: '530000', pname: '云南'},
  {name: '玉龙纳西族自治县', value: randomData(), code: '530721', pcode: '530000', pname: '云南'},
  {name: '永胜县', value: randomData(), code: '530722', pcode: '530000', pname: '云南'},
  {name: '华坪县', value: randomData(), code: '530723', pcode: '530000', pname: '云南'},
  {name: '宁蒗彝族自治县', value: randomData(), code: '530724', pcode: '530000', pname: '云南'},
  {name: '隆阳区', value: randomData(), code: '530502', pcode: '530000', pname: '云南'},
  {name: '施甸县', value: randomData(), code: '530521', pcode: '530000', pname: '云南'},
  {name: '龙陵县', value: randomData(), code: '530523', pcode: '530000', pname: '云南'},
  {name: '昌宁县', value: randomData(), code: '530524', pcode: '530000', pname: '云南'},
  {name: '腾冲市', value: randomData(), code: '530581', pcode: '530000', pname: '云南'},
  {name: '大理市', value: randomData(), code: '532901', pcode: '530000', pname: '云南'},
  {name: '漾濞彝族自治县', value: randomData(), code: '532922', pcode: '530000', pname: '云南'},
  {name: '祥云县', value: randomData(), code: '532923', pcode: '530000', pname: '云南'},
  {name: '宾川县', value: randomData(), code: '532924', pcode: '530000', pname: '云南'},
  {name: '弥渡县', value: randomData(), code: '532925', pcode: '530000', pname: '云南'},
  {name: '南涧彝族自治县', value: randomData(), code: '532926', pcode: '530000', pname: '云南'},
  {name: '巍山彝族回族自治县', value: randomData(), code: '532927', pcode: '530000', pname: '云南'},
  {name: '永平县', value: randomData(), code: '532928', pcode: '530000', pname: '云南'},
  {name: '云龙县', value: randomData(), code: '532929', pcode: '530000', pname: '云南'},
  {name: '洱源县', value: randomData(), code: '532930', pcode: '530000', pname: '云南'},
  {name: '剑川县', value: randomData(), code: '532931', pcode: '530000', pname: '云南'},
  {name: '鹤庆县', value: randomData(), code: '532932', pcode: '530000', pname: '云南'},
  {name: '瑞丽市', value: randomData(), code: '533102', pcode: '530000', pname: '云南'},
  {name: '芒市', value: randomData(), code: '533103', pcode: '530000', pname: '云南'},
  {name: '梁河县', value: randomData(), code: '533122', pcode: '530000', pname: '云南'},
  {name: '盈江县', value: randomData(), code: '533123', pcode: '530000', pname: '云南'},
  {name: '陇川县', value: randomData(), code: '533124', pcode: '530000', pname: '云南'},
  {name: '泸水市', value: randomData(), code: '533301', pcode: '530000', pname: '云南'},
  {name: '福贡县', value: randomData(), code: '533323', pcode: '530000', pname: '云南'},
  {name: '贡山独龙族怒族自治县', value: randomData(), code: '533324', pcode: '530000', pname: '云南'},
  {name: '兰坪白族普米族自治县', value: randomData(), code: '533325', pcode: '530000', pname: '云南'},
  {name: '文山市', value: randomData(), code: '532601', pcode: '530000', pname: '云南'},
  {name: '砚山县', value: randomData(), code: '532622', pcode: '530000', pname: '云南'},
  {name: '西畴县', value: randomData(), code: '532623', pcode: '530000', pname: '云南'},
  {name: '麻栗坡县', value: randomData(), code: '532624', pcode: '530000', pname: '云南'},
  {name: '马关县', value: randomData(), code: '532625', pcode: '530000', pname: '云南'},
  {name: '丘北县', value: randomData(), code: '532626', pcode: '530000', pname: '云南'},
  {name: '广南县', value: randomData(), code: '532627', pcode: '530000', pname: '云南'},
  {name: '富宁县', value: randomData(), code: '532628', pcode: '530000', pname: '云南'},
  {name: '五华区', value: randomData(), code: '530102', pcode: '530000', pname: '云南'},
  {name: '盘龙区', value: randomData(), code: '530103', pcode: '530000', pname: '云南'},
  {name: '官渡区', value: randomData(), code: '530111', pcode: '530000', pname: '云南'},
  {name: '西山区', value: randomData(), code: '530112', pcode: '530000', pname: '云南'},
  {name: '东川区', value: randomData(), code: '530113', pcode: '530000', pname: '云南'},
  {name: '呈贡区', value: randomData(), code: '530114', pcode: '530000', pname: '云南'},
  {name: '晋宁区', value: randomData(), code: '530115', pcode: '530000', pname: '云南'},
  {name: '富民县', value: randomData(), code: '530124', pcode: '530000', pname: '云南'},
  {name: '宜良县', value: randomData(), code: '530125', pcode: '530000', pname: '云南'},
  {name: '石林彝族自治县', value: randomData(), code: '530126', pcode: '530000', pname: '云南'},
  {name: '嵩明县', value: randomData(), code: '530127', pcode: '530000', pname: '云南'},
  {name: '禄劝彝族苗族自治县', value: randomData(), code: '530128', pcode: '530000', pname: '云南'},
  {name: '寻甸回族彝族自治县', value: randomData(), code: '530129', pcode: '530000', pname: '云南'},
  {name: '安宁市', value: randomData(), code: '530181', pcode: '530000', pname: '云南'},
  {name: '昭阳区', value: randomData(), code: '530602', pcode: '530000', pname: '云南'},
  {name: '鲁甸县', value: randomData(), code: '530621', pcode: '530000', pname: '云南'},
  {name: '巧家县', value: randomData(), code: '530622', pcode: '530000', pname: '云南'},
  {name: '盐津县', value: randomData(), code: '530623', pcode: '530000', pname: '云南'},
  {name: '大关县', value: randomData(), code: '530624', pcode: '530000', pname: '云南'},
  {name: '永善县', value: randomData(), code: '530625', pcode: '530000', pname: '云南'},
  {name: '绥江县', value: randomData(), code: '530626', pcode: '530000', pname: '云南'},
  {name: '镇雄县', value: randomData(), code: '530627', pcode: '530000', pname: '云南'},
  {name: '彝良县', value: randomData(), code: '530628', pcode: '530000', pname: '云南'},
  {name: '威信县', value: randomData(), code: '530629', pcode: '530000', pname: '云南'},
  {name: '水富县', value: randomData(), code: '530681', pcode: '530000', pname: '云南'},
  {name: '思茅区', value: randomData(), code: '530802', pcode: '530000', pname: '云南'},
  {name: '宁洱哈尼族彝族自治县', value: randomData(), code: '530821', pcode: '530000', pname: '云南'},
  {name: '墨江哈尼族自治县', value: randomData(), code: '530822', pcode: '530000', pname: '云南'},
  {name: '景东彝族自治县', value: randomData(), code: '530823', pcode: '530000', pname: '云南'},
  {name: '景谷傣族彝族自治县', value: randomData(), code: '530824', pcode: '530000', pname: '云南'},
  {name: '镇沅彝族哈尼族拉祜族自治县', value: randomData(), code: '530825', pcode: '530000', pname: '云南'},
  {name: '江城哈尼族彝族自治县', value: randomData(), code: '530826', pcode: '530000', pname: '云南'},
  {name: '孟连傣族拉祜族佤族自治县', value: randomData(), code: '530827', pcode: '530000', pname: '云南'},
  {name: '澜沧拉祜族自治县', value: randomData(), code: '530828', pcode: '530000', pname: '云南'},
  {name: '西盟佤族自治县', value: randomData(), code: '530829', pcode: '530000', pname: '云南'},
  {name: '麒麟区', value: randomData(), code: '530302', pcode: '530000', pname: '云南'},
  {name: '沾益区', value: randomData(), code: '530303', pcode: '530000', pname: '云南'},
  {name: '马龙区', value: randomData(), code: '530304', pcode: '530000', pname: '云南'},
  {name: '陆良县', value: randomData(), code: '530322', pcode: '530000', pname: '云南'},
  {name: '师宗县', value: randomData(), code: '530323', pcode: '530000', pname: '云南'},
  {name: '罗平县', value: randomData(), code: '530324', pcode: '530000', pname: '云南'},
  {name: '富源县', value: randomData(), code: '530325', pcode: '530000', pname: '云南'},
  {name: '会泽县', value: randomData(), code: '530326', pcode: '530000', pname: '云南'},
  {name: '宣威市', value: randomData(), code: '530381', pcode: '530000', pname: '云南'},
  {name: '楚雄市', value: randomData(), code: '532301', pcode: '530000', pname: '云南'},
  {name: '双柏县', value: randomData(), code: '532322', pcode: '530000', pname: '云南'},
  {name: '牟定县', value: randomData(), code: '532323', pcode: '530000', pname: '云南'},
  {name: '南华县', value: randomData(), code: '532324', pcode: '530000', pname: '云南'},
  {name: '姚安县', value: randomData(), code: '532325', pcode: '530000', pname: '云南'},
  {name: '大姚县', value: randomData(), code: '532326', pcode: '530000', pname: '云南'},
  {name: '永仁县', value: randomData(), code: '532327', pcode: '530000', pname: '云南'},
  {name: '元谋县', value: randomData(), code: '532328', pcode: '530000', pname: '云南'},
  {name: '武定县', value: randomData(), code: '532329', pcode: '530000', pname: '云南'},
  {name: '禄丰县', value: randomData(), code: '532331', pcode: '530000', pname: '云南'},
  {name: '红塔区', value: randomData(), code: '530402', pcode: '530000', pname: '云南'},
  {name: '江川区', value: randomData(), code: '530403', pcode: '530000', pname: '云南'},
  {name: '澄江县', value: randomData(), code: '530422', pcode: '530000', pname: '云南'},
  {name: '通海县', value: randomData(), code: '530423', pcode: '530000', pname: '云南'},
  {name: '华宁县', value: randomData(), code: '530424', pcode: '530000', pname: '云南'},
  {name: '易门县', value: randomData(), code: '530425', pcode: '530000', pname: '云南'},
  {name: '峨山彝族自治县', value: randomData(), code: '530426', pcode: '530000', pname: '云南'},
  {name: '新平彝族傣族自治县', value: randomData(), code: '530427', pcode: '530000', pname: '云南'},
  {name: '元江哈尼族彝族傣族自治县', value: randomData(), code: '530428', pcode: '530000', pname: '云南'},
  {name: '个旧市', value: randomData(), code: '532501', pcode: '530000', pname: '云南'},
  {name: '开远市', value: randomData(), code: '532502', pcode: '530000', pname: '云南'},
  {name: '蒙自市', value: randomData(), code: '532503', pcode: '530000', pname: '云南'},
  {name: '弥勒市', value: randomData(), code: '532504', pcode: '530000', pname: '云南'},
  {name: '屏边苗族自治县', value: randomData(), code: '532523', pcode: '530000', pname: '云南'},
  {name: '建水县', value: randomData(), code: '532524', pcode: '530000', pname: '云南'},
  {name: '石屏县', value: randomData(), code: '532525', pcode: '530000', pname: '云南'},
  {name: '泸西县', value: randomData(), code: '532527', pcode: '530000', pname: '云南'},
  {name: '元阳县', value: randomData(), code: '532528', pcode: '530000', pname: '云南'},
  {name: '红河县', value: randomData(), code: '532529', pcode: '530000', pname: '云南'},
  {name: '金平苗族瑶族傣族自治县', value: randomData(), code: '532530', pcode: '530000', pname: '云南'},
  {name: '绿春县', value: randomData(), code: '532531', pcode: '530000', pname: '云南'},
  {name: '河口瑶族自治县', value: randomData(), code: '532532', pcode: '530000', pname: '云南'},
  {name: '景洪市', value: randomData(), code: '532801', pcode: '530000', pname: '云南'},
  {name: '勐海县', value: randomData(), code: '532822', pcode: '530000', pname: '云南'},
  {name: '勐腊县', value: randomData(), code: '532823', pcode: '530000', pname: '云南'},
  {name: '香格里拉市', value: randomData(), code: '533401', pcode: '530000', pname: '云南'},
  {name: '德钦县', value: randomData(), code: '533422', pcode: '530000', pname: '云南'},
  {name: '维西傈僳族自治县', value: randomData(), code: '533423', pcode: '530000', pname: '云南'},
  // 海南
  {name: '海口市', value: randomData(), code: '460100', pcode: '100000', pname: '中国'},
  {name: '三亚市', value: randomData(), code: '460200', pcode: '100000', pname: '中国'},
  {name: '三沙市', value: randomData(), code: '460300', pcode: '100000', pname: '中国'},
  {name: '儋州市', value: randomData(), code: '460400', pcode: '100000', pname: '中国'},
  {name: '五指山市', value: randomData(), code: '469001', pcode: '100000', pname: '中国'},
  {name: '琼海市', value: randomData(), code: '469002', pcode: '100000', pname: '中国'},
  {name: '文昌市', value: randomData(), code: '469005', pcode: '100000', pname: '中国'},
  {name: '万宁市', value: randomData(), code: '469006', pcode: '100000', pname: '中国'},
  {name: '东方市', value: randomData(), code: '469007', pcode: '100000', pname: '中国'},
  {name: '定安县', value: randomData(), code: '469021', pcode: '100000', pname: '中国'},
  {name: '屯昌县', value: randomData(), code: '469022', pcode: '100000', pname: '中国'},
  {name: '澄迈县', value: randomData(), code: '469023', pcode: '100000', pname: '中国'},
  {name: '临高县', value: randomData(), code: '469024', pcode: '100000', pname: '中国'},
  {name: '白沙黎族自治县', value: randomData(), code: '469025', pcode: '100000', pname: '中国'},
  {name: '昌江黎族自治县', value: randomData(), code: '469026', pcode: '100000', pname: '中国'},
  {name: '乐东黎族自治县', value: randomData(), code: '469027', pcode: '100000', pname: '中国'},
  {name: '陵水黎族自治县', value: randomData(), code: '469028', pcode: '100000', pname: '中国'},
  {name: '保亭黎族苗族自治县', value: randomData(), code: '469029', pcode: '100000', pname: '中国'},
  {name: '琼中黎族苗族自治县', value: randomData(), code: '469030', pcode: '100000', pname: '中国'},
  // 海南各个区域
  {name: '万宁市', value: randomData(), code: '469006', pcode: '460000', pname: '海南'},
  {name: '海棠区', value: randomData(), code: '460202', pcode: '460000', pname: '海南'},
  {name: '吉阳区', value: randomData(), code: '460203', pcode: '460000', pname: '海南'},
  {name: '天涯区', value: randomData(), code: '460204', pcode: '460000', pname: '海南'},
  {name: '崖州区', value: randomData(), code: '460205', pcode: '460000', pname: '海南'},
  {name: '西沙群岛', value: randomData(), code: '460321', pcode: '460000', pname: '海南'},
  {name: '南沙群岛', value: randomData(), code: '460322', pcode: '460000', pname: '海南'},
  {name: '中沙群岛的岛礁及其海域', value: randomData(), code: '460323', pcode: '460000', pname: '海南'},
  {name: '东方市', value: randomData(), code: '469007', pcode: '460000', pname: '海南'},
  {name: '临高县', value: randomData(), code: '469024', pcode: '460000', pname: '海南'},
  {name: '乐东黎族自治县', value: randomData(), code: '469027', pcode: '460000', pname: '海南'},
  {name: '五指山市', value: randomData(), code: '469001', pcode: '460000', pname: '海南'},
  {name: '保亭黎族苗族自治县', value: randomData(), code: '469029', pcode: '460000', pname: '海南'},
  {name: '儋州市', value: randomData(), code: '460400', pcode: '460000', pname: '海南'},
  {name: '定安县', value: randomData(), code: '469021', pcode: '460000', pname: '海南'},
  {name: '屯昌县', value: randomData(), code: '469022', pcode: '460000', pname: '海南'},
  {name: '文昌市', value: randomData(), code: '469005', pcode: '460000', pname: '海南'},
  {name: '昌江黎族自治县', value: randomData(), code: '469026', pcode: '460000', pname: '海南'},
  {name: '秀英区', value: randomData(), code: '460105', pcode: '460000', pname: '海南'},
  {name: '龙华区', value: randomData(), code: '460106', pcode: '460000', pname: '海南'},
  {name: '琼山区', value: randomData(), code: '460107', pcode: '460000', pname: '海南'},
  {name: '美兰区', value: randomData(), code: '460108', pcode: '460000', pname: '海南'},
  {name: '澄迈县', value: randomData(), code: '469023', pcode: '460000', pname: '海南'},
  {name: '琼中黎族苗族自治县', value: randomData(), code: '469030', pcode: '460000', pname: '海南'},
  {name: '琼海市', value: randomData(), code: '469002', pcode: '460000', pname: '海南'},
  {name: '白沙黎族自治县', value: randomData(), code: '469025', pcode: '460000', pname: '海南'},
  {name: '陵水黎族自治县', value: randomData(), code: '469028', pcode: '460000', pname: '海南'},
  // 西藏
  {name: '拉萨市', value: randomData(), code: '540100', pcode: '100000', pname: '中国'},
  {name: '日喀则市', value: randomData(), code: '540200', pcode: '100000', pname: '中国'},
  {name: '昌都市', value: randomData(), code: '540300', pcode: '100000', pname: '中国'},
  {name: '林芝市', value: randomData(), code: '540400', pcode: '100000', pname: '中国'},
  {name: '山南市', value: randomData(), code: '540500', pcode: '100000', pname: '中国'},
  {name: '那曲地区', value: randomData(), code: '542400', pcode: '100000', pname: '中国'},
  {name: '阿里地区', value: randomData(), code: '542500', pcode: '100000', pname: '中国'},
  // 西藏各个区域
  {name: '那曲县', value: randomData(), code: '542421', pcode: '540000', pname: '西藏'},
  {name: '乃东区', value: randomData(), code: '540502', pcode: '540000', pname: '西藏'},
  {name: '扎囊县', value: randomData(), code: '540521', pcode: '540000', pname: '西藏'},
  {name: '贡嘎县', value: randomData(), code: '540522', pcode: '540000', pname: '西藏'},
  {name: '桑日县', value: randomData(), code: '540523', pcode: '540000', pname: '西藏'},
  {name: '琼结县', value: randomData(), code: '540524', pcode: '540000', pname: '西藏'},
  {name: '曲松县', value: randomData(), code: '540525', pcode: '540000', pname: '西藏'},
  {name: '措美县', value: randomData(), code: '540526', pcode: '540000', pname: '西藏'},
  {name: '洛扎县', value: randomData(), code: '540527', pcode: '540000', pname: '西藏'},
  {name: '加查县', value: randomData(), code: '540528', pcode: '540000', pname: '西藏'},
  {name: '隆子县', value: randomData(), code: '540529', pcode: '540000', pname: '西藏'},
  {name: '错那县', value: randomData(), code: '540530', pcode: '540000', pname: '西藏'},
  {name: '浪卡子县', value: randomData(), code: '540531', pcode: '540000', pname: '西藏'},
  {name: '城关区', value: randomData(), code: '540102', pcode: '540000', pname: '西藏'},
  {name: '堆龙德庆区', value: randomData(), code: '540103', pcode: '540000', pname: '西藏'},
  {name: '达孜县', value: randomData(), code: '540104', pcode: '540000', pname: '西藏'},
  {name: '林周县', value: randomData(), code: '540121', pcode: '540000', pname: '西藏'},
  {name: '当雄县', value: randomData(), code: '540122', pcode: '540000', pname: '西藏'},
  {name: '尼木县', value: randomData(), code: '540123', pcode: '540000', pname: '西藏'},
  {name: '曲水县', value: randomData(), code: '540124', pcode: '540000', pname: '西藏'},
  {name: '墨竹工卡县', value: randomData(), code: '540127', pcode: '540000', pname: '西藏'},
  {name: '桑珠孜区', value: randomData(), code: '540202', pcode: '540000', pname: '西藏'},
  {name: '南木林县', value: randomData(), code: '540221', pcode: '540000', pname: '西藏'},
  {name: '江孜县', value: randomData(), code: '540222', pcode: '540000', pname: '西藏'},
  {name: '定日县', value: randomData(), code: '540223', pcode: '540000', pname: '西藏'},
  {name: '萨迦县', value: randomData(), code: '540224', pcode: '540000', pname: '西藏'},
  {name: '拉孜县', value: randomData(), code: '540225', pcode: '540000', pname: '西藏'},
  {name: '昂仁县', value: randomData(), code: '540226', pcode: '540000', pname: '西藏'},
  {name: '谢通门县', value: randomData(), code: '540227', pcode: '540000', pname: '西藏'},
  {name: '白朗县', value: randomData(), code: '540228', pcode: '540000', pname: '西藏'},
  {name: '仁布县', value: randomData(), code: '540229', pcode: '540000', pname: '西藏'},
  {name: '康马县', value: randomData(), code: '540230', pcode: '540000', pname: '西藏'},
  {name: '定结县', value: randomData(), code: '540231', pcode: '540000', pname: '西藏'},
  {name: '仲巴县', value: randomData(), code: '540232', pcode: '540000', pname: '西藏'},
  {name: '亚东县', value: randomData(), code: '540233', pcode: '540000', pname: '西藏'},
  {name: '吉隆县', value: randomData(), code: '540234', pcode: '540000', pname: '西藏'},
  {name: '聂拉木县', value: randomData(), code: '540235', pcode: '540000', pname: '西藏'},
  {name: '萨嘎县', value: randomData(), code: '540236', pcode: '540000', pname: '西藏'},
  {name: '岗巴县', value: randomData(), code: '540237', pcode: '540000', pname: '西藏'},
  {name: '卡若区', value: randomData(), code: '540302', pcode: '540000', pname: '西藏'},
  {name: '江达县', value: randomData(), code: '540321', pcode: '540000', pname: '西藏'},
  {name: '贡觉县', value: randomData(), code: '540322', pcode: '540000', pname: '西藏'},
  {name: '类乌齐县', value: randomData(), code: '540323', pcode: '540000', pname: '西藏'},
  {name: '丁青县', value: randomData(), code: '540324', pcode: '540000', pname: '西藏'},
  {name: '察雅县', value: randomData(), code: '540325', pcode: '540000', pname: '西藏'},
  {name: '八宿县', value: randomData(), code: '540326', pcode: '540000', pname: '西藏'},
  {name: '左贡县', value: randomData(), code: '540327', pcode: '540000', pname: '西藏'},
  {name: '芒康县', value: randomData(), code: '540328', pcode: '540000', pname: '西藏'},
  {name: '洛隆县', value: randomData(), code: '540329', pcode: '540000', pname: '西藏'},
  {name: '边坝县', value: randomData(), code: '540330', pcode: '540000', pname: '西藏'},
  {name: '巴宜区', value: randomData(), code: '540402', pcode: '540000', pname: '西藏'},
  {name: '工布江达县', value: randomData(), code: '540421', pcode: '540000', pname: '西藏'},
  {name: '米林县', value: randomData(), code: '540422', pcode: '540000', pname: '西藏'},
  {name: '墨脱县', value: randomData(), code: '540423', pcode: '540000', pname: '西藏'},
  {name: '波密县', value: randomData(), code: '540424', pcode: '540000', pname: '西藏'},
  {name: '察隅县', value: randomData(), code: '540425', pcode: '540000', pname: '西藏'},
  {name: '朗县', value: randomData(), code: '540426', pcode: '540000', pname: '西藏'},
  {name: '色尼区', value: randomData(), code: '540602', pcode: '540000', pname: '西藏'},
  {name: '嘉黎县', value: randomData(), code: '540621', pcode: '540000', pname: '西藏'},
  {name: '比如县', value: randomData(), code: '540622', pcode: '540000', pname: '西藏'},
  {name: '聂荣县', value: randomData(), code: '540623', pcode: '540000', pname: '西藏'},
  {name: '安多县', value: randomData(), code: '540624', pcode: '540000', pname: '西藏'},
  {name: '申扎县', value: randomData(), code: '540625', pcode: '540000', pname: '西藏'},
  {name: '索县', value: randomData(), code: '540626', pcode: '540000', pname: '西藏'},
  {name: '班戈县', value: randomData(), code: '540627', pcode: '540000', pname: '西藏'},
  {name: '巴青县', value: randomData(), code: '540628', pcode: '540000', pname: '西藏'},
  {name: '尼玛县', value: randomData(), code: '540629', pcode: '540000', pname: '西藏'},
  {name: '双湖县', value: randomData(), code: '540630', pcode: '540000', pname: '西藏'},
  {name: '普兰县', value: randomData(), code: '542521', pcode: '540000', pname: '西藏'},
  {name: '札达县', value: randomData(), code: '542522', pcode: '540000', pname: '西藏'},
  {name: '噶尔县', value: randomData(), code: '542523', pcode: '540000', pname: '西藏'},
  {name: '日土县', value: randomData(), code: '542524', pcode: '540000', pname: '西藏'},
  {name: '革吉县', value: randomData(), code: '542525', pcode: '540000', pname: '西藏'},
  {name: '改则县', value: randomData(), code: '542526', pcode: '540000', pname: '西藏'},
  {name: '措勤县', value: randomData(), code: '542527', pcode: '540000', pname: '西藏'},
  // 新疆
  {name: '乌鲁木齐市', value: randomData(), code: '650100', pcode: '100000', pname: '中国'},
  {name: '克拉玛依市', value: randomData(), code: '650200', pcode: '100000', pname: '中国'},
  {name: '吐鲁番市', value: randomData(), code: '650400', pcode: '100000', pname: '中国'},
  {name: '哈密市', value: randomData(), code: '650500', pcode: '100000', pname: '中国'},
  {name: '昌吉回族自治州', value: randomData(), code: '652300', pcode: '100000', pname: '中国'},
  {name: '博尔塔拉蒙古自治州', value: randomData(), code: '652700', pcode: '100000', pname: '中国'},
  {name: '巴音郭楞蒙古自治州', value: randomData(), code: '652800', pcode: '100000', pname: '中国'},
  {name: '阿克苏地区', value: randomData(), code: '652900', pcode: '100000', pname: '中国'},
  {name: '克孜勒苏柯尔克孜自治州', value: randomData(), code: '653000', pcode: '100000', pname: '中国'},
  {name: '喀什地区', value: randomData(), code: '653100', pcode: '100000', pname: '中国'},
  {name: '和田地区', value: randomData(), code: '653200', pcode: '100000', pname: '中国'},
  {name: '伊犁哈萨克自治州', value: randomData(), code: '654000', pcode: '100000', pname: '中国'},
  {name: '塔城地区', value: randomData(), code: '654200', pcode: '100000', pname: '中国'},
  {name: '阿勒泰地区', value: randomData(), code: '654300', pcode: '100000', pname: '中国'},
  {name: '石河子市', value: randomData(), code: '659001', pcode: '100000', pname: '中国'},
  {name: '阿拉尔市', value: randomData(), code: '659002', pcode: '100000', pname: '中国'},
  {name: '图木舒克市', value: randomData(), code: '659003', pcode: '100000', pname: '中国'},
  {name: '五家渠市', value: randomData(), code: '659004', pcode: '100000', pname: '中国'},
  {name: '北屯市', value: randomData(), code: '659005', pcode: '100000', pname: '中国'},
  {name: '铁门关市', value: randomData(), code: '659006', pcode: '100000', pname: '中国'},
  {name: '双河市', value: randomData(), code: '659007', pcode: '100000', pname: '中国'},
  {name: '可克达拉市', value: randomData(), code: '659008', pcode: '100000', pname: '中国'},
  {name: '昆玉市', value: randomData(), code: '659009', pcode: '100000', pname: '中国'},
  // 新疆各个区域
  {name: '喀什市', value: randomData(), code: '653101', pcode: '650000', pname: '新疆'},
  {name: '疏附县', value: randomData(), code: '653121', pcode: '650000', pname: '新疆'},
  {name: '疏勒县', value: randomData(), code: '653122', pcode: '650000', pname: '新疆'},
  {name: '英吉沙县', value: randomData(), code: '653123', pcode: '650000', pname: '新疆'},
  {name: '泽普县', value: randomData(), code: '653124', pcode: '650000', pname: '新疆'},
  {name: '莎车县', value: randomData(), code: '653125', pcode: '650000', pname: '新疆'},
  {name: '叶城县', value: randomData(), code: '653126', pcode: '650000', pname: '新疆'},
  {name: '麦盖提县', value: randomData(), code: '653127', pcode: '650000', pname: '新疆'},
  {name: '岳普湖县', value: randomData(), code: '653128', pcode: '650000', pname: '新疆'},
  {name: '伽师县', value: randomData(), code: '653129', pcode: '650000', pname: '新疆'},
  {name: '巴楚县', value: randomData(), code: '653130', pcode: '650000', pname: '新疆'},
  {name: '塔什库尔干塔吉克自治县', value: randomData(), code: '653131', pcode: '650000', pname: '新疆'},
  {name: '博乐市', value: randomData(), code: '652701', pcode: '650000', pname: '新疆'},
  {name: '阿拉山口市', value: randomData(), code: '652702', pcode: '650000', pname: '新疆'},
  {name: '精河县', value: randomData(), code: '652722', pcode: '650000', pname: '新疆'},
  {name: '温泉县', value: randomData(), code: '652723', pcode: '650000', pname: '新疆'},
  {name: '天山区', value: randomData(), code: '650102', pcode: '650000', pname: '新疆'},
  {name: '沙依巴克区', value: randomData(), code: '650103', pcode: '650000', pname: '新疆'},
  {name: '新市区', value: randomData(), code: '650104', pcode: '650000', pname: '新疆'},
  {name: '水磨沟区', value: randomData(), code: '650105', pcode: '650000', pname: '新疆'},
  {name: '头屯河区', value: randomData(), code: '650106', pcode: '650000', pname: '新疆'},
  {name: '达坂城区', value: randomData(), code: '650107', pcode: '650000', pname: '新疆'},
  {name: '米东区', value: randomData(), code: '650109', pcode: '650000', pname: '新疆'},
  {name: '乌鲁木齐县', value: randomData(), code: '650121', pcode: '650000', pname: '新疆'},
  {name: '五家渠市', value: randomData(), code: '659004', pcode: '650000', pname: '新疆'},
  {name: '伊宁市', value: randomData(), code: '654002', pcode: '650000', pname: '新疆'},
  {name: '奎屯市', value: randomData(), code: '654003', pcode: '650000', pname: '新疆'},
  {name: '霍尔果斯市', value: randomData(), code: '654004', pcode: '650000', pname: '新疆'},
  {name: '伊宁县', value: randomData(), code: '654021', pcode: '650000', pname: '新疆'},
  {name: '察布查尔锡伯自治县', value: randomData(), code: '654022', pcode: '650000', pname: '新疆'},
  {name: '霍城县', value: randomData(), code: '654023', pcode: '650000', pname: '新疆'},
  {name: '巩留县', value: randomData(), code: '654024', pcode: '650000', pname: '新疆'},
  {name: '新源县', value: randomData(), code: '654025', pcode: '650000', pname: '新疆'},
  {name: '昭苏县', value: randomData(), code: '654026', pcode: '650000', pname: '新疆'},
  {name: '特克斯县', value: randomData(), code: '654027', pcode: '650000', pname: '新疆'},
  {name: '尼勒克县', value: randomData(), code: '654028', pcode: '650000', pname: '新疆'},
  {name: '阿图什市', value: randomData(), code: '653001', pcode: '650000', pname: '新疆'},
  {name: '阿克陶县', value: randomData(), code: '653022', pcode: '650000', pname: '新疆'},
  {name: '阿合奇县', value: randomData(), code: '653023', pcode: '650000', pname: '新疆'},
  {name: '乌恰县', value: randomData(), code: '653024', pcode: '650000', pname: '新疆'},
  {name: '独山子区', value: randomData(), code: '650202', pcode: '650000', pname: '新疆'},
  {name: '克拉玛依区', value: randomData(), code: '650203', pcode: '650000', pname: '新疆'},
  {name: '白碱滩区', value: randomData(), code: '650204', pcode: '650000', pname: '新疆'},
  {name: '乌尔禾区', value: randomData(), code: '650205', pcode: '650000', pname: '新疆'},
  {name: '北屯市', value: randomData(), code: '659005', pcode: '650000', pname: '新疆'},
  {name: '博尔塔拉蒙古自治州', value: randomData(), code: '652700', pcode: '650000', pname: '新疆'},
  {name: '双河市', value: randomData(), code: '659007', pcode: '650000', pname: '新疆'},
  {name: '可克达拉市', value: randomData(), code: '659008', pcode: '650000', pname: '新疆'},
  {name: '高昌区', value: randomData(), code: '650402', pcode: '650000', pname: '新疆'},
  {name: '鄯善县', value: randomData(), code: '650421', pcode: '650000', pname: '新疆'},
  {name: '托克逊县', value: randomData(), code: '650422', pcode: '650000', pname: '新疆'},
  {name: '和田市', value: randomData(), code: '653201', pcode: '650000', pname: '新疆'},
  {name: '和田县', value: randomData(), code: '653221', pcode: '650000', pname: '新疆'},
  {name: '墨玉县', value: randomData(), code: '653222', pcode: '650000', pname: '新疆'},
  {name: '皮山县', value: randomData(), code: '653223', pcode: '650000', pname: '新疆'},
  {name: '洛浦县', value: randomData(), code: '653224', pcode: '650000', pname: '新疆'},
  {name: '策勒县', value: randomData(), code: '653225', pcode: '650000', pname: '新疆'},
  {name: '于田县', value: randomData(), code: '653226', pcode: '650000', pname: '新疆'},
  {name: '民丰县', value: randomData(), code: '653227', pcode: '650000', pname: '新疆'},
  {name: '伊州区', value: randomData(), code: '650502', pcode: '650000', pname: '新疆'},
  {name: '巴里坤哈萨克自治县', value: randomData(), code: '650521', pcode: '650000', pname: '新疆'},
  {name: '伊吾县', value: randomData(), code: '650522', pcode: '650000', pname: '新疆'},
  {name: '喀什地区', value: randomData(), code: '653100', pcode: '650000', pname: '新疆'},
  {name: '图木舒克市', value: randomData(), code: '659003', pcode: '650000', pname: '新疆'},
  {name: '塔城市', value: randomData(), code: '654201', pcode: '650000', pname: '新疆'},
  {name: '乌苏市', value: randomData(), code: '654202', pcode: '650000', pname: '新疆'},
  {name: '额敏县', value: randomData(), code: '654221', pcode: '650000', pname: '新疆'},
  {name: '沙湾县', value: randomData(), code: '654223', pcode: '650000', pname: '新疆'},
  {name: '托里县', value: randomData(), code: '654224', pcode: '650000', pname: '新疆'},
  {name: '裕民县', value: randomData(), code: '654225', pcode: '650000', pname: '新疆'},
  {name: '和布克赛尔蒙古自治县', value: randomData(), code: '654226', pcode: '650000', pname: '新疆'},
  {name: '库尔勒市', value: randomData(), code: '652801', pcode: '650000', pname: '新疆'},
  {name: '轮台县', value: randomData(), code: '652822', pcode: '650000', pname: '新疆'},
  {name: '尉犁县', value: randomData(), code: '652823', pcode: '650000', pname: '新疆'},
  {name: '若羌县', value: randomData(), code: '652824', pcode: '650000', pname: '新疆'},
  {name: '且末县', value: randomData(), code: '652825', pcode: '650000', pname: '新疆'},
  {name: '焉耆回族自治县', value: randomData(), code: '652826', pcode: '650000', pname: '新疆'},
  {name: '和静县', value: randomData(), code: '652827', pcode: '650000', pname: '新疆'},
  {name: '和硕县', value: randomData(), code: '652828', pcode: '650000', pname: '新疆'},
  {name: '博湖县', value: randomData(), code: '652829', pcode: '650000', pname: '新疆'},
  {name: '昆玉市', value: randomData(), code: '659009', pcode: '650000', pname: '新疆'},
  {name: '昌吉市', value: randomData(), code: '652301', pcode: '650000', pname: '新疆'},
  {name: '阜康市', value: randomData(), code: '652302', pcode: '650000', pname: '新疆'},
  {name: '呼图壁县', value: randomData(), code: '652323', pcode: '650000', pname: '新疆'},
  {name: '玛纳斯县', value: randomData(), code: '652324', pcode: '650000', pname: '新疆'},
  {name: '奇台县', value: randomData(), code: '652325', pcode: '650000', pname: '新疆'},
  {name: '吉木萨尔县', value: randomData(), code: '652327', pcode: '650000', pname: '新疆'},
  {name: '木垒哈萨克自治县', value: randomData(), code: '652328', pcode: '650000', pname: '新疆'},
  {name: '石河子市', value: randomData(), code: '659001', pcode: '650000', pname: '新疆'},
  {name: '铁门关市', value: randomData(), code: '659006', pcode: '650000', pname: '新疆'},
  {name: '阿克苏市', value: randomData(), code: '652901', pcode: '650000', pname: '新疆'},
  {name: '温宿县', value: randomData(), code: '652922', pcode: '650000', pname: '新疆'},
  {name: '库车县', value: randomData(), code: '652923', pcode: '650000', pname: '新疆'},
  {name: '沙雅县', value: randomData(), code: '652924', pcode: '650000', pname: '新疆'},
  {name: '新和县', value: randomData(), code: '652925', pcode: '650000', pname: '新疆'},
  {name: '拜城县', value: randomData(), code: '652926', pcode: '650000', pname: '新疆'},
  {name: '乌什县', value: randomData(), code: '652927', pcode: '650000', pname: '新疆'},
  {name: '阿瓦提县', value: randomData(), code: '652928', pcode: '650000', pname: '新疆'},
  {name: '柯坪县', value: randomData(), code: '652929', pcode: '650000', pname: '新疆'},
  {name: '阿勒泰市', value: randomData(), code: '654301', pcode: '650000', pname: '新疆'},
  {name: '布尔津县', value: randomData(), code: '654321', pcode: '650000', pname: '新疆'},
  {name: '富蕴县', value: randomData(), code: '654322', pcode: '650000', pname: '新疆'},
  {name: '福海县', value: randomData(), code: '654323', pcode: '650000', pname: '新疆'},
  {name: '哈巴河县', value: randomData(), code: '654324', pcode: '650000', pname: '新疆'},
  {name: '青河县', value: randomData(), code: '654325', pcode: '650000', pname: '新疆'},
  {name: '吉木乃县', value: randomData(), code: '654326', pcode: '650000', pname: '新疆'},
  {name: '阿拉尔市', value: randomData(), code: '659002', pcode: '650000', pname: '新疆'},
  // 甘肃
  {name: '兰州市', value: randomData(), code: '620100', pcode: '100000', pname: '中国'},
  {name: '嘉峪关市', value: randomData(), code: '620200', pcode: '100000', pname: '中国'},
  {name: '金昌市', value: randomData(), code: '620300', pcode: '100000', pname: '中国'},
  {name: '白银市', value: randomData(), code: '620400', pcode: '100000', pname: '中国'},
  {name: '天水市', value: randomData(), code: '620500', pcode: '100000', pname: '中国'},
  {name: '武威市', value: randomData(), code: '620600', pcode: '100000', pname: '中国'},
  {name: '张掖市', value: randomData(), code: '620700', pcode: '100000', pname: '中国'},
  {name: '平凉市', value: randomData(), code: '620800', pcode: '100000', pname: '中国'},
  {name: '酒泉市', value: randomData(), code: '620900', pcode: '100000', pname: '中国'},
  {name: '庆阳市', value: randomData(), code: '621000', pcode: '100000', pname: '中国'},
  {name: '定西市', value: randomData(), code: '621100', pcode: '100000', pname: '中国'},
  {name: '陇南市', value: randomData(), code: '621200', pcode: '100000', pname: '中国'},
  {name: '临夏回族自治州', value: randomData(), code: '622900', pcode: '100000', pname: '中国'},
  {name: '甘南藏族自治州', value: randomData(), code: '623000', pcode: '100000', pname: '中国'},
  // 甘肃各个区域
  {name: '合作市', value: randomData(), code: '623001', pcode: '620000', pname: '甘肃'},
  {name: '临潭县', value: randomData(), code: '623021', pcode: '620000', pname: '甘肃'},
  {name: '卓尼县', value: randomData(), code: '623022', pcode: '620000', pname: '甘肃'},
  {name: '舟曲县', value: randomData(), code: '623023', pcode: '620000', pname: '甘肃'},
  {name: '迭部县', value: randomData(), code: '623024', pcode: '620000', pname: '甘肃'},
  {name: '玛曲县', value: randomData(), code: '623025', pcode: '620000', pname: '甘肃'},
  {name: '碌曲县', value: randomData(), code: '623026', pcode: '620000', pname: '甘肃'},
  {name: '夏河县', value: randomData(), code: '623027', pcode: '620000', pname: '甘肃'},
  {name: '崆峒区', value: randomData(), code: '620802', pcode: '620000', pname: '甘肃'},
  {name: '泾川县', value: randomData(), code: '620821', pcode: '620000', pname: '甘肃'},
  {name: '灵台县', value: randomData(), code: '620822', pcode: '620000', pname: '甘肃'},
  {name: '崇信县', value: randomData(), code: '620823', pcode: '620000', pname: '甘肃'},
  {name: '庄浪县', value: randomData(), code: '620825', pcode: '620000', pname: '甘肃'},
  {name: '静宁县', value: randomData(), code: '620826', pcode: '620000', pname: '甘肃'},
  {name: '华亭市', value: randomData(), code: '620881', pcode: '620000', pname: '甘肃'},
  {name: '临夏市', value: randomData(), code: '622901', pcode: '620000', pname: '甘肃'},
  {name: '临夏县', value: randomData(), code: '622921', pcode: '620000', pname: '甘肃'},
  {name: '康乐县', value: randomData(), code: '622922', pcode: '620000', pname: '甘肃'},
  {name: '永靖县', value: randomData(), code: '622923', pcode: '620000', pname: '甘肃'},
  {name: '广河县', value: randomData(), code: '622924', pcode: '620000', pname: '甘肃'},
  {name: '和政县', value: randomData(), code: '622925', pcode: '620000', pname: '甘肃'},
  {name: '东乡族自治县', value: randomData(), code: '622926', pcode: '620000', pname: '甘肃'},
  {name: '积石山保安族东乡族撒拉族自治县', value: randomData(), code: '622927', pcode: '620000', pname: '甘肃'},
  {name: '城关区', value: randomData(), code: '620102', pcode: '620000', pname: '甘肃'},
  {name: '七里河区', value: randomData(), code: '620103', pcode: '620000', pname: '甘肃'},
  {name: '西固区', value: randomData(), code: '620104', pcode: '620000', pname: '甘肃'},
  {name: '安宁区', value: randomData(), code: '620105', pcode: '620000', pname: '甘肃'},
  {name: '红古区', value: randomData(), code: '620111', pcode: '620000', pname: '甘肃'},
  {name: '永登县', value: randomData(), code: '620121', pcode: '620000', pname: '甘肃'},
  {name: '皋兰县', value: randomData(), code: '620122', pcode: '620000', pname: '甘肃'},
  {name: '榆中县', value: randomData(), code: '620123', pcode: '620000', pname: '甘肃'},
  {name: '嘉峪关市', value: randomData(), code: '620200', pcode: '620000', pname: '甘肃'},
  {name: '秦州区', value: randomData(), code: '620502', pcode: '620000', pname: '甘肃'},
  {name: '麦积区', value: randomData(), code: '620503', pcode: '620000', pname: '甘肃'},
  {name: '清水县', value: randomData(), code: '620521', pcode: '620000', pname: '甘肃'},
  {name: '秦安县', value: randomData(), code: '620522', pcode: '620000', pname: '甘肃'},
  {name: '甘谷县', value: randomData(), code: '620523', pcode: '620000', pname: '甘肃'},
  {name: '武山县', value: randomData(), code: '620524', pcode: '620000', pname: '甘肃'},
  {name: '张家川回族自治县', value: randomData(), code: '620525', pcode: '620000', pname: '甘肃'},
  {name: '安定区', value: randomData(), code: '621102', pcode: '620000', pname: '甘肃'},
  {name: '通渭县', value: randomData(), code: '621121', pcode: '620000', pname: '甘肃'},
  {name: '陇西县', value: randomData(), code: '621122', pcode: '620000', pname: '甘肃'},
  {name: '渭源县', value: randomData(), code: '621123', pcode: '620000', pname: '甘肃'},
  {name: '临洮县', value: randomData(), code: '621124', pcode: '620000', pname: '甘肃'},
  {name: '漳县', value: randomData(), code: '621125', pcode: '620000', pname: '甘肃'},
  {name: '岷县', value: randomData(), code: '621126', pcode: '620000', pname: '甘肃'},
  {name: '平凉市', value: randomData(), code: '620800', pcode: '620000', pname: '甘肃'},
  {name: '西峰区', value: randomData(), code: '621002', pcode: '620000', pname: '甘肃'},
  {name: '庆城县', value: randomData(), code: '621021', pcode: '620000', pname: '甘肃'},
  {name: '环县', value: randomData(), code: '621022', pcode: '620000', pname: '甘肃'},
  {name: '华池县', value: randomData(), code: '621023', pcode: '620000', pname: '甘肃'},
  {name: '合水县', value: randomData(), code: '621024', pcode: '620000', pname: '甘肃'},
  {name: '正宁县', value: randomData(), code: '621025', pcode: '620000', pname: '甘肃'},
  {name: '宁县', value: randomData(), code: '621026', pcode: '620000', pname: '甘肃'},
  {name: '镇原县', value: randomData(), code: '621027', pcode: '620000', pname: '甘肃'},
  {name: '甘州区', value: randomData(), code: '620702', pcode: '620000', pname: '甘肃'},
  {name: '肃南裕固族自治县', value: randomData(), code: '620721', pcode: '620000', pname: '甘肃'},
  {name: '民乐县', value: randomData(), code: '620722', pcode: '620000', pname: '甘肃'},
  {name: '临泽县', value: randomData(), code: '620723', pcode: '620000', pname: '甘肃'},
  {name: '高台县', value: randomData(), code: '620724', pcode: '620000', pname: '甘肃'},
  {name: '山丹县', value: randomData(), code: '620725', pcode: '620000', pname: '甘肃'},
  {name: '凉州区', value: randomData(), code: '620602', pcode: '620000', pname: '甘肃'},
  {name: '民勤县', value: randomData(), code: '620621', pcode: '620000', pname: '甘肃'},
  {name: '古浪县', value: randomData(), code: '620622', pcode: '620000', pname: '甘肃'},
  {name: '天祝藏族自治县', value: randomData(), code: '620623', pcode: '620000', pname: '甘肃'},
  {name: '甘南藏族自治州', value: randomData(), code: '623000', pcode: '620000', pname: '甘肃'},
  {name: '白银区', value: randomData(), code: '620402', pcode: '620000', pname: '甘肃'},
  {name: '平川区', value: randomData(), code: '620403', pcode: '620000', pname: '甘肃'},
  {name: '靖远县', value: randomData(), code: '620421', pcode: '620000', pname: '甘肃'},
  {name: '会宁县', value: randomData(), code: '620422', pcode: '620000', pname: '甘肃'},
  {name: '景泰县', value: randomData(), code: '620423', pcode: '620000', pname: '甘肃'},
  {name: '肃州区', value: randomData(), code: '620902', pcode: '620000', pname: '甘肃'},
  {name: '金塔县', value: randomData(), code: '620921', pcode: '620000', pname: '甘肃'},
  {name: '瓜州县', value: randomData(), code: '620922', pcode: '620000', pname: '甘肃'},
  {name: '肃北蒙古族自治县', value: randomData(), code: '620923', pcode: '620000', pname: '甘肃'},
  {name: '阿克塞哈萨克族自治县', value: randomData(), code: '620924', pcode: '620000', pname: '甘肃'},
  {name: '玉门市', value: randomData(), code: '620981', pcode: '620000', pname: '甘肃'},
  {name: '敦煌市', value: randomData(), code: '620982', pcode: '620000', pname: '甘肃'},
  {name: '金川区', value: randomData(), code: '620302', pcode: '620000', pname: '甘肃'},
  {name: '永昌县', value: randomData(), code: '620321', pcode: '620000', pname: '甘肃'},
  {name: '武都区', value: randomData(), code: '621202', pcode: '620000', pname: '甘肃'},
  {name: '成县', value: randomData(), code: '621221', pcode: '620000', pname: '甘肃'},
  {name: '文县', value: randomData(), code: '621222', pcode: '620000', pname: '甘肃'},
  {name: '宕昌县', value: randomData(), code: '621223', pcode: '620000', pname: '甘肃'},
  {name: '康县', value: randomData(), code: '621224', pcode: '620000', pname: '甘肃'},
  {name: '西和县', value: randomData(), code: '621225', pcode: '620000', pname: '甘肃'},
  {name: '礼县', value: randomData(), code: '621226', pcode: '620000', pname: '甘肃'},
  {name: '徽县', value: randomData(), code: '621227', pcode: '620000', pname: '甘肃'},
  {name: '两当县', value: randomData(), code: '621228', pcode: '620000', pname: '甘肃'},
  // 青海
  {name: '西宁市', value: randomData(), code: '630100', pcode: '100000', pname: '中国'},
  {name: '海东市', value: randomData(), code: '630200', pcode: '100000', pname: '中国'},
  {name: '海北藏族自治州', value: randomData(), code: '632200', pcode: '100000', pname: '中国'},
  {name: '黄南藏族自治州', value: randomData(), code: '632300', pcode: '100000', pname: '中国'},
  {name: '海南藏族自治州', value: randomData(), code: '632500', pcode: '100000', pname: '中国'},
  {name: '果洛藏族自治州', value: randomData(), code: '632600', pcode: '100000', pname: '中国'},
  {name: '玉树藏族自治州', value: randomData(), code: '632700', pcode: '100000', pname: '中国'},
  {name: '海西蒙古族藏族自治州', value: randomData(), code: '632800', pcode: '100000', pname: '中国'},
  // { name: '和平区',value: randomData(),code:"210102",pcode:"210000",pname:"辽宁"},
  // 青海各个区域
  {name: '玛沁县', value: randomData(), code: '632621', pcode: '630000', pname: '青海'},
  {name: '班玛县', value: randomData(), code: '632622', pcode: '630000', pname: '青海'},
  {name: '甘德县', value: randomData(), code: '632623', pcode: '630000', pname: '青海'},
  {name: '达日县', value: randomData(), code: '632624', pcode: '630000', pname: '青海'},
  {name: '久治县', value: randomData(), code: '632625', pcode: '630000', pname: '青海'},
  {name: '玛多县', value: randomData(), code: '632626', pcode: '630000', pname: '青海'},
  {name: '果洛藏族自治州', value: randomData(), code: '632600', pcode: '630000', pname: '青海'},
  {name: '乐都区', value: randomData(), code: '630202', pcode: '630000', pname: '青海'},
  {name: '平安区', value: randomData(), code: '630203', pcode: '630000', pname: '青海'},
  {name: '民和回族土族自治县', value: randomData(), code: '630222', pcode: '630000', pname: '青海'},
  {name: '互助土族自治县', value: randomData(), code: '630223', pcode: '630000', pname: '青海'},
  {name: '化隆回族自治县', value: randomData(), code: '630224', pcode: '630000', pname: '青海'},
  {name: '循化撒拉族自治县', value: randomData(), code: '630225', pcode: '630000', pname: '青海'},
  {name: '门源回族自治县', value: randomData(), code: '632221', pcode: '630000', pname: '青海'},
  {name: '祁连县', value: randomData(), code: '632222', pcode: '630000', pname: '青海'},
  {name: '海晏县', value: randomData(), code: '632223', pcode: '630000', pname: '青海'},
  {name: '刚察县', value: randomData(), code: '632224', pcode: '630000', pname: '青海'},
  {name: '共和县', value: randomData(), code: '632521', pcode: '630000', pname: '青海'},
  {name: '同德县', value: randomData(), code: '632522', pcode: '630000', pname: '青海'},
  {name: '贵德县', value: randomData(), code: '632523', pcode: '630000', pname: '青海'},
  {name: '兴海县', value: randomData(), code: '632524', pcode: '630000', pname: '青海'},
  {name: '贵南县', value: randomData(), code: '632525', pcode: '630000', pname: '青海'},
  {name: '格尔木市', value: randomData(), code: '632801', pcode: '630000', pname: '青海'},
  {name: '德令哈市', value: randomData(), code: '632802', pcode: '630000', pname: '青海'},
  {name: '茫崖市', value: randomData(), code: '632803', pcode: '630000', pname: '青海'},
  {name: '乌兰县', value: randomData(), code: '632821', pcode: '630000', pname: '青海'},
  {name: '都兰县', value: randomData(), code: '632822', pcode: '630000', pname: '青海'},
  {name: '天峻县', value: randomData(), code: '632823', pcode: '630000', pname: '青海'},
  {name: '海西蒙古族藏族自治州直辖', value: randomData(), code: '632825', pcode: '630000', pname: '青海'},
  {name: '玉树市', value: randomData(), code: '632701', pcode: '630000', pname: '青海'},
  {name: '杂多县', value: randomData(), code: '632722', pcode: '630000', pname: '青海'},
  {name: '称多县', value: randomData(), code: '632723', pcode: '630000', pname: '青海'},
  {name: '治多县', value: randomData(), code: '632724', pcode: '630000', pname: '青海'},
  {name: '囊谦县', value: randomData(), code: '632725', pcode: '630000', pname: '青海'},
  {name: '曲麻莱县', value: randomData(), code: '632726', pcode: '630000', pname: '青海'},
  {name: '城东区', value: randomData(), code: '630102', pcode: '630000', pname: '青海'},
  {name: '城中区', value: randomData(), code: '630103', pcode: '630000', pname: '青海'},
  {name: '城西区', value: randomData(), code: '630104', pcode: '630000', pname: '青海'},
  {name: '城北区', value: randomData(), code: '630105', pcode: '630000', pname: '青海'},
  {name: '大通回族土族自治县', value: randomData(), code: '630121', pcode: '630000', pname: '青海'},
  {name: '湟中县', value: randomData(), code: '630122', pcode: '630000', pname: '青海'},
  {name: '湟源县', value: randomData(), code: '630123', pcode: '630000', pname: '青海'},
  {name: '同仁县', value: randomData(), code: '632321', pcode: '630000', pname: '青海'},
  {name: '尖扎县', value: randomData(), code: '632322', pcode: '630000', pname: '青海'},
  {name: '泽库县', value: randomData(), code: '632323', pcode: '630000', pname: '青海'},
  {name: '河南蒙古族自治县', value: randomData(), code: '632324', pcode: '630000', pname: '青海'},
  // 四川
  {name: '成都市', value: randomData(), code: '510100', pcode: '100000', pname: '中国'},
  {name: '自贡市', value: randomData(), code: '510300', pcode: '100000', pname: '中国'},
  {name: '攀枝花市', value: randomData(), code: '510400', pcode: '100000', pname: '中国'},
  {name: '泸州市', value: randomData(), code: '510500', pcode: '100000', pname: '中国'},
  {name: '德阳市', value: randomData(), code: '510600', pcode: '100000', pname: '中国'},
  {name: '绵阳市', value: randomData(), code: '510700', pcode: '100000', pname: '中国'},
  {name: '广元市', value: randomData(), code: '510800', pcode: '100000', pname: '中国'},
  {name: '遂宁市', value: randomData(), code: '510900', pcode: '100000', pname: '中国'},
  {name: '内江市', value: randomData(), code: '511000', pcode: '100000', pname: '中国'},
  {name: '乐山市', value: randomData(), code: '511100', pcode: '100000', pname: '中国'},
  {name: '南充市', value: randomData(), code: '511300', pcode: '100000', pname: '中国'},
  {name: '眉山市', value: randomData(), code: '511400', pcode: '100000', pname: '中国'},
  {name: '宜宾市', value: randomData(), code: '511500', pcode: '100000', pname: '中国'},
  {name: '广安市', value: randomData(), code: '511600', pcode: '100000', pname: '中国'},
  {name: '达州市', value: randomData(), code: '511700', pcode: '100000', pname: '中国'},
  {name: '雅安市', value: randomData(), code: '511800', pcode: '100000', pname: '中国'},
  {name: '巴中市', value: randomData(), code: '511900', pcode: '100000', pname: '中国'},
  {name: '资阳市', value: randomData(), code: '512000', pcode: '100000', pname: '中国'},
  {name: '阿坝藏族羌族自治州', value: randomData(), code: '513200', pcode: '100000', pname: '中国'},
  {name: '甘孜藏族自治州', value: randomData(), code: '513300', pcode: '100000', pname: '中国'},
  {name: '凉山彝族自治州', value: randomData(), code: '513400', pcode: '100000', pname: '中国'},
  // 四川各个区域
  {name: '锦江区', value: randomData(), code: '510104', pcode: '510000', pname: '四川'},
  {name: '青羊区', value: randomData(), code: '510105', pcode: '510000', pname: '四川'},
  {name: '金牛区', value: randomData(), code: '510106', pcode: '510000', pname: '四川'},
  {name: '武侯区', value: randomData(), code: '510107', pcode: '510000', pname: '四川'},
  {name: '成华区', value: randomData(), code: '510108', pcode: '510000', pname: '四川'},
  {name: '龙泉驿区', value: randomData(), code: '510112', pcode: '510000', pname: '四川'},
  {name: '青白江区', value: randomData(), code: '510113', pcode: '510000', pname: '四川'},
  {name: '新都区', value: randomData(), code: '510114', pcode: '510000', pname: '四川'},
  {name: '温江区', value: randomData(), code: '510115', pcode: '510000', pname: '四川'},
  {name: '双流区', value: randomData(), code: '510116', pcode: '510000', pname: '四川'},
  {name: '郫都区', value: randomData(), code: '510117', pcode: '510000', pname: '四川'},
  {name: '金堂县', value: randomData(), code: '510121', pcode: '510000', pname: '四川'},
  {name: '大邑县', value: randomData(), code: '510129', pcode: '510000', pname: '四川'},
  {name: '蒲江县', value: randomData(), code: '510131', pcode: '510000', pname: '四川'},
  {name: '新津县', value: randomData(), code: '510132', pcode: '510000', pname: '四川'},
  {name: '都江堰市', value: randomData(), code: '510181', pcode: '510000', pname: '四川'},
  {name: '彭州市', value: randomData(), code: '510182', pcode: '510000', pname: '四川'},
  {name: '邛崃市', value: randomData(), code: '510183', pcode: '510000', pname: '四川'},
  {name: '崇州市', value: randomData(), code: '510184', pcode: '510000', pname: '四川'},
  {name: '简阳市', value: randomData(), code: '510185', pcode: '510000', pname: '四川'},
  {name: '雁江区', value: randomData(), code: '512002', pcode: '510000', pname: '四川'},
  {name: '安岳县', value: randomData(), code: '512021', pcode: '510000', pname: '四川'},
  {name: '乐至县', value: randomData(), code: '512022', pcode: '510000', pname: '四川'},
  {name: '市中区(ls)', value: randomData(), code: '511102', pcode: '510000', pname: '四川'},
  {name: '沙湾区', value: randomData(), code: '511111', pcode: '510000', pname: '四川'},
  {name: '五通桥区', value: randomData(), code: '511112', pcode: '510000', pname: '四川'},
  {name: '金口河区', value: randomData(), code: '511113', pcode: '510000', pname: '四川'},
  {name: '犍为县', value: randomData(), code: '511123', pcode: '510000', pname: '四川'},
  {name: '井研县', value: randomData(), code: '511124', pcode: '510000', pname: '四川'},
  {name: '夹江县', value: randomData(), code: '511126', pcode: '510000', pname: '四川'},
  {name: '沐川县', value: randomData(), code: '511129', pcode: '510000', pname: '四川'},
  {name: '峨边彝族自治县', value: randomData(), code: '511132', pcode: '510000', pname: '四川'},
  {name: '马边彝族自治县', value: randomData(), code: '511133', pcode: '510000', pname: '四川'},
  {name: '峨眉山市', value: randomData(), code: '511181', pcode: '510000', pname: '四川'},
  {name: '市中区(nj)', value: randomData(), code: '511002', pcode: '510000', pname: '四川'},
  {name: '东兴区', value: randomData(), code: '511011', pcode: '510000', pname: '四川'},
  {name: '威远县', value: randomData(), code: '511024', pcode: '510000', pname: '四川'},
  {name: '资中县', value: randomData(), code: '511025', pcode: '510000', pname: '四川'},
  {name: '隆昌市', value: randomData(), code: '511083', pcode: '510000', pname: '四川'},
  {name: '西昌市', value: randomData(), code: '513401', pcode: '510000', pname: '四川'},
  {name: '木里藏族自治县', value: randomData(), code: '513422', pcode: '510000', pname: '四川'},
  {name: '盐源县', value: randomData(), code: '513423', pcode: '510000', pname: '四川'},
  {name: '德昌县', value: randomData(), code: '513424', pcode: '510000', pname: '四川'},
  {name: '会理县', value: randomData(), code: '513425', pcode: '510000', pname: '四川'},
  {name: '会东县', value: randomData(), code: '513426', pcode: '510000', pname: '四川'},
  {name: '宁南县', value: randomData(), code: '513427', pcode: '510000', pname: '四川'},
  {name: '普格县', value: randomData(), code: '513428', pcode: '510000', pname: '四川'},
  {name: '布拖县', value: randomData(), code: '513429', pcode: '510000', pname: '四川'},
  {name: '金阳县', value: randomData(), code: '513430', pcode: '510000', pname: '四川'},
  {name: '昭觉县', value: randomData(), code: '513431', pcode: '510000', pname: '四川'},
  {name: '喜德县', value: randomData(), code: '513432', pcode: '510000', pname: '四川'},
  {name: '冕宁县', value: randomData(), code: '513433', pcode: '510000', pname: '四川'},
  {name: '越西县', value: randomData(), code: '513434', pcode: '510000', pname: '四川'},
  {name: '甘洛县', value: randomData(), code: '513435', pcode: '510000', pname: '四川'},
  {name: '美姑县', value: randomData(), code: '513436', pcode: '510000', pname: '四川'},
  {name: '雷波县', value: randomData(), code: '513437', pcode: '510000', pname: '四川'},
  {name: '顺庆区', value: randomData(), code: '511302', pcode: '510000', pname: '四川'},
  {name: '高坪区', value: randomData(), code: '511303', pcode: '510000', pname: '四川'},
  {name: '嘉陵区', value: randomData(), code: '511304', pcode: '510000', pname: '四川'},
  {name: '南部县', value: randomData(), code: '511321', pcode: '510000', pname: '四川'},
  {name: '营山县', value: randomData(), code: '511322', pcode: '510000', pname: '四川'},
  {name: '蓬安县', value: randomData(), code: '511323', pcode: '510000', pname: '四川'},
  {name: '仪陇县', value: randomData(), code: '511324', pcode: '510000', pname: '四川'},
  {name: '西充县', value: randomData(), code: '511325', pcode: '510000', pname: '四川'},
  {name: '阆中市', value: randomData(), code: '511381', pcode: '510000', pname: '四川'},
  {name: '翠屏区', value: randomData(), code: '511502', pcode: '510000', pname: '四川'},
  {name: '南溪区', value: randomData(), code: '511503', pcode: '510000', pname: '四川'},
  {name: '叙州区', value: randomData(), code: '511504', pcode: '510000', pname: '四川'},
  {name: '江安县', value: randomData(), code: '511523', pcode: '510000', pname: '四川'},
  {name: '长宁县', value: randomData(), code: '511524', pcode: '510000', pname: '四川'},
  {name: '高县', value: randomData(), code: '511525', pcode: '510000', pname: '四川'},
  {name: '珙县', value: randomData(), code: '511526', pcode: '510000', pname: '四川'},
  {name: '筠连县', value: randomData(), code: '511527', pcode: '510000', pname: '四川'},
  {name: '兴文县', value: randomData(), code: '511528', pcode: '510000', pname: '四川'},
  {name: '屏山县', value: randomData(), code: '511529', pcode: '510000', pname: '四川'},
  {name: '巴州区', value: randomData(), code: '511902', pcode: '510000', pname: '四川'},
  {name: '恩阳区', value: randomData(), code: '511903', pcode: '510000', pname: '四川'},
  {name: '通江县', value: randomData(), code: '511921', pcode: '510000', pname: '四川'},
  {name: '南江县', value: randomData(), code: '511922', pcode: '510000', pname: '四川'},
  {name: '平昌县', value: randomData(), code: '511923', pcode: '510000', pname: '四川'},
  {name: '利州区', value: randomData(), code: '510802', pcode: '510000', pname: '四川'},
  {name: '昭化区', value: randomData(), code: '510811', pcode: '510000', pname: '四川'},
  {name: '朝天区', value: randomData(), code: '510812', pcode: '510000', pname: '四川'},
  {name: '旺苍县', value: randomData(), code: '510821', pcode: '510000', pname: '四川'},
  {name: '青川县', value: randomData(), code: '510822', pcode: '510000', pname: '四川'},
  {name: '剑阁县', value: randomData(), code: '510823', pcode: '510000', pname: '四川'},
  {name: '苍溪县', value: randomData(), code: '510824', pcode: '510000', pname: '四川'},
  {name: '广安区', value: randomData(), code: '511602', pcode: '510000', pname: '四川'},
  {name: '前锋区', value: randomData(), code: '511603', pcode: '510000', pname: '四川'},
  {name: '岳池县', value: randomData(), code: '511621', pcode: '510000', pname: '四川'},
  {name: '武胜县', value: randomData(), code: '511622', pcode: '510000', pname: '四川'},
  {name: '邻水县', value: randomData(), code: '511623', pcode: '510000', pname: '四川'},
  {name: '华蓥市', value: randomData(), code: '511681', pcode: '510000', pname: '四川'},
  {name: '旌阳区', value: randomData(), code: '510603', pcode: '510000', pname: '四川'},
  {name: '罗江区', value: randomData(), code: '510604', pcode: '510000', pname: '四川'},
  {name: '中江县', value: randomData(), code: '510623', pcode: '510000', pname: '四川'},
  {name: '广汉市', value: randomData(), code: '510681', pcode: '510000', pname: '四川'},
  {name: '什邡市', value: randomData(), code: '510682', pcode: '510000', pname: '四川'},
  {name: '绵竹市', value: randomData(), code: '510683', pcode: '510000', pname: '四川'},
  {name: '成都市', value: randomData(), code: '510100', pcode: '510000', pname: '四川'},
  {name: '东区', value: randomData(), code: '510402', pcode: '510000', pname: '四川'},
  {name: '西区', value: randomData(), code: '510403', pcode: '510000', pname: '四川'},
  {name: '仁和区', value: randomData(), code: '510411', pcode: '510000', pname: '四川'},
  {name: '米易县', value: randomData(), code: '510421', pcode: '510000', pname: '四川'},
  {name: '盐边县', value: randomData(), code: '510422', pcode: '510000', pname: '四川'},
  {name: '江阳区', value: randomData(), code: '510502', pcode: '510000', pname: '四川'},
  {name: '纳溪区', value: randomData(), code: '510503', pcode: '510000', pname: '四川'},
  {name: '龙马潭区', value: randomData(), code: '510504', pcode: '510000', pname: '四川'},
  {name: '泸县', value: randomData(), code: '510521', pcode: '510000', pname: '四川'},
  {name: '合江县', value: randomData(), code: '510522', pcode: '510000', pname: '四川'},
  {name: '叙永县', value: randomData(), code: '510524', pcode: '510000', pname: '四川'},
  {name: '古蔺县', value: randomData(), code: '510525', pcode: '510000', pname: '四川'},
  {name: '康定市', value: randomData(), code: '513301', pcode: '510000', pname: '四川'},
  {name: '泸定县', value: randomData(), code: '513322', pcode: '510000', pname: '四川'},
  {name: '丹巴县', value: randomData(), code: '513323', pcode: '510000', pname: '四川'},
  {name: '九龙县', value: randomData(), code: '513324', pcode: '510000', pname: '四川'},
  {name: '雅江县', value: randomData(), code: '513325', pcode: '510000', pname: '四川'},
  {name: '道孚县', value: randomData(), code: '513326', pcode: '510000', pname: '四川'},
  {name: '炉霍县', value: randomData(), code: '513327', pcode: '510000', pname: '四川'},
  {name: '甘孜县', value: randomData(), code: '513328', pcode: '510000', pname: '四川'},
  {name: '新龙县', value: randomData(), code: '513329', pcode: '510000', pname: '四川'},
  {name: '德格县', value: randomData(), code: '513330', pcode: '510000', pname: '四川'},
  {name: '白玉县', value: randomData(), code: '513331', pcode: '510000', pname: '四川'},
  {name: '石渠县', value: randomData(), code: '513332', pcode: '510000', pname: '四川'},
  {name: '色达县', value: randomData(), code: '513333', pcode: '510000', pname: '四川'},
  {name: '理塘县', value: randomData(), code: '513334', pcode: '510000', pname: '四川'},
  {name: '巴塘县', value: randomData(), code: '513335', pcode: '510000', pname: '四川'},
  {name: '乡城县', value: randomData(), code: '513336', pcode: '510000', pname: '四川'},
  {name: '稻城县', value: randomData(), code: '513337', pcode: '510000', pname: '四川'},
  {name: '得荣县', value: randomData(), code: '513338', pcode: '510000', pname: '四川'},
  {name: '东坡区', value: randomData(), code: '511402', pcode: '510000', pname: '四川'},
  {name: '彭山区', value: randomData(), code: '511403', pcode: '510000', pname: '四川'},
  {name: '仁寿县', value: randomData(), code: '511421', pcode: '510000', pname: '四川'},
  {name: '洪雅县', value: randomData(), code: '511423', pcode: '510000', pname: '四川'},
  {name: '丹棱县', value: randomData(), code: '511424', pcode: '510000', pname: '四川'},
  {name: '青神县', value: randomData(), code: '511425', pcode: '510000', pname: '四川'},
  {name: '涪城区', value: randomData(), code: '510703', pcode: '510000', pname: '四川'},
  {name: '游仙区', value: randomData(), code: '510704', pcode: '510000', pname: '四川'},
  {name: '安州区', value: randomData(), code: '510705', pcode: '510000', pname: '四川'},
  {name: '三台县', value: randomData(), code: '510722', pcode: '510000', pname: '四川'},
  {name: '盐亭县', value: randomData(), code: '510723', pcode: '510000', pname: '四川'},
  {name: '梓潼县', value: randomData(), code: '510725', pcode: '510000', pname: '四川'},
  {name: '北川羌族自治县', value: randomData(), code: '510726', pcode: '510000', pname: '四川'},
  {name: '平武县', value: randomData(), code: '510727', pcode: '510000', pname: '四川'},
  {name: '江油市', value: randomData(), code: '510781', pcode: '510000', pname: '四川'},
  {name: '自流井区', value: randomData(), code: '510302', pcode: '510000', pname: '四川'},
  {name: '贡井区', value: randomData(), code: '510303', pcode: '510000', pname: '四川'},
  {name: '大安区', value: randomData(), code: '510304', pcode: '510000', pname: '四川'},
  {name: '沿滩区', value: randomData(), code: '510311', pcode: '510000', pname: '四川'},
  {name: '荣县', value: randomData(), code: '510321', pcode: '510000', pname: '四川'},
  {name: '富顺县', value: randomData(), code: '510322', pcode: '510000', pname: '四川'},
  {name: '资阳市', value: randomData(), code: '512000', pcode: '510000', pname: '四川'},
  {name: '通川区', value: randomData(), code: '511702', pcode: '510000', pname: '四川'},
  {name: '达川区', value: randomData(), code: '511703', pcode: '510000', pname: '四川'},
  {name: '宣汉县', value: randomData(), code: '511722', pcode: '510000', pname: '四川'},
  {name: '开江县', value: randomData(), code: '511723', pcode: '510000', pname: '四川'},
  {name: '大竹县', value: randomData(), code: '511724', pcode: '510000', pname: '四川'},
  {name: '渠县', value: randomData(), code: '511725', pcode: '510000', pname: '四川'},
  {name: '万源市', value: randomData(), code: '511781', pcode: '510000', pname: '四川'},
  {name: '船山区', value: randomData(), code: '510903', pcode: '510000', pname: '四川'},
  {name: '安居区', value: randomData(), code: '510904', pcode: '510000', pname: '四川'},
  {name: '蓬溪县', value: randomData(), code: '510921', pcode: '510000', pname: '四川'},
  {name: '射洪县', value: randomData(), code: '510922', pcode: '510000', pname: '四川'},
  {name: '大英县', value: randomData(), code: '510923', pcode: '510000', pname: '四川'},
  {name: '马尔康市', value: randomData(), code: '513201', pcode: '510000', pname: '四川'},
  {name: '汶川县', value: randomData(), code: '513221', pcode: '510000', pname: '四川'},
  {name: '理县', value: randomData(), code: '513222', pcode: '510000', pname: '四川'},
  {name: '茂县', value: randomData(), code: '513223', pcode: '510000', pname: '四川'},
  {name: '松潘县', value: randomData(), code: '513224', pcode: '510000', pname: '四川'},
  {name: '九寨沟县', value: randomData(), code: '513225', pcode: '510000', pname: '四川'},
  {name: '金川县', value: randomData(), code: '513226', pcode: '510000', pname: '四川'},
  {name: '小金县', value: randomData(), code: '513227', pcode: '510000', pname: '四川'},
  {name: '黑水县', value: randomData(), code: '513228', pcode: '510000', pname: '四川'},
  {name: '壤塘县', value: randomData(), code: '513230', pcode: '510000', pname: '四川'},
  {name: '阿坝县', value: randomData(), code: '513231', pcode: '510000', pname: '四川'},
  {name: '若尔盖县', value: randomData(), code: '513232', pcode: '510000', pname: '四川'},
  {name: '红原县', value: randomData(), code: '513233', pcode: '510000', pname: '四川'},
  {name: '雨城区', value: randomData(), code: '511802', pcode: '510000', pname: '四川'},
  {name: '名山区', value: randomData(), code: '511803', pcode: '510000', pname: '四川'},
  {name: '荥经县', value: randomData(), code: '511822', pcode: '510000', pname: '四川'},
  {name: '汉源县', value: randomData(), code: '511823', pcode: '510000', pname: '四川'},
  {name: '石棉县', value: randomData(), code: '511824', pcode: '510000', pname: '四川'},
  {name: '天全县', value: randomData(), code: '511825', pcode: '510000', pname: '四川'},
  {name: '芦山县', value: randomData(), code: '511826', pcode: '510000', pname: '四川'},
  {name: '宝兴县', value: randomData(), code: '511827', pcode: '510000', pname: '四川'},
  // 贵州
  {name: '贵阳市', value: randomData(), code: '520100', pcode: '100000', pname: '中国'},
  {name: '六盘水市', value: randomData(), code: '520200', pcode: '100000', pname: '中国'},
  {name: '遵义市', value: randomData(), code: '520300', pcode: '100000', pname: '中国'},
  {name: '安顺市', value: randomData(), code: '520400', pcode: '100000', pname: '中国'},
  {name: '毕节市', value: randomData(), code: '520500', pcode: '100000', pname: '中国'},
  {name: '铜仁市', value: randomData(), code: '520600', pcode: '100000', pname: '中国'},
  {name: '黔西南布依族苗族自治州', value: randomData(), code: '522300', pcode: '100000', pname: '中国'},
  {name: '黔东南苗族侗族自治州', value: randomData(), code: '522600', pcode: '100000', pname: '中国'},
  {name: '黔南布依族苗族自治州', value: randomData(), code: '522700', pcode: '100000', pname: '中国'},
  // 贵州各个区域
  {name: '红花岗区', value: randomData(), code: '520302', pcode: '520000', pname: '贵州'},
  {name: '汇川区', value: randomData(), code: '520303', pcode: '520000', pname: '贵州'},
  {name: '播州区', value: randomData(), code: '520304', pcode: '520000', pname: '贵州'},
  {name: '桐梓县', value: randomData(), code: '520322', pcode: '520000', pname: '贵州'},
  {name: '绥阳县', value: randomData(), code: '520323', pcode: '520000', pname: '贵州'},
  {name: '正安县', value: randomData(), code: '520324', pcode: '520000', pname: '贵州'},
  {name: '道真仡佬族苗族自治县', value: randomData(), code: '520325', pcode: '520000', pname: '贵州'},
  {name: '务川仡佬族苗族自治县', value: randomData(), code: '520326', pcode: '520000', pname: '贵州'},
  {name: '凤冈县', value: randomData(), code: '520327', pcode: '520000', pname: '贵州'},
  {name: '湄潭县', value: randomData(), code: '520328', pcode: '520000', pname: '贵州'},
  {name: '余庆县', value: randomData(), code: '520329', pcode: '520000', pname: '贵州'},
  {name: '习水县', value: randomData(), code: '520330', pcode: '520000', pname: '贵州'},
  {name: '赤水市', value: randomData(), code: '520381', pcode: '520000', pname: '贵州'},
  {name: '仁怀市', value: randomData(), code: '520382', pcode: '520000', pname: '贵州'},
  {name: '七星关区', value: randomData(), code: '520502', pcode: '520000', pname: '贵州'},
  {name: '大方县', value: randomData(), code: '520521', pcode: '520000', pname: '贵州'},
  {name: '黔西县', value: randomData(), code: '520522', pcode: '520000', pname: '贵州'},
  {name: '金沙县', value: randomData(), code: '520523', pcode: '520000', pname: '贵州'},
  {name: '织金县', value: randomData(), code: '520524', pcode: '520000', pname: '贵州'},
  {name: '纳雍县', value: randomData(), code: '520525', pcode: '520000', pname: '贵州'},
  {name: '威宁彝族回族苗族自治县', value: randomData(), code: '520526', pcode: '520000', pname: '贵州'},
  {name: '赫章县', value: randomData(), code: '520527', pcode: '520000', pname: '贵州'},
  {name: '钟山区', value: randomData(), code: '520201', pcode: '520000', pname: '贵州'},
  {name: '六枝特区', value: randomData(), code: '520203', pcode: '520000', pname: '贵州'},
  {name: '水城县', value: randomData(), code: '520221', pcode: '520000', pname: '贵州'},
  {name: '盘州市', value: randomData(), code: '520281', pcode: '520000', pname: '贵州'},
  {name: '西秀区', value: randomData(), code: '520402', pcode: '520000', pname: '贵州'},
  {name: '平坝区', value: randomData(), code: '520403', pcode: '520000', pname: '贵州'},
  {name: '普定县', value: randomData(), code: '520422', pcode: '520000', pname: '贵州'},
  {name: '镇宁布依族苗族自治县', value: randomData(), code: '520423', pcode: '520000', pname: '贵州'},
  {name: '关岭布依族苗族自治县', value: randomData(), code: '520424', pcode: '520000', pname: '贵州'},
  {name: '紫云苗族布依族自治县', value: randomData(), code: '520425', pcode: '520000', pname: '贵州'},
  {name: '毕节市', value: randomData(), code: '520500', pcode: '520000', pname: '贵州'},
  {name: '南明区', value: randomData(), code: '520102', pcode: '520000', pname: '贵州'},
  {name: '云岩区', value: randomData(), code: '520103', pcode: '520000', pname: '贵州'},
  {name: '花溪区', value: randomData(), code: '520111', pcode: '520000', pname: '贵州'},
  {name: '乌当区', value: randomData(), code: '520112', pcode: '520000', pname: '贵州'},
  {name: '白云区', value: randomData(), code: '520113', pcode: '520000', pname: '贵州'},
  {name: '观山湖区', value: randomData(), code: '520115', pcode: '520000', pname: '贵州'},
  {name: '开阳县', value: randomData(), code: '520121', pcode: '520000', pname: '贵州'},
  {name: '息烽县', value: randomData(), code: '520122', pcode: '520000', pname: '贵州'},
  {name: '修文县', value: randomData(), code: '520123', pcode: '520000', pname: '贵州'},
  {name: '清镇市', value: randomData(), code: '520181', pcode: '520000', pname: '贵州'},
  {name: '遵义市', value: randomData(), code: '520300', pcode: '520000', pname: '贵州'},
  {name: '碧江区', value: randomData(), code: '520602', pcode: '520000', pname: '贵州'},
  {name: '万山区', value: randomData(), code: '520603', pcode: '520000', pname: '贵州'},
  {name: '江口县', value: randomData(), code: '520621', pcode: '520000', pname: '贵州'},
  {name: '玉屏侗族自治县', value: randomData(), code: '520622', pcode: '520000', pname: '贵州'},
  {name: '石阡县', value: randomData(), code: '520623', pcode: '520000', pname: '贵州'},
  {name: '思南县', value: randomData(), code: '520624', pcode: '520000', pname: '贵州'},
  {name: '印江土家族苗族自治县', value: randomData(), code: '520625', pcode: '520000', pname: '贵州'},
  {name: '德江县', value: randomData(), code: '520626', pcode: '520000', pname: '贵州'},
  {name: '沿河土家族自治县', value: randomData(), code: '520627', pcode: '520000', pname: '贵州'},
  {name: '松桃苗族自治县', value: randomData(), code: '520628', pcode: '520000', pname: '贵州'},
  {name: '凯里市', value: randomData(), code: '522601', pcode: '520000', pname: '贵州'},
  {name: '黄平县', value: randomData(), code: '522622', pcode: '520000', pname: '贵州'},
  {name: '施秉县', value: randomData(), code: '522623', pcode: '520000', pname: '贵州'},
  {name: '三穗县', value: randomData(), code: '522624', pcode: '520000', pname: '贵州'},
  {name: '镇远县', value: randomData(), code: '522625', pcode: '520000', pname: '贵州'},
  {name: '岑巩县', value: randomData(), code: '522626', pcode: '520000', pname: '贵州'},
  {name: '天柱县', value: randomData(), code: '522627', pcode: '520000', pname: '贵州'},
  {name: '锦屏县', value: randomData(), code: '522628', pcode: '520000', pname: '贵州'},
  {name: '剑河县', value: randomData(), code: '522629', pcode: '520000', pname: '贵州'},
  {name: '台江县', value: randomData(), code: '522630', pcode: '520000', pname: '贵州'},
  {name: '黎平县', value: randomData(), code: '522631', pcode: '520000', pname: '贵州'},
  {name: '榕江县', value: randomData(), code: '522632', pcode: '520000', pname: '贵州'},
  {name: '从江县', value: randomData(), code: '522633', pcode: '520000', pname: '贵州'},
  {name: '雷山县', value: randomData(), code: '522634', pcode: '520000', pname: '贵州'},
  {name: '麻江县', value: randomData(), code: '522635', pcode: '520000', pname: '贵州'},
  {name: '丹寨县', value: randomData(), code: '522636', pcode: '520000', pname: '贵州'},
  {name: '都匀市', value: randomData(), code: '522701', pcode: '520000', pname: '贵州'},
  {name: '福泉市', value: randomData(), code: '522702', pcode: '520000', pname: '贵州'},
  {name: '荔波县', value: randomData(), code: '522722', pcode: '520000', pname: '贵州'},
  {name: '贵定县', value: randomData(), code: '522723', pcode: '520000', pname: '贵州'},
  {name: '瓮安县', value: randomData(), code: '522725', pcode: '520000', pname: '贵州'},
  {name: '独山县', value: randomData(), code: '522726', pcode: '520000', pname: '贵州'},
  {name: '平塘县', value: randomData(), code: '522727', pcode: '520000', pname: '贵州'},
  {name: '罗甸县', value: randomData(), code: '522728', pcode: '520000', pname: '贵州'},
  {name: '长顺县', value: randomData(), code: '522729', pcode: '520000', pname: '贵州'},
  {name: '龙里县', value: randomData(), code: '522730', pcode: '520000', pname: '贵州'},
  {name: '惠水县', value: randomData(), code: '522731', pcode: '520000', pname: '贵州'},
  {name: '三都水族自治县', value: randomData(), code: '522732', pcode: '520000', pname: '贵州'},
  {name: '兴义市', value: randomData(), code: '522301', pcode: '520000', pname: '贵州'},
  {name: '兴仁市', value: randomData(), code: '522302', pcode: '520000', pname: '贵州'},
  {name: '普安县', value: randomData(), code: '522323', pcode: '520000', pname: '贵州'},
  {name: '晴隆县', value: randomData(), code: '522324', pcode: '520000', pname: '贵州'},
  {name: '贞丰县', value: randomData(), code: '522325', pcode: '520000', pname: '贵州'},
  {name: '望谟县', value: randomData(), code: '522326', pcode: '520000', pname: '贵州'},
  {name: '册亨县', value: randomData(), code: '522327', pcode: '520000', pname: '贵州'},
  {name: '安龙县', value: randomData(), code: '522328', pcode: '520000', pname: '贵州'},
  // 陕西
  {name: '西安市', value: randomData(), code: '610100', pcode: '100000', pname: '中国'},
  {name: '铜川市', value: randomData(), code: '610200', pcode: '100000', pname: '中国'},
  {name: '宝鸡市', value: randomData(), code: '610300', pcode: '100000', pname: '中国'},
  {name: '咸阳市', value: randomData(), code: '610400', pcode: '100000', pname: '中国'},
  {name: '渭南市', value: randomData(), code: '610500', pcode: '100000', pname: '中国'},
  {name: '延安市', value: randomData(), code: '610600', pcode: '100000', pname: '中国'},
  {name: '汉中市', value: randomData(), code: '610700', pcode: '100000', pname: '中国'},
  {name: '榆林市', value: randomData(), code: '610800', pcode: '100000', pname: '中国'},
  {name: '安康市', value: randomData(), code: '610900', pcode: '100000', pname: '中国'},
  {name: '商洛市', value: randomData(), code: '611000', pcode: '100000', pname: '中国'},
  // 陕西各个区域
  {name: '长安区', value: randomData(), code: '610116', pcode: '610000', pname: '陕西'},
  {name: '碑林区', value: randomData(), code: '610103', pcode: '610000', pname: '陕西'},
  {name: '鄠邑区', value: randomData(), code: '610429', pcode: '610000', pname: '陕西'},
  {name: '周至县', value: randomData(), code: '610124', pcode: '610000', pname: '陕西'},
  {name: '蓝田县', value: randomData(), code: '610122', pcode: '610000', pname: '陕西'},
  {name: '雁塔区', value: randomData(), code: '610113', pcode: '610000', pname: '陕西'},
  {name: '莲湖区', value: randomData(), code: '610104', pcode: '610000', pname: '陕西'},
  {name: '灞桥区', value: randomData(), code: '610111', pcode: '610000', pname: '陕西'},
  {name: '未央区', value: randomData(), code: '610112', pcode: '610000', pname: '陕西'},
  {name: '临潼区', value: randomData(), code: '610115', pcode: '610000', pname: '陕西'},
  {name: '高陵区', value: randomData(), code: '610117', pcode: '610000', pname: '陕西'},
  {name: '阎良区', value: randomData(), code: '610114', pcode: '610000', pname: '陕西'},
  {name: '彬县', value: randomData(), code: '610427', pcode: '610000', pname: '陕西'},
  {name: '秦都区', value: randomData(), code: '610402', pcode: '610000', pname: '陕西'},
  {name: '杨陵区', value: randomData(), code: '610403', pcode: '610000', pname: '陕西'},
  {name: '渭城区', value: randomData(), code: '610404', pcode: '610000', pname: '陕西'},
  {name: '三原县', value: randomData(), code: '610422', pcode: '610000', pname: '陕西'},
  {name: '泾阳县', value: randomData(), code: '610423', pcode: '610000', pname: '陕西'},
  {name: '乾县', value: randomData(), code: '610424', pcode: '610000', pname: '陕西'},
  {name: '礼泉县', value: randomData(), code: '610425', pcode: '610000', pname: '陕西'},
  {name: '永寿县', value: randomData(), code: '610426', pcode: '610000', pname: '陕西'},
  {name: '长武县', value: randomData(), code: '610428', pcode: '610000', pname: '陕西'},
  {name: '旬邑县', value: randomData(), code: '610429', pcode: '610000', pname: '陕西'},
  {name: '淳化县', value: randomData(), code: '610430', pcode: '610000', pname: '陕西'},
  {name: '武功县', value: randomData(), code: '610431', pcode: '610000', pname: '陕西'},
  {name: '兴平市', value: randomData(), code: '610481', pcode: '610000', pname: '陕西'},
  {name: '彬州市', value: randomData(), code: '610482', pcode: '610000', pname: '陕西'},
  {name: '商州区', value: randomData(), code: '611002', pcode: '610000', pname: '陕西'},
  {name: '洛南县', value: randomData(), code: '611021', pcode: '610000', pname: '陕西'},
  {name: '丹凤县', value: randomData(), code: '611022', pcode: '610000', pname: '陕西'},
  {name: '商南县', value: randomData(), code: '611023', pcode: '610000', pname: '陕西'},
  {name: '山阳县', value: randomData(), code: '611024', pcode: '610000', pname: '陕西'},
  {name: '镇安县', value: randomData(), code: '611025', pcode: '610000', pname: '陕西'},
  {name: '柞水县', value: randomData(), code: '611026', pcode: '610000', pname: '陕西'},
  {name: '汉滨区', value: randomData(), code: '610902', pcode: '610000', pname: '陕西'},
  {name: '汉阴县', value: randomData(), code: '610921', pcode: '610000', pname: '陕西'},
  {name: '石泉县', value: randomData(), code: '610922', pcode: '610000', pname: '陕西'},
  {name: '宁陕县', value: randomData(), code: '610923', pcode: '610000', pname: '陕西'},
  {name: '紫阳县', value: randomData(), code: '610924', pcode: '610000', pname: '陕西'},
  {name: '岚皋县', value: randomData(), code: '610925', pcode: '610000', pname: '陕西'},
  {name: '平利县', value: randomData(), code: '610926', pcode: '610000', pname: '陕西'},
  {name: '镇坪县', value: randomData(), code: '610927', pcode: '610000', pname: '陕西'},
  {name: '旬阳县', value: randomData(), code: '610928', pcode: '610000', pname: '陕西'},
  {name: '白河县', value: randomData(), code: '610929', pcode: '610000', pname: '陕西'},
  {name: '渭滨区', value: randomData(), code: '610302', pcode: '610000', pname: '陕西'},
  {name: '金台区', value: randomData(), code: '610303', pcode: '610000', pname: '陕西'},
  {name: '陈仓区', value: randomData(), code: '610304', pcode: '610000', pname: '陕西'},
  {name: '凤翔县', value: randomData(), code: '610322', pcode: '610000', pname: '陕西'},
  {name: '岐山县', value: randomData(), code: '610323', pcode: '610000', pname: '陕西'},
  {name: '扶风县', value: randomData(), code: '610324', pcode: '610000', pname: '陕西'},
  {name: '眉县', value: randomData(), code: '610326', pcode: '610000', pname: '陕西'},
  {name: '陇县', value: randomData(), code: '610327', pcode: '610000', pname: '陕西'},
  {name: '千阳县', value: randomData(), code: '610328', pcode: '610000', pname: '陕西'},
  {name: '麟游县', value: randomData(), code: '610329', pcode: '610000', pname: '陕西'},
  {name: '凤县', value: randomData(), code: '610330', pcode: '610000', pname: '陕西'},
  {name: '太白县', value: randomData(), code: '610331', pcode: '610000', pname: '陕西'},
  {name: '宝塔区', value: randomData(), code: '610602', pcode: '610000', pname: '陕西'},
  {name: '安塞区', value: randomData(), code: '610603', pcode: '610000', pname: '陕西'},
  {name: '延长县', value: randomData(), code: '610621', pcode: '610000', pname: '陕西'},
  {name: '延川县', value: randomData(), code: '610622', pcode: '610000', pname: '陕西'},
  {name: '子长市', value: randomData(), code: '610623', pcode: '610000', pname: '陕西'},
  {name: '志丹县', value: randomData(), code: '610625', pcode: '610000', pname: '陕西'},
  {name: '吴起县', value: randomData(), code: '610626', pcode: '610000', pname: '陕西'},
  {name: '甘泉县', value: randomData(), code: '610627', pcode: '610000', pname: '陕西'},
  {name: '富县', value: randomData(), code: '610628', pcode: '610000', pname: '陕西'},
  {name: '洛川县', value: randomData(), code: '610629', pcode: '610000', pname: '陕西'},
  {name: '宜川县', value: randomData(), code: '610630', pcode: '610000', pname: '陕西'},
  {name: '黄龙县', value: randomData(), code: '610631', pcode: '610000', pname: '陕西'},
  {name: '黄陵县', value: randomData(), code: '610632', pcode: '610000', pname: '陕西'},
  {name: '榆阳区', value: randomData(), code: '610802', pcode: '610000', pname: '陕西'},
  {name: '横山区', value: randomData(), code: '610803', pcode: '610000', pname: '陕西'},
  {name: '府谷县', value: randomData(), code: '610822', pcode: '610000', pname: '陕西'},
  {name: '靖边县', value: randomData(), code: '610824', pcode: '610000', pname: '陕西'},
  {name: '定边县', value: randomData(), code: '610825', pcode: '610000', pname: '陕西'},
  {name: '绥德县', value: randomData(), code: '610826', pcode: '610000', pname: '陕西'},
  {name: '米脂县', value: randomData(), code: '610827', pcode: '610000', pname: '陕西'},
  {name: '佳县', value: randomData(), code: '610828', pcode: '610000', pname: '陕西'},
  {name: '吴堡县', value: randomData(), code: '610829', pcode: '610000', pname: '陕西'},
  {name: '清涧县', value: randomData(), code: '610830', pcode: '610000', pname: '陕西'},
  {name: '子洲县', value: randomData(), code: '610831', pcode: '610000', pname: '陕西'},
  {name: '神木市', value: randomData(), code: '610881', pcode: '610000', pname: '陕西'},
  {name: '汉台区', value: randomData(), code: '610702', pcode: '610000', pname: '陕西'},
  {name: '南郑区', value: randomData(), code: '610703', pcode: '610000', pname: '陕西'},
  {name: '城固县', value: randomData(), code: '610722', pcode: '610000', pname: '陕西'},
  {name: '洋县', value: randomData(), code: '610723', pcode: '610000', pname: '陕西'},
  {name: '西乡县', value: randomData(), code: '610724', pcode: '610000', pname: '陕西'},
  {name: '勉县', value: randomData(), code: '610725', pcode: '610000', pname: '陕西'},
  {name: '宁强县', value: randomData(), code: '610726', pcode: '610000', pname: '陕西'},
  {name: '略阳县', value: randomData(), code: '610727', pcode: '610000', pname: '陕西'},
  {name: '镇巴县', value: randomData(), code: '610728', pcode: '610000', pname: '陕西'},
  {name: '留坝县', value: randomData(), code: '610729', pcode: '610000', pname: '陕西'},
  {name: '佛坪县', value: randomData(), code: '610730', pcode: '610000', pname: '陕西'},
  {name: '临渭区', value: randomData(), code: '610502', pcode: '610000', pname: '陕西'},
  {name: '华州区', value: randomData(), code: '610503', pcode: '610000', pname: '陕西'},
  {name: '潼关县', value: randomData(), code: '610522', pcode: '610000', pname: '陕西'},
  {name: '大荔县', value: randomData(), code: '610523', pcode: '610000', pname: '陕西'},
  {name: '合阳县', value: randomData(), code: '610524', pcode: '610000', pname: '陕西'},
  {name: '澄城县', value: randomData(), code: '610525', pcode: '610000', pname: '陕西'},
  {name: '蒲城县', value: randomData(), code: '610526', pcode: '610000', pname: '陕西'},
  {name: '白水县', value: randomData(), code: '610527', pcode: '610000', pname: '陕西'},
  {name: '富平县', value: randomData(), code: '610528', pcode: '610000', pname: '陕西'},
  {name: '韩城市', value: randomData(), code: '610581', pcode: '610000', pname: '陕西'},
  {name: '华阴市', value: randomData(), code: '610582', pcode: '610000', pname: '陕西'},
  {name: '西安市', value: randomData(), code: '610100', pcode: '610000', pname: '陕西'},
  {name: '王益区', value: randomData(), code: '610202', pcode: '610000', pname: '陕西'},
  {name: '印台区', value: randomData(), code: '610203', pcode: '610000', pname: '陕西'},
  {name: '耀州区', value: randomData(), code: '610204', pcode: '610000', pname: '陕西'},
  {name: '宜君县', value: randomData(), code: '610222', pcode: '610000', pname: '陕西'},
  // 宁夏
  {name: '银川市', value: randomData(), code: '640100', pcode: '100000', pname: '中国'},
  {name: '石嘴山市', value: randomData(), code: '640200', pcode: '100000', pname: '中国'},
  {name: '吴忠市', value: randomData(), code: '640300', pcode: '100000', pname: '中国'},
  {name: '固原市', value: randomData(), code: '640400', pcode: '100000', pname: '中国'},
  {name: '中卫市', value: randomData(), code: '640500', pcode: '100000', pname: '中国'},
  // 宁夏各个区域
  {name: '沙坡头区', value: randomData(), code: '640502', pcode: '640000', pname: '宁夏'},
  {name: '中宁县', value: randomData(), code: '640521', pcode: '640000', pname: '宁夏'},
  {name: '海原县', value: randomData(), code: '640522', pcode: '640000', pname: '宁夏'},
  {name: '利通区', value: randomData(), code: '640302', pcode: '640000', pname: '宁夏'},
  {name: '红寺堡区', value: randomData(), code: '640303', pcode: '640000', pname: '宁夏'},
  {name: '盐池县', value: randomData(), code: '640323', pcode: '640000', pname: '宁夏'},
  {name: '同心县', value: randomData(), code: '640324', pcode: '640000', pname: '宁夏'},
  {name: '青铜峡市', value: randomData(), code: '640381', pcode: '640000', pname: '宁夏'},
  {name: '原州区', value: randomData(), code: '640402', pcode: '640000', pname: '宁夏'},
  {name: '西吉县', value: randomData(), code: '640422', pcode: '640000', pname: '宁夏'},
  {name: '隆德县', value: randomData(), code: '640423', pcode: '640000', pname: '宁夏'},
  {name: '泾源县', value: randomData(), code: '640424', pcode: '640000', pname: '宁夏'},
  {name: '彭阳县', value: randomData(), code: '640425', pcode: '640000', pname: '宁夏'},
  {name: '大武口区', value: randomData(), code: '640202', pcode: '640000', pname: '宁夏'},
  {name: '惠农区', value: randomData(), code: '640205', pcode: '640000', pname: '宁夏'},
  {name: '平罗县', value: randomData(), code: '640221', pcode: '640000', pname: '宁夏'},
  {name: '兴庆区', value: randomData(), code: '640104', pcode: '640000', pname: '宁夏'},
  {name: '西夏区', value: randomData(), code: '640105', pcode: '640000', pname: '宁夏'},
  {name: '金凤区', value: randomData(), code: '640106', pcode: '640000', pname: '宁夏'},
  {name: '永宁县', value: randomData(), code: '640121', pcode: '640000', pname: '宁夏'},
  {name: '贺兰县', value: randomData(), code: '640122', pcode: '640000', pname: '宁夏'},
  {name: '灵武市', value: randomData(), code: '640181', pcode: '640000', pname: '宁夏'},
];







// 市集数据
// export var provincesdata = [
//   // 辽宁
//   { name: '朝阳市', value: randomData() ,code:"211300"},
//   { name: '阜新市', value: randomData() ,code:"210900"},
//   { name: '铁岭市', value: randomData() ,code:"211200"},
//   { name: '沈阳市', value: randomData() ,code:"210100"},
//   { name: '抚顺市', value: randomData() ,code:"210400"},
//   { name: '锦州市', value: randomData() ,code:"210700"},
//   { name: '盘锦市', value: randomData() ,code:"211100"},
//   { name: '辽阳市', value: randomData() ,code:"211000"},
//   { name: '本溪市', value: randomData() ,code:"210500"},
//   { name: '鞍山市', value: randomData() ,code:"210300"},
//   { name: '营口市', value: randomData() ,code:"210800"},
//   { name: '大连市', value: randomData() ,code:"210200"},
//   { name: '葫芦岛市', value: randomData() ,code:"211400"},
//   { name: '丹东市', value: randomData() ,code:"210600"},
//   // 沈阳
//   { name: '和平区',value: randomData(),code:"210102",pcode:"210000",pname:"辽宁"},
//   {
//     name: '康平县',
//     value: randomData(),
//     code:"210123",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '法库县',
//     value: randomData(),
//     code:"210124",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '新民市',
//     value: randomData(),
//     code:"210181",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '于洪区',
//     value: randomData(),
//     code:"210114",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '沈北新区',
//     value: randomData(),
//     code:"210102",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '皇姑区',
//     value: randomData(),
//     code:"210105",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '大东区',
//     value: randomData(),
//     code:"210104",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '浑南区',
//     value: randomData(),
//     code:"210112",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '铁西区',
//     value: randomData(),
//     code:"210106",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '辽中区',
//     value: randomData(),
//     code:"210115",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '苏家屯区',
//     value: randomData(),
//     code:"210111",
//     pcode:"210000",pname:"辽宁"
//   },
//   {
//     name: '沈河区',
//     value: randomData(),
//     code:"210103",
//     pcode:"210000",pname:"辽宁"
//   },
//   // 丹东
//   {
//     name: '元宝区',
//     value: randomData(),
//     code:"210602",
//   },
//   {
//     name: '振兴区',
//     value: randomData(),
//     code:"210603",
//   },
//   {
//     name: '振安区',
//     value: randomData(),
//     code:"210604",
//   },
//   {
//     name: '宽甸满族自治县',
//     value: randomData(),
//     code:"210624",
//   },
//   {
//     name: '东港市',
//     value: randomData(),
//     code:"210681",
//   },
//   {
//     name: '凤城市',
//     value: randomData(),
//     code:"210682",
//   },
//   // 铁岭
//   {name: '银州区', value: randomData(), code:"211202, pname: '辽宁'},
//   {name: '清河区', value: randomData(), code:"211204, pname: '辽宁'},
//   {name: '铁岭县', value: randomData(), code:"211221, pname: '辽宁'},
//   {name: '西丰县', value: randomData(), code:"211223, pname: '辽宁'},
//   {name: '昌图县', value: randomData(), code:"211224, pname: '辽宁'},
//   {name: '调兵山市', value: randomData(), code:"211281, pname: '辽宁'},
//   {name: '开原市', value: randomData(), code:"211282, pname: '辽宁'},
//   // 抚顺
//   {name: '新抚区', value: randomData(), code:"210402, pname: '辽宁'},
//   {name: '东洲区', value: randomData(), code:"210403, pname: '辽宁'},
//   {name: '望花区', value: randomData(), code:"210404, pname: '辽宁'},
//   {name: '顺城区', value: randomData(), code:"210411, pname: '辽宁'},
//   {name: '抚顺县', value: randomData(), code:"210421, pname: '辽宁'},
//   {name: '新宾满族自治县', value: randomData(), code:"210422, pname: '辽宁'},
//   {name: '清原满族自治县', value: randomData(), code:"210423, pname: '辽宁'},
//   // 本溪
//   {name: '平山区', value: randomData(), code:"210502, pname: '辽宁'},
//   {name: '溪湖区', value: randomData(), code:"210503, pname: '辽宁'},
//   {name: '明山区', value: randomData(), code:"210504, pname: '辽宁'},
//   {name: '南芬区', value: randomData(), code:"210505, pname: '辽宁'},
//   {name: '本溪满族自治县', value: randomData(), code:"210521, pname: '辽宁'},
//   {name: '桓仁满族自治县', value: randomData(), code:"210522, pname: '辽宁'},
//   // 辽阳
//   {name: '白塔区', value: randomData(), code:"211002, pname: '辽宁'},
//   {name: '文圣区', value: randomData(), code:"211003, pname: '辽宁'},
//   {name: '宏伟区', value: randomData(), code:"211004, pname: '辽宁'},
//   {name: '弓长岭区', value: randomData(), code:"211005, pname: '辽宁'},
//   {name: '太子河区', value: randomData(), code:"211011, pname: '辽宁'},
//   {name: '辽阳县', value: randomData(), code:"211021, pname: '辽宁'},
//   {name: '灯塔市', value: randomData(), code:"211081, pname: '辽宁'},
//   // 鞍山
//   {name: '铁东区', value: randomData(), code:"210302, pname: '辽宁'},
//   {name: '铁西区', value: randomData(), code:"210303, pname: '辽宁'},
//   {name: '立山区', value: randomData(), code:"210304, pname: '辽宁'},
//   {name: '千山区', value: randomData(), code:"210311, pname: '辽宁'},
//   {name: '台安县', value: randomData(), code:"210321, pname: '辽宁'},
//   {name: '岫岩满族自治县', value: randomData(), code:"210323, pname: '辽宁'},
//   {name: '海城市', value: randomData(), code:"210381, pname: '辽宁'},
//   // 大连
//   {name: '中山区', value: randomData(), code:"210202, pname: '辽宁'},
//   {name: '西岗区', value: randomData(), code:"210203, pname: '辽宁'},
//   {name: '沙河口区', value: randomData(), code:"210204, pname: '辽宁'},
//   {name: '甘井子区', value: randomData(), code:"210211, pname: '辽宁'},
//   {name: '旅顺口区', value: randomData(), code:"210212, pname: '辽宁'},
//   {name: '金州区', value: randomData(), code:"210213, pname: '辽宁'},
//   {name: '普兰店区', value: randomData(), code:"210214, pname: '辽宁'},
//   {name: '长海县', value: randomData(), code:"210224, pname: '辽宁'},
//   {name: '瓦房店市', value: randomData(), code:"210281, pname: '辽宁'},
//   {name: '庄河市', value: randomData(), code:"210283, pname: '辽宁'},
//   // 营口
//   {name: '站前区', value: randomData(), code:"210802, pname: '辽宁'},
//   {name: '西市区', value: randomData(), code:"210803, pname: '辽宁'},
//   {name: '鲅鱼圈区', value: randomData(), code:"210804, pname: '辽宁'},
//   {name: '老边区', value: randomData(), code:"210811, pname: '辽宁'},
//   {name: '盖州市', value: randomData(), code:"210881, pname: '辽宁'},
//   {name: '大石桥市', value: randomData(), code:"210882, pname: '辽宁'},
//   // 盘锦
//   {name: '双台子区', value: randomData(), code:"211102, pname: '辽宁'},
//   {name: '兴隆台区', value: randomData(), code:"211103, pname: '辽宁'},
//   {name: '大洼区', value: randomData(), code:"211104, pname: '辽宁'},
//   {name: '盘山县', value: randomData(), code:"211122, pname: '辽宁'},
//
//   // 锦州
//   {name: '古塔区', value: randomData(), code:"210702, pname: '辽宁'},
//   {name: '凌河区', value: randomData(), code:"210703, pname: '辽宁'},
//   {name: '太和区', value: randomData(), code:"210711, pname: '辽宁'},
//   {name: '黑山县', value: randomData(), code:"210726, pname: '辽宁'},
//   {name: '义县', value: randomData(), code:"210727, pname: '辽宁'},
//   {name: '凌海市', value: randomData(), code:"210781, pname: '辽宁'},
//   {name: '北镇市', value: randomData(), code:"210782, pname: '辽宁'},
//
//   // 阜新
//   {name: '海州区', value: randomData(), code:"210902, pname: '辽宁'},
//   {name: '新邱区', value: randomData(), code:"210903, pname: '辽宁'},
//   {name: '太平区', value: randomData(), code:"210904, pname: '辽宁'},
//   {name: '清河门区', value: randomData(), code:"210905, pname: '辽宁'},
//   {name: '细河区', value: randomData(), code:"210911, pname: '辽宁'},
//   {name: '阜新蒙古族自治县', value: randomData(), code:"210921, pname: '辽宁'},
//   {name: '彰武县', value: randomData(), code:"210922, pname: '辽宁'},
//
//   // 葫芦岛
//   {name: '连山区', value: randomData(), code:"211402, pname: '辽宁'},
//   {name: '龙港区', value: randomData(), code:"211403, pname: '辽宁'},
//   {name: '南票区', value: randomData(), code:"211404, pname: '辽宁'},
//   {name: '绥中县', value: randomData(), code:"211421, pname: '辽宁'},
//   {name: '建昌县', value: randomData(), code:"211422, pname: '辽宁'},
//   {name: '兴城市', value: randomData(), code:"211481, pname: '辽宁'},
//   // 朝阳
//   {name: '双塔区', value: randomData(), code:"211302, pname: '辽宁'},
//   {name: '龙城区', value: randomData(), code:"211303, pname: '辽宁'},
//   {name: '朝阳县', value: randomData(), code:"211321, pname: '辽宁'},
//   {name: '建平县', value: randomData(), code:"211322, pname: '辽宁'},
//   {name: '喀喇沁左翼蒙古族自治县', value: randomData(), code:"211324, pname: '辽宁'},
//   {name: '北票市', value: randomData(), code:"211381, pname: '辽宁'},
//   {name: '凌源市', value: randomData(), code:"211382, pname: '辽宁'},
//
//   { name: '深圳市', value: randomData() },
//   { name: '无锡市', value: randomData() },
//   {
//     name: '徐州市',
//     value: randomData()
//   },
//   {
//     name: '常州市',
//     value: randomData()
//   },
//   {
//     name: '苏州市',
//     value: randomData()
//   },
//   {
//     name: '南通市',
//     value: randomData()
//   },
//   {
//     name: '连云港市',
//     value: randomData()
//   },
//   {
//     name: '淮安市',
//     value: randomData()
//   },
//   {
//     name: '盐城市',
//     value: randomData()
//   },
//   {
//     name: '扬州市',
//     value: randomData()
//   },
//   {
//     name: '镇江市',
//     value: randomData()
//   },
//   {
//     name: '泰州市',
//     value: randomData()
//   },
//   {
//     name: '宿迁市',
//     value: randomData()
//   },
//   {
//     name: '崇明区',
//     value: randomData()
//   },
//   {
//     name: '宝山区',
//     value: randomData()
//   },
//   {
//     name: '嘉定区',
//     value: randomData()
//   },
//   {
//     name: '青浦区',
//     value: randomData()
//   },
//   {
//     name: '松江区',
//     value: randomData()
//   },
//   {
//     name: '金山区',
//     value: randomData()
//   },
//   {
//     name: '浦东新区',
//     value: randomData()
//   },
//   {
//     name: '奉贤区',
//     value: randomData()
//   },
//   {
//     name: '闵行区',
//     value: randomData()
//   },
//   {
//     name: '长宁区',
//     value: randomData()
//   },
//   {
//     name: '普陀区',
//     value: randomData()
//   },
//   {
//     name: '徐汇区',
//     value: randomData()
//   },
//   {
//     name: '黄浦区',
//     value: randomData()
//   },
//   {
//     name: '静安区',
//     value: randomData()
//   },
//   {
//     name: '虹口区',
//     value: randomData()
//   },
//   {
//     name: '杨浦区',
//     value: randomData()
//   },
//   {
//     name: '广州市',
//     value: randomData()
//   },
//   {
//     name: '深圳市',
//     value: randomData()
//   },
//   {
//     name: '珠海市',
//     value: randomData()
//   },
//   {
//     name: '佛山市',
//     value: randomData()
//   },
//   {
//     name: '江门市',
//     value: randomData()
//   },
//   {
//     name: '肇庆市',
//     value: randomData()
//   },
//   {
//     name: '惠州市',
//     value: randomData()
//   },
//   {
//     name: '东莞市',
//     value: randomData()
//   },
//   {
//     name: '中山市',
//     value: randomData()
//   },
//   {
//     name: '湛江市',
//     value: randomData()
//   },
//   {
//     name: '茂名市',
//     value: randomData()
//   },
//   {
//     name: '阳江市',
//     value: randomData()
//   },
//   {
//     name: '云浮市',
//     value: randomData()
//   },
//   {
//     name: '汕头市',
//     value: randomData()
//   },
//   {
//     name: '汕尾市',
//     value: randomData()
//   },
//   {
//     name: '潮州市',
//     value: randomData()
//   },
//   {
//     name: '揭阳市',
//     value: randomData()
//   },
//   {
//     name: '韶关市',
//     value: randomData()
//   },
//   {
//     name: '梅州市',
//     value: randomData()
//   },
//   {
//     name: '河源市',
//     value: randomData()
//   },
//   {
//     name: '清远市',
//     value: randomData()
//   },
//   {
//     name: '南宁市',
//     value: randomData()
//   },
//   {
//     name: '柳州市',
//     value: randomData()
//   },
//   {
//     name: '桂林市',
//     value: randomData()
//   },
//   {
//     name: '梧州市',
//     value: randomData()
//   },
//   {
//     name: '北海市',
//     value: randomData()
//   },
//   {
//     name: '防城港市',
//     value: randomData()
//   },
//   {
//     name: '钦州市',
//     value: randomData()
//   },
//   {
//     name: '贵港市',
//     value: randomData()
//   },
//   {
//     name: '玉林市',
//     value: randomData()
//   },
//   {
//     name: '百色市',
//     value: randomData()
//   },
//   {
//     name: '贺州市',
//     value: randomData()
//   },
//   {
//     name: '河池市',
//     value: randomData()
//   },
//   {
//     name: '来宾市',
//     value: randomData()
//   },
//   {
//     name: '崇左市',
//     value: randomData()
//   },
//   {
//     name: '郴州市',
//     value: randomData()
//   },
//   {
//     name: '海口市',
//     value: randomData()
//   },
//   {
//     name: '三亚市',
//     value: randomData()
//   },
//   {
//     name: '三沙市',
//     value: randomData()
//   },
//   {
//     name: '五指山市',
//     value: randomData()
//   },
//   {
//     name: '琼海市',
//     value: randomData()
//   },
//   {
//     name: '儋州市',
//     value: randomData()
//   },
//   {
//     name: '文昌市',
//     value: randomData()
//   },
//   {
//     name: '万宁市',
//     value: randomData()
//   },
//   {
//     name: '东方市',
//     value: randomData()
//   },
//   {
//     name: '澄迈县',
//     value: randomData()
//   },
//   {
//     name: '定安县',
//     value: randomData()
//   },
//   {
//     name: '屯昌县',
//     value: randomData()
//   },
//   {
//     name: '临高县',
//     value: randomData()
//   },
//   {
//     name: '白沙黎族自治县',
//     value: randomData()
//   },
//   {
//     name: '昌江黎族自治县',
//     value: randomData()
//   },
//   {
//     name: '乐东黎族自治县',
//     value: randomData()
//   },
//   {
//     name: '陵水黎族自治县',
//     value: randomData()
//   },
//   {
//     name: '保亭黎族苗族自治县',
//     value: randomData()
//   },
//   {
//     name: '琼中黎族苗族自治县',
//     value: randomData()
//   },
//   {
//     name: '郑州市',
//     value: randomData()
//   },
//   {
//     name: '开封市',
//     value: randomData()
//   },
//   {
//     name: '洛阳市',
//     value: randomData()
//   },
//   {
//     name: '平顶山市',
//     value: randomData()
//   },
//   {
//     name: '安阳市',
//     value: randomData()
//   },
//   {
//     name: '鹤壁市',
//     value: randomData()
//   },
//   {
//     name: '新乡市',
//     value: randomData()
//   },
//   {
//     name: '焦作市',
//     value: randomData()
//   },
//   {
//     name: '濮阳市',
//     value: randomData()
//   },
//   {
//     name: '许昌市',
//     value: randomData()
//   },
//   {
//     name: '漯河市',
//     value: randomData()
//   },
//   {
//     name: '三门峡市',
//     value: randomData()
//   },
//   {
//     name: '南阳市',
//     value: randomData()
//   },
//   {
//     name: '商丘市',
//     value: randomData()
//   },
//   {
//     name: '信阳市',
//     value: randomData()
//   },
//   {
//     name: '周口市',
//     value: randomData()
//   },
//   {
//     name: '驻马店市',
//     value: randomData()
//   },
//   {
//     name: '济源市',
//     value: randomData()
//   },
//   {
//     name: '西安市',
//     value: randomData()
//   },
//   {
//     name: '商洛市',
//     value: randomData()
//   },
//   {
//     name: '铜川市',
//     value: randomData()
//   },
//   {
//     name: '宝鸡市',
//     value: randomData()
//   },
//   {
//     name: '咸阳市',
//     value: randomData()
//   },
//   {
//     name: '渭南市',
//     value: randomData()
//   },
//   {
//     name: '延安市',
//     value: randomData()
//   },
//   {
//     name: '汉中市',
//     value: randomData()
//   },
//   {
//     name: '榆林市',
//     value: randomData()
//   },
//   {
//     name: '安康市',
//     value: randomData()
//   },
//   {
//     name: '兰州市',
//     value: randomData()
//   },
//   {
//     name: '金昌市',
//     value: randomData()
//   },
//   {
//     name: '白银市',
//     value: randomData()
//   },
//   {
//     name: '天水市',
//     value: randomData()
//   },
//   {
//     name: '嘉峪关市',
//     value: randomData()
//   },
//   {
//     name: '武威市',
//     value: randomData()
//   },
//   {
//     name: '张掖市',
//     value: randomData()
//   },
//   {
//     name: '平凉市',
//     value: randomData()
//   },
//   {
//     name: '酒泉市',
//     value: randomData()
//   },
//   {
//     name: '庆阳市',
//     value: randomData()
//   },
//   {
//     name: '定西市',
//     value: randomData()
//   },
//   {
//     name: '陇南市',
//     value: randomData()
//   },
//   {
//     name: '临夏回族自治州',
//     value: randomData()
//   },
//   {
//     name: '甘南藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '西宁市',
//     value: randomData()
//   },
//   {
//     name: '海东市',
//     value: randomData()
//   },
//   {
//     name: '海北藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '黄南藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '海南藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '果洛藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '玉树藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '海西蒙古族藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '长沙市',
//     value: randomData()
//   },
//   {
//     name: '株洲市',
//     value: randomData()
//   },
//   {
//     name: '湘潭市',
//     value: randomData()
//   },
//   {
//     name: '衡阳市',
//     value: randomData()
//   },
//   {
//     name: '邵阳市',
//     value: randomData()
//   },
//   {
//     name: '岳阳市',
//     value: randomData()
//   },
//   {
//     name: '常德市',
//     value: randomData()
//   },
//   {
//     name: '张家界市',
//     value: randomData()
//   },
//   {
//     name: '益阳市',
//     value: randomData()
//   },
//   {
//     name: '永州市',
//     value: randomData()
//   },
//   {
//     name: '怀化市',
//     value: randomData()
//   },
//   {
//     name: '娄底市',
//     value: randomData()
//   },
//   {
//     name: '湘西土家族苗族自治州',
//     value: randomData()
//   },
//   {
//     name: '武汉市',
//     value: randomData()
//   },
//   {
//     name: '襄阳市',
//     value: randomData()
//   },
//   {
//     name: '黄石市',
//     value: randomData()
//   },
//   {
//     name: '十堰市',
//     value: randomData()
//   },
//   {
//     name: '荆州市',
//     value: randomData()
//   },
//   {
//     name: '宜昌市',
//     value: randomData()
//   },
//   {
//     name: '襄樊市',
//     value: randomData()
//   },
//   {
//     name: '鄂州市',
//     value: randomData()
//   },
//   {
//     name: '荆门市',
//     value: randomData()
//   },
//   {
//     name: '孝感市',
//     value: randomData()
//   },
//   {
//     name: '黄冈市',
//     value: randomData()
//   },
//   {
//     name: '咸宁市',
//     value: randomData()
//   },
//   {
//     name: '随州市',
//     value: randomData()
//   },
//   {
//     name: '仙桃市',
//     value: randomData()
//   },
//   {
//     name: '天门市',
//     value: randomData()
//   },
//   {
//     name: '潜江市',
//     value: randomData()
//   },
//   {
//     name: '神农架林区',
//     value: randomData()
//   },
//   {
//     name: '恩施土家族苗族自治州',
//     value: randomData()
//   },
//   {
//     name: '南昌市',
//     value: randomData()
//   },
//   {
//     name: '景德镇市',
//     value: randomData()
//   },
//   {
//     name: '萍乡市',
//     value: randomData()
//   },
//   {
//     name: '九江市',
//     value: randomData()
//   },
//   {
//     name: '新余市',
//     value: randomData()
//   },
//   {
//     name: '鹰潭市',
//     value: randomData()
//   },
//   {
//     name: '赣州市',
//     value: randomData()
//   },
//   {
//     name: '吉安市',
//     value: randomData()
//   },
//   {
//     name: '宜春市',
//     value: randomData()
//   },
//   {
//     name: '抚州市',
//     value: randomData()
//   },
//   {
//     name: '上饶市',
//     value: randomData()
//   },
//   {
//     name: '济南市',
//     value: randomData()
//   },
//   {
//     name: '青岛市',
//     value: randomData()
//   },
//   {
//     name: '淄博市',
//     value: randomData()
//   },
//   {
//     name: '枣庄市',
//     value: randomData()
//   },
//   {
//     name: '东营市',
//     value: randomData()
//   },
//   {
//     name: '烟台市',
//     value: randomData()
//   },
//   {
//     name: '潍坊市',
//     value: randomData()
//   },
//   {
//     name: '济宁市',
//     value: randomData()
//   },
//   {
//     name: '泰安市',
//     value: randomData()
//   },
//   {
//     name: '威海市',
//     value: randomData()
//   },
//   {
//     name: '日照市',
//     value: randomData()
//   },
//   {
//     name: '莱芜市',
//     value: randomData()
//   },
//   {
//     name: '临沂市',
//     value: randomData()
//   },
//   {
//     name: '德州市',
//     value: randomData()
//   },
//   {
//     name: '聊城市',
//     value: randomData()
//   },
//   {
//     name: '滨州市',
//     value: randomData()
//   },
//   {
//     name: '菏泽市',
//     value: randomData()
//   },
//   {
//     name: '合肥市',
//     value: randomData()
//   },
//   {
//     name: '芜湖市',
//     value: randomData()
//   },
//   {
//     name: '蚌埠市',
//     value: randomData()
//   },
//   {
//     name: '淮南市',
//     value: randomData()
//   },
//   {
//     name: '马鞍山市',
//     value: randomData()
//   },
//   {
//     name: '淮北市',
//     value: randomData()
//   },
//   {
//     name: '铜陵市',
//     value: randomData()
//   },
//   {
//     name: '安庆市',
//     value: randomData()
//   },
//   {
//     name: '黄山市',
//     value: randomData()
//   },
//   {
//     name: '滁州市',
//     value: randomData()
//   },
//   {
//     name: '阜阳市',
//     value: randomData()
//   },
//   {
//     name: '宿州市',
//     value: randomData()
//   },
//   {
//     name: '巢湖市',
//     value: randomData()
//   },
//   {
//     name: '六安市',
//     value: randomData()
//   },
//   {
//     name: '亳州市',
//     value: randomData()
//   },
//   {
//     name: '池州市',
//     value: randomData()
//   },
//   {
//     name: '宣城市',
//     value: randomData()
//   },
//   {
//     name: '石家庄市',
//     value: randomData()
//   },
//   {
//     name: '唐山市',
//     value: randomData()
//   },
//   {
//     name: '秦皇岛市',
//     value: randomData()
//   },
//   {
//     name: '邯郸市',
//     value: randomData()
//   },
//   {
//     name: '邢台市',
//     value: randomData()
//   },
//   {
//     name: '保定市',
//     value: randomData()
//   },
//   {
//     name: '张家口市',
//     value: randomData()
//   },
//   {
//     name: '承德市',
//     value: randomData()
//   },
//   {
//     name: '沧州市',
//     value: randomData()
//   },
//   {
//     name: '廊坊市',
//     value: randomData()
//   },
//   {
//     name: '衡水市',
//     value: randomData()
//   },
//   {
//     name: '东城区',
//     value: randomData()
//   },
//   {
//     name: '西城区',
//     value: randomData()
//   },
//   {
//     name: '朝阳区',
//     value: randomData()
//   },
//   {
//     name: '丰台区',
//     value: randomData()
//   },
//   {
//     name: '石景山区',
//     value: randomData()
//   },
//   {
//     name: '海淀区',
//     value: randomData()
//   },
//   {
//     name: '门头沟区',
//     value: randomData()
//   },
//   {
//     name: '房山区',
//     value: randomData()
//   },
//   {
//     name: '通州区',
//     value: randomData()
//   },
//   {
//     name: '顺义区',
//     value: randomData()
//   },
//   {
//     name: '昌平区',
//     value: randomData()
//   },
//   {
//     name: '大兴区',
//     value: randomData()
//   },
//   {
//     name: '怀柔区',
//     value: randomData()
//   },
//   {
//     name: '平谷区',
//     value: randomData()
//   },
//   {
//     name: '密云区',
//     value: randomData()
//   },
//   {
//     name: '延庆区',
//     value: randomData()
//   },
//   {
//     name: '河东区',
//     value: randomData()
//   },
//   {
//     name: '河西区',
//     value: randomData()
//   },
//   {
//     name: '南开区',
//     value: randomData()
//   },
//   {
//     name: '河北区',
//     value: randomData()
//   },
//   {
//     name: '红桥区',
//     value: randomData()
//   },
//   {
//     name: '东丽区',
//     value: randomData()
//   },
//   {
//     name: '西青区',
//     value: randomData()
//   },
//   {
//     name: '津南区',
//     value: randomData()
//   },
//   {
//     name: '北辰区',
//     value: randomData()
//   },
//   {
//     name: '武清区',
//     value: randomData()
//   },
//   {
//     name: '宝坻区',
//     value: randomData()
//   },
//   {
//     name: '滨海新区',
//     value: randomData()
//   },
//   {
//     name: '宁河区',
//     value: randomData()
//   },
//   {
//     name: '静海区',
//     value: randomData()
//   },
//   {
//     name: '蓟州区',
//     value: randomData()
//   },
//   {
//     name: '哈尔滨市',
//     value: randomData()
//   },
//   {
//     name: '齐齐哈尔市',
//     value: randomData()
//   },
//   {
//     name: '鹤岗市',
//     value: randomData()
//   },
//   {
//     name: '双鸭山市',
//     value: randomData()
//   },
//   {
//     name: '鸡西市',
//     value: randomData()
//   },
//   {
//     name: '大庆市',
//     value: randomData()
//   },
//   {
//     name: '伊春市',
//     value: randomData()
//   },
//   {
//     name: '牡丹江市',
//     value: randomData()
//   },
//   {
//     name: '佳木斯市',
//     value: randomData()
//   },
//   {
//     name: '七台河市',
//     value: randomData()
//   },
//   {
//     name: '黑河市',
//     value: randomData()
//   },
//   {
//     name: '绥化市',
//     value: randomData()
//   },
//   {
//     name: '大兴安岭地区',
//     value: randomData()
//   },
//   {
//     name: '长春市',
//     value: randomData()
//   },
//   {
//     name: '吉林市',
//     value: randomData()
//   },
//   {
//     name: '四平市',
//     value: randomData()
//   },
//   {
//     name: '辽源市',
//     value: randomData()
//   },
//   {
//     name: '通化市',
//     value: randomData()
//   },
//   {
//     name: '白山市',
//     value: randomData()
//   },
//   {
//     name: '松原市',
//     value: randomData()
//   },
//   {
//     name: '白城市',
//     value: randomData()
//   },
//   {
//     name: '延边朝鲜族自治州',
//     value: randomData()
//   },
//   {
//     name: '呼和浩特市',
//     value: randomData()
//   },
//   {
//     name: '包头市',
//     value: randomData()
//   },
//   {
//     name: '乌海市',
//     value: randomData()
//   },
//   {
//     name: '赤峰市',
//     value: randomData()
//   },
//   {
//     name: '通辽市',
//     value: randomData()
//   },
//   {
//     name: '鄂尔多斯市',
//     value: randomData()
//   },
//   {
//     name: '呼伦贝尔市',
//     value: randomData()
//   },
//   {
//     name: '巴彦淖尔市',
//     value: randomData()
//   },
//   {
//     name: '乌兰察布市',
//     value: randomData()
//   },
//   {
//     name: '锡林郭勒盟',
//     value: randomData()
//   },
//   {
//     name: '兴安盟',
//     value: randomData()
//   },
//   {
//     name: '阿拉善盟',
//     value: randomData()
//   },
//   {
//     name: '太原市',
//     value: randomData()
//   },
//   {
//     name: '大同市',
//     value: randomData()
//   },
//   {
//     name: '阳泉市',
//     value: randomData()
//   },
//   {
//     name: '长治市',
//     value: randomData()
//   },
//   {
//     name: '晋城市',
//     value: randomData()
//   },
//   {
//     name: '朔州市',
//     value: randomData()
//   },
//   {
//     name: '晋中市',
//     value: randomData()
//   },
//   {
//     name: '运城市',
//     value: randomData()
//   },
//   {
//     name: '忻州市',
//     value: randomData()
//   },
//   {
//     name: '临汾市',
//     value: randomData()
//   },
//   {
//     name: '吕梁市',
//     value: randomData()
//   },
//   {
//     name: '乌鲁木齐市',
//     value: randomData()
//   },
//   {
//     name: '北屯市',
//     value: randomData()
//   },
//   {
//     name: '克拉玛依市',
//     value: randomData()
//   },
//   {
//     name: '石河子市',
//     value: randomData()
//   },
//   {
//     name: '阿拉尔市',
//     value: randomData()
//   },
//   {
//     name: '图木舒克市',
//     value: randomData()
//   },
//   {
//     name: '五家渠市',
//     value: randomData()
//   },
//   {
//     name: '吐鲁番市',
//     value: randomData()
//   },
//   {
//     name: '阿克苏地区',
//     value: randomData()
//   },
//   {
//     name: '喀什地区',
//     value: randomData()
//   },
//   {
//     name: '哈密市',
//     value: randomData()
//   },
//   {
//     name: '和田地区',
//     value: randomData()
//   },
//   {
//     name: '阿图什市',
//     value: randomData()
//   },
//   {
//     name: '库尔勒市',
//     value: randomData()
//   },
//   {
//     name: '昌吉市',
//     value: randomData()
//   },
//   {
//     name: '阜康市',
//     value: randomData()
//   },
//   {
//     name: '米泉市',
//     value: randomData()
//   },
//   {
//     name: '博乐市',
//     value: randomData()
//   },
//   {
//     name: '伊宁市',
//     value: randomData()
//   },
//   {
//     name: '奎屯市',
//     value: randomData()
//   },
//   {
//     name: '塔城地区',
//     value: randomData()
//   },
//   {
//     name: '乌苏市',
//     value: randomData()
//   },
//   {
//     name: '阿勒泰地区',
//     value: randomData()
//   },
//   {
//     name: '双河市',
//     value: randomData()
//   },
//   {
//     name: '可克达拉市',
//     value: randomData()
//   },
//   {
//     name: '铁门关市',
//     value: randomData()
//   },
//   {
//     name: '昆玉市',
//     value: randomData()
//   },
//   {
//     name: '昌吉回族自治州',
//     value: randomData()
//   },
//   {
//     name: '伊犁哈萨克自治州',
//     value: randomData()
//   },
//   {
//     name: '博尔塔拉蒙古自治州',
//     value: randomData()
//   },
//   {
//     name: '巴音郭楞蒙古自治州',
//     value: randomData()
//   },
//   {
//     name: '克孜勒苏柯尔克孜自治州',
//     value: randomData()
//   },
//   {
//     name: '银川市',
//     value: randomData()
//   },
//   {
//     name: '石嘴山市',
//     value: randomData()
//   },
//   {
//     name: '吴忠市',
//     value: randomData()
//   },
//   {
//     name: '固原市',
//     value: randomData()
//   },
//   {
//     name: '中卫市',
//     value: randomData()
//   },
//   {
//     name: '福州市',
//     value: randomData()
//   },
//   {
//     name: '厦门市',
//     value: randomData()
//   },
//   {
//     name: '莆田市',
//     value: randomData()
//   },
//   {
//     name: '三明市',
//     value: randomData()
//   },
//   {
//     name: '泉州市',
//     value: randomData()
//   },
//   {
//     name: '漳州市',
//     value: randomData()
//   },
//   {
//     name: '南平市',
//     value: randomData()
//   },
//   {
//     name: '龙岩市',
//     value: randomData()
//   },
//   {
//     name: '宁德市',
//     value: randomData()
//   },
//   {
//     name: '杭州市',
//     value: randomData()
//   },
//   {
//     name: '宁波市',
//     value: randomData()
//   },
//   {
//     name: '温州市',
//     value: randomData()
//   },
//   {
//     name: '嘉兴市',
//     value: randomData()
//   },
//   {
//     name: '湖州市',
//     value: randomData()
//   },
//   {
//     name: '绍兴市',
//     value: randomData()
//   },
//   {
//     name: '金华市',
//     value: randomData()
//   },
//   {
//     name: '衢州市',
//     value: randomData()
//   },
//   {
//     name: '舟山市',
//     value: randomData()
//   },
//   {
//     name: '台州市',
//     value: randomData()
//   },
//   {
//     name: '丽水市',
//     value: randomData()
//   },
//   {
//     name: '拉萨市',
//     value: randomData()
//   },
//   {
//     name: '那曲地区',
//     value: randomData()
//   },
//   {
//     name: '昌都市',
//     value: randomData()
//   },
//   {
//     name: '山南地区',
//     value: randomData()
//   },
//   {
//     name: '日喀则市',
//     value: randomData()
//   },
//   {
//     name: '阿里地区',
//     value: randomData()
//   },
//   {
//     name: '林芝市',
//     value: randomData()
//   },
//   {
//     name: '贵阳市',
//     value: randomData()
//   },
//   {
//     name: '盘州市',
//     value: randomData()
//   },
//   {
//     name: '水城县',
//     value: randomData()
//   },
//   {
//     name: '赤水市',
//     value: randomData()
//   },
//   {
//     name: '仁怀市桐梓县',
//     value: randomData()
//   },
//   {
//     name: '绥阳县',
//     value: randomData()
//   },
//   {
//     name: '正安县',
//     value: randomData()
//   },
//   {
//     name: '道真县',
//     value: randomData()
//   },
//   {
//     name: '务川县',
//     value: randomData()
//   },
//   {
//     name: '凤冈县',
//     value: randomData()
//   },
//   {
//     name: '湄潭县',
//     value: randomData()
//   },
//   {
//     name: '习水县',
//     value: randomData()
//   },
//   {
//     name: '余庆县',
//     value: randomData()
//   },
//   {
//     name: '安顺市',
//     value: randomData()
//   },
//   {
//     name: '六盘水市',
//     value: randomData()
//   },
//   {
//     name: '铜仁市',
//     value: randomData()
//   },
//   {
//     name: '毕节市',
//     value: randomData()
//   },
//   {
//     name: '遵义市',
//     value: randomData()
//   },
//   {
//     name: '黔西南布依族苗族自治州',
//     value: randomData()
//   },
//   {
//     name: '黔东南苗族侗族自治州',
//     value: randomData()
//   },
//   {
//     name: '黔南布依族苗族自治州',
//     value: randomData()
//   },
//   {
//     name: '昆明市',
//     value: randomData()
//   },
//   {
//     name: '曲靖市',
//     value: randomData()
//   },
//   {
//     name: '玉溪市',
//     value: randomData()
//   },
//   {
//     name: '保山市',
//     value: randomData()
//   },
//   {
//     name: '昭通市',
//     value: randomData()
//   },
//   {
//     name: '丽江市',
//     value: randomData()
//   },
//   {
//     name: '思茅市',
//     value: randomData()
//   },
//   {
//     name: '临沧市',
//     value: randomData()
//   },
//   {
//     name: '思茅市',
//     value: randomData()
//   },
//   {
//     name: '文山壮族苗族自治州',
//     value: randomData()
//   },
//   {
//     name: '红河哈尼族彝族自治州',
//     value: randomData()
//   },
//   {
//     name: '西双版纳傣族自治州',
//     value: randomData()
//   },
//   {
//     name: '楚雄彝族自治州',
//     value: randomData()
//   },
//   {
//     name: '大理白族自治州',
//     value: randomData()
//   },
//   {
//     name: '德宏傣族景颇族自治州',
//     value: randomData()
//   },
//   {
//     name: '怒江傈僳族自治州',
//     value: randomData()
//   },
//   {
//     name: '迪庆藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '普洱市',
//     value: randomData()
//   },
//   {
//     name: '秀山土家族苗族自治县',
//     value: randomData()
//   },
//   {
//     name: '酉阳土家族苗族自治县',
//     value: randomData()
//   },
//   {
//     name: '黔江区',
//     value: randomData()
//   },
//   {
//     name: '彭水苗族土家族自治县',
//     value: randomData()
//   },
//   {
//     name: '武隆县',
//     value: randomData()
//   },
//   {
//     name: '南川区',
//     value: randomData()
//   },
//   {
//     name: '江津区',
//     value: randomData()
//   },
//   {
//     name: '永川区',
//     value: randomData()
//   },
//   {
//     name: '涪陵区',
//     value: randomData()
//   },
//   {
//     name: '云阳县',
//     value: randomData()
//   },
//   {
//     name: '奉节县',
//     value: randomData()
//   },
//   {
//     name: '巫山县',
//     value: randomData()
//   },
//   {
//     name: '巫溪县',
//     value: randomData()
//   },
//   {
//     name: '开县',
//     value: randomData()
//   },
//   {
//     name: '城口县',
//     value: randomData()
//   },
//   {
//     name: '万州区',
//     value: randomData()
//   },
//   {
//     name: '垫江县',
//     value: randomData()
//   },
//   {
//     name: '长寿区',
//     value: randomData()
//   },
//   {
//     name: '梁平县',
//     value: randomData()
//   },
//   {
//     name: '忠县',
//     value: randomData()
//   },
//   {
//     name: '丰都县',
//     value: randomData()
//   },
//   {
//     name: '石柱土家族自治县',
//     value: randomData()
//   },
//   {
//     name: '潼南区',
//     value: randomData()
//   },
//   {
//     name: '大足区',
//     value: randomData()
//   },
//   {
//     name: '荣昌区',
//     value: randomData()
//   },
//   {
//     name: '合川区',
//     value: randomData()
//   },
//   {
//     name: '铜梁区',
//     value: randomData()
//   },
//   {
//     name: '璧山区',
//     value: randomData()
//   },
//   {
//     name: '綦江区',
//     value: randomData()
//   },
//   {
//     name: '巴南区',
//     value: randomData()
//   },
//   {
//     name: '大渡口区',
//     value: randomData()
//   },
//   {
//     name: '九龙坡区',
//     value: randomData()
//   },
//   {
//     name: '沙坪坝区',
//     value: randomData()
//   },
//   {
//     name: '江北区',
//     value: randomData()
//   },
//   {
//     name: '南岸区',
//     value: randomData()
//   },
//   {
//     name: '渝北区',
//     value: randomData()
//   },
//   {
//     name: '北碚区',
//     value: randomData()
//   },
//   {
//     name: '成都市',
//     value: randomData()
//   },
//   {
//     name: '自贡市',
//     value: randomData()
//   },
//   {
//     name: '攀枝花市',
//     value: randomData()
//   },
//   {
//     name: '泸州市',
//     value: randomData()
//   },
//   {
//     name: '德阳市',
//     value: randomData()
//   },
//   {
//     name: '绵阳市',
//     value: randomData()
//   },
//   {
//     name: '广元市',
//     value: randomData()
//   },
//   {
//     name: '遂宁市',
//     value: randomData()
//   },
//   {
//     name: '内江市',
//     value: randomData()
//   },
//   {
//     name: '乐山市',
//     value: randomData()
//   },
//   {
//     name: '南充市',
//     value: randomData()
//   },
//   {
//     name: '眉山市',
//     value: randomData()
//   },
//   {
//     name: '宜宾市',
//     value: randomData()
//   },
//   {
//     name: '广安市',
//     value: randomData()
//   },
//   {
//     name: '达州市',
//     value: randomData()
//   },
//   {
//     name: '雅安市',
//     value: randomData()
//   },
//   {
//     name: '巴中市',
//     value: randomData()
//   },
//   {
//     name: '资阳市',
//     value: randomData()
//   },
//   {
//     name: '阿坝藏族羌族自治州',
//     value: randomData()
//   },
//   {
//     name: '甘孜藏族自治州',
//     value: randomData()
//   },
//   {
//     name: '凉山彝族自治州',
//     value: randomData()
//   }
// ];

function randomData() {
  return Math.round(Math.random() * 500);
}
