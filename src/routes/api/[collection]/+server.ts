import { getPosts } from '$lib/utils';

export async function GET(req) {
  const { collection } = req.params;

  const posts = await getPosts(collection);

  if (posts && posts.length > 0) {
      return new Response(JSON.stringify(posts), {
          status: 200,
          headers: {
              'Content-Type': 'application/json',
          },
      });
  } else {
      return new Response(JSON.stringify({ error: 'Not found' }), {
          status: 404,
          headers: {
              'Content-Type': 'application/json',
          },
      });
  }
}
