import {LOGIN, LOGOUT, REGISTER} from '../constants'

const initialState = {
    isLogin: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {isLogin: !state.isLogin}
        case LOGOUT:
            return {isLogin: !state.isLogin}
        default:
            return state
    }
}

