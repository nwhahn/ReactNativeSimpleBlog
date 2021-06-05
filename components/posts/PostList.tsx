import React from 'react';
import styled from 'styled-components/native';
import Post, { PostProps } from './Post';
import { FlatList} from 'react-native';


const PostList: React.FC<{}> = ({}) => {
    const data: PostProps[] = [{
        id: 1,
        title: "How are you doing today?",
        content: "Today is a Wednesday, and it's starting to rain outside."
    }, {
        id: 2,
        title: "Tuesday's Post",
        content: "Today is Tuesday."
    }, {
        id: 3,
        title: "This post is going to have a longer title. I hope it still looks good!",
        content: "Does it?"
    },
    {
        id: 4,
        title: "What even is Unmasked?",
        content: "This post is going to have a longer body. Hmm, I wonder if it will wrap well within the Text display?"
    }, {
        id: 5,
        title: "Yet another post",
        content: "I'm running out of things to say"
    }, {
        id: 6,
        title: "Ok this is the last one",
        content: "Nice job reading the posts in from this json file."
    }];
    

    return <FlatList<PostProps>
        style={{
            borderStyle: 'solid',
            backgroundColor: '#b0b0b0',
            borderColor: 'blue',
            borderWidth: 2,
            borderRadius: 6,
            paddingTop: 16
        }}
        data={data}
        keyExtractor={(item, index) => (item.id || index).toString()}
        renderItem={({ item }) => <Post {...item} />}
    />
}

export default PostList;