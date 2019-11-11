import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
let Food = class Food extends Component {
  constructor() {
    super(...arguments);
  }

  handleClick(value) {
    //this.setState({current: value})
  }

  chageCata() {
    if (this.state.foodlist.some(item => item.pid == selectCata.id)) {}
  }

  getData() {
    Array.from(Array(Math.round(Math.random() * 20)), () => {});
  }

  render() {

    // return (<View>
    //   <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
    //     <AtTabsPane current={this.state.current} index={0} >
    //       <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
    //     </AtTabsPane>
    //     <AtTabsPane current={this.state.current} index={1}>
    //       <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
    //     </AtTabsPane>
    //     <AtTabsPane current={this.state.current} index={2}>
    //       <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
    //     </AtTabsPane>
    //   </AtTabs>
    // </View>)

    return <View>

    </View>;
  }
};


export default Food;