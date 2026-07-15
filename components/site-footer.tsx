import { ExternalLink } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="connect" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="font-serif text-2xl font-bold text-foreground">
              The Whistler&apos;s Daughter
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              by Christine &ldquo;Kippy&rdquo; Hoene
            </p>
          </div>

          <a
            href="https://www.facebook.com/people/The-Whistlers-Daughter/61591921524061/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="size-4" />
            Follow on Facebook
          </a>

          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Stay curious about what&apos;s still possible.
          </p>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Christine &ldquo;Kippy&rdquo;
            Hoene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
