import React from 'react'

const HotelCard = () => {
  return (
    < div className="card" >
      <div className="card__header">
        <p>Moscow Marriott Grand Hotel</p>
        <i className="bi bi-heart-fill"></i>
      </div>
      <div className="card__body">
        <div className="date">28 June, 2020</div>
        <div className="divider"> - </div>
        <div className="days">1 день</div>
      </div>
      <div className="card__footer">
        <div className="rating">
          <i className="bi bi-star-fill" style={{ color: '#CDBC1E' }}></i>
          <i className="bi bi-star-fill" style={{ color: '#CDBC1E' }}></i>
          <i className="bi bi-star-fill" style={{ color: '#CDBC1E' }}></i>
          <i className="bi bi-star-fill" style={{ color: '#6C6845' }}></i>
          <i className="bi bi-star-fill" style={{ color: '#6C6845' }}></i>
        </div>
        <div className="card__price">
          <p>Price:</p>
          <p>23 234 Р</p>
        </div>
      </div>
    </div >
  )
}

export default HotelCard
