export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://johaodev.vercel.app/sitemap.xml',
    host: 'https://johaodev.vercel.app',
  }
}
