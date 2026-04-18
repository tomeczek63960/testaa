import { getStoryblokApi } from '../lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';

export const revalidate = 60;
// eslint-disable-next-line
export default async function Page({ params }: any) {
  const { slug } = await params;

  const { data } = await fetchData(slug);

  if (!data?.story) return notFound();

  return <>
    <StoryblokStory story={data.story} />
  </>
}


async function fetchData(slug: string) {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'published',
  }
  );
}