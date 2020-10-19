import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mapMarker from '../../images/map-marker.svg'
import { Container } from './styles';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import api from '../../services/api'

interface OrphanagesData {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean

}

const mapIcon = leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -45]
})

const OrphanagesMap: React.FC = () => {

  const [orphanages, setOrphanages] = useState<OrphanagesData[]>([])

  useEffect(()=>{
    api.get('orphanage').then(res => {
      setOrphanages(res.data)
    })
  },[])

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
        {orphanages.map(orph => (
          <Marker
            key={orph.id}
            icon={mapIcon}
            position={[orph.latitude,orph.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orph.name}

              <Link to={`/orphanage/${orph.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanage/create" className="create-orphanate">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
}

export default OrphanagesMap;