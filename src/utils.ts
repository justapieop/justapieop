export function resolveLink(fileName: string): string {
  let baseUrl: string = import.meta.env.VITE_MEDIA_ENDPOINT;

  if (!baseUrl.endsWith("/")) {
    baseUrl += "/";
  }

  return baseUrl + fileName;
}
