var _class, _temp;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Input, Button } from "@tarojs/components-rn";
// import SnowflakeId from 'snowflake-id'
// import IdGerator from '../../utils/IdGerator'
import indexStyleSheet from "./index_styles";
import Head from "../components/head/head";

var _styleSheet = indexStyleSheet;
let Index = (_temp = _class = class Index extends Component {

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick() {
    //let snowflake = new SnowflakeId({mid : 1, offset : 1})
    console.log('clicked login');
    //Taro.request({'http://132.232.30.39:8000/v1/sso-server/form/token',newOptions});
    // let id = IdGerator.generateSnowflakeId()
    // console.log(id)
  }

  handleCounter() {
    Taro.navigateTo({
      url: `/pages/counter/index`
    });
  }

  render() {
    return <View style={_styleSheet["index"]}>
        <Head></Head>
        {}
        {}
        <View>用户名<Input></Input></View>
        <View>密码<Input type="password"></Input></View>
        <Button onClick={this.handleClick}>登录</Button>
        <Button onClick={this.handleCounter}>计数器</Button>
      </View>;
  }
}, _class.config = {
  navigationBarTitleText: '首页'
}, _temp);
export { Index as default };