import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_HOTELS, setHotelsAction, setCurrentAction } from '../store/bookingReducer'


const fetchHotels = ({ payload }) => {
  const { checkIn, days, sityName } = { ...payload }

  let checkInDate = new Date(Date.parse(checkIn))
  let checkOutDate = new Date(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate() + Number(days))

  let year = checkOutDate.getFullYear();
  let month = `${checkOutDate.getMonth() + 1}`.length === 2 ? checkOutDate.getMonth() + 1 : `0${checkOutDate.getMonth() + 1}`
  let day = `${checkOutDate.getDate()}`.length === 2 ? checkOutDate.getDate() : `0${checkOutDate.getDate()}`
  let checkOut = `${year}-${month}-${day}`

  return fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${sityName}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
}

// const fetchSityInfo = ({ payload }) => {
//   const { sityName } = { ...payload }

//   return fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${sityName}&lang=ru&lookFor=both&limit=1`)
// }


function* fetchHotelsWorker(data) {
  // const sityInfo = yield call(fetchSityInfo, data)

  const hotels = yield call(fetchHotels, data)
  const json = yield call(() => new Promise(res => res(hotels.json()))
    .then(hotels => hotels.map(hotel => ({ ...hotel, isFavorite: data.payload.favoriteIds.includes(hotel.hotelId) ? true : false }))))

  yield put(setCurrentAction(json[0]?.location.name))
  yield put(setHotelsAction(json))
}

export function* fetchHotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker)
}
