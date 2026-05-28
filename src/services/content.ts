const caseStudyModules = import.meta.glob<string>('@/content/case-studies/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const caseStudies = Object.entries(caseStudyModules).map(([path, body]) => ({
  slug: path.split('/').pop()?.replace('.md', '') ?? path,
  body,
}))
