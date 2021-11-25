let now = new Date();
let year = now.getFullYear();
let month = `${now.getMonth() + 1}`.length === 2 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
let day = `${now.getDate()}`.length === 2 ? now.getDate() : `0${now.getDate()}`

const defaultState = {
  sityName: 'Москва',
  checkIn: `${year}-${month}-${day}`,
  days: 1,
  hotels: [],
  filterFor: 'rating'
}

export const SET_NAME = 'SET_NAME'
export const SET_CHECKIN = 'SET_CHECKIN'
export const SET_DAYS = 'SET_DAYS'
export const SET_HOTELS = 'SET_HOTELS'
export const SET_FILTER = 'SET_FILTER'

export const FETCH_HOTELS = 'FETCH_HOTELS'




export const bookingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, sityName: action.payload }

    case SET_CHECKIN:
      return { ...state, checkIn: action.payload }

    case SET_DAYS:
      return { ...state, days: action.payload }

    case SET_HOTELS:
      return { ...state, hotels: action.payload }

    case SET_FILTER:
      return { ...state, filterFor: action.payload }

    default:
      return state
  }
}

export const setSityNameAction = (payload) => ({ type: SET_NAME, payload })
export const setCheckInAction = (payload) => ({ type: SET_CHECKIN, payload })
export const setDaysAction = (payload) => ({ type: SET_DAYS, payload })
export const setHotelsAction = (payload) => ({ type: SET_HOTELS, payload })
export const setFilterAction = (payload) => ({ type: SET_FILTER, payload })

export const fetchHotelsAction = (payload) => ({ type: FETCH_HOTELS, payload })


