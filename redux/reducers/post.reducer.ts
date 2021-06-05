import ActionTypes from '../actionTypes';
import defaultPosts  from '../../initialContent';
import { statement } from '@babel/template';



export interface Post {
    
    id: number,

    title?: string,
    
    content?: string,
}

interface State {
    posts: Post[],
    target?: Post,
    editMode: boolean,
    createMode: boolean,
}

type Action = {
    type: string,
    payload?: any,

};



const initialState: State = {
    posts: defaultPosts,
    editMode: false,
    createMode: false,
}

export default function reducePosts(state = initialState , action: Action){
    if(!action.type) return state;
    const data = action.payload;
    switch(action.type){
        case ActionTypes.post.cancel: 
            return {
                ...state,
                target: undefined,
                editMode: false,
                createMode: false,
            }
        case ActionTypes.post.startCreate: 
            return {
                ...state,
                editMode: false,
                createMode: true,
                target: data
            }
        case ActionTypes.post.startEdit:
            return {
                ...state,
                editMode: true,
                createMode: false,
                target: data,
            }
        case ActionTypes.post.create:
            return {
                ...state,
                editMode: false,
                createMode: false,
                posts: [
                    { 
                        id: Date.now(), // TODO better random number lol
                        content: data?.content,
                        title: data?.title,
                    },
                    ...state.posts
                ]
            }
        case ActionTypes.post.delete:
            return {
                ...state,
                posts: state.posts.filter(({id}) => data?.id !== id) // Remove the matching id
            }
        case ActionTypes.post.deleteAll:
            return {
                ...state,
                posts: [],
            }
        case ActionTypes.post.edit:
            return {
                ...state,
                editMode: false,
                createMode: false,
                posts: state.posts.map(post => post.id === data.id ? {
                    ...data
                }: post )
            }
        default: 
         return state;
    }
}