import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutBook } from "@/components/about-book"
import { Adventures } from "@/components/adventures"
import { AboutAuthor } from "@/components/about-author"
import { BuySection } from "@/components/buy-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutBook />
        <Adventures />
        <AboutAuthor />
        <BuySection />
      </main>
      <SiteFooter />
    </>
  )
}
