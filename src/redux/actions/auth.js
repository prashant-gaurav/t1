import {LOGIN, REGISTER, LOGOUT} from '../constants';

let nextTodoId = 0;

export const userLogin = content => ({
    type: LOGIN,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const userRegister = id => ({
    type: REGISTER,
    payload: {id}
});

