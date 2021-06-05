
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Button } from '../buttons';
import {TextInput} from '../inputs';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ActionTypes from '../../redux/actionTypes';
import { RootState } from '../../redux/store';


const Wrapper = styled.View`
	
`;

const EditWrapper = styled.View`
	margin-top: 16px;
	margin-bottom: 8px;
	border: 2px solid blue;
	background-color: #ffffff;
	border-radius: 6px;
`;


const Header: React.FC<{}> = ({ }) => {
	const dispatch = useAppDispatch();
	const { editMode, createMode, target } = useAppSelector(({ post }: RootState) => ({
		editMode: post.editMode,
		createMode: post.createMode,
		target: post.target,
	}));

	const [title, setTitle] = useState(target?.title);

	const [content, setContent ] = useState(target?.content)

	useEffect(() => {
		const { title: newTitle, content: newContent } = target || {};
		setTitle(newTitle);
		setContent(newContent);
	}, [target])

	const create = () => {
		dispatch({type: ActionTypes.post.create, payload: { title, content }})
	}

	const update = () => {
		if(target.id){
			dispatch({ type: ActionTypes.post.edit, payload: { title, content, id: target.id} });
		}	
	}

	if (editMode || createMode) {
		return <Wrapper>
			<Button onPress={() => dispatch({ type: ActionTypes.post.cancel })}>
				Cancel
			</Button>
			<EditWrapper>
				<TextInput placeholder='Enter title' value={title} onChange={(text) => setTitle(text)}/>
				<TextInput placeholder='Enter content' value={content} onChange={(text) => setContent(text)}/>
				<Button  onPress={editMode ? update : create} variant="secondary">
					{editMode ? 'Update' : 'Create' }
				</Button>
			</EditWrapper>
		</Wrapper>
	}
	return <Button onPress={() => dispatch({ type: ActionTypes.post.startCreate })}>
		Create Post
		</Button>
};


export default Header;