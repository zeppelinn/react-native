import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SCENETYPE } from '../actions/scene';
import { IStoreState } from '../declarations';
import Router from './router/index';
import StartImage from './StartImage/index';

const mapStateToProps = (state:IStoreState) => ({
  sceneType:state.scene.sceneType,
})

interface IStateProps{
  sceneType:SCENETYPE
}

interface IDispatchProps{

}

interface IOwnProps{

}

type IProps = IDispatchProps & IStateProps & IOwnProps;

class App extends Component<IProps, {}> {
  render() {
    return this.props.sceneType === SCENETYPE.START_IMAGE ?
      <StartImage /> : <Router />
  }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, {})(App)
