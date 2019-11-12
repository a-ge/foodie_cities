import { 
  GET_DB_RESTAURANTS,
  SET_LOADING,
  DB_RESTAURANTS_ERROR} from '../actions/types';

const initialState = {
  db_restaurants_city1:[{01: {yelp_id: "lJAGnYzku5zSaLnQ_T6_GQ", name: "Tartine", img: "tart_img", yelp: "tart_yelp", isTop: true}},
                        {02: {yelp_id: "lJAGnYzku5zSaLrm_T6_GQ", name: "Lala", img: "lala_img", yelp: "lala_yelp", isTop: true}}],
  db_restaurants_city2:[{03: {yelp_id: "lJAGnYzku5zSaLwe_T6_GQ", name: "Donuts", img: "donuts_img", yelp: "donuts_yelp", isTop: true}},
                        {04: {yelp_id: "lJAGnYzku5zSaLff_T6_GQ", name: "Chicken", img: "chicken_img", yelp: "chicken_yelp", isTop: true}}],
  db_restaurants_city3:[{05: {yelp_id: "lJAGnYzku5zSaLid_T6_GQ", name: "Pizza", img: "pizza_img", yelp: "pizza_yelp", isTop: true}},
                        {06: {yelp_id: "lJAGnYzku5zSaLsx_T6_GQ", name: "Burgers", img: "burgers_img", yelp: "burgers_yelp", isTop: true}}],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_DB_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case DB_RESTAURANTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
