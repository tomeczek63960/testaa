import { getStoryblokApi } from './lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { unstable_cache } from 'next/cache';

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}

const fetchData = unstable_cache(
  async () => {
    const storyblokApi = getStoryblokApi();
    const res = await storyblokApi.get(`cdn/stories/home`, { version: 'published' });
    return res.data;
  },
  ['storyblok-home'],
  { tags: ['storyblok', 'storyblok-home'] }
);
