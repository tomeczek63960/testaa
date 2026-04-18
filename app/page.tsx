import { getStoryblokApi } from './lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export const revalidate = 3600; // fallback (optional)
export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="page">
      <h1>here test page.tsx under index</h1>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export const dynamic = 'force-dynamic';

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  const res = await storyblokApi.get(`cdn/stories/home`, { version: 'draft' },
    {
      cache: 'no-store', // ✅ correct place
    }
  )
  return res;
}
