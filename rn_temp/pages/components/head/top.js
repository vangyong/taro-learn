import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Image, View } from "@tarojs/components-rn";
import topStyleSheet from "./top_styles";

var _styleSheet = topStyleSheet;
let Top = class Top extends Component {
  render() {
    return <View style={_styleSheet["top"]}>
      <view style={_styleSheet["left"]}>
        <Image src={require("../../../assets/img/left.png")} style={_styleSheet["img"]}></Image>
      </view>
      <view style={_styleSheet["right"]}>
        <Image src={require("../../../assets/img/right1.png")} style={_styleSheet["img"]}></Image>
        <Image src={require("../../../assets/img/right2.png")} style={_styleSheet["img"]}></Image>
        <Image src={require("../../../assets/img/right3.png")} style={_styleSheet["img"]}></Image>
      </view>

    </View>;
  }
};


export default Top;