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

 const AppWrapper = styled.View`
	background-color: #76c3d6b3;
 	padding: 32px 48px;
	height: 100%;
 `;

const Header: React.FC<{}> = ({}) => {
  return <View>
		<Button onPress={() => {}}>
			Create Post
		</Button>
	</View>
 };

 const Footer: React.FC<{}>=({}) => {
  return <View>
		<Button onPress={() => {}}>
			Delete all posts
		</Button>
	</View>
 };

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaView style={{backgroundColor: '#76c3d6'}}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={'#76c3d6'}/>
			<AppWrapper>
				<Heading>Demo</Heading>
				<Header/>
				<PostList />
				<Footer/>
      </AppWrapper>
    </SafeAreaView>
  );
};

export default App;
