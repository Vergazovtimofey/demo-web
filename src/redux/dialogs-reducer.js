const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
    dialogs: [
        {id: 1, name: 'Tim'},
        {id: 2, name: 'Yuliya'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'YES'}
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageText
            return {...state,
                messages: [...state.messages, {
                    id: 7,
                    message: text}]
            };

        default:
            return state;
    }
}

export const messageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText} )

export default dialogsReducer