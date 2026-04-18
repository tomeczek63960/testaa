import { getStoryblokApi } from '../lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // fallback (optional)
// eslint-disable-next-line
export default async function Page({ params }: any) {
  const { slug } = await params;

  const { data } = await fetchData(slug);

  if (!data?.story) return notFound();

  return <>
    <h1>here is nested page</h1>
    <StoryblokStory story={data.story} />
  </>
}

export const dynamic = 'force-dynamic';

async function fetchData(slug: string) {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  },
{
      cache: 'no-store', // ✅ correct place
    }
  );
}