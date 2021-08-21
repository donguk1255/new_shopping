import {
    USER_LIST_FAIL,
    USER_LIST_SUCCESS,
    USER_LIST_REQUEST
} from "../contants/UserListConstants"

export const userListReducers = (
    state = [],
    action
) => {
    switch (action.type) {
        case USER_LIST_REQUEST :
            return {
                loading: true
            }

        case USER_LIST_SUCCESS :
            return {
                loading: false,
                users: action.payload
            }

        case USER_LIST_FAIL :
            return {
                loading: false,
                error: action.payload
            }

        default :
            return state
    }
}