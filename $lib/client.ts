import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

const client = createClient<Database>(process.env.API_URL!, process.env.ANON_KEY!, {
	auth: { persistSession: false }
});

export const createPost = async (page: string, content: string) =>
	client.from('posts').insert({ page, content });

export const readPosts = async () => client.from('posts').select();
