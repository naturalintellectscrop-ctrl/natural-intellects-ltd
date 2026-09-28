const nextConfig = {
  // Local images may carry a cache-busting query (e.g. /photography/team-table.jpg?v=2)
  // so swapped stand-in assets can be force-refreshed for every visitor without
  // renaming files. Omitting `search` allows any query string on these paths.
  images: {
    localPatterns: [
      { pathname: '/photography/**' },
      { pathname: '/work-done/**' },
      { pathname: '/**' },
    ],
  },
  async headers() {
    return [{ source: '/(.*)', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ] }]
  },
}
export default nextConfig
