const siteData = {
  home: {
    title: "home",
    subtitle: null,
    content: [
      {
        title: "projects",
        link: "projects",
        isExternalLink: false
      },
      {
        title: "bookshelf",
        link: "bookshelf",
        isExternalLink: false
      },
      {
        title: "articles",
        link: "articles",
        isExternalLink: false
      },
      {
        title: "written / writing",
        link: "writing",
        isExternalLink: false
      },
    ],
  },
  projects: {
    title: "projects",
    subtitle: "",
    content: [
      {
        title:
          "Pyrus: Designing A Collaborative Programming Game to Support Problem-Solving Behaviors",
        body:
          "Research exploring how to motivate novice programmers to practice problem solving skills while working on programming challenges. Encouraging behaviors like planning in advance through game mechanics.",
        link: null,
        isExternalLink: true,
        tag: ['research', 'learning game'],
        references: [
          {
            name: "Paper",
            url: "http://eleanorourke.com/papers/pyrus_collaborative_programming_chi.pdf"
          },
          {
            name: "Github",
            url: "https://github.com/NUDelta/pyrus"
          }
        ]
      },
      {
        title:
          "Pipes: A game to learn functional array methods (map, filter, reduce)",
        body:
          "How can we make learning experiences more compelling? In exploration of alternative approaches to teach and learn new skills, I'm exploring ways to apply game design wisdom to a learning context.",
        link: null,
        isExternalLink: true,
        tag: ['learning game'],
        status: 'in progress',
        references: [
          {
            name: "What I've learned",
            url: "https://www.notion.so/Artifacts-c6a59e8d1feb4bd5af88e87edaf052c7"
          },
          {
            name: "Working notes in public",
            url: "https://www.notion.so/Game-Learning-Design-Log-d98c51c749ef496dbcb13bb87dc58716"
          },
          {
            name: "Figma designs in progress",
            url: "https://www.figma.com/file/Nq3CR0mOSjCaDeAWxXtuxt/Learning-Game-Try-2-5?node-id=0%3A1"
          } 
        ],
      },
      {
        title:
          "Noted: Save meaningful readings and the insights you draw from them quickly",
        body:
          "Building off an old project, I used this chrome extension as a playground to practice pure javascript concepts and understand why frameworks and libraries like React are so useful",
        link: null,
        isExternalLink: true,
        tag: [''],
        references: [
          {
            name: "Chrome Web Store",
            url: "https://chrome.google.com/webstore/detail/noted/imlpboogehgimmfiilnkcgbimkibkmip"
          },
          {
            name: "Github",
            url: "https://github.com/armaanshah96/noted"
          }
        ],
      },
      {
        title:
          "A Non-Technical NLP Syllabus",
        body:
          "A friend recently asked if their idea 'is possible' with 'AI'. While it's easy to find content explaining algorithms and methodologies in AI, finding content that paints a broad picture of 'what is possible' for a non-technical reader is rare. This is a foray into what it would take to create a reasonable syllabus on how to 1) understand what is possible in NLP specifically, 2) how to stay up to date with the cutting edge technical aspects as a non-technical consumer",
        link: null,
        isExternalLink: true,
        tag: ['syllabus'],
        status: 'just starting',
        references: [
          {
            name: "Working notes in public",
            url: "https://www.notion.so/armaanshah/AI-Machine-Learning-Syllabus-3b955bee875545389614a5c19bc075aa"
          }
        ]
      },
    ],
  },
  bookshelf: {
    title: "bookshelf",
    subtitle: "for books that were just incredible and worth a reread",
    content: [
      {
        title: "A Gentleman In Moscow by Amor Towles",
        body:
          "Incredible story of gratitude, ideology, and appreciation of the mundane.",
        link: null,
      },
      {
        title: "How Will You Measure Your Life by Clayton Christensen",
        body:
          "Ideas behind how spending my time defines who I am and how I can prioritize what's actually important",
        link: null,
      },
      {
        title: "Educated by Tara Westover",
        body:
          "A memoir that reads like fiction. Deals with the clash of family and societal culture.",
        link: null,
      },
      {
        title: "The Fifth Season by N.K. Jemisin",
        body: "Masterful world building and storytelling with commentary on the real world I didn't expect. The closest I've ever come to watching a movie in a book. ",
        link: null,
      },
      {
        title: "My Grandmother Told Me To Tell You She's Sorry by Fredrik Backman",
        body: "Beautiful, imaginative storytelling putting words to ineffable aspects of human dynamics and nature.",
        link: null,
      },
      {
        title: "In Search of Schrodingers Cat by John Gribbin",
        body: "Mind-bending intro into quantum mechanics and its implications.",
        link: null,
      },
      {
        title: "The Consolations of Philosophy by Alain de Boton",
        body: "An approachable introduction to philosophy.",
        link: null,
      },
      {
        title: "The Shock Doctrine by Naomi Klein",
        body:
          "Sheds light on how the ideology of Milton Friedman has been forced upon country after country by the US for monetary gain and maintenance of a U.S. centric power structure.",
        link: null,
      },
      {
        title: "Stories of Your Life and Others by Ted Chiang",
        body: "Short story explorations of what worlds could look like when the rules of reality are tweaked. Made me recognize some rules of society I have just accepted as true.",
        link: null,
      },
    ],
  },
  articles: {
    title: "articles",
    subtitle: "some content that shifted my thinking and my attention",
    content: [
      {
        title: "The Ideological Turing Test",
        body:
          "I'm wrong more often than not and it's worth treating interactions with that awareness. It's an idea obvious to many, but approaching conversations from that standpoint can be tough. With disagreements, refute the strongest part of the opposing argument, the steel man, to be less wrong.",
        link: "https://medium.com/the-polymath-project/the-ideological-turing-test-how-to-be-less-wrong-6803a8c290cf",
        isExternalLink: true
      },
      {
        title: "The Dangers of a Single Story",
        body:
          "We are especially susceptible to having prejudice against groups or identities that we do not have a lot of exposure to. When I only hear one kind of story of such a group, I am more likely to reduce the entire group to that story. Something to watch out for and correct",
        link: "https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story?language=en",
        isExternalLink: true
      },
      {
        title: "Keep Your Identity Small",
        body:
          "With a strongly held belief, we orient towards defending that belief. Our identity, in some ways, is being challenged. If I want to have better ideas, fewer strongly held beliefs will allow me to think more clearly and listen more receptively.",
        link: "http://www.paulgraham.com/identity.html",
        isExternalLink: true
      },
      {
        title: "Meditations on Moloch",
        body:
          "In competitive systems, when there is enough competition, the person or group to sacrifice a common value will gain a momentary competitive advantage. At least until the other groups also sacrifice that value at which point we have returned to the same starting situation, just with fewer values. It's a scary slippery slope.",
        link: "https://slatestarcodex.com/2014/07/30/meditations-on-moloch/",
        isExternalLink: true
      },
      {
        title: "Clueyness",
        body:
          "Comically accurate description of a specific kind of sad, uncomfortable, guilty feeling that I've always found difficult to describe.",
        link: "https://waitbutwhy.com/2016/05/clueyness-a-weird-kind-of-sad.html",
        isExternalLink: true
      },
    ],
  },
  writing: {
    title: "written / writing",
    subtitle: "half to full baked ideas",
    content: [
      {
        title:
          "Conflating money and value",
        body:
          "",
        link: null,
        isExternalLink: false,
        status: 'todo'
      },
      {
        title:
          "Coding as a communication medium",
        body:
          "",
        link: null,
        isExternalLink: false,
        status: 'todo'
      },
      {
        title:
          "Stability and family vs. freedom, eastern and western ideologies",
        body:
          "",
        link: null,
        isExternalLink: false,
        status: 'todo'
      },
    ],
  },
  armaan: {
    title: "armaan",
    subtitle: "other info",
    content: [
      {
        title: "armaanshah96 at gmail.com",
        body: "looking to build learning experiences and open to opportunities to do so",
        link: null,
      }
    ],
  },
};

export default siteData;
