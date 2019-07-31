//initial State
const initialState = {
    favShow: ''
}
//constants
const UPDATE_FAV_SHOW = 'UPDATE_FAV_SHOW';

//action creators
export function updateFavShow(show) {
    return {
        type: UPDATE_FAV_SHOW,
        payload: show
    }
}

//reducer
export default function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_FAV_SHOW:
            console.log({
                ...state,
                favShow: action.payload
            })
            return {
                ...state,
                favShow: action.payload
            }
        default: return state;
    }
}