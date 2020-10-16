import React from 'react';
import { Link } from 'react-router-dom';
import mapMarker from '../../images/map-marker.svg'
import { Container } from './styles';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarker} alt=""/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Teresina</strong>
          <span>Piauí</span>
        </footer>
      </aside>

      <Map
        center={[-4.4656364,-43.8812005]}
        zoom={15}
        style={{ width: '100%', height: '100%'}}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOXTOKEN}`} />
      </Map>

      <Link to="" className="create-orphanate">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
}

export default OrphanagesMap;