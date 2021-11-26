let now = new Date();
let year = now.getFullYear();
let month = `${now.getMonth() + 1}`.length === 2 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
let day = `${now.getDate()}`.length === 2 ? now.getDate() : `0${now.getDate()}`

const defaultState = {
  sityName: 'Москва',
  checkIn: `${year}-${month}-${day}`,
  days: '1',
  hotels: [],
  sortedFor: 'rating',

  currentSity: '',
  currentDate: '',
  currentDays: ''

}

export const SET_NAME = 'SET_NAME'
export const SET_CHECKIN = 'SET_CHECKIN'
export const SET_DAYS = 'SET_DAYS'
export const SET_HOTELS = 'SET_HOTELS'
export const SET_SORT = 'SET_SORT'

export const FETCH_HOTELS = 'FETCH_HOTELS'

export const LIKE_HOTEL = 'LIKE_HOTEL'
export const DISLIKE_HOTEL = 'DISLIKE_HOTEL'
export const SET_CURRENT = 'SET_CURRENT'




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

    case SET_SORT:
      return { ...state, sortedFor: action.payload }

    case LIKE_HOTEL:
      return { ...state, hotels: state.hotels.map(hotel => hotel.hotelId === action.payload ? { ...hotel, isFavorite: true } : hotel) }

    case DISLIKE_HOTEL:
      return { ...state, hotels: state.hotels.map(hotel => hotel.hotelId === action.payload ? { ...hotel, isFavorite: false } : hotel) }

    case SET_CURRENT:
      let months = ['января', 'февраля', 'марта',
        'апреля', 'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря']
      let date = state.checkIn.split('-').reverse()
      return { ...state, currentSity: action.payload, currentDate: `${date[0]} ${months[+date[1] - 1]} ${date[2]}`, currentDays: state.days }

    default:
      return state
  }
}

export const setSityNameAction = (payload) => ({ type: SET_NAME, payload })
export const setCheckInAction = (payload) => ({ type: SET_CHECKIN, payload })
export const setDaysAction = (payload) => ({ type: SET_DAYS, payload })
export const setHotelsAction = (payload) => ({ type: SET_HOTELS, payload })
export const setSortAction = (payload) => ({ type: SET_SORT, payload })
export const likeHotelAction = (payload) => ({ type: LIKE_HOTEL, payload })
export const dislikeHotelAction = (payload) => ({ type: DISLIKE_HOTEL, payload })

export const fetchHotelsAction = (payload) => ({ type: FETCH_HOTELS, payload })
export const setCurrentAction = (payload) => ({ type: SET_CURRENT, payload })
