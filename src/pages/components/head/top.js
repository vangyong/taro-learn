import Taro, {Component} from '@tarojs/taro';
import {Image, View} from '@tarojs/components';
import './top.less'

class Top extends Component {
  render() {
    return (<View className="top">
      <view className="left">
        <Image className="img" src={require("../../../assets/img/left.png")}></Image>
      </view>
      <view className="right">
        <Image className="img" src={require("../../../assets/img/right1.png")}></Image>
        <Image className="img" src={require("../../../assets/img/right2.png")}></Image>
        <Image className="img" src={require("../../../assets/img/right3.png")}></Image>
      </view>

    </View>)
  }
}

export default Top;
