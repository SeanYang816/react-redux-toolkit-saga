import users from "./users"

const initialState = {
    thisIsnoLongerWorking: 'I dont work',
    users: [123],
    isLoading: false,
    hasError: false,
    pageNumber: 0,
}

const randomUser = (state = initialState, action) => {
    switch ( action.type ) {
        case "GET_RANDOMUSER_REQUESTED":
            return {
                ...state,
                isLoading: true,
                hasError: false,
            }
        case "GET_RANDOMUSER_SUCCEEDED":
            return {
                ...state,
                users: [...state.users, action.payload],
                pageNumber: state.pageNumber + 1,
                isLoading: false,
                hasError: false,
            }
        case "GET_RANDOMUSER_FAILED":
            return {
                ...state,
                isLoading: false,
                hasError: true,
            }
        case "REMOVE_RANDOMUSER": 
            const indexToRemove = state.users.findIndex( e => e.id.value === action.payload)
            const tempArr = [...state.users]
            tempArr.splice(indexToRemove, 1)
     
            return {
                ...state,
                users: [...tempArr],
                isLoading: false,
                hasError: false, 
            }
        default:
            return state;
    }
}

export default randomUser