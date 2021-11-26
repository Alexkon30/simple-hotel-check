import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeHotelAction, dislikeHotelAction } from '../store/bookingReducer'
import { addHotelAction, removeHotelAction, addIdAction, removeIdAction } from '../store/favoriteReducer'


const HotelCard = ({ hotel }) => {
  const { hotelId, hotelName, isFavorite, stars, priceFrom } = { ...hotel }
  const dispatch = useDispatch()
  const currentDays = useSelector(state => state.bookingState.currentDays)
  const currentDate = useSelector(state => state.bookingState.currentDate)


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
        <div className="date">{currentDate}</div>
        <div className="divider"> - </div>
        <div className="days">{currentDays} день</div>
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
