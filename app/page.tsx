import { getStoryblokApi } from './lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export const revalidate = false;
export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="page">
      <h1>here test page.tsx under index</h1>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  const res = await storyblokApi.get(`cdn/stories/home`, { version: 'published' }
  )
  return res;
}
