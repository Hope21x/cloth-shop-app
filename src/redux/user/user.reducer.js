const INITIAL_STATE = {
    currentUser: null 
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload


            }
        default:
            return state;

    }
}



//ACTION TYPES
const userActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

//ACTIONS
export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user 
})

export default userReducer;
