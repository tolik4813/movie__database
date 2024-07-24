import { fetchNowPlaying } from "@/actions/actions"

export default async function Banner() {
    const banner = await fetchNowPlaying()

    const banners = await fetchNowPlaying();

    if (!banners.results) {
      return <div>Loading...</div>;
    }
    
  return (
    <div>Banner</div>
  )
}
