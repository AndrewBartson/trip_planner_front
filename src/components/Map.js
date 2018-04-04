import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class Map extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 5;
      let lat = 36.5;
      let lng = -95.7;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }

  render() {
    const mapDivStyle = {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }
    return (
      <div style={mapDivStyle} ref='map'>
        Loading map...
      </div>
    )
  }
}