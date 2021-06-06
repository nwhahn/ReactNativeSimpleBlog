/* eslint-disable react-native/no-inline-styles */
/* Disabling due to typescript bug */
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import Post, {PostProps} from './Post';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import type {RootState} from '../../redux/store';

const EmptyText = styled.Text`
  text-align: center;
`;

const PostList: React.FC<{}> = ({}) => {
  const posts = useAppSelector((state: RootState) => state.post.posts);

  const currentTarget = useAppSelector((state: RootState) => state.post.target);

  let flatList = useRef() as React.MutableRefObject<FlatList<PostProps>>;

  useEffect(() => {
    if (currentTarget?.id && flatList?.current) {
      // We have entered edit mode if a target is set
      // This will only run when a new target is set as well
      flatList.current.scrollToIndex({
        index: posts.findIndex(({id}) => currentTarget.id === id),
      });
    }
  }, [currentTarget]);

  return (
    <FlatList<PostProps>
      style={{
        borderStyle: 'solid',
        backgroundColor: '#b0b0b0',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 6,
        paddingTop: 16,
      }}
      ref={flatList}
      data={posts}
      keyExtractor={(item, index) => (item.id || index).toString()}
      renderItem={({item}) => (
        <Post {...item} isSelected={currentTarget?.id === item.id} />
      )}
      ListEmptyComponent={() => (
        <EmptyText>There is no content to display</EmptyText>
      )}
    />
  );
};

export default PostList;
