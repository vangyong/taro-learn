import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Text, View } from "@tarojs/components-rn";
import activityStyleSheet from "./activity_styles";

var _styleSheet = activityStyleSheet;
let Activity = class Activity extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      activity: [{
        type: "cut",
        info: [{ total: 48, cut: 10 }, { total: 58, cut: 20 }, { total: 100, cut: 30 }]
      }]
    };
  }

  getTextByType(type) {
    switch (type) {
      case "cut":
        return "减";
      default:
        return "减";
        break;
    }
  }

  getLine(arr) {
    return arr.map(item => `满${item.total}减${item.cut}`).join(';');
  }

  render() {
    let { activity: [firstItem] } = this.state;
    return <View style={_styleSheet["activity"]}>
      <Text style={_styleSheet["type"]}>{this.getTextByType(firstItem.type)}</Text>
      <Text style={_styleSheet["info"]}>{this.getLine(firstItem.info)}</Text>
      <Text style={_styleSheet["length"]}>{this.state.activity.length}个活动</Text>

    </View>;
  }
};


export default Activity;