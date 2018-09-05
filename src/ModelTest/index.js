import React,{Component} from 'react';
// import Con1 from './con1';
import PropTypes from 'prop-types';
import GomeReactUI from '../../../gome-react-ui/dist/gome-react-ui';
// import GomeReactUI from 'gome-react-ui';
let {Modal, Button} = GomeReactUI;
import axios from 'axios';

export default class ModelTest extends Component{
  constructor(props){
    super();
    this.state = {
      visible: false,
      visible2: false,
      visible3: false,
      footerType: 'default',
      arr: ['aaa', 'bbb', 'ccc'],
      data: ''
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
      visible2: false,
      visible3: false
    });
  }
  showModal2 = (res) => {
    this.setState({
      visible2: true,
      visible3: false,
      // data: res.data.data[0].content
      data: res
    });
  }
  showModal3 = (res) => {
    this.setState({
      visible3: true,
      // data: res.data.data[0].content
      // data: res
    });
  }
  cancels(){
    this.setState({ visible: false });
  }
  handleOk = () => {
    console.log('自定义 ok回调');
    this.cancels();
  }
  handleCancel = () => {
    console.log('自定义 cancel回调');
    this.cancels();
  }
  Btn1Click(){
    this.showModal();
  }
  Btn2Click(){
    // axios.get('https://bird.ioliu.cn/joke/rand?type=text').then( res => {
    //   if(res.data.status.code == 200){
    //     this.showModal2(res);
    //   }
    // });
    this.showModal2(111);
  }
  Btn3Click(){
    this.showModal3(333);
  }
  render(){
    let { footerType, visible, visible2, visible3 } = this.state;
    let _this = this;
    const options = {
      id: 1,
      key: 1,
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
      // autoCloseCb(){  // 自动关闭回调
      //   console.log('autoCloseCb');
      // },
      closeTimeout: 5000,
      btnType: 'both',  // both/ sure/ cancel
      okText: 'ok',
      cancelText: 'nono',
      btnArr: [
        {
          text: 'btn1',
          index: 0,
          classNames: 'btn1 btn111',
          type: 'primary',
          click: ()=>{
            console.log('btn1 clicked');
            _this.handleCancel();
          }
        },
        {
          text: 'btn2',
          index: 1,
          click: ()=>{
          console.log('btn2 clicked');
            _this.handleOk();
          }
        }
      ],
      footer: [
        <Button key="back" onClick={this.handleCancel}>return</Button>,
        <Button key="submit" onClick={this.handleOk} type="primary">submit</Button>
      ]
    };
    const options2 = {
      id: 2,
      key: 2,
      title: '我是第二个弹窗',
      visible: visible2,
      footerShow: false,
      // autoClose: true,
      // closeTimeout: 5000,
      // autoCloseCb: ()=>{
      //   this.setState({
      //     visible2: false,
      //     data: ''
      //   });
      // }
    };
    const options3 = {
      id: 3,
      key: 3,
      title: '我是第三个弹窗',
      visible: visible3,
      footerShow: false
    };
    return (
      <div>
        <hr />
        <Button onClick={this.Btn1Click.bind(this)}>弹窗按钮</Button>
        <Modal {...options} >
          <Button onClick={this.Btn2Click.bind(this)} />
          <Modal {...options2} >
            <Button onClick={this.Btn3Click.bind(this)} />
            <p>{this.state.data}</p>
            <Modal {...options3} >
              <p>我是第三个弹窗</p>
            </ Modal>
          </ Modal>
          <p>第1行文字</p>
          <p>第2行文字</p>
          <p>第3行文字</p>
          <p>第4行文字</p>
          <input type="text" />
          <input type="text" />
        </ Modal>
      </div>
    )
  }
}
