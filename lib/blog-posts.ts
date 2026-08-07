export type BlogContentBlock = {
  type: "paragraph" | "heading" | "quote"
  text: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  paragraphs?: string[]
  content?: BlogContentBlock[]
  image?: string
  imageAlt?: string
  imageCaption?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-year-the-mountain-said-no",
    title: "The Year the Mountain Said No: What the Appalachian Trail Taught the Adventure Girls",
    excerpt:
      "Eight friends, a fourteen-year plan, and the New Hampshire storm that taught me the difference between hearing a warning and receiving it.",
    date: "August 6, 2026",
    category: "Adventure Girls",
    readTime: "6 min read",
    image: "/images/adventure-girls-appalachian-trail.jpg",
    imageAlt:
      "The eight Adventure Girls gathered together on a wooded section of the Appalachian Trail.",
    imageCaption: "The Adventure Girls on the Appalachian Trail.",
    content: [
      {
        type: "paragraph",
        text: "It started, like most of my worst and best ideas, in the middle of the Meramec River.",
      },
      {
        type: "paragraph",
        text: "Julie, Beth, and I were floating along on our paddleboards, pretending we were people with endless free time, when I finally said the thing I’d been carrying around for years: “You know what I really want to do someday? Hike the Appalachian Trail.”",
      },
      {
        type: "paragraph",
        text: "Blame Bill Bryson. A Walk in the Woods had planted that idea in my head like a splinter—2,000 miles, fourteen states, thru-hikers who disappear into the woods for six months. With three kids and a business, that version wasn’t happening. But the dream didn’t leave, either.",
      },
      {
        type: "paragraph",
        text: "Julie was the one who cracked it open. “Why don’t you just do part of it?”",
      },
      {
        type: "paragraph",
        text: "I remember sighing. Doing one tiny chunk felt anticlimactic.",
      },
      {
        type: "paragraph",
        text: "Then Beth said, “What if you did different parts? A little each year?”",
      },
      {
        type: "paragraph",
        text: "And just like that, the impossible got small enough to be possible. One section a year. Fourteen years. Fourteen states. I pitched it to the Adventure Girls, and without hesitation, everyone said yes.",
      },
      {
        type: "paragraph",
        text: "I was in heaven. Planning is my love language—I drew maps, built spreadsheets, researched shuttles, studied elevation charts, and pictured us decades later as old women telling these stories from rocking chairs like we’d done something mythic.",
      },
      {
        type: "paragraph",
        text: "Once a year, we weren’t moms or bosses or wives. We were a band of eight hikers with messy buns, blister tape, and snack bags, walking toward the next white blaze and letting everything else fall away for a few days.",
      },
      {
        type: "paragraph",
        text: "On the first night of our very first year, I pulled out a stack of small journals and suggested we each keep one—write down what we were learning, what was changing in our lives.",
      },
      {
        type: "paragraph",
        text: "They looked at me like I’d suggested matching tattoos.",
      },
      {
        type: "paragraph",
        text: "“Statistically,” I told them, “stuff is going to happen to us. We should write it down.”",
      },
      {
        type: "paragraph",
        text: "No one wrote a word that weekend. Or ever. We were standing in the middle of lives that felt strong and solid. We weren’t ready to imagine them cracking.",
      },
      {
        type: "paragraph",
        text: "We were wrong. By our sixth year, the trail would prove just how quickly a strong, solid plan could crack.",
      },
      {
        type: "heading",
        text: "The year the mountain said no",
      },
      {
        type: "paragraph",
        text: "By our sixth year, we’d gotten confident. Maybe too confident. At the New Hampshire trailhead, a sign stopped us cold:",
      },
      {
        type: "quote",
        text: "STOP. The area ahead has the worst weather in America. Many have died there from exposure, even in the summer. Turn back now if the weather is bad.",
      },
      {
        type: "paragraph",
        text: "We read it, nodded, and kept walking. It was summer. It was only drizzling. We were experienced. Famous last words.",
      },
      {
        type: "paragraph",
        text: "By the next morning, at Greenleaf Hut, the young hut host gave us the forecast in that careful, measured way people talk when they’re used to being ignored. “We’re advising most people to stay put.”",
      },
      {
        type: "paragraph",
        text: "We negotiated with her anyway. We don’t mind hiking in rain, we said. She looked at a group of Midwestern women in summer gear and chose her words slowly: “If you leave now, you should be able to make it and take shelter there.”",
      },
      {
        type: "paragraph",
        text: "I heard her. I didn’t receive her. I took the one sentence that supported my plan and used it as a permission slip.",
      },
      {
        type: "paragraph",
        text: "The trail that followed wasn’t a trail so much as a mountain range tolerating one. At one point, we hit a chute where water poured straight down over the rocks.",
      },
      {
        type: "paragraph",
        text: "“This can’t be the trail,” I said. “It’s a waterfall.”",
      },
      {
        type: "paragraph",
        text: "Diana climbed up into it anyway to check, waved from above, and—one by one—we followed her up the waterfall, because apparently that was the day now.",
      },
      {
        type: "paragraph",
        text: "By late morning, the group split. Five turned back. Deb, Diana, and I kept climbing.",
      },
      {
        type: "paragraph",
        text: "Above treeline, the weather stopped being miserable and started being dangerous. The wind—we later learned it hit close to hurricane force—turned my raincoat to shreds. Visibility dropped to nothing. A thru-hiker in a kilt appeared out of the fog like a Scottish ghost, yelled, “You’ll be fine, less than an hour!” and vanished back downhill.",
      },
      {
        type: "paragraph",
        text: "That hour became two. At three hours, we realized we’d walked right past the hut, blind in the whiteout.",
      },
      {
        type: "paragraph",
        text: "The plan shrank to something simpler: get below treeline; don’t stop moving. We bushwhacked down through the storm—not what you’re supposed to do, but staying up there was worse—grabbing branches and using headlamps as it got dark.",
      },
      {
        type: "paragraph",
        text: "Sixteen hours after we’d left that morning, we stumbled onto a road and screamed and hugged like we’d summited Everest.",
      },
      {
        type: "heading",
        text: "The part nobody puts on a postcard",
      },
      {
        type: "paragraph",
        text: "Here’s the thing about survival stories: the reunion in your head is all tears and gratitude. The real one was just…human.",
      },
      {
        type: "paragraph",
        text: "We were starving. The other five had already eaten dinner and hadn’t saved us anything.",
      },
      {
        type: "paragraph",
        text: "“I can’t believe you didn’t save us food,” I snapped.",
      },
      {
        type: "paragraph",
        text: "“We thought you were at the hut,” Lisa said.",
      },
      {
        type: "paragraph",
        text: "Voices rose. Everyone had fear stored up like pressure, and it finally had somewhere to go. Our “celebration dinner” the next night didn’t fix it—the jokes stayed barbed for a while.",
      },
      {
        type: "paragraph",
        text: "The trail didn’t kill us. But that trip put a real dent in the fourteen-year plan.",
      },
      {
        type: "paragraph",
        text: "What I’ve come to understand, writing this book, is that the mountain wasn’t really the lesson. The lesson was smaller and less cinematic than that: calm isn’t a feeling you wait around for on a good day. It’s something you practice—listening, noticing, adjusting, staying kind even when your body wants to armor up and push harder. I didn’t have that skill yet at treeline in New Hampshire. I had a stubborn refusal to hear the word no.",
      },
      {
        type: "paragraph",
        text: "I’m still working on it. That’s more or less what this whole book is about.",
      },
      {
        type: "paragraph",
        text: "The full story—this hike and thirty-some other ways I’ve tried to learn something new—is in The Whistler’s Daughter, out September 22 from Avocet Books.",
      },
    ],
  },
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
