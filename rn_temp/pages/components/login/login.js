import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
import loginStyleSheet from "./login_styles";

var _styleSheet = loginStyleSheet;
let Login = class Login extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return <View style={_styleSheet["login"]}>
      <Text>login page</Text>
      <Image src={require("../../../assets/img/home.png")}></Image>

    </View>;
  }

};


export default Login;