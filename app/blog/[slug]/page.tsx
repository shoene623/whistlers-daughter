import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BlogComments } from "@/components/blog-comments"
import { blogPosts, getBlogPost } from "@/lib/blog-posts"

type PostPageProps = {
  params: Promise<{ slug: string }>
}

function renderInlineText(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part, index) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={index}>{part.slice(1, -1)}</em>
    ) : (
      part
    ),
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | The Whistler's Daughter`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const content =
    post.content ??
    post.paragraphs?.map((text) => ({ type: "paragraph" as const, text })) ??
    []

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <header className="border-b border-border bg-secondary/40">
            <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <ArrowLeft className="size-4" />
                Back to the blog
              </Link>
              <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="font-semibold uppercase tracking-[0.15em] text-accent">{post.category}</span>
                <span aria-hidden="true">•</span>
                <time>{post.date}</time>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-5 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </div>
          </header>
          <div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
            {post.image && (
              <figure className="mb-12">
                <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? ""}
                    width={800}
                    height={533}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                {post.imageCaption && (
                  <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                    {post.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
            <div className="space-y-7">
              {content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="pt-8 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl"
                    >
                      {renderInlineText(block.text)}
                    </h2>
                  )
                }

                if (block.type === "image" && block.image) {
                  return (
                    <figure key={index} className="py-6">
                      <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
                        <Image
                          src={block.image}
                          alt={block.imageAlt ?? block.text}
                          width={720}
                          height={960}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      {block.imageCaption && (
                        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                          {block.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-accent bg-secondary/50 px-6 py-5 font-serif text-xl font-semibold leading-relaxed text-foreground md:text-2xl"
                    >
                      {renderInlineText(block.text)}
                    </blockquote>
                  )
                }

                return (
                  <p key={index} className="text-pretty text-lg leading-8 text-foreground/85 md:text-xl md:leading-9">
                    {renderInlineText(block.text)}
                  </p>
                )
              })}
            </div>
            <BlogComments slug={post.slug} />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
