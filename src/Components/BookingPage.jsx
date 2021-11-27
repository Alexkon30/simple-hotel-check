import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHotelsAction, setSityNameAction, setDaysAction, setCheckInAction, setSortAction } from '../store/bookingReducer'
import { setAuthAction } from '../store/loginReducer'

import logout from '../img/logout.png'
import vector from '../img/Vector.png'
import rec1 from '../img/Rectangle1.png'
import rec2 from '../img/Rectangle2.png'
import rec3 from '../img/Rectangle3.png'
import HotelCard from './HotelCard'
import InfoCard from './InfoCard'


const BookingPage = () => {
  const dispatch = useDispatch()
  const sityName = useSelector(state => state.bookingState.sityName)
  const checkIn = useSelector(state => state.bookingState.checkIn)
  const days = useSelector(state => state.bookingState.days)
  const hotels = useSelector(state => state.bookingState.hotels)
  const favoriteHotels = useSelector(state => state.favoriteState.favoriteHotels)
  const favoriteIds = useSelector(state => state.favoriteState.favoriteIds)

  const currentSity = useSelector(state => state.bookingState.currentSity)
  const currentDate = useSelector(state => state.bookingState.currentDate)
  const sortedFor = useSelector(state => state.bookingState.sortedFor)

  const [transform, setTransform] = useState(0)


  useEffect(() => {
    dispatch(fetchHotelsAction({ sityName, checkIn, days, favoriteIds }))
    // eslint-disable-next-line
  }, [])

  const handleLeft = (num) => {
    setTransform(transform => {
      if (transform + num > 0) return 0
      return transform + num
    })
  }

  const handleRight = (num) => {
    setTransform(transform => {
      if (transform - num < -520) return -520
      return transform - num
    })
  }


  return (
    <div className="container">
      <div className="booking">
        <div className="booking__header">
          <p>Simple Hotel Check</p>
          <p onClick={() => dispatch(setAuthAction(false))}>Выйти <img src={logout} alt="logout" /></p>
        </div>

        <div className="booking__body">
          <div className="aside">

            <div className="aside__selection form">
              <div className="form__body">
                <p className='form__field'>Локация</p>
                <input type="text" value={sityName} onChange={(e) => dispatch(setSityNameAction(e.target.value))} />
                <p className='form__field'>Дата заселения</p>
                <input type="date" value={checkIn} onChange={(e) => dispatch(setCheckInAction(e.target.value))} />
                <p className='form__field'>Количество дней</p>
                <input type="text" value={days} onChange={(e) => dispatch(setDaysAction(e.target.value))} />
              </div>
              <div className="form__footer">
                <input type="button" value="Найти" onClick={() => dispatch(fetchHotelsAction({ sityName, checkIn, days, favoriteIds }))} />
              </div>
            </div>

            <div className="aside__favorites panel">
              <div className="panel__header">
                <p>Избранное</p>
              </div>

              <div className="panel__selections">
                <div
                  className={`selector ${sortedFor === 'rating' ? 'selector-active' : ''}`}
                  onClick={() => dispatch(setSortAction('rating'))}
                >
                  <p>Рейтинг</p>
                  <div className="selector__arrows">
                    <i className="bi bi-caret-up-fill"></i>
                    <i className="bi bi-caret-down"></i>
                  </div>
                </div>
                <div
                  className={`selector ${sortedFor === 'price' ? 'selector-active' : ''}`}
                  onClick={() => dispatch(setSortAction('price'))}
                >
                  <p>Цена</p>
                  <div className="selector__arrows">
                    <i className="bi bi-caret-up-fill"></i>
                    <i className="bi bi-caret-down"></i>
                  </div>
                </div>
              </div>

              <div className="panel__cards">
                {sortedFor === 'rating'
                  ? <>
                    {[...favoriteHotels]
                      .sort((a, b) => b.stars - a.stars)
                      .map(hotel => <HotelCard hotel={hotel} key={hotel.hotelId} />)}
                  </>
                  : <>
                    {[...favoriteHotels]
                      .sort((a, b) => b.priceFrom - a.priceFrom)
                      .map(hotel => <HotelCard hotel={hotel} key={hotel.hotelId} />)}
                  </>}
              </div>
            </div>

          </div>


          <div className="maininfo">

            <div className="maininfo__header">
              <div className="maininfo__location">
                Отели
              </div>
              {currentSity !== '' && currentDate !== ''
                ?
                <>
                  <div className="maininfo__divider">
                    <img src={vector} alt="vector" />
                  </div>
                  <div className="maininfo__city">
                    {currentSity}
                  </div>
                  <div className="maininfo__date">
                    {currentDate}
                  </div>
                </>
                : <></>}

            </div>

            <div className="maininfo__pages">
              <div className="arrow" onClick={() => handleLeft(100)}><i className="bi bi-caret-left-fill"></i></div>
              <div className="window">
                <div
                  className="carousel"
                  style={{
                    transform: `translateX(${transform}px)`,
                    transition: 'all 0.3s'
                  }}
                >
                  <div className="color">
                    <img src={rec1} alt="rec1" />
                  </div>
                  <div className="color">
                    <img src={rec2} alt="rec1" />
                  </div>
                  <div className="color">
                    <img src={rec3} alt="rec1" />
                  </div>
                  <div className="color">
                    <img src={rec1} alt="rec1" />
                  </div>
                  <div className="color">
                    <img src={rec2} alt="rec1" />
                  </div>
                  <div className="color">
                    <img src={rec3} alt="rec1" />
                  </div>
                </div>
              </div>
              <div className="arrow" onClick={() => handleRight(100)}><i className="bi bi-caret-right-fill"></i></div>
            </div>

            <div className="maininfo__count">
              Добавлено в Избранное: <span>{favoriteHotels.length}</span> отеля
            </div>

            <div className="maininfo__cards">

              {hotels.map(hotel => <InfoCard hotel={hotel} key={hotel.hotelId} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage
