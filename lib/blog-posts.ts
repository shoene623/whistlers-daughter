export type BlogContentBlock = {
  type: "paragraph" | "heading" | "quote" | "image" | "rating"
  text: string
  image?: string
  imageAlt?: string
  imageCaption?: string
  imagePortrait?: boolean
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
    "slug": "hey-oz-do-you-read-books",
    "title": "Hey Oz, Do You Read Books?",
    "excerpt": "How a stalled manuscript, a stubborn gut feeling, and one wonderfully awkward text helped me discover what The Whistler’s Daughter was really about.",
    "date": "August 19, 2026",
    "category": "Behind the Book",
    "readTime": "5 min read",
    "image": "/images/oz.jpg",
    "imagePortrait": true,
    "imageAlt": "Oz smiling on the beach beside his dog.",
    "imageCaption": "Oz—the almost complete stranger who helped me find the lessons hidden inside the stories.",
    "content": [
      {
        "type": "paragraph",
        "text": "People often ask how—or why—I started writing *The Whistler’s Daughter*."
      },
      {
        "type": "paragraph",
        "text": "It began with a simple desire to share my “sport-a-year” quest. Learning a new sport every year had changed my life in ways I never expected, and I hoped my experiences might inspire other people to try something new, challenge their own assumptions, or simply stop waiting until they felt completely ready."
      },
      {
        "type": "paragraph",
        "text": "With that goal in mind, I set aside one hour every day to write."
      },
      {
        "type": "paragraph",
        "text": "I assumed a book had to begin at the beginning, so I sat down with paper and pen and began working on the first two sentences."
      },
      {
        "type": "paragraph",
        "text": "And then I wrote them again."
      },
      {
        "type": "paragraph",
        "text": "And again."
      },
      {
        "type": "paragraph",
        "text": "For two months, I rearranged and rephrased those same sentences, trying to make them interesting, inviting, and worthy of beginning an entire book. After all that work, I had written less than one paragraph."
      },
      {
        "type": "paragraph",
        "text": "So I gave up."
      },
      {
        "type": "paragraph",
        "text": "About a year later, I found myself mentally reliving my first rock-climbing adventure on Mt. Whitney. That story ultimately didn’t make it into the book—although it now has a home on my blog—but something happened as I replayed it."
      },
      {
        "type": "paragraph",
        "text": "The floodgates opened."
      },
      {
        "type": "paragraph",
        "text": "I stopped trying to write the beginning and started writing the stories that wanted to be told. I wrote about whichever year or adventure stood out in my mind, in no particular order. I trusted that I could piece everything together later."
      },
      {
        "type": "paragraph",
        "text": "For the next year, that was how I wrote the book."
      },
      {
        "type": "paragraph",
        "text": "Usually, around eleven at night, I would tell myself, “You can write for an hour and still be in bed by midnight.”"
      },
      {
        "type": "paragraph",
        "text": "Then I would look at the clock, and it would be two in the morning. I had to get up at seven for work, but writing had pulled me into a time warp. Three hours felt like twenty minutes."
      },
      {
        "type": "paragraph",
        "text": "The pages came quickly. The spelling, punctuation, and sentence structure did not."
      },
      {
        "type": "paragraph",
        "text": "I sent my drafts to my friend Ryan, who also has FSH muscular dystrophy. He became the first translator of what he affectionately called my “hieroglyphics.” Somehow, he could decipher the misspellings, unfinished thoughts, and sentences that made perfect sense only to me."
      },
      {
        "type": "paragraph",
        "text": "Eventually, I finished the manuscript."
      },
      {
        "type": "paragraph",
        "text": "And then I let it sit for almost two years."
      },
      {
        "type": "paragraph",
        "text": "I knew something was missing, but I couldn’t identify what it was."
      },
      {
        "type": "paragraph",
        "text": "Then, at a neighborhood party, I saw Oz—a neighbor I barely knew beyond waving to him while he walked his dogs. Something in my gut said, *Ask him to help you finish the book. Ask him to help you find the lessons.*"
      },
      {
        "type": "paragraph",
        "text": "I tried to ignore that voice. I didn’t even know what Oz did for a living. For all I knew, he had never written anything beyond a grocery list."
      },
      {
        "type": "paragraph",
        "text": "But my gut would not stop talking."
      },
      {
        "type": "paragraph",
        "text": "Fine."
      },
      {
        "type": "paragraph",
        "text": "I decided to text him. The only problem was figuring out how to ask an almost complete stranger whether he could help with a book."
      },
      {
        "type": "paragraph",
        "text": "Finally, I sent:"
      },
      {
        "type": "quote",
        "text": "Hey Oz, do you read books?"
      },
      {
        "type": "paragraph",
        "text": "Fortunately, he did."
      },
      {
        "type": "paragraph",
        "text": "Oz worked his way through the manuscript, found the gold nuggets buried inside it, and polished them until they shone. He helped me uncover what the stories meant—not only what happened."
      },
      {
        "type": "paragraph",
        "text": "He also removed certain details that apparently were not essential, including the origins of every sport and a thorough account of how each had developed throughout history."
      },
      {
        "type": "paragraph",
        "text": "Personally, I found that information fascinating."
      },
      {
        "type": "paragraph",
        "text": "But Oz helped me understand that I wasn’t writing a history of sports. I was writing the story of what those sports had taught me about persistence, fear, friendship, identity, and continuing to expand my life."
      },
      {
        "type": "paragraph",
        "text": "Looking back, I had approached writing exactly as I approached every new sport. At first, I worried so much about doing it correctly that I couldn’t get started. The book only began when I stopped trying to perfect the first move and entered the story wherever I felt most alive."
      },
      {
        "type": "quote",
        "text": "Sometimes the beginning isn’t where you start."
      },
      {
        "type": "paragraph",
        "text": "And sometimes finishing a book begins with asking an almost complete stranger:"
      },
      {
        "type": "quote",
        "text": "Do you read books?"
      }
    ]
  },
  {
    slug: "my-completely-unscientific-sports-ratings",
    title: "My Completely Unscientific Sports Ratings",
    excerpt: "The fun, fear, cost, difficulty and cool factor of every sport I tried—rated with absolutely no scientific method.",
    date: "August 18, 2026",
    category: "Beyond the Book",
    readTime: "9 min read",
    content: [
      {
        type: "paragraph",
        text: "Another thing that didn’t make it into *The Whistler’s Daughter* was my personal rating of every sport I tried."
      },
      {
        type: "paragraph",
        text: "Which were the most fun? Which were terrifying? Which required lessons, money, muscles—or all three? And, perhaps most importantly, which made me look the coolest?"
      },
      {
        type: "paragraph",
        text: "These ratings are entirely subjective and scientifically questionable. They reflect my experience, my abilities, and possibly how badly I was bruised afterward."
      },
      {
        type: "heading",
        text: "The rating system"
      },
      {
        type: "paragraph",
        text: "😄 Fun Factor | 👍 Lessons recommended | ⭐ Lessons helpful, but not required | 👎 Lessons unnecessary | 💪 Difficulty—from learning the basics to mastering the sport | 💲 Cost | 😬 Fear Factor | 😎 Cool Factor"
      },
      {
        type: "heading",
        text: "The ratings"
      },
      {
        type: "rating",
        text: "1997 – Tennis\nFun: 😄😄😄😄 | Lessons: ⭐ Helpful, but not required | Difficulty: 💪 → 💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "1998 – Fencing\nFun: 😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "1998 – Rollerblading\nFun: 😄😄😄 | Lessons: 👎 | Difficulty: 💪 → 💪💪 | Cost: 💲 | Fear: 😬😬 | Cool: 😎😎"
      },
      {
        type: "rating",
        text: "1999 – Outdoor Rock Climbing\nFun: 😄😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2000 – Wakeboarding\nFun: 😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪 | Cost: 💲💲💲💲💲 | Fear: 😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2000 – Racewalking\nFun: 😄 | Lessons: ⭐ Helpful, but not required | Difficulty: 💪 → 💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎"
      },
      {
        type: "rating",
        text: "2001 – Cross-Country Skiing\nFun: 😄😄😄😄 | Lessons: 👎 | Difficulty: 💪 → 💪💪💪 | Cost: 💲💲 | Fear: 😬 | Cool: 😎😎"
      },
      {
        type: "rating",
        text: "2001 – Snowshoeing\nFun: 😄😄 | Lessons: 👎 | Difficulty: 💪 → 💪 | Cost: 💲 | Fear: 😬 | Cool: 😎"
      },
      {
        type: "rating",
        text: "2002 – Squash\nFun: 😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "2003 – Geocaching\nFun: 😄😄 | Lessons: 👎 | Difficulty: 💪 → 💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎😎"
      },
      {
        type: "rating",
        text: "2003 – Orienteering\nFun: 😄😄 | Lessons: 👎 | Difficulty: 💪 → 💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎😎"
      },
      {
        type: "rating",
        text: "2004 – Spelunking\nFun: 😄😄😄 | Lessons: 👍 | Difficulty: 💪 → 💪💪💪 | Cost: 💲💲 | Fear: 😬😬😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2004 – Telemark Skiing\nFun: 😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪 | Cost: 💲💲💲💲 | Fear: 😬😬😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2005 – Snowboarding\nFun: 😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲💲 | Fear: 😬😬😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2005 – Olympic Weightlifting\nFun: 😄 | Lessons: 👍 | Difficulty: 💪 → 💪💪💪💪💪 | Cost: 💲💲 | Fear: 😬 | Cool: 😎😎"
      },
      {
        type: "rating",
        text: "2006 – Mountain Biking\nFun: 😄😄😄😄😄 | Lessons: 👎 | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2007 – Surfing\nFun: 😄😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2008 – Yoga\nFun: 😄😄 | Lessons: 👎 | Difficulty: 💪 → 💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎"
      },
      {
        type: "rating",
        text: "2008 – Slacklining\nFun: 😄😄 | Lessons: 👎 | Difficulty: 💪💪 → 💪💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "2009 – Paddleboarding\nFun: 😄😄😄 | Lessons: 👎 | Difficulty: 💪 → 💪💪 | Cost: 💲💲 | Fear: 😬 | Cool: 😎😎"
      },
      {
        type: "rating",
        text: "2010 – Aerial Silks\nFun: 😄😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲💲 | Fear: 😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2011 – Ice Climbing\nFun: 😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2012 – Trapeze\nFun: 😄😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2013 – Kitesurfing\nFun: 😄😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲💲💲 | Fear: 😬😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2013 – Tumbling\nFun: 😄😄😄😄 | Lessons: 👍 | Difficulty: 💪 → 💪💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "2014 – Stilt Walking\nFun: 😄😄 | Lessons: ⭐ Helpful, but not required | Difficulty: 💪 → 💪💪 | Cost: 💲 | Fear: 😬😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "2014 – AcroYoga\nFun: 😄😄😄😄 | Lessons: ⭐ Helpful, but not required | Difficulty: 💪 → 💪💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2015 – Pole Vaulting\nFun: 😄😄😄 | Lessons: 👍 | Difficulty: 💪💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲💲 | Fear: 😬😬😬😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2016 – Pickleball\nFun: 😄😄😄😄 | Lessons: ⭐ Helpful, but not required | Difficulty: 💪 → 💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎😎"
      },
      {
        type: "rating",
        text: "2016 – Snow Kiting\nFun: 😄😄 | Lessons: 👍 | Difficulty: 💪💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲 | Fear: 😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2017 – Tightrope Walking\nFun: 😄😄😄 | Lessons: 👎 | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲💲 | Fear: 😬😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "2017 – Bungee Dance\nFun: 😄😄😄 | Lessons: 👍 | Difficulty: 💪 → 💪💪💪💪 | Cost: 💲💲 | Fear: 😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2018 – Windsurfing\nFun: 😄😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪💪 → 💪💪💪💪 | Cost: 💲💲💲💲 | Fear: 😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2019 – Tap Dancing\nFun: 😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪 | Cost: 💲💲 | Fear: 😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "2019 – Scuba Diving\nFun: 😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪 | Cost: 💲💲💲💲 | Fear: 😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2020 – Wing Surfing\nFun: 😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪💪 → 💪💪💪💪 | Cost: 💲💲💲💲 | Fear: 😬😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2021 – Roller Pole\nFun: 😄😄😄😄😄 | Lessons: 👍 | Difficulty: 💪 → 💪💪💪💪 | Cost: 💲💲 | Fear: 😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2021 – Paragliding\nFun: 😄😄😄 | Lessons: 👍 | Difficulty: 💪💪💪💪 → 💪💪💪💪💪 | Cost: 💲💲💲💲 | Fear: 😬😬😬😬😬 | Cool: 😎😎😎😎😎"
      },
      {
        type: "rating",
        text: "2022 – German Wheel\nFun: 😄😄😄 | Lessons: 👍 | Difficulty: 💪 → 💪💪💪💪💪 | Cost: 💲💲 | Fear: 😬😬😬 | Cool: 😎😎😎😎"
      },
      {
        type: "rating",
        text: "2023 – Parallel Bars\nFun: 😄😄😄 | Lessons: ⭐ Helpful, but not required | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "Belly Dancing\nFun: 😄😄😄 | Lessons: 👍 | Difficulty: 💪 → 💪💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎😎😎"
      },
      {
        type: "rating",
        text: "Roller Skiing\nFun: 😄 | Lessons: 👎 | Difficulty: 💪 → 💪💪💪 | Cost: 💲 | Fear: 😬 | Cool: 😎"
      },
      {
        type: "rating",
        text: "Lollipop Lyra\nFun: 😄😄😄😄😄 | Lessons: 👍 | Difficulty: 💪💪 → 💪💪💪💪💪 | Cost: 💲💲 | Fear: 😬😬 | Cool: 😎😎😎😎"
      },
      {
        type: "heading",
        text: "The completely unscientific winners"
      },
      {
        type: "paragraph",
        text: "*Most fun:* Outdoor rock climbing, mountain biking, surfing, aerial silks, trapeze, kitesurfing, windsurfing, roller pole and Lollipop Lyra."
      },
      {
        type: "paragraph",
        text: "*Coolest:* Outdoor rock climbing, mountain biking, surfing, aerial silks, ice climbing, trapeze, kitesurfing, snow kiting, windsurfing, scuba diving, roller pole and paragliding."
      },
      {
        type: "paragraph",
        text: "*Most terrifying:* Paragliding—without question."
      },
      {
        type: "paragraph",
        text: "*Most expensive:* Wakeboarding and kitesurfing."
      },
      {
        type: "paragraph",
        text: "*Best combination of inexpensive, easy and fun:* Pickleball."
      },
      {
        type: "paragraph",
        text: "*Least likely to become my lifelong passion:* Racewalking, snowboarding, Olympic weightlifting and roller skiing. Sorry—not every sport can be the one."
      },
      {
        type: "paragraph",
        text: "Looking back, the ratings tell a story of their own. The sports I loved most were rarely the easiest or safest. They were the ones that challenged me, frightened me a little and gave me the satisfaction of doing something I wasn’t sure I could do."
      },
      {
        type: "paragraph",
        text: "That is really what *The Whistler’s Daughter* is about: not becoming the best at every sport, but refusing to let a prognosis decide which ones I was allowed to try."
      },
      {
        type: "quote",
        text: "Which sport would you try—and which one would you refuse to attempt even if I paid you?"
      }
    ]
  },
  {
    slug: "the-best-thing-i-did-on-my-first-hut-trip-was-miss-the-bridge",
    title: "The Best Thing I Did on My First Hut Trip Was Miss the Bridge",
    excerpt:
      "I was nervous about my first hut-to-hut trip—until one wrong turn sent me skiing straight into a creek.",
    date: "August 15, 2026",
    category: "Beyond the Book",
    readTime: "2 min read",
    image: "/images/hut-trip-missed-bridge.jpg",
    imageAlt:
      "Kippy Hoene climbing out of a snowy creek beside a solid snow bridge while another skier watches.",
    imageCaption:
      "The bridge was perfectly solid. I simply missed it and skied into the creek instead.",
    content: [
      {
        type: "paragraph",
        text: "In *The Whistler’s Daughter*, I share some of my experiences on hut-to-hut trips. They are over-the-top adventures—remote mountain trails, spectacular scenery, and the wonderful feeling of reaching a warm hut after a long day outside. Everyone should experience one at least once.",
      },
      {
        type: "paragraph",
        text: "What I don’t mention in the book is how nervous I was before my first trip.",
      },
      {
        type: "paragraph",
        text: "I worried about keeping up. I worried about whether I was prepared. Mostly, I worried that everyone else would look capable while I would quickly reveal that I had no idea what I was doing.",
      },
      {
        type: "paragraph",
        text: "Fortunately, I got that part over with during the first hour.",
      },
      {
        type: "paragraph",
        text: "We came to a perfectly solid snow bridge crossing a creek. The bridge wasn’t the problem. I was. I missed my turn, veered off the trail, and skied straight into the water.",
      },
      {
        type: "paragraph",
        text: "That is the snow bridge in the photograph—the perfectly safe bridge I somehow failed to use.",
      },
      {
        type: "paragraph",
        text: "Strangely, I was relieved.",
      },
      {
        type: "paragraph",
        text: "Once you miss an entire bridge and land in a creek in front of everyone, there are no high expectations left to meet. I didn’t have to pretend to be the strongest, fastest, or most experienced person in the group. I could simply climb out, dry off, and keep moving.",
      },
      {
        type: "paragraph",
        text: "And I did.",
      },
      {
        type: "paragraph",
        text: "That embarrassing beginning became one of the reasons I loved the experience so much. It reminded me that adventure doesn’t require looking graceful or knowing exactly what you’re doing. Sometimes it begins with wet clothes, bruised pride, and a group of people trying not to laugh while they help you out of a creek.",
      },
      {
        type: "paragraph",
        text: "The huts were extraordinary. The journey between them was even better. But the real gift was discovering that I didn’t have to prove I belonged there.",
      },
      {
        type: "quote",
        text: "I just had to keep going.",
      },
      {
        type: "paragraph",
        text: "*This is one of many adventures that runs through* The Whistler’s Daughter, *available October 1.*",
      },
    ],
  },
  {
    slug: "the-night-free-advice-mattered",
    title: "The Night Free Advice Mattered",
    excerpt:
      "A folding chair, a homemade sign, and the night our ridiculous little advice stand became something real.",
    date: "August 14, 2026",
    category: "Adventure Girls",
    readTime: "3 min read",
    image: "/images/free-advice-adventure-girls.jpeg",
    imageAlt:
      "Four Adventure Girls smiling together at night while holding their homemade Free Advice sign.",
    imageCaption: "The Adventure Girls, our homemade sign, and more free advice than anyone had asked for.",
    content: [
      {
        type: "paragraph",
        text: "The Adventure Girls and I had a bar table, a poster board, and plenty of free advice, so we set up shop on a corner of the main drag where people spilled out of the bars.",
      },
      {
        type: "paragraph",
        text: "We did have some credentials among us—a nurse, a lawyer, an entrepreneur—and collectively, a great deal of life experience. Surely someone could benefit from our infinite wisdom.",
      },
      {
        type: "paragraph",
        text: "At first, no one did.",
      },
      {
        type: "paragraph",
        text: "People walked past laughing and pointed us out to their friends. A few circled back just to mess with us—a joke, a dare, something funny to tell people the next morning.",
      },
      {
        type: "paragraph",
        text: "But then someone would sit down in the folding chair across from us, still smiling out of habit, and suddenly stop performing. The bravado would disappear, and out would come the real thing—the thing they hadn’t said aloud yet, maybe not even to themselves.",
      },
      {
        type: "image",
        text: "Visitors gathered around the Adventure Girls’ Free Advice table.",
        image: "/images/free-advice-table.jpeg",
        imageAlt:
          "Four visitors smiling and pointing at topics on the Free Advice sign while seated around the outdoor advice table.",
        imageCaption: "Before long, people stopped laughing from a distance and started pulling up a chair.",
      },
      {
        type: "paragraph",
        text: "Before long, people were lining up.",
      },
      {
        type: "paragraph",
        text: "One night, a woman sat beside Julie and started talking. The conversation turned serious. On the way home, Julie told us she was picking the woman up in the morning and driving her to the police station.",
      },
      {
        type: "paragraph",
        text: "She did.",
      },
      {
        type: "paragraph",
        text: "Julie sat beside her while she filed a restraining order—something she hadn’t felt able to do alone, and might never have done, if a homemade poster and a folding chair hadn’t given her somewhere to say the truth out loud to someone willing to listen.",
      },
      {
        type: "paragraph",
        text: "We were just a group of women who kept showing up on the same corner, ready to listen to whoever sat down. Most of what we heard stayed exactly where it belonged—funny, forgettable, or theirs alone.",
      },
      {
        type: "paragraph",
        text: "But every once in a while, the advice stand did something we never advertised it could do.",
      },
      {
        type: "quote",
        text: "It gave someone a doorway.",
      },
      {
        type: "paragraph",
        text: "You don’t always get to choose the moment your presence will matter. Sometimes you just have to show up—and be willing to listen when it does.",
      },
      {
        type: "paragraph",
        text: "This is one of many stories from the years the Adventure Girls spent finding each other, one strange and wonderful stunt at a time—a thread that runs through *The Whistler’s Daughter*, available October 1.",
      },
    ],
  },
  {
    slug: "are-you-tied-in",
    title: "Are You Tied In?",
    excerpt:
      "A thousand feet above the ground, I discovered that skill means very little when attention quietly slips away.",
    date: "August 13, 2026",
    category: "Lessons from the Wall",
    readTime: "3 min read",
    image: "/images/dark-shadows.jpg",
    imageAlt:
      "Kippy Hoene standing on a tiny ledge high on the Dark Shadows climbing route, surrounded by sheer rock and a vast drop below.",
    imageCaption:
      "Look closely and you can see the tiny ledge—and me, standing where I realized I was not tied in.",
    content: [
      {
        type: "paragraph",
        text: "Look closely at the photograph and you can see the tiny ledge—and me, standing where I realized I was not tied in.",
      },
      {
        type: "paragraph",
        text: "I was a thousand feet up a route called Dark Shadows when John’s voice cut through the wind.",
      },
      {
        type: "quote",
        text: "Kippy, you’re not tied into anything.",
      },
      {
        type: "paragraph",
        text: "For one strange moment, I felt completely calm. My hands were on the rock. My feet were secure. Nothing had changed—except that somewhere along the way, operating on autopilot, I had unclipped from the one thing keeping me alive.",
      },
      {
        type: "paragraph",
        text: "I hadn’t slipped or lost my ability to climb. I had simply stopped paying attention, and my body had continued moving as if the safety line were still there.",
      },
      {
        type: "paragraph",
        text: "For years, I thought the lesson was obvious: check your gear, respect the height, and never become complacent. But eventually, I realized it wasn’t only about climbing.",
      },
      {
        type: "heading",
        text: "It was about attention.",
      },
      {
        type: "paragraph",
        text: "How often are we physically present while our minds are somewhere else? We nod through warnings we aren’t really hearing. We trust what we assume is secure without checking the line. Most of our mistakes don’t begin with a dramatic fall. They begin with a quiet, ordinary unclipping we fail to notice.",
      },
      {
        type: "paragraph",
        text: "That day taught me to ask myself a simple question:",
      },
      {
        type: "quote",
        text: "Am I tied in right now?",
      },
      {
        type: "paragraph",
        text: "Am I fully here—present, attentive, and connected to what I’m doing and to the people around me?",
      },
      {
        type: "paragraph",
        text: "Showing up isn’t enough. We have to show up fully, tied into the moment and ready for whatever move comes next.",
      },
      {
        type: "paragraph",
        text: "*This story is one small piece of* The Whistler’s Daughter, *available October 1. It’s a memoir about learning a new sport nearly every year—and what all that climbing, falling, and getting back up taught me about what truly matters.*",
      },
    ],
  },
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
    imagePortrait: true,
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
    imagePortrait: true,
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
