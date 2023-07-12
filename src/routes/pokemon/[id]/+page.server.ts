import { createPost, readPosts } from '../../../$lib/server/sbClient';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return { id: params.id, posts: await readPosts(params.id).then((data) => data.data ?? []) };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		createPost(event.params.id, formData.get('content')!.toString());
	}
} satisfies Actions;
