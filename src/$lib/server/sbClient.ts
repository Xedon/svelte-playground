import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../../types/database.types';
import { ANON_KEY, API_URL } from '$env/static/private';

const client = createClient<Database>(API_URL, ANON_KEY, {
	auth: { persistSession: false }
});

export const createPost = async (page: string, content: string) =>
	client.from('posts').insert({ page, content });

export const readPosts = async (page: string) => client.from('posts').select().eq('page', page);
