export type Shop = {
  type: string;
  code: string;
  name: string;
  district: string;
  address: string;
};

export type ShopWithCoord = Shop & {
  lng: number;
  lat: number;
};

export const shops: Shop[] = [
  {
    "type": "门店",
    "code": "GZ5633",
    "name": "沙井中心路",
    "district": "宝安区",
    "address": "深圳市宝安区沙井街道60号商业中心沙井中心路"
  },
  {
    "type": "门店",
    "code": "GZ2801",
    "name": "海雅",
    "district": "福田区",
    "address": "深圳市福田区福田路10A号商业中心海雅"
  },
  {
    "type": "门店",
    "code": "SZ4804",
    "name": "肯悦咖啡新莲塘店",
    "district": "福田区",
    "address": "深圳市福田区福田路11号商业中心肯悦咖啡新莲塘店"
  },
  {
    "type": "门店",
    "code": "LA1141",
    "name": "八号仓",
    "district": "福田区",
    "address": "深圳市福田区福田路14号商业中心八号仓"
  },
  {
    "type": "门店",
    "code": "SZ1149",
    "name": "天安云谷二店",
    "district": "福田区",
    "address": "深圳市福田区福田路15号商业中心天安云谷二店"
  },
  {
    "type": "门店",
    "code": "GZ5634",
    "name": "世纪汇",
    "district": "福田区",
    "address": "深圳市福田区福田路17号商业中心世纪汇"
  },
  {
    "type": "门店",
    "code": "szn125",
    "name": "侨香",
    "district": "福田区",
    "address": "深圳市福田区福田路18号商业中心侨香"
  },
  {
    "type": "门店",
    "code": "SZ2191",
    "name": "融创荟",
    "district": "福田区",
    "address": "深圳市福田区福田路19号商业中心融创荟"
  },
  {
    "type": "门店",
    "code": "SZ2018",
    "name": "东关珺府",
    "district": "福田区",
    "address": "深圳市福田区福田路20号商业中心东关珺府"
  },
  {
    "type": "门店",
    "code": "SZ1189",
    "name": "华盛珑悦",
    "district": "福田区",
    "address": "深圳市福田区福田路21号商业中心华盛珑悦"
  },
  {
    "type": "门店",
    "code": "SZ1128",
    "name": "万科第五园",
    "district": "福田区",
    "address": "深圳市福田区福田路22号商业中心万科第五园"
  },
  {
    "type": "门店",
    "code": "szn008",
    "name": "东园",
    "district": "福田区",
    "address": "深圳市福田区福田路25B号商业中心东园"
  },
  {
    "type": "门店",
    "code": "SZ2180",
    "name": "梅村",
    "district": "福田区",
    "address": "深圳市福田区福田路26号商业中心梅村"
  },
  {
    "type": "门店",
    "code": "SZ1984",
    "name": "新华为H区外卖点",
    "district": "福田区",
    "address": "深圳市福田区福田路27号商业中心新华为H区外卖点"
  },
  {
    "type": "门店",
    "code": "SZ2031",
    "name": "横岗大运小镇",
    "district": "福田区",
    "address": "深圳市福田区金田路10K号生活广场横岗大运小镇"
  },
  {
    "type": "门店",
    "code": "SZ1207",
    "name": "吉祥里",
    "district": "福田区",
    "address": "深圳市福田区金田路11号生活广场吉祥里"
  },
  {
    "type": "门店",
    "code": "SZ1165",
    "name": "智慧家园",
    "district": "福田区",
    "address": "深圳市福田区金田路12号生活广场智慧家园"
  },
  {
    "type": "门店",
    "code": "GZH738",
    "name": "鸿翔必胜宅急送",
    "district": "福田区",
    "address": "深圳市福田区金田路15号生活广场鸿翔必胜宅急送"
  },
  {
    "type": "门店",
    "code": "SZ2022",
    "name": "宝山时代大厦",
    "district": "福田区",
    "address": "深圳市福田区金田路17号生活广场宝山时代大厦"
  },
  {
    "type": "门店",
    "code": "SZ5822",
    "name": "肯悦咖啡慢城店",
    "district": "福田区",
    "address": "深圳市福田区金田路18号生活广场肯悦咖啡慢城店"
  },
  {
    "type": "门店",
    "code": "SZ1138",
    "name": "仁山智水",
    "district": "福田区",
    "address": "深圳市福田区金田路19号生活广场仁山智水"
  },
  {
    "type": "门店",
    "code": "GZ5058",
    "name": "新梅林",
    "district": "福田区",
    "address": "深圳市福田区金田路21号生活广场新梅林"
  },
  {
    "type": "门店",
    "code": "SZ2173",
    "name": "潮商广场",
    "district": "福田区",
    "address": "深圳市福田区金田路23号生活广场潮商广场"
  },
  {
    "type": "门店",
    "code": "SZN267",
    "name": "嘉御山",
    "district": "福田区",
    "address": "深圳市福田区金田路24号生活广场嘉御山"
  },
  {
    "type": "门店",
    "code": "SZ5820",
    "name": "肯悦咖啡高新区店",
    "district": "福田区",
    "address": "深圳市福田区金田路25L号生活广场肯悦咖啡高新区店"
  },
  {
    "type": "门店",
    "code": "SZ1084",
    "name": "国展中心",
    "district": "福田区",
    "address": "深圳市福田区金田路26号生活广场国展中心"
  },
  {
    "type": "门店",
    "code": "SZ1156",
    "name": "卓越前海",
    "district": "福田区",
    "address": "深圳市福田区金田路29号生活广场卓越前海"
  },
  {
    "type": "门店",
    "code": "SZ2161",
    "name": "哈工大荔园餐厅",
    "district": "福田区",
    "address": "深圳市福田区金田路30号生活广场哈工大荔园餐厅"
  },
  {
    "type": "门店",
    "code": "SZN261",
    "name": "喜港城KFC",
    "district": "福田区",
    "address": "深圳市福田区金田路31号生活广场喜港城KFC"
  },
  {
    "type": "门店",
    "code": "SZ1046",
    "name": "星光",
    "district": "福田区",
    "address": "深圳市福田区金田路33号生活广场星光"
  },
  {
    "type": "门店",
    "code": "SZ2976",
    "name": "洪湖公园映日潭",
    "district": "福田区",
    "address": "深圳市福田区金田路35号生活广场洪湖公园映日潭"
  },
  {
    "type": "门店",
    "code": "SZ1047",
    "name": "壹海城",
    "district": "福田区",
    "address": "深圳市福田区金田路36号生活广场壹海城"
  },
  {
    "type": "门店",
    "code": "SZ2149",
    "name": "较场尾",
    "district": "福田区",
    "address": "深圳市福田区金田路37号生活广场较场尾"
  },
  {
    "type": "门店",
    "code": "SZ1387",
    "name": "安居鸣鹿苑",
    "district": "福田区",
    "address": "深圳市福田区金田路38号生活广场安居鸣鹿苑"
  },
  {
    "type": "门店",
    "code": "SZ2111",
    "name": "创智云城",
    "district": "福田区",
    "address": "深圳市福田区金田路42号生活广场创智云城"
  },
  {
    "type": "门店",
    "code": "SZ2133",
    "name": "石岩天源隆",
    "district": "福田区",
    "address": "深圳市福田区金田路44号生活广场石岩天源隆"
  },
  {
    "type": "门店",
    "code": "SZ4845",
    "name": "中心公园 KCOFFEE TRUCK",
    "district": "福田区",
    "address": "深圳市福田区金田路46号生活广场中心公园 KCOFFEE TRUCK"
  },
  {
    "type": "门店",
    "code": "SZ2069",
    "name": "留仙洞有巢",
    "district": "福田区",
    "address": "深圳市福田区金田路49号生活广场留仙洞有巢"
  },
  {
    "type": "门店",
    "code": "GZ6601",
    "name": "云科府",
    "district": "福田区",
    "address": "深圳市福田区金田路50号生活广场云科府"
  },
  {
    "type": "门店",
    "code": "SZ2122",
    "name": "华润雪花科创",
    "district": "福田区",
    "address": "深圳市福田区金田路51号生活广场华润雪花科创"
  },
  {
    "type": "门店",
    "code": "SZ1354",
    "name": "蘅芳科技大厦",
    "district": "福田区",
    "address": "深圳市福田区金田路52号生活广场蘅芳科技大厦"
  },
  {
    "type": "门店",
    "code": "SZ4803",
    "name": "肯悦咖啡宝龙比亚迪店",
    "district": "福田区",
    "address": "深圳市福田区金田路53号生活广场肯悦咖啡宝龙比亚迪店"
  },
  {
    "type": "门店",
    "code": "SZ2028",
    "name": "西丽华泰",
    "district": "福田区",
    "address": "深圳市福田区金田路56号生活广场西丽华泰"
  },
  {
    "type": "门店",
    "code": "GZ5646",
    "name": "金港华庭",
    "district": "福田区",
    "address": "深圳市福田区金田路57号生活广场金港华庭"
  },
  {
    "type": "门店",
    "code": "SZ2107",
    "name": "松柏天虹",
    "district": "福田区",
    "address": "深圳市福田区金田路58号生活广场松柏天虹"
  },
  {
    "type": "门店",
    "code": "SZ1296",
    "name": "御景印象",
    "district": "福田区",
    "address": "深圳市福田区金田路59号生活广场御景印象"
  },
  {
    "type": "门店",
    "code": "szn854",
    "name": "数码新城DT",
    "district": "福田区",
    "address": "深圳市福田区金田路60号生活广场数码新城DT"
  },
  {
    "type": "门店",
    "code": "SZ1358",
    "name": "深业上城",
    "district": "福田区",
    "address": "深圳市福田区金田路63号生活广场深业上城"
  },
  {
    "type": "门店",
    "code": "GZ5617",
    "name": "景华汇",
    "district": "福田区",
    "address": "深圳市福田区金田路64号生活广场景华汇"
  },
  {
    "type": "门店",
    "code": "SZ2090",
    "name": "珑湾",
    "district": "福田区",
    "address": "深圳市福田区金田路65号生活广场珑湾"
  },
  {
    "type": "门店",
    "code": "SZ6825",
    "name": "肯悦咖啡较场尾店",
    "district": "福田区",
    "address": "深圳市福田区金田路66号生活广场肯悦咖啡较场尾店"
  },
  {
    "type": "门店",
    "code": "szn230",
    "name": "星河时代",
    "district": "福田区",
    "address": "深圳市福田区金田路67号生活广场星河时代"
  },
  {
    "type": "门店",
    "code": "SZ1299",
    "name": "招商中环",
    "district": "福田区",
    "address": "深圳市福田区金田路70I号生活广场招商中环"
  },
  {
    "type": "门店",
    "code": "GZ5603",
    "name": "领航城",
    "district": "福田区",
    "address": "深圳市福田区金田路71号生活广场领航城"
  },
  {
    "type": "门店",
    "code": "SZ2075",
    "name": "缙华府",
    "district": "福田区",
    "address": "深圳市福田区金田路72号生活广场缙华府"
  },
  {
    "type": "门店",
    "code": "SZ6813",
    "name": "肯悦咖啡新鸿洲店",
    "district": "福田区",
    "address": "深圳市福田区金田路73号生活广场肯悦咖啡新鸿洲店"
  },
  {
    "type": "门店",
    "code": "szn177",
    "name": "富通城",
    "district": "福田区",
    "address": "深圳市福田区金田路74号生活广场富通城"
  },
  {
    "type": "门店",
    "code": "SZ1276",
    "name": "佳兆业中心",
    "district": "福田区",
    "address": "深圳市福田区金田路77号生活广场佳兆业中心"
  },
  {
    "type": "门店",
    "code": "GZ5019",
    "name": "壹城中心",
    "district": "福田区",
    "address": "深圳市福田区金田路78号生活广场壹城中心"
  },
  {
    "type": "门店",
    "code": "SZ2049",
    "name": "尚水天成",
    "district": "福田区",
    "address": "深圳市福田区金田路79号生活广场尚水天成"
  },
  {
    "type": "门店",
    "code": "SZ1248",
    "name": "华业玫瑰郡",
    "district": "福田区",
    "address": "深圳市福田区金田路80号生活广场华业玫瑰郡"
  },
  {
    "type": "门店",
    "code": "szn141",
    "name": "锦花",
    "district": "福田区",
    "address": "深圳市福田区金田路81号生活广场锦花"
  },
  {
    "type": "门店",
    "code": "SZ5828",
    "name": "肯悦咖啡欢乐海岸店",
    "district": "福田区",
    "address": "深圳市福田区金田路84号生活广场肯悦咖啡欢乐海岸店"
  },
  {
    "type": "门店",
    "code": "SZ3974",
    "name": "KPOR龙光广场店",
    "district": "福田区",
    "address": "深圳市福田区金田路85J号生活广场KPOR龙光广场店"
  },
  {
    "type": "门店",
    "code": "SZ5849",
    "name": "肯悦国际E城店",
    "district": "福田区",
    "address": "深圳市福田区金田路87号生活广场肯悦国际E城店"
  },
  {
    "type": "门店",
    "code": "szn076",
    "name": "中兴",
    "district": "福田区",
    "address": "深圳市福田区金田路88号生活广场中兴"
  },
  {
    "type": "门店",
    "code": "SZ3843",
    "name": "肯悦咖啡锦华大厦店",
    "district": "福田区",
    "address": "深圳市福田区金田路92号生活广场肯悦咖啡锦华大厦店"
  },
  {
    "type": "门店",
    "code": "SZN863",
    "name": "华兴路DT",
    "district": "福田区",
    "address": "深圳市福田区金田路93号生活广场华兴路DT"
  },
  {
    "type": "门店",
    "code": "SZ5848",
    "name": "肯悦咖啡哈工大荔园餐厅店",
    "district": "福田区",
    "address": "深圳市福田区金田路94号生活广场肯悦咖啡哈工大荔园餐厅店"
  },
  {
    "type": "门店",
    "code": "szn028",
    "name": "六约",
    "district": "福田区",
    "address": "深圳市福田区金田路95号生活广场六约"
  },
  {
    "type": "门店",
    "code": "SZ4828",
    "name": "翠竹公园",
    "district": "福田区",
    "address": "深圳市福田区金田路98号生活广场翠竹公园"
  },
  {
    "type": "门店",
    "code": "SZ2199",
    "name": "万科广场",
    "district": "福田区",
    "address": "深圳市福田区金田路99号生活广场万科广场"
  },
  {
    "type": "门店",
    "code": "SZ1290",
    "name": "光明云科府",
    "district": "光明区",
    "address": "深圳市光明区凤凰街道63号购物广场光明云科府"
  },
  {
    "type": "门店",
    "code": "SZ3825",
    "name": "光明群众体育中心KCOFFEE",
    "district": "光明区",
    "address": "深圳市光明区凤凰街道93号便民服务点光明群众体育中心KCOFFEE"
  },
  {
    "type": "门店",
    "code": "SZ2196",
    "name": "光明星河",
    "district": "光明区",
    "address": "深圳市光明区公明街道16号生活广场光明星河"
  },
  {
    "type": "门店",
    "code": "GZ5021",
    "name": "光明龙光广场",
    "district": "光明区",
    "address": "深圳市光明区光明大道80号购物中心光明龙光广场"
  },
  {
    "type": "门店",
    "code": "SZ2106",
    "name": "光明康佳",
    "district": "光明区",
    "address": "深圳市光明区新湖街道57号临街商铺光明康佳"
  },
  {
    "type": "门店",
    "code": "GZ5612",
    "name": "光明勤诚达",
    "district": "光明区",
    "address": "深圳市光明区新湖街道62号写字楼光明勤诚达"
  },
  {
    "type": "门店",
    "code": "GZ5070",
    "name": "光明玉律",
    "district": "光明区",
    "address": "深圳市光明区新湖街道67号商业中心光明玉律"
  },
  {
    "type": "门店",
    "code": "SZ2160",
    "name": "光明塘尾",
    "district": "光明区",
    "address": "深圳市光明区玉塘街道29号临街商铺光明塘尾"
  },
  {
    "type": "门店",
    "code": "SZ2155",
    "name": "公明下村",
    "district": "光明区",
    "address": "深圳市光明区玉塘街道34号购物广场公明下村"
  },
  {
    "type": "门店",
    "code": "SZ7826",
    "name": "肯悦咖啡光明云科府店",
    "district": "光明区",
    "address": "深圳市光明区玉塘街道39号便民服务点肯悦咖啡光明云科府店"
  },
  {
    "type": "门店",
    "code": "SZ1171",
    "name": "光明龙光广场",
    "district": "光明区",
    "address": "深圳市光明区玉塘街道39号生活广场光明龙光广场"
  },
  {
    "type": "门店",
    "code": "GZ5075",
    "name": "光明星河",
    "district": "光明区",
    "address": "深圳市光明区玉塘街道69号写字楼光明星河"
  },
  {
    "type": "门店",
    "code": "sz1007",
    "name": "蛇口港",
    "district": "南山区",
    "address": "深圳市南山区滨海大道27号写字楼蛇口港"
  },
  {
    "type": "门店",
    "code": "SZ2034",
    "name": "澳特科兴科学园",
    "district": "南山区",
    "address": "深圳市南山区滨海大道54号写字楼澳特科兴科学园"
  },
  {
    "type": "门店",
    "code": "RQS001",
    "name": "深大粤海",
    "district": "南山区",
    "address": "深圳市南山区华侨城路14号生活广场深大粤海"
  },
  {
    "type": "门店",
    "code": "SZ3846",
    "name": "肯悦咖啡蛇口文体中心店",
    "district": "南山区",
    "address": "深圳市南山区华侨城路28号生活广场肯悦咖啡蛇口文体中心店"
  },
  {
    "type": "门店",
    "code": "LA1107",
    "name": "南山智谷",
    "district": "南山区",
    "address": "深圳市南山区华侨城路91号生活广场南山智谷"
  },
  {
    "type": "门店",
    "code": "SZ1010",
    "name": "科兴",
    "district": "南山区",
    "address": "深圳市南山区科技园路39号商业中心科兴"
  },
  {
    "type": "门店",
    "code": "SZ2079",
    "name": "华侨城创意园",
    "district": "南山区",
    "address": "深圳市南山区科技园路45号商业中心华侨城创意园"
  },
  {
    "type": "门店",
    "code": "XME007",
    "name": "深大文山湖",
    "district": "南山区",
    "address": "深圳市南山区科技园路52号商业中心深大文山湖"
  },
  {
    "type": "门店",
    "code": "GZ2810",
    "name": "科兴",
    "district": "南山区",
    "address": "深圳市南山区南海大道11号购物广场科兴"
  },
  {
    "type": "门店",
    "code": "SZ2137",
    "name": "鸿湖科技园",
    "district": "南山区",
    "address": "深圳市南山区南海大道48号购物广场鸿湖科技园"
  },
  {
    "type": "门店",
    "code": "GZ5063",
    "name": "太子湾",
    "district": "南山区",
    "address": "深圳市南山区南山大道23号购物中心太子湾"
  },
  {
    "type": "门店",
    "code": "SZ1133",
    "name": "科兴二店",
    "district": "南山区",
    "address": "深圳市南山区南山大道31号购物中心科兴二店"
  },
  {
    "type": "门店",
    "code": "SZ2065",
    "name": "联创科技园",
    "district": "南山区",
    "address": "深圳市南山区南山大道74号购物中心联创科技园"
  },
  {
    "type": "门店",
    "code": "SZ5810",
    "name": "星星科技园",
    "district": "南山区",
    "address": "深圳市南山区粤海街道26号便民服务点星星科技园"
  },
  {
    "type": "门店",
    "code": "SZ2134",
    "name": "南山智谷",
    "district": "南山区",
    "address": "深圳市南山区粤海街道45号便民服务点南山智谷"
  },
  {
    "type": "门店",
    "code": "SZ2060",
    "name": "蛇口文体中心",
    "district": "南山区",
    "address": "深圳市南山区粤海街道50号便民服务点蛇口文体中心"
  }
];
