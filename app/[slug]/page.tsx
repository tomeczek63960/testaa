import { getStoryblokApi } from '../lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';

// eslint-disable-next-line
export default async function Page({ params }: any) {
  const { slug } = await params;

  const data = await fetchData(slug);

  if (!data?.story) return notFound();

  return <>
    <StoryblokStory story={data.story} />
  </>
}

async function fetchData(slug: string) {
  const getCachedStory = unstable_cache(
    async () => {
      const storyblokApi = getStoryblokApi();
      const res = await storyblokApi.get(`cdn/stories/${slug}`, { version: 'published' });
      return res.data;
    },
    [`storyblok-${slug}`],
    { tags: ['storyblok', `storyblok-${slug}`] }
  );

  return getCachedStory();
}