import React, { Component } from 'react';
import GoogleApiComponent from './GoogleApiComponent'
import {Map} from './Map';

export class Container extends Component {
  render() {
    const style = {
      width: '100wh',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyAd0ZZdBnJftinI-qHnPoP9kq5Mtkey6Ac'
})(Container)