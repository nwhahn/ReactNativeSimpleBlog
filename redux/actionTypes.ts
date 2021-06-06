interface ActionType {
  [name: string]: string;
}

interface ActionTypes {
  [name: string]: ActionType;
}

const ActionTypes = {
  post: {
    startCreate: 'INITIATE_CREATE_POST',
    startEdit: 'INITIATE_EDIT_POST',
    create: 'CREATE_POST',
    edit: 'EDIT_POST',
    delete: 'DELETE_POST',
    deleteAll: 'DELETE_ALL_POSTS',
    cancel: 'CANCEL',
  },
};

export default ActionTypes;
