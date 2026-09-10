export default function sitemap() {
  const baseUrl = 'https://johaodev.vercel.app'
  const lastModified = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
