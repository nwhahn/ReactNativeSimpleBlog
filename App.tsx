/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { Provider } from 'react-redux';
 import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
   View,
 } from 'react-native';

import styled from 'styled-components/native';
import { Button } from './components/buttons';
import { PostList } from './components/posts';
import { Heading } from './components/typography';
import { RootState, store } from './redux/store';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import ActionTypes from './redux/actionTypes';

 const AppWrapper = styled.View`
	background-color: #76c3d6b3;
 	padding: 32px 48px;
	height: 100%;
 `;

 const EditWrapper = styled.View`
	align-items: center;
 
 `;
 const CancelWrapper = styled.View``;

const Header: React.FC<{}> = ({}) => {
	const dispatch = useAppDispatch();    
	const {editMode, createMode, target } = useAppSelector(({post}: RootState) => ({
		editMode: post.editMode,
		createMode: post.createMode,
		target: post.target,
	}));

	if(editMode){	
		return <EditWrapper>
				<Button onPress={() => dispatch({type: ActionTypes.post.cancel})}>
					Cancel
				</Button>
		</EditWrapper>

	} else if (createMode) {
		return  <EditWrapper>
			<Button onPress={() => dispatch({type: ActionTypes.post.cancel})}>
				Cancel
			</Button>
			</EditWrapper>
	} 
  return <Button onPress={() => dispatch({type: ActionTypes.post.startCreate})}>
			Create Post
		</Button>
 };

 const Footer: React.FC<{}>=({}) => {
	const dispatch = useAppDispatch();    

  return <Button onPress={() => dispatch({type: ActionTypes.post.deleteAll})}>
			Delete all posts
		</Button>
 };

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

	return (
		<Provider store={store}>
			<SafeAreaView style={{backgroundColor: '#76c3d6'}}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={'#76c3d6'}/>
				<AppWrapper>
					<Heading>Demo</Heading>
					<Header/>
					<PostList />
					<Footer/>
				</AppWrapper>
			</SafeAreaView>
		</Provider>
  );
};

export default App;
