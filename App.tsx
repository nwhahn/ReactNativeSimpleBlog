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
} from 'react-native';

import styled from 'styled-components/native';
import { PostList } from './components/posts';
import { Heading } from './components/typography';
import { Header, Footer } from './components/page';
import { store } from './redux/store';


const AppWrapper = styled.View`
	background-color: #76c3d6b3;
 	padding: 32px 48px;
	height: 100%;
`;


const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<Provider store={store}>
			<SafeAreaView style={{ backgroundColor: '#76c3d6' }}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={'#76c3d6'} />
				<AppWrapper>
					<Heading>Demo</Heading>
					<Header />
					<PostList />
					<Footer />
				</AppWrapper>
			</SafeAreaView>
		</Provider>
	);
};

export default App;
