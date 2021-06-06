import React from 'react';
import styled from 'styled-components/native';
import {Body} from '../typography';
import {ClickableIcon} from '../icons';
import ActionTypes from '../../redux/actionTypes';
import {useAppDispatch} from '../../redux/hooks';

export interface PostProps {
  id: string;
  title?: string;
  content?: string;
  isSelected?: boolean;
}

const Wrapper = styled.View<Pick<PostProps, 'isSelected'>>`
  border: 2px solid blue;
  border-radius: 6px;
  background-color: ${({isSelected}) => (isSelected ? '#76c3d6b3' : 'white')};
  margin: 0 16px 24px;
  flex-direction: row;
  padding: 8px;
`;

const Title = styled(Body)`
  text-align: center;
  margin-bottom: 4px;
`;

const TextWrapper = styled.View`
  flex: 5;
`;

const ActionWrapper = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
`;

const Post: React.FC<PostProps> = (post: PostProps) => {
  const {title, content, isSelected} = post;
  const dispatch = useAppDispatch();
  const deleteItem = () => {
    dispatch({type: ActionTypes.post.delete, payload: post});
  };

  const triggerEdit = () => {
    dispatch({type: ActionTypes.post.startEdit, payload: post});
  };

  return (
    <Wrapper isSelected={isSelected}>
      <TextWrapper>
        {title && (
          <Title large bold numberOfLines={1}>
            {title}
          </Title>
        )}
        {content && <Body numberOfLines={2}>{content}</Body>}
      </TextWrapper>
      <ActionWrapper>
        <ClickableIcon name={'create-outline'} onPress={triggerEdit} />
        <ClickableIcon name={'trash-outline'} onPress={deleteItem} />
      </ActionWrapper>
    </Wrapper>
  );
};

export default Post;
