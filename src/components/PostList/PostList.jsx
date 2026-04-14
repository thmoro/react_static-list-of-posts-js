import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return posts.map(post => {
    return <PostInfo post={post} key={post.id} />;
  });
};
