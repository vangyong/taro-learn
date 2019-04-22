import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';

class Cata extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectData: null,
      cata: [{name: "专场", id: "1"},
        {name: "热销", id: "2"},
        {name: "折扣", id: "3"},
        {name: "主食", id: "4"},
        {name: "热茶", id: "5"},
        {name: "凉菜", id: "6"},
        {name: "特色", id: "7"},
        {name: "热销", id: "8"}]
    };
  }

  clickHandle(item) {
    if (this.state.selectCata && this.state.selectCata.id != item.id) {
      this.setState({selectCata: item},()=>{
        this.props.onChangeCata&&this.props.onChangeCata(this.state.selectCata)
      })
    } else if (!this.state.selectCata) {
      this.setState({selectData: item},()=>{
        this.props.onChangeCata&&this.props.onChangeCata(this.state.selectCata)
      })
    }
  }

  render() {
    let {cata, selectData} = this.state
    return (<View className="cata">{
      cata.map((item, index) => {
        return (<Text onClick={this.clickHandle.bind(this,item)} className="cata_name" key={item.id}>{item.name}</Text>)
      })
    }

    </View>)
  }
}

export default Cata;
