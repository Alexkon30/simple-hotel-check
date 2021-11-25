import React from 'react'

const HotelCard = ({ hotel }) => {

  console.log(hotel)
  return (
    < div className="card" >
      <div className="card__header">
        <p>{hotel.hotelName}</p>
        <i className="bi bi-heart-fill"></i>
      </div>
      <div className="card__body">
        <div className="date">28 June, 2020</div>
        <div className="divider"> - </div>
        <div className="days">1 день</div>
      </div>
      <div className="card__footer">
        <div className="rating">
          <i className="bi bi-star-fill" style={{ color: `${hotel.stars > 0 ? '#CDBC1E' : '#6C6845'}` }}></i>
          <i className="bi bi-star-fill" style={{ color: `${hotel.stars > 1 ? '#CDBC1E' : '#6C6845'}` }}></i>
          <i className="bi bi-star-fill" style={{ color: `${hotel.stars > 2 ? '#CDBC1E' : '#6C6845'}` }}></i>
          <i className="bi bi-star-fill" style={{ color: `${hotel.stars > 3 ? '#CDBC1E' : '#6C6845'}` }}></i>
          <i className="bi bi-star-fill" style={{ color: `${hotel.stars > 4 ? '#CDBC1E' : '#6C6845'}` }}></i>
        </div>
        <div className="card__price">
          <p>Price:</p>
          <p>{hotel.priceFrom} Р</p>
        </div>
      </div>
    </div >
  )
}

export default HotelCard
