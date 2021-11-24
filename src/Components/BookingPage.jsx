import React from 'react'
import logout from '../img/logout.png'
import vector from '../img/Vector.png'
import rec1 from '../img/Rectangle1.png'
import rec2 from '../img/Rectangle2.png'
import rec3 from '../img/Rectangle3.png'
import HotelCard from './HotelCard'
import InfoCard from './InfoCard'


const BookingPage = () => {
  return (
    <div className="container">
      <div className="booking">
        <div className="booking__header">
          <p>Simple Hotel Check</p>
          <p>Выйти <img src={logout} alt="logout" /></p>
        </div>

        <div className="booking__body">
          <div className="aside">

            <div className="aside__selection form">
              <div className="form__body">
                <p className='form__field'>Локация</p>
                <input type="text" />
                <p className='form__field'>Дата заселения</p>
                <input type="date" />
                <p className='form__field'>Количество дней</p>
                <input type="text" />
              </div>
              <div className="form__footer">
                <input type="button" value="Войти" />
              </div>
            </div>

            <div className="aside__favorites panel">
              <div className="panel__header">
                <p>Избранное</p>
              </div>

              <div className="panel__selections">
                <div className={'selector selector-active'}>
                  <p>Рейтинг</p>
                  <div className="selector__arrows">
                    <i className="bi bi-caret-up-fill"></i>
                    <i className="bi bi-caret-down"></i>
                  </div>
                </div>
                <div className={'selector'}>
                  <p>Цена</p>
                  <div className="selector__arrows">
                    <i className="bi bi-caret-up-fill"></i>
                    <i className="bi bi-caret-down"></i>
                  </div>
                </div>

              </div>

              <div className="panel__cards">
                <HotelCard />
                <HotelCard />
                <HotelCard />
              </div>
            </div>

          </div>


          <div className="maininfo">

            <div className="maininfo__header">
              <div className="maininfo__location">
                Отели
              </div>
              <div className="maininfo__divider">
                <img src={vector} alt="vector" />
              </div>
              <div className="maininfo__city">
                Москва
              </div>
              <div className="maininfo__date">
                07 июля 2020
              </div>
            </div>

            <div className="maininfo__pages">
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

            <div className="maininfo__count">
              Добавлено в Избранное: <span>3</span> отеля
            </div>

            <div className="maininfo__cards">
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage