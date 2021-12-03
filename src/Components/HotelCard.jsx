import React from 'react'
import { useDispatch } from 'react-redux'
import { likeHotelAction, dislikeHotelAction } from '../store/bookingReducer'
import { addHotelAction, removeHotelAction, addIdAction, removeIdAction } from '../store/favoriteReducer'


const HotelCard = ({ hotel }) => {
  const { hotelId, hotelName, isFavorite, stars, priceFrom, residenceTime, checkIn } = { ...hotel }
  const dispatch = useDispatch()


  return (
    < div className="card" >
      <div className="card__header">
        <p>{hotelName}</p>
        {isFavorite
          ? <i className="bi bi-heart-fill favorite" onClick={() => {
            dispatch(removeHotelAction(hotel))
            dispatch(dislikeHotelAction(hotelId))
            dispatch(removeIdAction(hotelId))
          }}></i>
          : <i className="bi bi-heart-fill common" onClick={() => {
            dispatch(addHotelAction({ ...hotel, isFavorite: true }))
            dispatch(likeHotelAction(hotelId))
            dispatch(addIdAction(hotelId))
          }}></i>}
      </div>
      <div className="card__body">
        <div className="date">{checkIn}</div>
        <div className="divider"> - </div>
        <div className="days">{residenceTime} {residenceTime % 10 === 1 && residenceTime % 100 !== 11 ? 'день' : residenceTime % 10 >= 2 && residenceTime % 10 <= 4 && (residenceTime % 100 < 10 || residenceTime % 100 >= 20) ? 'дня' : 'дней'}</div>
      </div>
      <div className="card__footer">
        <div className="rating">
          <i className="bi bi-star-fill" style={{ color: `${stars > 0 ? '#CDBC1E' : '#6C6845'}` }}></i>
          <i className="bi bi-star-fill" style={{ color: `${stars > 1 ? '#CDBC1E' : '#6C6845'}` }}></i>
          <i className="bi bi-star-fill" style={{ color: `${stars > 2 ? '#CDBC1E' : '#6C6845'}` }}></i>
          <i className="bi bi-star-fill" style={{ color: `${stars > 3 ? '#CDBC1E' : '#6C6845'}` }}></i>
          <i className="bi bi-star-fill" style={{ color: `${stars > 4 ? '#CDBC1E' : '#6C6845'}` }}></i>
        </div>
        <div className="card__price">
          <p>Price:</p>
          <p>{priceFrom} Р</p>
        </div>
      </div>
    </div >
  )
}

export default HotelCard
