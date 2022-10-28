import {rerenderEntireTree} from "../render";

export type StatePropsType = {
    state: {
        dialogsState: {
            dialogs:
                Array<{ id: number, name: string }>
            messages:
                Array<{ id: number, message: string }>
        },
        postsState: {
            posts:
                Array<{ id: number, message: string, likesCount: number }>
        },
    },
    addPost: (postMessage: string | number) => void;
}
let state = {
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
        ]
    },
    postsState: {
        posts: [
            {id: 1, message: 'im good', likesCount: 0},
            {id: 2, message: `Im sad`, likesCount: 23},
            {id: 3, message: 'Hi, how are u?', likesCount: 78},
            {id: 4, message: `It's my first post`, likesCount: 6},
        ]
    },
}


export let addPost = (postMessage: any) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.postsState.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;