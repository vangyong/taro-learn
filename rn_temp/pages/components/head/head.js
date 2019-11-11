import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
import Top from "./top";
import Activity from "./activity";
import headStyleSheet from "./head_styles";

var _styleSheet = headStyleSheet;
let Head = class Head extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    let store = this.state;
    return <View style={_styleSheet["head"]}>
      <Top></Top>
      <View style={_styleSheet["store"]}>
        <Image src={require("../../../assets/img/store.png")} style={_styleSheet["store_img"]}></Image>
        <View style={_styleSheet["store_text"]}>
          <Text>川香玉</Text>
          <Text>欢迎光临，很高兴为你服务</Text>
          {}
          {}
          {}
          {}
          {}

          <View>
            <Text key="1" style={_styleSheet["tags_text"]}>味道美</Text>
            <Text key="2" style={_styleSheet["tags_text"]}>主食真好</Text>
            <Text key="3" style={_styleSheet["tags_text"]}>buautiful</Text>
          </View>
        </View>
      </View>
      <Activity></Activity>
    </View>;
  }

};


export default Head;