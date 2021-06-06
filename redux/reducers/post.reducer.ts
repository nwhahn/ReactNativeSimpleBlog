import ActionTypes from '../actionTypes';
import defaultPosts from '../../initialContent.json';
import {v4 as uuidv4} from 'uuid';

export interface Post {
  id: string;

  title?: string;

  content?: string;
}

interface State {
  posts: Post[];
  target?: Post;
  editMode: boolean;
  createMode: boolean;
}

type Action = {
  type: string;
  payload?: any;
};

const initialState: State = {
  posts: defaultPosts.map(({title = '', content = ''}) => ({
    title,
    content,
    id: uuidv4(),
  })),
  editMode: false,
  createMode: false,
};

export default function reducePosts(state = initialState, action: Action) {
  if (!action.type) {
    return state;
  }
  const data = action.payload;
  switch (action.type) {
    case ActionTypes.post.cancel:
      return {
        ...state,
        target: undefined,
        editMode: false,
        createMode: false,
      };
    case ActionTypes.post.startCreate:
      return {
        ...state,
        editMode: false,
        createMode: true,
        target: data,
      };
    case ActionTypes.post.startEdit:
      return {
        ...state,
        editMode: true,
        createMode: false,
        target: data,
      };
    case ActionTypes.post.create:
      return {
        ...state,
        editMode: false,
        createMode: false,
        posts: [
          {
            id: uuidv4(),
            content: data?.content,
            title: data?.title,
          },
          ...state.posts,
        ],
      };
    case ActionTypes.post.delete:
      return {
        ...state,
        posts: state.posts.filter(({id}) => data?.id !== id), // Remove the matching id
        ...(state?.target?.id === data?.id
          ? {
              // If the current post is being edited , cancel out of edit mode
              editMode: false,
              target: undefined,
            }
          : null),
      };
    case ActionTypes.post.deleteAll:
      return {
        ...state,
        posts: [],
      };
    case ActionTypes.post.edit:
      return {
        ...state,
        editMode: false,
        createMode: false,
        posts: state.posts.map(post =>
          post.id === data.id
            ? {
                ...data,
              }
            : post,
        ),
      };
    default:
      return state;
  }
}
