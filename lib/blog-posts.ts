export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  paragraphs: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-keep-beginning",
    title: "Why I Keep Beginning",
    excerpt:
      "Being a beginner is uncomfortable, humbling, and—if you let it be—one of the most expansive ways to move through life.",
    date: "August 6, 2026",
    category: "Always a Beginner",
    readTime: "3 min read",
    paragraphs: [
      "For nearly three decades, I chose one new sport each year. Some came naturally. Most did not. I fell, froze, got lost, laughed at myself, and occasionally wondered what on earth I had been thinking.",
      "The point was never to become the best. It was to keep meeting the part of myself that was still curious, especially when it would have been easier to make my world smaller.",
      "Beginning again taught me that courage rarely arrives before the first step. More often, it catches up somewhere in the middle: after the awkward lesson, the failed attempt, or the moment when turning back would be easier.",
      "This blog is a place for those stories—the adventures, the misadventures, the people I met along the way, and the lessons that followed me home.",
      "Whatever your age or ability, I hope these stories leave you curious about what might still be possible.",
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
