
import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../buttons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ActionTypes from '../../redux/actionTypes';
import { RootState } from '../../redux/store';


const EditWrapper = styled.View`
  align-items: center;
`;

const Header: React.FC<{}> = ({ }) => {
	const dispatch = useAppDispatch();
	const { editMode, createMode, target } = useAppSelector(({ post }: RootState) => ({
		editMode: post.editMode,
		createMode: post.createMode,
		target: post.target,
	}));

	if (editMode || createMode) {
		return <EditWrapper>
			<Button onPress={() => dispatch({ type: ActionTypes.post.cancel })}>
				Cancel
			</Button>
		</EditWrapper>
	}
	return <Button onPress={() => dispatch({ type: ActionTypes.post.startCreate })}>
		Create Post
		</Button>
};


export default Header;