import React,{Component} from 'react';
import PropTypes from 'prop-types';
import GomeReactUI from '../../../gome-react-ui/dist/gome-react-ui';
// import GomeReactUI from 'gome-react-ui';
let {Modal, Button} = GomeReactUI;

export default class ButtonTest extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
  }
  render(){
    return (
      <React.Fragment>
        <Button />
        <Button type="primary" />
        <Button type="dashed" />
        <Button type="danger" />
        <Button states="disable" />
        <Button size="large" />
        <Button size="small" />
      </React.Fragment>
    );
  }
}
