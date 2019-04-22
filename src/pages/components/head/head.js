import Taro, {Component} from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';
import Top from './top';
import Activity from './activity'
import './head.less'

class Head extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    let store = this.state;
    return (<View className="head">
      <Top></Top>
      <View className="store">
        <Image className="store_img" src={require("../../../assets/img/store.png")}></Image>
        <View className="store_text">
          <Text>川香玉</Text>
          <Text>欢迎光临，很高兴为你服务</Text>
          {/*<View>*/}
          {/*{*/}
          {/*this.state.store.tags.map((item, index) => <Text className="tags_text" key={index}>{item}</Text>)*/}
          {/*}*/}
          {/*</View>*/}

          <View>
            <Text className="tags_text" key="1">味道美</Text>
            <Text className="tags_text" key="2">主食真好</Text>
            <Text className="tags_text" key="3">buautiful</Text>
          </View>
        </View>
      </View>
      <Activity></Activity>
    </View>)
  }

}

export default Head;
