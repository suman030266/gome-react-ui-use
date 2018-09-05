import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ModelTest from './ModelTest';
import ButtonTest from './ButtonTest';
import './ModelTest/index.less';

ReactDOM.render(
  <React.Fragment>
    <ButtonTest/>
    <ModelTest/>
  </React.Fragment>, window.app);
