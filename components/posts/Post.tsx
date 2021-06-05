import React from 'react';
import styled from 'styled-components/native';
import { Body} from '../typography';

export interface PostProps {
    id: number,
    title?: string,
    content?: string,
}

const Wrapper = styled.View`
    border: 2px solid blue;
    border-radius: 6px;
    background-color: white;
    margin: 0 16px 24px;
    flex-direction: row;
    padding: 8px;
`;

const Title = styled(Body)`
    text-align: center;
    margin-bottom: 4px;  
`;

const TextWrapper = styled.View`
flex: 5;
`;

const ActionWrapper = styled.View`
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
    align-items: center;
`;

const Post: React.FC<PostProps> = ({ id, title, content}) => {

    return <Wrapper>
        <TextWrapper>
            {title && <Title large bold numberOfLines={1}>{title}</Title>}
            {content && <Body numberOfLines={2}>{content}</Body>}
        </TextWrapper>
        <ActionWrapper>
            <Body>Hi</Body>
            <Body>Hi</Body>
        </ActionWrapper>
    </Wrapper>
}

export default Post;
