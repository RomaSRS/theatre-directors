import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0ZTMxIiwiYSI6ImNrM3QxcmQ2eTBhbXEzbm5oaDZqczltdXcifQ.RqWWmCUES-HkUrAd1Omhyg';
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.titles = props.titles;
        this.location = props.data.mapData.center.reverse();
        this.zoom = props.data.mapData.zoom;
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
            center: this.location,
            zoom: this.zoom
        });

        var el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
            .setLngLat(this.location)
            .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML('<h3>Name of the theatre</h3><p>address</p>'))
            .addTo(map);
    }

    render() {
        return <div>
            <p className="map-title">{this.titles.map}</p>
            <div id='map'></div>
        </div>
    }

}

export default Map;