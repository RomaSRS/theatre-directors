import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0ZTMxIiwiYSI6ImNrM3QxcmQ2eTBhbXEzbm5oaDZqczltdXcifQ.RqWWmCUES-HkUrAd1Omhyg';
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.location = props.data.mapData.center.reverse();
        this.zoom = props.data.mapData.zoom;
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
            center: this.location, // starting position [lng, lat]
            zoom: this.zoom // starting zoom
        });

        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(this.location)
            .addTo(map);
    }

    render() {
        return <div id='map'></div>
    }

}

export default Map;