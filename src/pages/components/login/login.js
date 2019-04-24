import Taro, {Component} from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';
import './login.less'

class Login extends Component {
  constructor() {
    super(...arguments)
  }



  render() {
    return (<View className='login'>
      <Text>login page</Text>
      <Image src={require("../../../assets/img/home.png")}></Image>

    </View>)
  }

}

export default Login;
