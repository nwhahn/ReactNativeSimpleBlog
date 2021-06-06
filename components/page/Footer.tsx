import React from 'react';
import {Button} from '../buttons';
import {useAppDispatch} from '../../redux/hooks';
import ActionTypes from '../../redux/actionTypes';

const Footer: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Button onPress={() => dispatch({type: ActionTypes.post.deleteAll})}>
      Delete all posts
    </Button>
  );
};

export default Footer;
