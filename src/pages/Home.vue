<template>
  <div>
    <div class="flex-space-between">
      <el-card>
        <p>发布流程数：</p>
        <p class="font-1x">12943</p>
        <div id="TinyColumn"></div>
        <p class="flex-space-between border-1px-t padding-rl-5">
          <span class="color-gray">周一</span>
          <i>~</i>
          <span class="color-gray">周日</span>
        </p>
      </el-card>
      <el-card>
        <p>浏览数：</p>
        <p class="font-1x">134</p>
        <div id="TinyArea"></div>
        <p class="flex-space-between border-1px-t padding-rl-5">
          <span class="color-gray">1</span>
          <i>(h)</i>
          <span class="color-gray">24</span>
        </p>
      </el-card>
      <el-card>
        <p>用户反馈数：</p>
        <p class="font-1x">60</p>
        <div id="Bullet"></div>
        <p class="flex-space-between border-1px-t padding-rl-5">
          <span class="color-gray">反馈数</span>
          <i>-</i>
          <span class="color-gray">回复数</span>
        </p>
      </el-card>
      <el-card>
        <p>访问量：</p>
        <p class="font-1x">120212</p>
        <div id="container"></div>
        <p class="flex-space-between border-1px-t padding-rl-5">
          <span class="color-gray">1</span>
          <i>(h)</i>
          <span class="color-gray">24</span>
        </p>
      </el-card>
    </div>
    <el-card class="margin-t-10">
      <div slot="header" class="clearfix">
        <span>对称条形图</span>
      </div>
      <div id="BidirectionalBar"></div>
    </el-card>
  </div>
</template>

<script>
import { TinyArea, Bullet, TinyColumn,BidirectionalBar } from "@antv/g2plot";

export default {
  data() {
    return {};
  },
  mounted() {
    // 浏览数
    const data_tinyArea = [
      264,
      417,
      438,
      887,
      309,
      397,
      550,
      575,
      563,
      430,
      525,
      592,
      492,
      467,
      513,
      546,
      983,
      340,
      539,
      243,
      226,
      192,
    ];
    const TinyAreaBox = new TinyArea("TinyArea", {
      height: 70,
      width: 235,
      autoFit: false,
      data: data_tinyArea,
      smooth: true,
    });

    TinyAreaBox.render();

    // 发布流程数
    const data1 = [274, 337, 81, 497, 666, 219, 269];
    const dataTime = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    const TinyColumnBox = new TinyColumn("TinyColumn", {
      height: 70,
      width: 235,
      autoFit: false,
      data: data1,
      tooltip: {
        customContent: function (x, data) {
          return `<div class="padding-10">
            <p class="margin-b-10">${dataTime[x]}注册数：</p>
            <i style="color:#5B8FF9" class="font-1x el-icon-caret-right"></i>
            <span class="font-1x">${data[0] ? data[0].value : ""}</span>
          </div>`;
        },
      },
    });
    TinyColumnBox.render();

    // 反馈数
    const bulletPlot = new Bullet("Bullet", {
      data: [
        {
          title: "",
          ranges: [],
          measures: [60, 40],
          target: 100,
        },
      ],
      height: 70,
      width: 235,
      xField: "title",
      measureField: "measures",
      rangeField: "ranges",
      targetField: "target",
      color: {
        range: ["white"],
        measure: ["#5B8FF9", "#61DDAA"],
        target: "#61DDAA",
      },
      label: {
        measure: {
          position: "middle",
          style: {
            fill: "#fff",
          },
        },
      },
      xAxis: {
        line: null,
      },
      yAxis: false,
      tooltip: {
        showMarkers: false,
        shared: false,
        showTitle: false,
        customContent: function (x, data) {
          return `<div class="padding-10">
            <p class="margin-b-10">${
              x == "measures_0" ? "反馈数量" : "回复数量"
            }</p>
            <i style="color:${
              x == "measures_0" ? "#5B8FF9" : "#61DDAA"
            }" class="font-1x el-icon-caret-right"></i>
            <span class="font-1x">${data[0] ? data[0].value : ""}</span>
          </div>`;
        },
      },
    });
    bulletPlot.render();

    // 访问量
    const data = [
      240,
      270,
      300,
      360,
      380,
      400,
      330,
      280,
      230,
      220,
      210,
      200,
      200,
      240,
      260,
      280,
      300,
      320,
      340,
      360,
      380,
      390,
      330,
      320,
      310,
      260,
      280,
      260,
      240,
      220,
      200,
      180,
      185,
      205,
      225,
      245,
      265,
      285,
      305,
      325,
      345,
      365,
      385,
    ];
    const tinyColumn = new TinyColumn("container", {
      height: 70,
      width: 235,
      autoFit: false,
      data,
      theme: {
        styleSheet: {
          brandColor: "#3888fa",
        },
      },
      tooltip: {
        customContent: function (x, data) {
          return `NO.${x}: ${data[0] ? data[0].data.y : ""}`;
        },
      },
    });
    tinyColumn.render();


    const data_bid = [
      {
        country: "乌拉圭",
        "2016年耕地总面积": 13.4,
        "2016年转基因种植面积": 12.3,
      },
      {
        country: "巴拉圭",
        "2016年耕地总面积": 14.4,
        "2016年转基因种植面积": 6.3,
      },
      {
        country: "南非",
        "2016年耕地总面积": 18.4,
        "2016年转基因种植面积": 8.3,
      },
      {
        country: "巴基斯坦",
        "2016年耕地总面积": 34.4,
        "2016年转基因种植面积": 13.8,
      },
      {
        country: "阿根廷",
        "2016年耕地总面积": 44.4,
        "2016年转基因种植面积": 19.5,
      },
      {
        country: "巴西",
        "2016年耕地总面积": 24.4,
        "2016年转基因种植面积": 18.8,
      },
      {
        country: "加拿大",
        "2016年耕地总面积": 54.4,
        "2016年转基因种植面积": 24.7,
      },
      {
        country: "中国",
        "2016年耕地总面积": 104.4,
        "2016年转基因种植面积": 5.3,
      },
      {
        country: "美国",
        "2016年耕地总面积": 165.2,
        "2016年转基因种植面积": 72.9,
      },
    ];

    const BidirectionalBarPlot = new BidirectionalBar("BidirectionalBar", {
      data:data_bid,
      layout: "vertical",
      xField: "country",
      yField: ["2016年耕地总面积", "2016年转基因种植面积"],
      yAxis: {
        "2016年耕地总面积": {
          nice: true,
        },
        "2016年转基因种植面积": {
          min: 0,
          max: 100,
        },
      },
      tooltip: {
        shared: true,
        showMarkers: false,
      },
    });

    BidirectionalBarPlot.render();
  },
};
</script>

