import React,{Component} from 'react';
// import Con1 from './con1';
import PropTypes from 'prop-types';
import GomeReactUI from '../../../gome-react-ui/dist/gome-react-ui';
// import GomeReactUI from 'gome-react-ui';
let {Modal, Button} = GomeReactUI;

export default class ModelTest extends Component{
  constructor(props){
    super();
    this.state = {
      visible: false,
      footerType: 'default',
      arr: ['aaa', 'bbb', 'ccc']
    }
  }
  static childContextTypes = {
    arr: PropTypes.array
  }
  getChildContext(){// 这里返回的结果就是后代的上下文
    return {arr: this.state.arr}
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    console.log('自定义 ok回调');
    this.setState({ visible: false });
  }
  handleCancel = () => {
    console.log('自定义 cancel回调');
    this.setState({ visible: false });
  }
  componentDidMount(){
    setTimeout(()=>{
      this.showModal();
    }, 1000);
  }
  render(){
    let { footerType, visible } = this.state;
    const options = {
      visible,
      title: '自定义标题',
      footerType,
      closeBtn: true,
      canMaskClick: true,
      onOk: this.handleOk,
      onCancel: this.handleCancel,
      // width: 800,
      // height: 500,
      // autoClose: true,
      // closeTimeout: 5000,
      footer: [
        <Button key="back" onClick={this.handleCancel}>return</Button>,
        <Button key="submit" onClick={this.handleOk} type="primary">submit</Button>
      ]
    };
    return (
      <div>
        <Modal {...options} >
          <p>第1行文字</p>
          <p>第2行文字</p>
          <p>第3行文字</p>
          <p>第3行文字</p>
          <p>第3行文字</p>
          <p>第3行文字</p>
          <p>第3行文字</p>
          <p>第4行文字</p>
          {/*<Con1 />*/}
        </ Modal>
      </div>
    )
  }
}
