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
	 FlatList,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

import styled from 'styled-components/native';
import { Button } from './components/buttons';
import { PostList } from './components/posts';
 import {
   Colors,
   DebugInstructions,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 const AppWrapper = styled.View`
	background-color: #76c3d6b3;
 	padding: 32px 48px;
	height: 100%;
 `;

 const ContentWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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


const Heading = styled.Text`
	text-align: center;
	color: black;
	font-size: 36px;
	font-weight: bold;
`;

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

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
