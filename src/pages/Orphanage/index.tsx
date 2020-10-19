import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';
import api from '../../services/api'

import mapMarkerImg from '../../images/map-marker.svg';
import { Container } from "./styles";
import Sidebar from "../../components/Sidebar";
import { useParams } from "react-router-dom";

interface OrphanagesData {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  image: {
    url: string
  }[]
}

interface OrphParams {
  id: string
}

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function Orphanage() {

  const [orphanage, setOrphanage] = useState<OrphanagesData>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const params = useParams<OrphParams>()

  useEffect(()=>{
    api.get(`orphanage/${params.id}`).then(res => {
      setOrphanage(res.data)
    })
  },[params])

  if(!orphanage){
    return <h1>Carregando</h1>
  }

  return (
    <Container>
      
      <Sidebar />
      <main>
        <div className="orphanage-details">
          <img src={orphanage.image[activeImageIndex].url} alt={orphanage.name} />

          <div className="images">
            {orphanage.image.map((img, index) => (
              <button
                key={index}
                className={activeImageIndex === index ? "active" : ''}
                type="button"
                onClick={()=>setActiveImageIndex(index)}
              >
                <img src={img.url} alt={orphanage.name} />
              </button>
            ))}
          </div>
          
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude,orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOXTOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[orphanage.latitude,orphanage.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.es/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br/>
                {orphanage.opening_hours}
              </div>

              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
              ) : (
                <div className="open-on-weekends dont-open">
                <FiInfo size={32} color="#FF6690" />
                Não Atendemos <br />
                fim de semana
              </div> 
              )}

              
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </Container>
  );
}