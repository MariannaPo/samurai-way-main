
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'
export type StatePropsType = {
    store: {
        _state: {
            dialogsState: {
                dialogs:
                    Array<{ id: number, name: string }>
                messages:
                    Array<{ id: number, message: any }>
                newMessageBody:
                    Array<{new: string}>
            },
            postsState: {
                posts:
                    Array<{ id: number, message: string, likesCount: number }>,
                newPostText: string,
            },
        },
        _callSubscriber: (state: StatePropsType["store"]['_state']) => void;
        // addPost: (postMessage: string | number) => void;
        // updateNewPostText: (newText: string | number) => void;
        getState: () => StatePropsType['store']['_state'];
        subscribe: (observer: any) => void;
        dispatch: (action: any) => void;
    }
}
let store: StatePropsType['store'] = {
    _state: {
        dialogsState: {

            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: `How is your it-kamasutra?`},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Buy"},
                {id: 6, message: "What?"},
            ],
            newMessageBody: [
                {new: " "},
            ],

        },
        postsState: {
            posts: [
                {id: 1, message: 'im good', likesCount: 0},
                {id: 2, message: `Im sad`, likesCount: 23},
                {id: 3, message: 'Hi, how are u?', likesCount: 78},
                {id: 4, message: `It's my first post`, likesCount: 6},
            ],
            newPostText: '',
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch: function (action: any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.postsState.newPostText,
                likesCount: 0
            };
            this._state.postsState.posts.push(newPost);
            this._state.postsState.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.postsState.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsState.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsState.newMessageBody;
            // @ts-ignore
            this._state.dialogsState.newMessageBody = '';
            this._state.dialogsState.messages.push({id: 6, message: body});
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default store;
