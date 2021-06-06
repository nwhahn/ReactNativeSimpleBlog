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
      // Clear all edit states and revert to previous state
      return {
        ...state,
        target: undefined,
        editMode: false,
        createMode: false,
      };
    case ActionTypes.post.startCreate:
      return {
        ...state,
        // Turn on create mode and make sure editing doesnt occur at same time
        editMode: false,
        createMode: true,
        target: data,
      };
    case ActionTypes.post.startEdit:
      return {
        ...state,
        // Enter Edit mode
        editMode: true,
        createMode: false,
        // Set post in the payload to the current target
        // This will allow the app to know what to edit
        target: data,
      };
    case ActionTypes.post.create:
      return {
        ...state,
        // Make sure we turn off edit + create mode once a succcessful create is fired
        editMode: false,
        createMode: false,
        // Create a new post with params and add a unique id to it
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
        posts: [], // Clear all the posts
      };
    case ActionTypes.post.edit:
      return {
        ...state,
        // Edit mode should be cancelled and the target cleared when a edit is fired
        editMode: false,
        createMode: false,
        target: undefined,
        // Find updated post, edit it and return new array in state
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
