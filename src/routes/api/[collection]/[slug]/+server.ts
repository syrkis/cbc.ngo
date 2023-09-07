import { getPost } from '$lib/utils';

export async function GET(req) {
  const { collection, slug } = req.params;

  const post = await getPost(collection, slug);

  if (post) {
      return new Response(JSON.stringify(post), {
          status: 200,
          headers: {
              'Content-Type': 'application/json',
          },
      });
  } else {
      return new Response(JSON.stringify({ error: 'Not Found' }), {
          status: 404,
          headers: {
              'Content-Type': 'application/json',
          },
      });
  }
}
