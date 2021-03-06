import Taro, {Component, request} from '@tarojs/taro'
import {View, Input, Button} from '@tarojs/components'
// import SnowflakeId from 'snowflake-id'
// import IdGerator from '../../utils/IdGerator'
import './index.less'
import Head from '../components/head/head';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleClick() {
    //let snowflake = new SnowflakeId({mid : 1, offset : 1})
    console.log('clicked login')
    //Taro.request({'http://132.232.30.39:8000/v1/sso-server/form/token',newOptions});
    // let id = IdGerator.generateSnowflakeId()
    // console.log(id)
  }

  handleCounter() {
    Taro.navigateTo({
      url: `/pages/counter/index`
    })
  }

  render() {
    return (
      <View className='index'>
        <Head></Head>
        {/*<Food></Food>*/}
        {/*<login></login>*/}
        <View>用户名<Input></Input></View>
        <View>密码<Input type='password'></Input></View>
        <Button onClick={this.handleClick}>登录</Button>
        <Button onClick={this.handleCounter}>计数器</Button>
      </View>
    )
  }
}
