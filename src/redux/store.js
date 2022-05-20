import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'hi', likesCount: 21},
                {id: 2, post: 'how are you', likesCount: 5},
                {id: 3, post: 'yo', likesCount: 1},
                {id: 4, post: 'yes', likesCount: 7},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newMessageText: ''
        },
    },

    _callSubscriber() {
        console.log('state was changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель
    },


    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)


    }
}
export default store




