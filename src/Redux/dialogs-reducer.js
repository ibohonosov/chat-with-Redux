const SET_MESSAGE = 'SET_MESSAGE';

let initialState = {
    messages: ['Just to order', 'Okay, for what level of spiciness']
}

let dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MESSAGE: {
            return {
                ...state,
                messages: action.messages
            }
        }
        default:
            return state;
    }
}

export const setMessage = (messages) => ({type: SET_MESSAGE, messages})

export default dialogsReducer;