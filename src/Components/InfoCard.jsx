import React from 'react'
import HotelCard from './HotelCard'

const InfoCard = ({ hotel }) => {
  return (
    <div className="infoCard">
      <div className="icon"><i className="bi bi-house-fill"></i></div>
      <HotelCard hotel={hotel} />
    </div>
  )
}

export default InfoCard
