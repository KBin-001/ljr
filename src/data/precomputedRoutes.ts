import type { PlannedDay } from "../utils/optimizer";
import type { ShopWithCoord } from "./shops";

export const ROUTE_START_POINT = {
  name: "\u5b9d\u7530\u4e00\u8def",
  address: "\u6df1\u5733\u5e02\u5b9d\u5b89\u533a\u5b9d\u7530\u4e00\u8def",
  lng: 113.8839,
  lat: 22.5899,
};

export const TOTAL_SHOP_COUNT = 100;
export const EXCLUDED_DISTRICTS = ["\u5149\u660e\u533a", "\u5b9d\u5b89\u533a"] as const;
export const EXCLUDED_SHOP_COUNT = 13;
export const DUPLICATE_SHOP_COUNT = 2;
export const PLANNED_SHOP_COUNT = 85;

export const routeShops: ShopWithCoord[] = [
  {
    "type": "\u95e8\u5e97",
    "code": "GZ2801",
    "name": "\u80af\u5fb7\u57fa\u6d77\u96c5",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def10A\u53f7\u5546\u4e1a\u4e2d\u5fc3\u6d77\u96c5",
    "rawName": "\u6d77\u96c5",
    "lng": 114.0752,
    "lat": 22.537824
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ4804",
    "name": "\u80af\u60a6\u5496\u5561\u65b0\u83b2\u5858\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def11\u53f7\u5546\u4e1a\u4e2d\u5fc3\u80af\u60a6\u5496\u5561\u65b0\u83b2\u5858\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u65b0\u83b2\u5858\u5e97",
    "lng": 114.07706,
    "lat": 22.538356
  },
  {
    "type": "\u95e8\u5e97",
    "code": "LA1141",
    "name": "\u80af\u5fb7\u57fa\u516b\u53f7\u4ed3",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def14\u53f7\u5546\u4e1a\u4e2d\u5fc3\u516b\u53f7\u4ed3",
    "rawName": "\u516b\u53f7\u4ed3",
    "lng": 114.07824,
    "lat": 22.538654
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1149",
    "name": "\u80af\u5fb7\u57fa\u5929\u5b89\u4e91\u8c37\u4e8c\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def15\u53f7\u5546\u4e1a\u4e2d\u5fc3\u5929\u5b89\u4e91\u8c37\u4e8c\u5e97",
    "rawName": "\u5929\u5b89\u4e91\u8c37\u4e8c\u5e97",
    "lng": 114.07858,
    "lat": 22.539186
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZ5634",
    "name": "\u80af\u5fb7\u57fa\u4e16\u7eaa\u6c47",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def17\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4e16\u7eaa\u6c47",
    "rawName": "\u4e16\u7eaa\u6c47",
    "lng": 114.07934,
    "lat": 22.539601
  },
  {
    "type": "\u95e8\u5e97",
    "code": "szn125",
    "name": "\u80af\u5fb7\u57fa\u4fa8\u9999",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def18\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4fa8\u9999",
    "rawName": "\u4fa8\u9999",
    "lng": 114.07968,
    "lat": 22.536883
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2191",
    "name": "\u80af\u5fb7\u57fa\u878d\u521b\u835f",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def19\u53f7\u5546\u4e1a\u4e2d\u5fc3\u878d\u521b\u835f",
    "rawName": "\u878d\u521b\u835f",
    "lng": 114.08002,
    "lat": 22.537416
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2018",
    "name": "\u80af\u5fb7\u57fa\u4e1c\u5173\u73fa\u5e9c",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def20\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4e1c\u5173\u73fa\u5e9c",
    "rawName": "\u4e1c\u5173\u73fa\u5e9c",
    "lng": 114.08036,
    "lat": 22.537948
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1189",
    "name": "\u80af\u5fb7\u57fa\u534e\u76db\u73d1\u60a6",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def21\u53f7\u5546\u4e1a\u4e2d\u5fc3\u534e\u76db\u73d1\u60a6",
    "rawName": "\u534e\u76db\u73d1\u60a6",
    "lng": 114.0807,
    "lat": 22.53848
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1128",
    "name": "\u80af\u5fb7\u57fa\u4e07\u79d1\u7b2c\u4e94\u56ed",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def22\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4e07\u79d1\u7b2c\u4e94\u56ed",
    "rawName": "\u4e07\u79d1\u7b2c\u4e94\u56ed",
    "lng": 114.08104,
    "lat": 22.539013
  },
  {
    "type": "\u95e8\u5e97",
    "code": "szn008",
    "name": "\u80af\u5fb7\u57fa\u4e1c\u56ed",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def25B\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4e1c\u56ed",
    "rawName": "\u4e1c\u56ed",
    "lng": 114.08222,
    "lat": 22.53606
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2180",
    "name": "\u80af\u5fb7\u57fa\u6885\u6751",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def26\u53f7\u5546\u4e1a\u4e2d\u5fc3\u6885\u6751",
    "rawName": "\u6885\u6751",
    "lng": 114.08256,
    "lat": 22.536592
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1984",
    "name": "\u80af\u5fb7\u57fa\u65b0\u534e\u4e3aH\u533a\u5916\u5356\u70b9",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def27\u53f7\u5546\u4e1a\u4e2d\u5fc3\u65b0\u534e\u4e3aH\u533a\u5916\u5356\u70b9",
    "rawName": "\u65b0\u534e\u4e3aH\u533a\u5916\u5356\u70b9",
    "lng": 114.0829,
    "lat": 22.537125
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2031",
    "name": "\u80af\u5fb7\u57fa\u6a2a\u5c97\u5927\u8fd0\u5c0f\u9547",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def10K\u53f7\u751f\u6d3b\u5e7f\u573a\u6a2a\u5c97\u5927\u8fd0\u5c0f\u9547",
    "rawName": "\u6a2a\u5c97\u5927\u8fd0\u5c0f\u9547",
    "lng": 114.09168,
    "lat": 22.545774
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1207",
    "name": "\u80af\u5fb7\u57fa\u5409\u7965\u91cc",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def11\u53f7\u751f\u6d3b\u5e7f\u573a\u5409\u7965\u91cc",
    "rawName": "\u5409\u7965\u91cc",
    "lng": 114.09202,
    "lat": 22.546306
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1165",
    "name": "\u80af\u5fb7\u57fa\u667a\u6167\u5bb6\u56ed",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def12\u53f7\u751f\u6d3b\u5e7f\u573a\u667a\u6167\u5bb6\u56ed",
    "rawName": "\u667a\u6167\u5bb6\u56ed",
    "lng": 114.09236,
    "lat": 22.543589
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZH738",
    "name": "\u5fc5\u80dc\u5ba2\u9e3f\u7fd4\u5b85\u6025\u9001",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def15\u53f7\u751f\u6d3b\u5e7f\u573a\u9e3f\u7fd4\u5fc5\u80dc\u5b85\u6025\u9001",
    "rawName": "\u9e3f\u7fd4\u5fc5\u80dc\u5b85\u6025\u9001",
    "lng": 114.09354,
    "lat": 22.543886
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2022",
    "name": "\u80af\u5fb7\u57fa\u5b9d\u5c71\u65f6\u4ee3\u5927\u53a6",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def17\u53f7\u751f\u6d3b\u5e7f\u573a\u5b9d\u5c71\u65f6\u4ee3\u5927\u53a6",
    "rawName": "\u5b9d\u5c71\u65f6\u4ee3\u5927\u53a6",
    "lng": 114.0943,
    "lat": 22.544301
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ5822",
    "name": "\u80af\u60a6\u5496\u5561\u6162\u57ce\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def18\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u6162\u57ce\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u6162\u57ce\u5e97",
    "lng": 114.09464,
    "lat": 22.544833
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1138",
    "name": "\u80af\u5fb7\u57fa\u4ec1\u5c71\u667a\u6c34",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def19\u53f7\u751f\u6d3b\u5e7f\u573a\u4ec1\u5c71\u667a\u6c34",
    "rawName": "\u4ec1\u5c71\u667a\u6c34",
    "lng": 114.09498,
    "lat": 22.545366
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZ5058",
    "name": "\u80af\u5fb7\u57fa\u65b0\u6885\u6797",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def21\u53f7\u751f\u6d3b\u5e7f\u573a\u65b0\u6885\u6797",
    "rawName": "\u65b0\u6885\u6797",
    "lng": 114.09726,
    "lat": 22.54253
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2173",
    "name": "\u80af\u5fb7\u57fa\u6f6e\u5546\u5e7f\u573a",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def23\u53f7\u751f\u6d3b\u5e7f\u573a\u6f6e\u5546\u5e7f\u573a",
    "rawName": "\u6f6e\u5546\u5e7f\u573a",
    "lng": 114.09802,
    "lat": 22.542945
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZN267",
    "name": "\u80af\u5fb7\u57fa\u5609\u5fa1\u5c71",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def24\u53f7\u751f\u6d3b\u5e7f\u573a\u5609\u5fa1\u5c71",
    "rawName": "\u5609\u5fa1\u5c71",
    "lng": 114.09836,
    "lat": 22.543478
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ5820",
    "name": "\u80af\u60a6\u5496\u5561\u9ad8\u65b0\u533a\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def25L\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u9ad8\u65b0\u533a\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u9ad8\u65b0\u533a\u5e97",
    "lng": 114.0987,
    "lat": 22.54401
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1084",
    "name": "\u80af\u5fb7\u57fa\u56fd\u5c55\u4e2d\u5fc3",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def26\u53f7\u751f\u6d3b\u5e7f\u573a\u56fd\u5c55\u4e2d\u5fc3",
    "rawName": "\u56fd\u5c55\u4e2d\u5fc3",
    "lng": 114.09904,
    "lat": 22.544542
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1156",
    "name": "\u80af\u5fb7\u57fa\u5353\u8d8a\u524d\u6d77",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def29\u53f7\u751f\u6d3b\u5e7f\u573a\u5353\u8d8a\u524d\u6d77",
    "rawName": "\u5353\u8d8a\u524d\u6d77",
    "lng": 114.10022,
    "lat": 22.54159
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2161",
    "name": "\u80af\u5fb7\u57fa\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def30\u53f7\u751f\u6d3b\u5e7f\u573a\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385",
    "rawName": "\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385",
    "lng": 114.10056,
    "lat": 22.542122
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZN261",
    "name": "\u80af\u5fb7\u57fa\u559c\u6e2f\u57ce",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def31\u53f7\u751f\u6d3b\u5e7f\u573a\u559c\u6e2f\u57ceKFC",
    "rawName": "\u559c\u6e2f\u57ceKFC",
    "lng": 114.1009,
    "lat": 22.542654
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1046",
    "name": "\u80af\u5fb7\u57fa\u661f\u5149",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def33\u53f7\u751f\u6d3b\u5e7f\u573a\u661f\u5149",
    "rawName": "\u661f\u5149",
    "lng": 114.10166,
    "lat": 22.543069
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2976",
    "name": "\u80af\u5fb7\u57fa\u6d2a\u6e56\u516c\u56ed\u6620\u65e5\u6f6d",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def35\u53f7\u751f\u6d3b\u5e7f\u573a\u6d2a\u6e56\u516c\u56ed\u6620\u65e5\u6f6d",
    "rawName": "\u6d2a\u6e56\u516c\u56ed\u6620\u65e5\u6f6d",
    "lng": 114.10242,
    "lat": 22.543484
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1047",
    "name": "\u80af\u5fb7\u57fa\u58f9\u6d77\u57ce",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def36\u53f7\u751f\u6d3b\u5e7f\u573a\u58f9\u6d77\u57ce",
    "rawName": "\u58f9\u6d77\u57ce",
    "lng": 114.10276,
    "lat": 22.540766
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2149",
    "name": "\u80af\u5fb7\u57fa\u8f83\u573a\u5c3e",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def37\u53f7\u751f\u6d3b\u5e7f\u573a\u8f83\u573a\u5c3e",
    "rawName": "\u8f83\u573a\u5c3e",
    "lng": 114.1031,
    "lat": 22.541299
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1387",
    "name": "\u80af\u5fb7\u57fa\u5b89\u5c45\u9e23\u9e7f\u82d1",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def38\u53f7\u751f\u6d3b\u5e7f\u573a\u5b89\u5c45\u9e23\u9e7f\u82d1",
    "rawName": "\u5b89\u5c45\u9e23\u9e7f\u82d1",
    "lng": 114.10344,
    "lat": 22.541831
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2111",
    "name": "\u80af\u5fb7\u57fa\u521b\u667a\u4e91\u57ce",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def42\u53f7\u751f\u6d3b\u5e7f\u573a\u521b\u667a\u4e91\u57ce",
    "rawName": "\u521b\u667a\u4e91\u57ce",
    "lng": 114.10504,
    "lat": 22.542011
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2133",
    "name": "\u80af\u5fb7\u57fa\u77f3\u5ca9\u5929\u6e90\u9686",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def44\u53f7\u751f\u6d3b\u5e7f\u573a\u77f3\u5ca9\u5929\u6e90\u9686",
    "rawName": "\u77f3\u5ca9\u5929\u6e90\u9686",
    "lng": 114.1058,
    "lat": 22.542426
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ4845",
    "name": "\u80af\u60a6\u5496\u5561\u4e2d\u5fc3\u516c\u56ed KCOFFEE TRUCK",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def46\u53f7\u751f\u6d3b\u5e7f\u573a\u4e2d\u5fc3\u516c\u56ed KCOFFEE TRUCK",
    "rawName": "\u4e2d\u5fc3\u516c\u56ed KCOFFEE TRUCK",
    "lng": 114.10656,
    "lat": 22.53959
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2069",
    "name": "\u80af\u5fb7\u57fa\u7559\u4ed9\u6d1e\u6709\u5de2",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def49\u53f7\u751f\u6d3b\u5e7f\u573a\u7559\u4ed9\u6d1e\u6709\u5de2",
    "rawName": "\u7559\u4ed9\u6d1e\u6709\u5de2",
    "lng": 114.10774,
    "lat": 22.539888
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZ6601",
    "name": "\u80af\u5fb7\u57fa\u4e91\u79d1\u5e9c",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def50\u53f7\u751f\u6d3b\u5e7f\u573a\u4e91\u79d1\u5e9c",
    "rawName": "\u4e91\u79d1\u5e9c",
    "lng": 114.10808,
    "lat": 22.54042
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2122",
    "name": "\u80af\u5fb7\u57fa\u534e\u6da6\u96ea\u82b1\u79d1\u521b",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def51\u53f7\u751f\u6d3b\u5e7f\u573a\u534e\u6da6\u96ea\u82b1\u79d1\u521b",
    "rawName": "\u534e\u6da6\u96ea\u82b1\u79d1\u521b",
    "lng": 114.10842,
    "lat": 22.540952
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1354",
    "name": "\u80af\u5fb7\u57fa\u8605\u82b3\u79d1\u6280\u5927\u53a6",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def52\u53f7\u751f\u6d3b\u5e7f\u573a\u8605\u82b3\u79d1\u6280\u5927\u53a6",
    "rawName": "\u8605\u82b3\u79d1\u6280\u5927\u53a6",
    "lng": 114.11028,
    "lat": 22.541485
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ4803",
    "name": "\u80af\u60a6\u5496\u5561\u5b9d\u9f99\u6bd4\u4e9a\u8fea\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def53\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u5b9d\u9f99\u6bd4\u4e9a\u8fea\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u5b9d\u9f99\u6bd4\u4e9a\u8fea\u5e97",
    "lng": 114.11062,
    "lat": 22.538767
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2028",
    "name": "\u80af\u5fb7\u57fa\u897f\u4e3d\u534e\u6cf0",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def56\u53f7\u751f\u6d3b\u5e7f\u573a\u897f\u4e3d\u534e\u6cf0",
    "rawName": "\u897f\u4e3d\u534e\u6cf0",
    "lng": 114.1118,
    "lat": 22.539064
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZ5646",
    "name": "\u80af\u5fb7\u57fa\u91d1\u6e2f\u534e\u5ead",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def57\u53f7\u751f\u6d3b\u5e7f\u573a\u91d1\u6e2f\u534e\u5ead",
    "rawName": "\u91d1\u6e2f\u534e\u5ead",
    "lng": 114.11214,
    "lat": 22.539597
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2107",
    "name": "\u80af\u5fb7\u57fa\u677e\u67cf\u5929\u8679",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def58\u53f7\u751f\u6d3b\u5e7f\u573a\u677e\u67cf\u5929\u8679",
    "rawName": "\u677e\u67cf\u5929\u8679",
    "lng": 114.11248,
    "lat": 22.540129
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1296",
    "name": "\u80af\u5fb7\u57fa\u5fa1\u666f\u5370\u8c61",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def59\u53f7\u751f\u6d3b\u5e7f\u573a\u5fa1\u666f\u5370\u8c61",
    "rawName": "\u5fa1\u666f\u5370\u8c61",
    "lng": 114.11282,
    "lat": 22.540662
  },
  {
    "type": "\u95e8\u5e97",
    "code": "szn854",
    "name": "\u80af\u5fb7\u57fa\u6570\u7801\u65b0\u57ceDT",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def60\u53f7\u751f\u6d3b\u5e7f\u573a\u6570\u7801\u65b0\u57ceDT",
    "rawName": "\u6570\u7801\u65b0\u57ceDT",
    "lng": 114.11316,
    "lat": 22.537944
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1358",
    "name": "\u80af\u5fb7\u57fa\u6df1\u4e1a\u4e0a\u57ce",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def63\u53f7\u751f\u6d3b\u5e7f\u573a\u6df1\u4e1a\u4e0a\u57ce",
    "rawName": "\u6df1\u4e1a\u4e0a\u57ce",
    "lng": 114.11434,
    "lat": 22.538241
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZ5617",
    "name": "\u80af\u5fb7\u57fa\u666f\u534e\u6c47",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def64\u53f7\u751f\u6d3b\u5e7f\u573a\u666f\u534e\u6c47",
    "rawName": "\u666f\u534e\u6c47",
    "lng": 114.11468,
    "lat": 22.538774
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2090",
    "name": "\u80af\u5fb7\u57fa\u73d1\u6e7e",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def65\u53f7\u751f\u6d3b\u5e7f\u573a\u73d1\u6e7e",
    "rawName": "\u73d1\u6e7e",
    "lng": 114.11502,
    "lat": 22.539306
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ6825",
    "name": "\u80af\u60a6\u5496\u5561\u8f83\u573a\u5c3e\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def66\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u8f83\u573a\u5c3e\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u8f83\u573a\u5c3e\u5e97",
    "lng": 114.11536,
    "lat": 22.539838
  },
  {
    "type": "\u95e8\u5e97",
    "code": "szn230",
    "name": "\u80af\u5fb7\u57fa\u661f\u6cb3\u65f6\u4ee3",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def67\u53f7\u751f\u6d3b\u5e7f\u573a\u661f\u6cb3\u65f6\u4ee3",
    "rawName": "\u661f\u6cb3\u65f6\u4ee3",
    "lng": 114.1157,
    "lat": 22.537121
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1299",
    "name": "\u80af\u5fb7\u57fa\u62db\u5546\u4e2d\u73af",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def70I\u53f7\u751f\u6d3b\u5e7f\u573a\u62db\u5546\u4e2d\u73af",
    "rawName": "\u62db\u5546\u4e2d\u73af",
    "lng": 114.11688,
    "lat": 22.537418
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZ5603",
    "name": "\u80af\u5fb7\u57fa\u9886\u822a\u57ce",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def71\u53f7\u751f\u6d3b\u5e7f\u573a\u9886\u822a\u57ce",
    "rawName": "\u9886\u822a\u57ce",
    "lng": 114.11722,
    "lat": 22.53795
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2075",
    "name": "\u80af\u5fb7\u57fa\u7f19\u534e\u5e9c",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def72\u53f7\u751f\u6d3b\u5e7f\u573a\u7f19\u534e\u5e9c",
    "rawName": "\u7f19\u534e\u5e9c",
    "lng": 114.11756,
    "lat": 22.538483
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ6813",
    "name": "\u80af\u60a6\u5496\u5561\u65b0\u9e3f\u6d32\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def73\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u65b0\u9e3f\u6d32\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u65b0\u9e3f\u6d32\u5e97",
    "lng": 114.1179,
    "lat": 22.539015
  },
  {
    "type": "\u95e8\u5e97",
    "code": "szn177",
    "name": "\u80af\u5fb7\u57fa\u5bcc\u901a\u57ce",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def74\u53f7\u751f\u6d3b\u5e7f\u573a\u5bcc\u901a\u57ce",
    "rawName": "\u5bcc\u901a\u57ce",
    "lng": 114.11824,
    "lat": 22.536298
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1276",
    "name": "\u80af\u5fb7\u57fa\u4f73\u5146\u4e1a\u4e2d\u5fc3",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def77\u53f7\u751f\u6d3b\u5e7f\u573a\u4f73\u5146\u4e1a\u4e2d\u5fc3",
    "rawName": "\u4f73\u5146\u4e1a\u4e2d\u5fc3",
    "lng": 114.11942,
    "lat": 22.536595
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZ5019",
    "name": "\u80af\u5fb7\u57fa\u58f9\u57ce\u4e2d\u5fc3",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def78\u53f7\u751f\u6d3b\u5e7f\u573a\u58f9\u57ce\u4e2d\u5fc3",
    "rawName": "\u58f9\u57ce\u4e2d\u5fc3",
    "lng": 114.11976,
    "lat": 22.537127
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2049",
    "name": "\u80af\u5fb7\u57fa\u5c1a\u6c34\u5929\u6210",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def79\u53f7\u751f\u6d3b\u5e7f\u573a\u5c1a\u6c34\u5929\u6210",
    "rawName": "\u5c1a\u6c34\u5929\u6210",
    "lng": 114.12162,
    "lat": 22.53766
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1248",
    "name": "\u80af\u5fb7\u57fa\u534e\u4e1a\u73ab\u7470\u90e1",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def80\u53f7\u751f\u6d3b\u5e7f\u573a\u534e\u4e1a\u73ab\u7470\u90e1",
    "rawName": "\u534e\u4e1a\u73ab\u7470\u90e1",
    "lng": 114.12196,
    "lat": 22.538192
  },
  {
    "type": "\u95e8\u5e97",
    "code": "szn141",
    "name": "\u80af\u5fb7\u57fa\u9526\u82b1",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def81\u53f7\u751f\u6d3b\u5e7f\u573a\u9526\u82b1",
    "rawName": "\u9526\u82b1",
    "lng": 114.1223,
    "lat": 22.535474
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ5828",
    "name": "\u80af\u60a6\u5496\u5561\u6b22\u4e50\u6d77\u5cb8\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def84\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u6b22\u4e50\u6d77\u5cb8\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u6b22\u4e50\u6d77\u5cb8\u5e97",
    "lng": 114.12348,
    "lat": 22.535772
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ3974",
    "name": "\u80af\u60a6\u5496\u5561KPOR\u9f99\u5149\u5e7f\u573a\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def85J\u53f7\u751f\u6d3b\u5e7f\u573aKPOR\u9f99\u5149\u5e7f\u573a\u5e97",
    "rawName": "KPOR\u9f99\u5149\u5e7f\u573a\u5e97",
    "lng": 114.12382,
    "lat": 22.536304
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ5849",
    "name": "\u80af\u60a6\u5496\u5561\u80af\u60a6\u56fd\u9645E\u57ce\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def87\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u56fd\u9645E\u57ce\u5e97",
    "rawName": "\u80af\u60a6\u56fd\u9645E\u57ce\u5e97",
    "lng": 114.12458,
    "lat": 22.536719
  },
  {
    "type": "\u95e8\u5e97",
    "code": "szn076",
    "name": "\u80af\u5fb7\u57fa\u4e2d\u5174",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def88\u53f7\u751f\u6d3b\u5e7f\u573a\u4e2d\u5174",
    "rawName": "\u4e2d\u5174",
    "lng": 114.12492,
    "lat": 22.537251
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ3843",
    "name": "\u80af\u60a6\u5496\u5561\u9526\u534e\u5927\u53a6\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def92\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u9526\u534e\u5927\u53a6\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u9526\u534e\u5927\u53a6\u5e97",
    "lng": 114.12652,
    "lat": 22.534181
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZN863",
    "name": "\u80af\u5fb7\u57fa\u534e\u5174\u8defDT",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def93\u53f7\u751f\u6d3b\u5e7f\u573a\u534e\u5174\u8defDT",
    "rawName": "\u534e\u5174\u8defDT",
    "lng": 114.12686,
    "lat": 22.534713
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ5848",
    "name": "\u80af\u60a6\u5496\u5561\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385\u5e97",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def94\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385\u5e97",
    "lng": 114.1272,
    "lat": 22.535246
  },
  {
    "type": "\u95e8\u5e97",
    "code": "szn028",
    "name": "\u80af\u5fb7\u57fa\u516d\u7ea6",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def95\u53f7\u751f\u6d3b\u5e7f\u573a\u516d\u7ea6",
    "rawName": "\u516d\u7ea6",
    "lng": 114.12754,
    "lat": 22.535778
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ4828",
    "name": "\u80af\u5fb7\u57fa\u7fe0\u7af9\u516c\u56ed",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def98\u53f7\u751f\u6d3b\u5e7f\u573a\u7fe0\u7af9\u516c\u56ed",
    "rawName": "\u7fe0\u7af9\u516c\u56ed",
    "lng": 114.12872,
    "lat": 22.536075
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2199",
    "name": "\u80af\u5fb7\u57fa\u4e07\u79d1\u5e7f\u573a",
    "district": "\u798f\u7530\u533a",
    "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def99\u53f7\u751f\u6d3b\u5e7f\u573a\u4e07\u79d1\u5e7f\u573a",
    "rawName": "\u4e07\u79d1\u5e7f\u573a",
    "lng": 114.12906,
    "lat": 22.533358
  },
  {
    "type": "\u95e8\u5e97",
    "code": "sz1007",
    "name": "\u80af\u5fb7\u57fa\u86c7\u53e3\u6e2f",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u6ee8\u6d77\u5927\u905327\u53f7\u5199\u5b57\u697c\u86c7\u53e3\u6e2f",
    "rawName": "\u86c7\u53e3\u6e2f",
    "lng": 113.92974,
    "lat": 22.520475
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2034",
    "name": "\u80af\u5fb7\u57fa\u6fb3\u7279\u79d1\u5174\u79d1\u5b66\u56ed",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u6ee8\u6d77\u5927\u905354\u53f7\u5199\u5b57\u697c\u6fb3\u7279\u79d1\u5174\u79d1\u5b66\u56ed",
    "rawName": "\u6fb3\u7279\u79d1\u5174\u79d1\u5b66\u56ed",
    "lng": 113.941,
    "lat": 22.51795
  },
  {
    "type": "\u95e8\u5e97",
    "code": "RQS001",
    "name": "\u80af\u5fb7\u57fa\u6df1\u5927\u7ca4\u6d77",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u534e\u4fa8\u57ce\u8def14\u53f7\u751f\u6d3b\u5e7f\u573a\u6df1\u5927\u7ca4\u6d77",
    "rawName": "\u6df1\u5927\u7ca4\u6d77",
    "lng": 113.94612,
    "lat": 22.541304
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ3846",
    "name": "\u80af\u60a6\u5496\u5561\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3\u5e97",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u534e\u4fa8\u57ce\u8def28\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3\u5e97",
    "rawName": "\u80af\u60a6\u5496\u5561\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3\u5e97",
    "lng": 113.95192,
    "lat": 22.540307
  },
  {
    "type": "\u95e8\u5e97",
    "code": "LA1107",
    "name": "\u80af\u5fb7\u57fa\u5357\u5c71\u667a\u8c37",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u534e\u4fa8\u57ce\u8def91\u53f7\u751f\u6d3b\u5e7f\u573a\u5357\u5c71\u667a\u8c37",
    "rawName": "\u5357\u5c71\u667a\u8c37",
    "lng": 113.9783,
    "lat": 22.530298
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1010",
    "name": "\u80af\u5fb7\u57fa\u79d1\u5174",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u79d1\u6280\u56ed\u8def39\u53f7\u5546\u4e1a\u4e2d\u5fc3\u79d1\u5174",
    "rawName": "\u79d1\u5174",
    "lng": 113.96438,
    "lat": 22.533064
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2079",
    "name": "\u80af\u5fb7\u57fa\u534e\u4fa8\u57ce\u521b\u610f\u56ed",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u79d1\u6280\u56ed\u8def45\u53f7\u5546\u4e1a\u4e2d\u5fc3\u534e\u4fa8\u57ce\u521b\u610f\u56ed",
    "rawName": "\u534e\u4fa8\u57ce\u521b\u610f\u56ed",
    "lng": 113.96834,
    "lat": 22.533008
  },
  {
    "type": "\u95e8\u5e97",
    "code": "XME007",
    "name": "\u80af\u5fb7\u57fa\u6df1\u5927\u6587\u5c71\u6e56",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u79d1\u6280\u56ed\u8def52\u53f7\u5546\u4e1a\u4e2d\u5fc3\u6df1\u5927\u6587\u5c71\u6e56",
    "rawName": "\u6df1\u5927\u6587\u5c71\u6e56",
    "lng": 113.9712,
    "lat": 22.532835
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2137",
    "name": "\u80af\u5fb7\u57fa\u9e3f\u6e56\u79d1\u6280\u56ed",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u5357\u6d77\u5927\u905348\u53f7\u8d2d\u7269\u5e7f\u573a\u9e3f\u6e56\u79d1\u6280\u56ed",
    "rawName": "\u9e3f\u6e56\u79d1\u6280\u56ed",
    "lng": 113.94344,
    "lat": 22.527955
  },
  {
    "type": "\u95e8\u5e97",
    "code": "GZ5063",
    "name": "\u80af\u5fb7\u57fa\u592a\u5b50\u6e7e",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u5357\u5c71\u5927\u905323\u53f7\u8d2d\u7269\u4e2d\u5fc3\u592a\u5b50\u6e7e",
    "rawName": "\u592a\u5b50\u6e7e",
    "lng": 113.93886,
    "lat": 22.540295
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ1133",
    "name": "\u80af\u5fb7\u57fa\u79d1\u5174\u4e8c\u5e97",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u5357\u5c71\u5927\u905331\u53f7\u8d2d\u7269\u4e2d\u5fc3\u79d1\u5174\u4e8c\u5e97",
    "rawName": "\u79d1\u5174\u4e8c\u5e97",
    "lng": 113.94214,
    "lat": 22.540004
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2065",
    "name": "\u80af\u5fb7\u57fa\u8054\u521b\u79d1\u6280\u56ed",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u5357\u5c71\u5927\u905374\u53f7\u8d2d\u7269\u4e2d\u5fc3\u8054\u521b\u79d1\u6280\u56ed",
    "rawName": "\u8054\u521b\u79d1\u6280\u56ed",
    "lng": 113.96012,
    "lat": 22.535598
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ5810",
    "name": "\u80af\u5fb7\u57fa\u661f\u661f\u79d1\u6280\u56ed",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u905326\u53f7\u4fbf\u6c11\u670d\u52a1\u70b9\u661f\u661f\u79d1\u6280\u56ed",
    "rawName": "\u661f\u661f\u79d1\u6280\u56ed",
    "lng": 113.96388,
    "lat": 22.545892
  },
  {
    "type": "\u95e8\u5e97",
    "code": "SZ2060",
    "name": "\u80af\u5fb7\u57fa\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3",
    "district": "\u5357\u5c71\u533a",
    "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u905350\u53f7\u4fbf\u6c11\u670d\u52a1\u70b9\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3",
    "rawName": "\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3",
    "lng": 113.97388,
    "lat": 22.54372
  }
];

export const plannedDays: PlannedDay[] = [
  {
    "day": 1,
    "distanceKm": 11.91,
    "estimatedMinutes": 69,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "GZ5063",
        "name": "\u80af\u5fb7\u57fa\u592a\u5b50\u6e7e",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u5357\u5c71\u5927\u905323\u53f7\u8d2d\u7269\u4e2d\u5fc3\u592a\u5b50\u6e7e",
        "rawName": "\u592a\u5b50\u6e7e",
        "lng": 113.93886,
        "lat": 22.540295,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1133",
        "name": "\u80af\u5fb7\u57fa\u79d1\u5174\u4e8c\u5e97",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u5357\u5c71\u5927\u905331\u53f7\u8d2d\u7269\u4e2d\u5fc3\u79d1\u5174\u4e8c\u5e97",
        "rawName": "\u79d1\u5174\u4e8c\u5e97",
        "lng": 113.94214,
        "lat": 22.540004,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2137",
        "name": "\u80af\u5fb7\u57fa\u9e3f\u6e56\u79d1\u6280\u56ed",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u5357\u6d77\u5927\u905348\u53f7\u8d2d\u7269\u5e7f\u573a\u9e3f\u6e56\u79d1\u6280\u56ed",
        "rawName": "\u9e3f\u6e56\u79d1\u6280\u56ed",
        "lng": 113.94344,
        "lat": 22.527955,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2034",
        "name": "\u80af\u5fb7\u57fa\u6fb3\u7279\u79d1\u5174\u79d1\u5b66\u56ed",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u6ee8\u6d77\u5927\u905354\u53f7\u5199\u5b57\u697c\u6fb3\u7279\u79d1\u5174\u79d1\u5b66\u56ed",
        "rawName": "\u6fb3\u7279\u79d1\u5174\u79d1\u5b66\u56ed",
        "lng": 113.941,
        "lat": 22.51795,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "sz1007",
        "name": "\u80af\u5fb7\u57fa\u86c7\u53e3\u6e2f",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u6ee8\u6d77\u5927\u905327\u53f7\u5199\u5b57\u697c\u86c7\u53e3\u6e2f",
        "rawName": "\u86c7\u53e3\u6e2f",
        "lng": 113.92974,
        "lat": 22.520475,
        "order": 5
      }
    ]
  },
  {
    "day": 2,
    "distanceKm": 11.91,
    "estimatedMinutes": 68,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "RQS001",
        "name": "\u80af\u5fb7\u57fa\u6df1\u5927\u7ca4\u6d77",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u534e\u4fa8\u57ce\u8def14\u53f7\u751f\u6d3b\u5e7f\u573a\u6df1\u5927\u7ca4\u6d77",
        "rawName": "\u6df1\u5927\u7ca4\u6d77",
        "lng": 113.94612,
        "lat": 22.541304,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ3846",
        "name": "\u80af\u60a6\u5496\u5561\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3\u5e97",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u534e\u4fa8\u57ce\u8def28\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3\u5e97",
        "lng": 113.95192,
        "lat": 22.540307,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2065",
        "name": "\u80af\u5fb7\u57fa\u8054\u521b\u79d1\u6280\u56ed",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u5357\u5c71\u5927\u905374\u53f7\u8d2d\u7269\u4e2d\u5fc3\u8054\u521b\u79d1\u6280\u56ed",
        "rawName": "\u8054\u521b\u79d1\u6280\u56ed",
        "lng": 113.96012,
        "lat": 22.535598,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1010",
        "name": "\u80af\u5fb7\u57fa\u79d1\u5174",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u79d1\u6280\u56ed\u8def39\u53f7\u5546\u4e1a\u4e2d\u5fc3\u79d1\u5174",
        "rawName": "\u79d1\u5174",
        "lng": 113.96438,
        "lat": 22.533064,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ5810",
        "name": "\u80af\u5fb7\u57fa\u661f\u661f\u79d1\u6280\u56ed",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u905326\u53f7\u4fbf\u6c11\u670d\u52a1\u70b9\u661f\u661f\u79d1\u6280\u56ed",
        "rawName": "\u661f\u661f\u79d1\u6280\u56ed",
        "lng": 113.96388,
        "lat": 22.545892,
        "order": 5
      }
    ]
  },
  {
    "day": 3,
    "distanceKm": 22.95,
    "estimatedMinutes": 103,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2060",
        "name": "\u80af\u5fb7\u57fa\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u905350\u53f7\u4fbf\u6c11\u670d\u52a1\u70b9\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3",
        "rawName": "\u86c7\u53e3\u6587\u4f53\u4e2d\u5fc3",
        "lng": 113.97388,
        "lat": 22.54372,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2079",
        "name": "\u80af\u5fb7\u57fa\u534e\u4fa8\u57ce\u521b\u610f\u56ed",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u79d1\u6280\u56ed\u8def45\u53f7\u5546\u4e1a\u4e2d\u5fc3\u534e\u4fa8\u57ce\u521b\u610f\u56ed",
        "rawName": "\u534e\u4fa8\u57ce\u521b\u610f\u56ed",
        "lng": 113.96834,
        "lat": 22.533008,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "XME007",
        "name": "\u80af\u5fb7\u57fa\u6df1\u5927\u6587\u5c71\u6e56",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u79d1\u6280\u56ed\u8def52\u53f7\u5546\u4e1a\u4e2d\u5fc3\u6df1\u5927\u6587\u5c71\u6e56",
        "rawName": "\u6df1\u5927\u6587\u5c71\u6e56",
        "lng": 113.9712,
        "lat": 22.532835,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "LA1107",
        "name": "\u80af\u5fb7\u57fa\u5357\u5c71\u667a\u8c37",
        "district": "\u5357\u5c71\u533a",
        "address": "\u6df1\u5733\u5e02\u5357\u5c71\u533a\u534e\u4fa8\u57ce\u8def91\u53f7\u751f\u6d3b\u5e7f\u573a\u5357\u5c71\u667a\u8c37",
        "rawName": "\u5357\u5c71\u667a\u8c37",
        "lng": 113.9783,
        "lat": 22.530298,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZ2801",
        "name": "\u80af\u5fb7\u57fa\u6d77\u96c5",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def10A\u53f7\u5546\u4e1a\u4e2d\u5fc3\u6d77\u96c5",
        "rawName": "\u6d77\u96c5",
        "lng": 114.0752,
        "lat": 22.537824,
        "order": 5
      }
    ]
  },
  {
    "day": 4,
    "distanceKm": 21.24,
    "estimatedMinutes": 85,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ4804",
        "name": "\u80af\u60a6\u5496\u5561\u65b0\u83b2\u5858\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def11\u53f7\u5546\u4e1a\u4e2d\u5fc3\u80af\u60a6\u5496\u5561\u65b0\u83b2\u5858\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u65b0\u83b2\u5858\u5e97",
        "lng": 114.07706,
        "lat": 22.538356,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "LA1141",
        "name": "\u80af\u5fb7\u57fa\u516b\u53f7\u4ed3",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def14\u53f7\u5546\u4e1a\u4e2d\u5fc3\u516b\u53f7\u4ed3",
        "rawName": "\u516b\u53f7\u4ed3",
        "lng": 114.07824,
        "lat": 22.538654,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1149",
        "name": "\u80af\u5fb7\u57fa\u5929\u5b89\u4e91\u8c37\u4e8c\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def15\u53f7\u5546\u4e1a\u4e2d\u5fc3\u5929\u5b89\u4e91\u8c37\u4e8c\u5e97",
        "rawName": "\u5929\u5b89\u4e91\u8c37\u4e8c\u5e97",
        "lng": 114.07858,
        "lat": 22.539186,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZ5634",
        "name": "\u80af\u5fb7\u57fa\u4e16\u7eaa\u6c47",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def17\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4e16\u7eaa\u6c47",
        "rawName": "\u4e16\u7eaa\u6c47",
        "lng": 114.07934,
        "lat": 22.539601,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "szn125",
        "name": "\u80af\u5fb7\u57fa\u4fa8\u9999",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def18\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4fa8\u9999",
        "rawName": "\u4fa8\u9999",
        "lng": 114.07968,
        "lat": 22.536883,
        "order": 5
      }
    ]
  },
  {
    "day": 5,
    "distanceKm": 21.5,
    "estimatedMinutes": 85,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1128",
        "name": "\u80af\u5fb7\u57fa\u4e07\u79d1\u7b2c\u4e94\u56ed",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def22\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4e07\u79d1\u7b2c\u4e94\u56ed",
        "rawName": "\u4e07\u79d1\u7b2c\u4e94\u56ed",
        "lng": 114.08104,
        "lat": 22.539013,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1189",
        "name": "\u80af\u5fb7\u57fa\u534e\u76db\u73d1\u60a6",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def21\u53f7\u5546\u4e1a\u4e2d\u5fc3\u534e\u76db\u73d1\u60a6",
        "rawName": "\u534e\u76db\u73d1\u60a6",
        "lng": 114.0807,
        "lat": 22.53848,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2018",
        "name": "\u80af\u5fb7\u57fa\u4e1c\u5173\u73fa\u5e9c",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def20\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4e1c\u5173\u73fa\u5e9c",
        "rawName": "\u4e1c\u5173\u73fa\u5e9c",
        "lng": 114.08036,
        "lat": 22.537948,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2191",
        "name": "\u80af\u5fb7\u57fa\u878d\u521b\u835f",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def19\u53f7\u5546\u4e1a\u4e2d\u5fc3\u878d\u521b\u835f",
        "rawName": "\u878d\u521b\u835f",
        "lng": 114.08002,
        "lat": 22.537416,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "szn008",
        "name": "\u80af\u5fb7\u57fa\u4e1c\u56ed",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def25B\u53f7\u5546\u4e1a\u4e2d\u5fc3\u4e1c\u56ed",
        "rawName": "\u4e1c\u56ed",
        "lng": 114.08222,
        "lat": 22.53606,
        "order": 5
      }
    ]
  },
  {
    "day": 6,
    "distanceKm": 22.93,
    "estimatedMinutes": 91,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2180",
        "name": "\u80af\u5fb7\u57fa\u6885\u6751",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def26\u53f7\u5546\u4e1a\u4e2d\u5fc3\u6885\u6751",
        "rawName": "\u6885\u6751",
        "lng": 114.08256,
        "lat": 22.536592,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1984",
        "name": "\u80af\u5fb7\u57fa\u65b0\u534e\u4e3aH\u533a\u5916\u5356\u70b9",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u7530\u8def27\u53f7\u5546\u4e1a\u4e2d\u5fc3\u65b0\u534e\u4e3aH\u533a\u5916\u5356\u70b9",
        "rawName": "\u65b0\u534e\u4e3aH\u533a\u5916\u5356\u70b9",
        "lng": 114.0829,
        "lat": 22.537125,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1165",
        "name": "\u80af\u5fb7\u57fa\u667a\u6167\u5bb6\u56ed",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def12\u53f7\u751f\u6d3b\u5e7f\u573a\u667a\u6167\u5bb6\u56ed",
        "rawName": "\u667a\u6167\u5bb6\u56ed",
        "lng": 114.09236,
        "lat": 22.543589,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZH738",
        "name": "\u5fc5\u80dc\u5ba2\u9e3f\u7fd4\u5b85\u6025\u9001",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def15\u53f7\u751f\u6d3b\u5e7f\u573a\u9e3f\u7fd4\u5fc5\u80dc\u5b85\u6025\u9001",
        "rawName": "\u9e3f\u7fd4\u5fc5\u80dc\u5b85\u6025\u9001",
        "lng": 114.09354,
        "lat": 22.543886,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2031",
        "name": "\u80af\u5fb7\u57fa\u6a2a\u5c97\u5927\u8fd0\u5c0f\u9547",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def10K\u53f7\u751f\u6d3b\u5e7f\u573a\u6a2a\u5c97\u5927\u8fd0\u5c0f\u9547",
        "rawName": "\u6a2a\u5c97\u5927\u8fd0\u5c0f\u9547",
        "lng": 114.09168,
        "lat": 22.545774,
        "order": 5
      }
    ]
  },
  {
    "day": 7,
    "distanceKm": 22.73,
    "estimatedMinutes": 89,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1207",
        "name": "\u80af\u5fb7\u57fa\u5409\u7965\u91cc",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def11\u53f7\u751f\u6d3b\u5e7f\u573a\u5409\u7965\u91cc",
        "rawName": "\u5409\u7965\u91cc",
        "lng": 114.09202,
        "lat": 22.546306,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1138",
        "name": "\u80af\u5fb7\u57fa\u4ec1\u5c71\u667a\u6c34",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def19\u53f7\u751f\u6d3b\u5e7f\u573a\u4ec1\u5c71\u667a\u6c34",
        "rawName": "\u4ec1\u5c71\u667a\u6c34",
        "lng": 114.09498,
        "lat": 22.545366,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ5822",
        "name": "\u80af\u60a6\u5496\u5561\u6162\u57ce\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def18\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u6162\u57ce\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u6162\u57ce\u5e97",
        "lng": 114.09464,
        "lat": 22.544833,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2022",
        "name": "\u80af\u5fb7\u57fa\u5b9d\u5c71\u65f6\u4ee3\u5927\u53a6",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def17\u53f7\u751f\u6d3b\u5e7f\u573a\u5b9d\u5c71\u65f6\u4ee3\u5927\u53a6",
        "rawName": "\u5b9d\u5c71\u65f6\u4ee3\u5927\u53a6",
        "lng": 114.0943,
        "lat": 22.544301,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZ5058",
        "name": "\u80af\u5fb7\u57fa\u65b0\u6885\u6797",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def21\u53f7\u751f\u6d3b\u5e7f\u573a\u65b0\u6885\u6797",
        "rawName": "\u65b0\u6885\u6797",
        "lng": 114.09726,
        "lat": 22.54253,
        "order": 5
      }
    ]
  },
  {
    "day": 8,
    "distanceKm": 23.14,
    "estimatedMinutes": 89,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1084",
        "name": "\u80af\u5fb7\u57fa\u56fd\u5c55\u4e2d\u5fc3",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def26\u53f7\u751f\u6d3b\u5e7f\u573a\u56fd\u5c55\u4e2d\u5fc3",
        "rawName": "\u56fd\u5c55\u4e2d\u5fc3",
        "lng": 114.09904,
        "lat": 22.544542,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ5820",
        "name": "\u80af\u60a6\u5496\u5561\u9ad8\u65b0\u533a\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def25L\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u9ad8\u65b0\u533a\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u9ad8\u65b0\u533a\u5e97",
        "lng": 114.0987,
        "lat": 22.54401,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZN267",
        "name": "\u80af\u5fb7\u57fa\u5609\u5fa1\u5c71",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def24\u53f7\u751f\u6d3b\u5e7f\u573a\u5609\u5fa1\u5c71",
        "rawName": "\u5609\u5fa1\u5c71",
        "lng": 114.09836,
        "lat": 22.543478,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2173",
        "name": "\u80af\u5fb7\u57fa\u6f6e\u5546\u5e7f\u573a",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def23\u53f7\u751f\u6d3b\u5e7f\u573a\u6f6e\u5546\u5e7f\u573a",
        "rawName": "\u6f6e\u5546\u5e7f\u573a",
        "lng": 114.09802,
        "lat": 22.542945,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1156",
        "name": "\u80af\u5fb7\u57fa\u5353\u8d8a\u524d\u6d77",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def29\u53f7\u751f\u6d3b\u5e7f\u573a\u5353\u8d8a\u524d\u6d77",
        "rawName": "\u5353\u8d8a\u524d\u6d77",
        "lng": 114.10022,
        "lat": 22.54159,
        "order": 5
      }
    ]
  },
  {
    "day": 9,
    "distanceKm": 23.43,
    "estimatedMinutes": 90,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2161",
        "name": "\u80af\u5fb7\u57fa\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def30\u53f7\u751f\u6d3b\u5e7f\u573a\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385",
        "rawName": "\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385",
        "lng": 114.10056,
        "lat": 22.542122,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZN261",
        "name": "\u80af\u5fb7\u57fa\u559c\u6e2f\u57ce",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def31\u53f7\u751f\u6d3b\u5e7f\u573a\u559c\u6e2f\u57ceKFC",
        "rawName": "\u559c\u6e2f\u57ceKFC",
        "lng": 114.1009,
        "lat": 22.542654,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1046",
        "name": "\u80af\u5fb7\u57fa\u661f\u5149",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def33\u53f7\u751f\u6d3b\u5e7f\u573a\u661f\u5149",
        "rawName": "\u661f\u5149",
        "lng": 114.10166,
        "lat": 22.543069,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2976",
        "name": "\u80af\u5fb7\u57fa\u6d2a\u6e56\u516c\u56ed\u6620\u65e5\u6f6d",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def35\u53f7\u751f\u6d3b\u5e7f\u573a\u6d2a\u6e56\u516c\u56ed\u6620\u65e5\u6f6d",
        "rawName": "\u6d2a\u6e56\u516c\u56ed\u6620\u65e5\u6f6d",
        "lng": 114.10242,
        "lat": 22.543484,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1047",
        "name": "\u80af\u5fb7\u57fa\u58f9\u6d77\u57ce",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def36\u53f7\u751f\u6d3b\u5e7f\u573a\u58f9\u6d77\u57ce",
        "rawName": "\u58f9\u6d77\u57ce",
        "lng": 114.10276,
        "lat": 22.540766,
        "order": 5
      }
    ]
  },
  {
    "day": 10,
    "distanceKm": 23.8,
    "estimatedMinutes": 90,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2149",
        "name": "\u80af\u5fb7\u57fa\u8f83\u573a\u5c3e",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def37\u53f7\u751f\u6d3b\u5e7f\u573a\u8f83\u573a\u5c3e",
        "rawName": "\u8f83\u573a\u5c3e",
        "lng": 114.1031,
        "lat": 22.541299,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1387",
        "name": "\u80af\u5fb7\u57fa\u5b89\u5c45\u9e23\u9e7f\u82d1",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def38\u53f7\u751f\u6d3b\u5e7f\u573a\u5b89\u5c45\u9e23\u9e7f\u82d1",
        "rawName": "\u5b89\u5c45\u9e23\u9e7f\u82d1",
        "lng": 114.10344,
        "lat": 22.541831,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2111",
        "name": "\u80af\u5fb7\u57fa\u521b\u667a\u4e91\u57ce",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def42\u53f7\u751f\u6d3b\u5e7f\u573a\u521b\u667a\u4e91\u57ce",
        "rawName": "\u521b\u667a\u4e91\u57ce",
        "lng": 114.10504,
        "lat": 22.542011,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2133",
        "name": "\u80af\u5fb7\u57fa\u77f3\u5ca9\u5929\u6e90\u9686",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def44\u53f7\u751f\u6d3b\u5e7f\u573a\u77f3\u5ca9\u5929\u6e90\u9686",
        "rawName": "\u77f3\u5ca9\u5929\u6e90\u9686",
        "lng": 114.1058,
        "lat": 22.542426,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ4845",
        "name": "\u80af\u60a6\u5496\u5561\u4e2d\u5fc3\u516c\u56ed KCOFFEE TRUCK",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def46\u53f7\u751f\u6d3b\u5e7f\u573a\u4e2d\u5fc3\u516c\u56ed KCOFFEE TRUCK",
        "rawName": "\u4e2d\u5fc3\u516c\u56ed KCOFFEE TRUCK",
        "lng": 114.10656,
        "lat": 22.53959,
        "order": 5
      }
    ]
  },
  {
    "day": 11,
    "distanceKm": 24.29,
    "estimatedMinutes": 91,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2069",
        "name": "\u80af\u5fb7\u57fa\u7559\u4ed9\u6d1e\u6709\u5de2",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def49\u53f7\u751f\u6d3b\u5e7f\u573a\u7559\u4ed9\u6d1e\u6709\u5de2",
        "rawName": "\u7559\u4ed9\u6d1e\u6709\u5de2",
        "lng": 114.10774,
        "lat": 22.539888,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZ6601",
        "name": "\u80af\u5fb7\u57fa\u4e91\u79d1\u5e9c",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def50\u53f7\u751f\u6d3b\u5e7f\u573a\u4e91\u79d1\u5e9c",
        "rawName": "\u4e91\u79d1\u5e9c",
        "lng": 114.10808,
        "lat": 22.54042,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2122",
        "name": "\u80af\u5fb7\u57fa\u534e\u6da6\u96ea\u82b1\u79d1\u521b",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def51\u53f7\u751f\u6d3b\u5e7f\u573a\u534e\u6da6\u96ea\u82b1\u79d1\u521b",
        "rawName": "\u534e\u6da6\u96ea\u82b1\u79d1\u521b",
        "lng": 114.10842,
        "lat": 22.540952,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1354",
        "name": "\u80af\u5fb7\u57fa\u8605\u82b3\u79d1\u6280\u5927\u53a6",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def52\u53f7\u751f\u6d3b\u5e7f\u573a\u8605\u82b3\u79d1\u6280\u5927\u53a6",
        "rawName": "\u8605\u82b3\u79d1\u6280\u5927\u53a6",
        "lng": 114.11028,
        "lat": 22.541485,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ4803",
        "name": "\u80af\u60a6\u5496\u5561\u5b9d\u9f99\u6bd4\u4e9a\u8fea\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def53\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u5b9d\u9f99\u6bd4\u4e9a\u8fea\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u5b9d\u9f99\u6bd4\u4e9a\u8fea\u5e97",
        "lng": 114.11062,
        "lat": 22.538767,
        "order": 5
      }
    ]
  },
  {
    "day": 12,
    "distanceKm": 24.53,
    "estimatedMinutes": 91,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1296",
        "name": "\u80af\u5fb7\u57fa\u5fa1\u666f\u5370\u8c61",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def59\u53f7\u751f\u6d3b\u5e7f\u573a\u5fa1\u666f\u5370\u8c61",
        "rawName": "\u5fa1\u666f\u5370\u8c61",
        "lng": 114.11282,
        "lat": 22.540662,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2107",
        "name": "\u80af\u5fb7\u57fa\u677e\u67cf\u5929\u8679",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def58\u53f7\u751f\u6d3b\u5e7f\u573a\u677e\u67cf\u5929\u8679",
        "rawName": "\u677e\u67cf\u5929\u8679",
        "lng": 114.11248,
        "lat": 22.540129,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZ5646",
        "name": "\u80af\u5fb7\u57fa\u91d1\u6e2f\u534e\u5ead",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def57\u53f7\u751f\u6d3b\u5e7f\u573a\u91d1\u6e2f\u534e\u5ead",
        "rawName": "\u91d1\u6e2f\u534e\u5ead",
        "lng": 114.11214,
        "lat": 22.539597,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2028",
        "name": "\u80af\u5fb7\u57fa\u897f\u4e3d\u534e\u6cf0",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def56\u53f7\u751f\u6d3b\u5e7f\u573a\u897f\u4e3d\u534e\u6cf0",
        "rawName": "\u897f\u4e3d\u534e\u6cf0",
        "lng": 114.1118,
        "lat": 22.539064,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "szn854",
        "name": "\u80af\u5fb7\u57fa\u6570\u7801\u65b0\u57ceDT",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def60\u53f7\u751f\u6d3b\u5e7f\u573a\u6570\u7801\u65b0\u57ceDT",
        "rawName": "\u6570\u7801\u65b0\u57ceDT",
        "lng": 114.11316,
        "lat": 22.537944,
        "order": 5
      }
    ]
  },
  {
    "day": 13,
    "distanceKm": 24.83,
    "estimatedMinutes": 92,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1358",
        "name": "\u80af\u5fb7\u57fa\u6df1\u4e1a\u4e0a\u57ce",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def63\u53f7\u751f\u6d3b\u5e7f\u573a\u6df1\u4e1a\u4e0a\u57ce",
        "rawName": "\u6df1\u4e1a\u4e0a\u57ce",
        "lng": 114.11434,
        "lat": 22.538241,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZ5617",
        "name": "\u80af\u5fb7\u57fa\u666f\u534e\u6c47",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def64\u53f7\u751f\u6d3b\u5e7f\u573a\u666f\u534e\u6c47",
        "rawName": "\u666f\u534e\u6c47",
        "lng": 114.11468,
        "lat": 22.538774,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2090",
        "name": "\u80af\u5fb7\u57fa\u73d1\u6e7e",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def65\u53f7\u751f\u6d3b\u5e7f\u573a\u73d1\u6e7e",
        "rawName": "\u73d1\u6e7e",
        "lng": 114.11502,
        "lat": 22.539306,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ6825",
        "name": "\u80af\u60a6\u5496\u5561\u8f83\u573a\u5c3e\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def66\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u8f83\u573a\u5c3e\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u8f83\u573a\u5c3e\u5e97",
        "lng": 114.11536,
        "lat": 22.539838,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ6813",
        "name": "\u80af\u60a6\u5496\u5561\u65b0\u9e3f\u6d32\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def73\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u65b0\u9e3f\u6d32\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u65b0\u9e3f\u6d32\u5e97",
        "lng": 114.1179,
        "lat": 22.539015,
        "order": 5
      }
    ]
  },
  {
    "day": 14,
    "distanceKm": 25.03,
    "estimatedMinutes": 93,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "szn230",
        "name": "\u80af\u5fb7\u57fa\u661f\u6cb3\u65f6\u4ee3",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def67\u53f7\u751f\u6d3b\u5e7f\u573a\u661f\u6cb3\u65f6\u4ee3",
        "rawName": "\u661f\u6cb3\u65f6\u4ee3",
        "lng": 114.1157,
        "lat": 22.537121,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1299",
        "name": "\u80af\u5fb7\u57fa\u62db\u5546\u4e2d\u73af",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def70I\u53f7\u751f\u6d3b\u5e7f\u573a\u62db\u5546\u4e2d\u73af",
        "rawName": "\u62db\u5546\u4e2d\u73af",
        "lng": 114.11688,
        "lat": 22.537418,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZ5603",
        "name": "\u80af\u5fb7\u57fa\u9886\u822a\u57ce",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def71\u53f7\u751f\u6d3b\u5e7f\u573a\u9886\u822a\u57ce",
        "rawName": "\u9886\u822a\u57ce",
        "lng": 114.11722,
        "lat": 22.53795,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2075",
        "name": "\u80af\u5fb7\u57fa\u7f19\u534e\u5e9c",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def72\u53f7\u751f\u6d3b\u5e7f\u573a\u7f19\u534e\u5e9c",
        "rawName": "\u7f19\u534e\u5e9c",
        "lng": 114.11756,
        "lat": 22.538483,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "szn177",
        "name": "\u80af\u5fb7\u57fa\u5bcc\u901a\u57ce",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def74\u53f7\u751f\u6d3b\u5e7f\u573a\u5bcc\u901a\u57ce",
        "rawName": "\u5bcc\u901a\u57ce",
        "lng": 114.11824,
        "lat": 22.536298,
        "order": 5
      }
    ]
  },
  {
    "day": 15,
    "distanceKm": 25.54,
    "estimatedMinutes": 94,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1276",
        "name": "\u80af\u5fb7\u57fa\u4f73\u5146\u4e1a\u4e2d\u5fc3",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def77\u53f7\u751f\u6d3b\u5e7f\u573a\u4f73\u5146\u4e1a\u4e2d\u5fc3",
        "rawName": "\u4f73\u5146\u4e1a\u4e2d\u5fc3",
        "lng": 114.11942,
        "lat": 22.536595,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "GZ5019",
        "name": "\u80af\u5fb7\u57fa\u58f9\u57ce\u4e2d\u5fc3",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def78\u53f7\u751f\u6d3b\u5e7f\u573a\u58f9\u57ce\u4e2d\u5fc3",
        "rawName": "\u58f9\u57ce\u4e2d\u5fc3",
        "lng": 114.11976,
        "lat": 22.537127,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2049",
        "name": "\u80af\u5fb7\u57fa\u5c1a\u6c34\u5929\u6210",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def79\u53f7\u751f\u6d3b\u5e7f\u573a\u5c1a\u6c34\u5929\u6210",
        "rawName": "\u5c1a\u6c34\u5929\u6210",
        "lng": 114.12162,
        "lat": 22.53766,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ1248",
        "name": "\u80af\u5fb7\u57fa\u534e\u4e1a\u73ab\u7470\u90e1",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def80\u53f7\u751f\u6d3b\u5e7f\u573a\u534e\u4e1a\u73ab\u7470\u90e1",
        "rawName": "\u534e\u4e1a\u73ab\u7470\u90e1",
        "lng": 114.12196,
        "lat": 22.538192,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "szn141",
        "name": "\u80af\u5fb7\u57fa\u9526\u82b1",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def81\u53f7\u751f\u6d3b\u5e7f\u573a\u9526\u82b1",
        "rawName": "\u9526\u82b1",
        "lng": 114.1223,
        "lat": 22.535474,
        "order": 5
      }
    ]
  },
  {
    "day": 16,
    "distanceKm": 25.87,
    "estimatedMinutes": 94,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ5828",
        "name": "\u80af\u60a6\u5496\u5561\u6b22\u4e50\u6d77\u5cb8\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def84\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u6b22\u4e50\u6d77\u5cb8\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u6b22\u4e50\u6d77\u5cb8\u5e97",
        "lng": 114.12348,
        "lat": 22.535772,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ3974",
        "name": "\u80af\u60a6\u5496\u5561KPOR\u9f99\u5149\u5e7f\u573a\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def85J\u53f7\u751f\u6d3b\u5e7f\u573aKPOR\u9f99\u5149\u5e7f\u573a\u5e97",
        "rawName": "KPOR\u9f99\u5149\u5e7f\u573a\u5e97",
        "lng": 114.12382,
        "lat": 22.536304,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ5849",
        "name": "\u80af\u60a6\u5496\u5561\u80af\u60a6\u56fd\u9645E\u57ce\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def87\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u56fd\u9645E\u57ce\u5e97",
        "rawName": "\u80af\u60a6\u56fd\u9645E\u57ce\u5e97",
        "lng": 114.12458,
        "lat": 22.536719,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "szn076",
        "name": "\u80af\u5fb7\u57fa\u4e2d\u5174",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def88\u53f7\u751f\u6d3b\u5e7f\u573a\u4e2d\u5174",
        "rawName": "\u4e2d\u5174",
        "lng": 114.12492,
        "lat": 22.537251,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "szn028",
        "name": "\u80af\u5fb7\u57fa\u516d\u7ea6",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def95\u53f7\u751f\u6d3b\u5e7f\u573a\u516d\u7ea6",
        "rawName": "\u516d\u7ea6",
        "lng": 114.12754,
        "lat": 22.535778,
        "order": 5
      }
    ]
  },
  {
    "day": 17,
    "distanceKm": 26.3,
    "estimatedMinutes": 95,
    "shops": [
      {
        "type": "\u95e8\u5e97",
        "code": "SZ3843",
        "name": "\u80af\u60a6\u5496\u5561\u9526\u534e\u5927\u53a6\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def92\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u9526\u534e\u5927\u53a6\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u9526\u534e\u5927\u53a6\u5e97",
        "lng": 114.12652,
        "lat": 22.534181,
        "order": 1
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZN863",
        "name": "\u80af\u5fb7\u57fa\u534e\u5174\u8defDT",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def93\u53f7\u751f\u6d3b\u5e7f\u573a\u534e\u5174\u8defDT",
        "rawName": "\u534e\u5174\u8defDT",
        "lng": 114.12686,
        "lat": 22.534713,
        "order": 2
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ5848",
        "name": "\u80af\u60a6\u5496\u5561\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385\u5e97",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def94\u53f7\u751f\u6d3b\u5e7f\u573a\u80af\u60a6\u5496\u5561\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385\u5e97",
        "rawName": "\u80af\u60a6\u5496\u5561\u54c8\u5de5\u5927\u8354\u56ed\u9910\u5385\u5e97",
        "lng": 114.1272,
        "lat": 22.535246,
        "order": 3
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ4828",
        "name": "\u80af\u5fb7\u57fa\u7fe0\u7af9\u516c\u56ed",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def98\u53f7\u751f\u6d3b\u5e7f\u573a\u7fe0\u7af9\u516c\u56ed",
        "rawName": "\u7fe0\u7af9\u516c\u56ed",
        "lng": 114.12872,
        "lat": 22.536075,
        "order": 4
      },
      {
        "type": "\u95e8\u5e97",
        "code": "SZ2199",
        "name": "\u80af\u5fb7\u57fa\u4e07\u79d1\u5e7f\u573a",
        "district": "\u798f\u7530\u533a",
        "address": "\u6df1\u5733\u5e02\u798f\u7530\u533a\u91d1\u7530\u8def99\u53f7\u751f\u6d3b\u5e7f\u573a\u4e07\u79d1\u5e7f\u573a",
        "rawName": "\u4e07\u79d1\u5e7f\u573a",
        "lng": 114.12906,
        "lat": 22.533358,
        "order": 5
      }
    ]
  }
];
