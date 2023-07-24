/**
 * Pick type
 */

interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Pick<Post, 'title' | 'content'>): Post{
  return {
    ...post,
    createdAt: new Date()
  }
}

createPost({
  title: '요즘 개발자 취업 어떰?',
  content: '나이 30먹어도 가능..? 난 31이야...',
  // createdAt: new Date(),
})