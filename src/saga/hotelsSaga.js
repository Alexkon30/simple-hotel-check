import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_HOTELS, setHotelsAction } from '../store/bookingReducer'


const fetchHotels = ({ payload }) => {
  const { checkIn, days, sityName } = { ...payload }

  console.log('9: ', checkIn, days, sityName)

  let checkInDate = new Date(Date.parse(checkIn))
  let checkOutDate = new Date(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate() + Number(days))

  let year = checkOutDate.getFullYear();
  let month = `${checkOutDate.getMonth() + 1}`.length === 2 ? checkOutDate.getMonth() + 1 : `0${checkOutDate.getMonth() + 1}`
  let day = `${checkOutDate.getDate()}`.length === 2 ? checkOutDate.getDate() : `0${checkOutDate.getDate()}`
  let checkOut = `${year}-${month}-${day}`

  console.log('18: ', checkIn, checkOut)
  return fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${sityName}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
}

// const fetchSityInfo = ({ payload }) => {
//   const { sityName } = { ...payload }

//   return fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${sityName}&lang=ru&lookFor=both&limit=1`)
// }


function* fetchHotelsWorker(data) {
  // const sityInfo = yield call(fetchSityInfo, data)
  const hotels = yield call(fetchHotels, data)
  // yield console.log(hotels)

  // console.log(hotels)
  const json = yield call(() => new Promise(res => res(hotels.json())))
  // yield console.log(json)
  yield put(setHotelsAction(json))
}

export function* fetchHotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker)
}
