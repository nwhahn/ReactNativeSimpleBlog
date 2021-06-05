import React from 'react';
import styled from 'styled-components/native';
import Post, { PostProps } from './Post';
import { FlatList} from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import type { RootState } from '../../redux/store';

const PostList: React.FC<{}> = ({}) => {
    const posts = useAppSelector((state: RootState) => state.post.posts);
    

    return <FlatList<PostProps>
        style={{
            borderStyle: 'solid',
            backgroundColor: '#b0b0b0',
            borderColor: 'blue',
            borderWidth: 2,
            borderRadius: 6,
            paddingTop: 16
        }}
        data={posts}
        keyExtractor={(item, index) => (item.id || index).toString()}
        renderItem={({ item }) => <Post {...item} />}
    />
}

export default PostList;