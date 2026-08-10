export type BlogContentBlock = {
  type: "paragraph" | "heading" | "quote" | "image"
  text: string
  image?: string
  imageAlt?: string
  imageCaption?: string
  pinned?: boolean
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
    slug: "when-i-stopped-being-embarrassed",
    title: "When I Stopped Being Embarrassed",
    excerpt:
      "What learning alongside much younger athletes taught me about belonging, pride, and being willing to begin again.",
    date: "August 10, 2026",
    category: "Always a Beginner",
    readTime: "2 min read",
    image: "/images/pole-vault-students.jpg",
    imageAlt:
      "Kippy Hoene smiling with four younger pole-vaulting students, each holding a vaulting pole.",
    imageCaption: "My fellow pole vaulters and me—different ages, but all learning together.",
    content: [
      {
        type: "paragraph",
        text: "When I first tried fencing alongside grade-school students, I felt painfully self-conscious. I worried about how ridiculous I must look—a middle-aged woman learning a new sport beside kids.",
      },
      {
        type: "paragraph",
        text: "By the time I took up pole vaulting at fifty-five, something had changed.",
      },
      {
        type: "paragraph",
        text: "My fellow students were much younger, and most of them barely reached my shoulder. But this time, I wasn’t embarrassed. I was proud to be there, using my body, learning something difficult, and sharing the experience with athletes from a completely different generation.",
      },
      {
        type: "paragraph",
        text: "We were all beginners. We all missed jumps, misunderstood instructions, and celebrated when one small piece finally clicked. The age difference no longer separated me from the group—it became part of what made the experience special.",
      },
      {
        type: "image",
        text: "Kippy holding her pole and wearing a medal after a pole-vaulting competition.",
        image: "/images/pole-vault-medal.jpg",
        imageAlt: "Kippy Hoene smiling with a pole-vaulting pole and a medal around her neck.",
        imageCaption: "Still learning, still showing up—and no longer trying to hide.",
      },
      {
        type: "paragraph",
        text: "I took photographs with my fellow vaulters and posted them proudly. That may sound like a small thing, but it marked a real change in me. I had stopped worrying about whether I looked as though I belonged and started appreciating the fact that I had shown up.",
      },
      {
        type: "paragraph",
        text: "That photograph reminds me that belonging doesn’t require everyone to look alike or arrive at the same stage of life. Sometimes you belong simply because you are willing to learn, encourage others, and celebrate alongside them.",
      },
      {
        type: "paragraph",
        text: "*The complete pole-vaulting story appears in* The Whistler’s Daughter.",
      },
    ],
  },
  {
    slug: "the-climb-that-didnt-make-the-book-mt-whitneys-east-face",
    title: "The Climb That Didn’t Make the Book: Mt. Whitney’s East Face",
    excerpt:
      "A fifty-two-pound pack, thirteen pitches of Sierra granite, and the Mt. Whitney climb that never found room in the book.",
    date: "August 9, 2026",
    category: "Beyond the Book",
    readTime: "4 min read",
    image: "/images/mt-whitney-approach.jpg",
    imageAlt:
      "Kippy Hoene carrying a large red expedition backpack during the Mt. Whitney approach.",
    imageCaption: "The fifty-two-pound pack: same weight for everyone.",
    content: [
      {
        type: "paragraph",
        text: "Years later, I decided to cash in all that practice on a bigger canvas: the East Face of Mt. Whitney, the highest peak in the lower 48. The plan mixed climbing and mountaineering—thirteen pitches after a load-bearing approach, high, cold, and honest. Our guide, Jeff, issued the standard gear and a pack that hit fifty-two pounds. “Same weight for everyone,” he said. “We adapt as we go.” In my experience, *adapt* is a theory that dies at the first steep section, but I saved that speech for a memoir I’d apparently one day write.",
      },
      {
        type: "image",
        text: "Kippy climbing the exposed granite of Mt. Whitney’s East Face.",
        image: "/images/mt-whitney-east-face.jpeg",
        imageAlt: "Kippy Hoene climbing the exposed granite of Mt. Whitney’s East Face while secured by a rope.",
        imageCaption: "Climbing straight up the side of Mt. Whitney.",
      },
      {
        type: "paragraph",
        text: "The approach was a study in contrasts—wildflowers and willows giving way to talus and ledges that felt like walking a curb on the edge of the sky. Statistics say only a tiny fraction of Whitney climbers die each year, which is comforting right up until you remember that most of them took the easier route. We camped at Iceberg Lake, 12,621 feet up: bitterly cold, nose-to-toes in a tent with a stranger named Don, and not a minute of sleep despite some pharmaceutical optimism.",
      },
      {
        type: "image",
        text: "Climbers crossing an exposed granite ledge on Mt. Whitney.",
        image: "/images/mt-whitney-ledge.jpg",
        imageAlt: "Three climbers wearing backpacks carefully cross a narrow granite ledge high above the valley.",
        imageCaption: "The approach included ledges that felt like walking a curb on the edge of the sky.",
      },
      {
        type: "paragraph",
        text: "Morning brought sticky Sierra granite—white, grippy, perfect. Jeff led, Don followed, I cleaned gear behind them. Pitch 7’s “Fresh Air Traverse” was a postcard of exposure. I loved it. Don froze. To prove the rope would hold, I did the dumbest smart thing I’ve ever done: pushed off into open air, swung out on the line, and chirped, “See? Safe!” Don turned the color of printer paper. Lesson learned—sometimes words are better than demonstrations.",
      },
      {
        type: "paragraph",
        text: "Pitch 8 handed us a run of chimneys: back pressed one way, feet braced the other, hauling the pack up ahead of you like a disobedient suitcase. Each one was its own riddle to solve with your whole body. We topped out into a chorus of startled hikers—most people arrive at that summit by trail, not by climbing straight up the side of it. “Where did you come from?” someone asked. “The side,” I grinned.",
      },
      {
        type: "paragraph",
        text: "By then we were spent, the tent felt impossibly small, and the idea of another sleepless night at altitude sounded worse than just heading down in the dark. Jeff argued for safety and rest. Don and I argued for headlamps and momentum. Two against one won out. Night hiking tasted different up there—pine, cold air, and a sky so star-stamped it felt almost generous, like it knew we’d earned the view. We made it down fine: legs empty, spirits full.",
      },
      {
        type: "paragraph",
        text: "This one didn’t end up in the book—there simply wasn’t room for every mountain. But it’s one of the climbs I think about most, so it felt right to give it a home here instead.",
      },
    ],
  },
  {
    slug: "the-chalkboard-by-the-beach-walkway",
    title: "The Chalkboard by the Beach Walkway: Where the Book’s Quotes Really Came From",
    excerpt:
      "Long before the chapter epigraphs, there was a beat-up sandwich board, a piece of chalk, and a weekly love letter to strangers walking toward the ocean.",
    date: "August 8, 2026",
    category: "Behind the Book",
    readTime: "4 min read",
    image: "/images/chalkboard-audrey-hepburn.jpeg",
    imageAlt:
      "A colorful chalkboard featuring the Audrey Hepburn quote: Nothing is impossible, the word itself says I’m possible.",
    imageCaption: "One of the weekly quotes that greeted people on their walk to the beach.",
    content: [
      {
        type: "paragraph",
        text: "Every chapter of *The Whistler’s Daughter* opens with a quote. Readers who get an early copy sometimes ask if I sat down with a book of famous quotations and picked the best twenty-six. I didn’t. They came from a sandwich board on a sidewalk.",
      },
      {
        type: "paragraph",
        text: "For a while, I lived along a walkway that fed straight onto the beach. Every day, a steady stream of people passed by—dog walkers, joggers, moms pushing strollers, tourists still blinking in the sun, people clearly having a rough morning who needed the ocean more than the rest of us. I watched that parade go by for weeks before it occurred to me that I could do something small for it.",
      },
      {
        type: "paragraph",
        text: "So I bought a big chalkboard—the kind restaurants put out front to advertise the soup of the day—and set it up right where the walkway met the sidewalk. Once a week, I’d chalk up a quote. Nothing fancy. Just something that had stuck with me, something that felt like it might land on the right person on the right morning.",
      },
      {
        type: "image",
        text: "A chalkboard near the beach featuring an Isaac Newton quote about the ocean.",
        image: "/images/chalkboard-isaac-newton.jpeg",
        imageAlt: "A colorful chalkboard reading: What I know is a drop. What I don’t know is an ocean.",
        imageCaption: "A little perspective for the walk to the water.",
      },
      {
        type: "paragraph",
        text: "I picked quotes the way you’d pick a song for a friend having a hard week—less about being profound, more about being *useful*. Something to chew on during the walk to the water. Something to carry back.",
      },
      {
        type: "paragraph",
        text: "I never expected anyone to notice. But people did. Neighbors started timing their walks around it. Someone told me once that she changed her whole morning route just to see what the board said that week. A few people started sending me quotes they liked, hoping I’d chalk them up next.",
      },
      {
        type: "paragraph",
        text: "It became this strange, low-key ritual—equal parts creative outlet and love letter to strangers. I was choosing new sports every year by then, chasing that same restless “one more thing” energy in the rest of my life. The chalkboard was quieter than wing-walking or ice climbing, but it scratched the same itch: give people something small and unexpected that might change their day, even a little.",
      },
      {
        type: "image",
        text: "A colorful Winnie-the-Pooh quote on the beach walkway chalkboard.",
        image: "/images/chalkboard-winnie-the-pooh.jpeg",
        imageAlt: "A colorful chalkboard reading: You are braver than you believe, stronger than you seem, smarter than you think.",
        imageCaption: "The board became a quiet weekly encouragement for neighbors and strangers.",
      },
      {
        type: "paragraph",
        text: "When it came time to write the book, and I got to the end of each chapter, I kept circling back to that stack of favorite quotes—some from the board, some I’d collected since. It felt right to let each chapter open the way each week on the walkway used to: with one sentence, meant to set the tone for what came next.",
      },
      {
        type: "paragraph",
        text: "So if a chapter epigraph ever feels like it’s speaking directly to you—that’s not an accident. That’s the whole point. It’s the same thing I was going for with a piece of chalk and a beat-up sandwich board, years before any of this was a book at all.",
      },
    ],
  },
  {
    slug: "the-year-the-mountain-said-no",
    title: "The Year the Mountain Said No: What the Appalachian Trail Taught the Adventure Girls",
    pinned: true,
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
