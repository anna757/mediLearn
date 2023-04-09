export function getEmbedUrl(watchUrl: string): string {
    const videoId = new URL(watchUrl).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  }