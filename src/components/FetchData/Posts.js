import styled from "styled-components";

const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
`;

const postStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    textAlign: 'left'
}

const Posts = ({posts}) => {
    return (
        <PostContainer>
            { posts?.map(post => {
                return (
                    <div key={post.id} style={postStyle}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </PostContainer>
    )
}

export default Posts;