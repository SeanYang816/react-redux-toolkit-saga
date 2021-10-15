const initialState = {
    users: [],
    isLoading: false,
    hasError: null,
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_REQUESTED":
            return {
                ...state,
                isLoading: true,
            }
        case "GET_USERS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                users: action.users,
            }
        case "GET_USERS_FAILED":
            return {
                ...state,
                isLoading: false,
                hasError: action.message,
            }
        default:
            return state;
    }
}

export default users;