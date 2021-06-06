import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Button} from '../buttons';
import {TextInput} from '../inputs';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import ActionTypes from '../../redux/actionTypes';
import {RootState} from '../../redux/store';

const Wrapper = styled.View``;

const EditWrapper = styled.View`
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
  border: 2px solid blue;
  background-color: #ffffff;
  border-radius: 6px;
`;

const Header: React.FC<{}> = ({}) => {
  const dispatch = useAppDispatch();
  const {editMode, createMode, target} = useAppSelector(
    ({post}: RootState) => ({
      editMode: post.editMode,
      createMode: post.createMode,
      target: post.target,
    }),
  );

  const [title, setTitle] = useState(target?.title);

  const [content, setContent] = useState(target?.content);

  useEffect(() => {
    // When the target changes in application state, change state of title and content
    // This will allow for us to easily set
    const {title: newTitle, content: newContent} = target || {};
    setTitle(newTitle);
    setContent(newContent);
  }, [target]);

  const create = () => {
    // Create a new post with title and content
    dispatch({type: ActionTypes.post.create, payload: {title, content}});
    setTitle(null);
    setContent(null);
  };

  const update = () => {
    if (target.id) {
      // Send back post with new data
      dispatch({
        type: ActionTypes.post.edit,
        payload: {title, content, id: target.id},
      });
      setTitle(null);
      setContent(null);
    }
  };

  // Dispatching cancel will set both of these modes sto false
  if (editMode || createMode) {

		const missingFields: boolean = !title || !content;
		const isDirty: boolean =  editMode && (target.title !== title || target.content !== content);

    return (
      <Wrapper>
        <Button onPress={() => dispatch({type: ActionTypes.post.cancel})}>
          Cancel
        </Button>
        <EditWrapper>
          <TextInput
            placeholder="Enter title"
            value={title}
            onChange={text => setTitle(text)}
          />
          <TextInput
            placeholder="Enter content"
            value={content}
            onChange={text => setContent(text)}
          />
          <Button
            onPress={editMode ? update : create}
            variant="secondary"
						// In edit mode  we have to check if the fields have changed , otherwise just stop inpiut if you try to add no data
            disabled={editMode ? !isDirty || missingFields : missingFields}>
            {editMode ? 'Update' : 'Create'}
          </Button>
        </EditWrapper>
      </Wrapper>
    );
  }
  return (
    <Button onPress={() => dispatch({type: ActionTypes.post.startCreate})}>
      Create Post
    </Button>
  );
};

export default Header;
