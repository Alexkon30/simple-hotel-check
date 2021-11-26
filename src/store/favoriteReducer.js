export const ADD_HOTEL = 'ADD_HOTEL'
export const REMOVE_HOTEL = 'REMOVE_HOTEL'
export const ADD_ID = 'ADD_ID'
export const REMOVE_ID = 'REMOVE_ID'


const defaultState = {
  favoriteHotels: [],
  favoriteIds: []
}

export const favoriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_HOTEL:
      return { ...state, favoriteHotels: [...state.favoriteHotels, action.payload] }

    case REMOVE_HOTEL:
      return { ...state, favoriteHotels: state.favoriteHotels.filter(hotel => hotel.hotelId !== action.payload.hotelId) }

    case ADD_ID:
      return { ...state, favoriteIds: [...state.favoriteIds, action.payload] }

    case REMOVE_ID:
      return { ...state, favoriteIds: state.favoriteIds.filter(id => id !== action.payload) }

    default:
      return state
  }
}

export const addHotelAction = (payload) => ({ type: ADD_HOTEL, payload })
export const removeHotelAction = (payload) => ({ type: REMOVE_HOTEL, payload })
export const addIdAction = (payload) => ({ type: ADD_ID, payload })
export const removeIdAction = (payload) => ({ type: REMOVE_ID, payload })



