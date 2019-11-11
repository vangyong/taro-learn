var _dec, _class, _class2, _temp;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Button, Text } from "@tarojs/components-rn";
import { connect } from "@tarojs/taro-redux-rn";

import { add, minus, asyncAdd } from "../../actions/counter";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = (_dec = connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
})), _dec(_class = (_temp = _class2 = class Index extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["index"]}>
        <aa></aa>
        <Button onClick={this.props.add} style={_styleSheet["add_btn"]}>+</Button>
        <Button onClick={this.props.dec} style={_styleSheet["dec_btn"]}>-</Button>
        <Button onClick={this.props.asyncAdd} style={_styleSheet["dec_btn"]}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>;
  }
}, _class2.config = {
  navigationBarTitleText: '计数器'
}, _temp)) || _class);


export default Index;