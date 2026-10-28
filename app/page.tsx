import Image from 'next/image';
import {
  ArrowUpRight,
  Github,
  Mail,
  Sprout,
  Route,
  CircuitBoard,
  Download,
  Linkedin,
  GraduationCap,
  Globe2,
  Code2,
  Bike,
  Plane,
  UtensilsCrossed,
  Music2,
  Radio,
  Eye
} from 'lucide-react';

const links = {
  github: 'https://github.com/Mutinda-Mark',
  linkedin: 'https://www.linkedin.com/in/mark-mutinda-8a8445244/',
  email: 'mailto:mutindamark2003@gmail.com',
  cv: '/Mark-Mutinda-CV.pdf',
};

const projects = [
  {
    number: '01',
    title: 'KILIMO',
    category: 'AI / AGRICULTURE',
    status: 'In development',
    detail:
      'KILIMO is my final-year project: a smartphone-based advisory system designed to help tomato farmers identify diseases and access practical guidance. It combines deep learning for image classification, explainable AI, disease severity estimation and retrieval-augmented generation to provide contextual recommendations through WhatsApp.',
    stack: ['Python', 'FastAPI', 'EfficientNet', 'Computer Vision', 'RAG', 'Next.js'],
    className: 'kilimo',
    icon: Sprout,
    link: null,
    footnote:
      'Final-year research project · Model validation and system integration in progress',
  },
  {
    number: '02',
    title: 'NJIA',
    category: 'COMPUTER VISION / MOBILITY',
    status: 'Concept & development',
    detail:
      'NJIA explores the application of computer vision and community reporting to road infrastructure monitoring. The idea is to make road hazards easier to identify, document and communicate, supporting better awareness of road conditions and more informed decisions about mobility.',
    stack: ['Computer Vision', 'Image Processing', 'Civic Technology', 'Software Design'],
    className: 'njia',
    icon: Route,
    link: null,
    footnote: 'Exploratory project · Public implementation details to be added',
  },
  {
    number: '03',
    title: 'ALCOTRACK',
    category: 'MOBILE / EMBEDDED SYSTEMS',
    status: 'Repository available',
    detail:
      'AlcoTrack brings together mobile application development and embedded systems through an Android and Arduino-based project. It explores how software running on a smartphone can interact with physical hardware, combining application logic with connected-device development.',
    stack: ['Kotlin', 'Android', 'Arduino', 'Embedded Systems'],
    className: 'alcotrack',
    icon: CircuitBoard,
    link: 'https://github.com/Mutinda-Mark/AlcoTrack',
    footnote: 'Android and Arduino components · Further technical documentation in progress',
  },
];

const timeline = [
  {
    period: '2023 — 2027',
    category: 'UNDERGRADUATE EDUCATION',
    title: 'Strathmore University',
    location: 'KENYA',
    description:
      'Bachelor of Science in Informatics & Computer Science. Developing a foundation in software engineering, artificial intelligence, cybersecurity, information systems and computing research.',
    note: 'EXPECTED GRADUATION — 2027',
    icon: GraduationCap,
  },
  {
    period: '2025 — 2026',
    category: 'INTERNATIONAL ACADEMIC EXCHANGE',
    title: "CESI École d'Ingénieurs",
    location: 'FRANCE',
    description:
      'Academic exchange in Toulouse, France, from September 2025 to January 2026. An opportunity to experience a different engineering education environment, collaborate internationally and develop new perspectives on technology and problem-solving.',
    note: 'TOULOUSE, FRANCE',
    icon: Globe2,
  },
  {
    period: 'ONGOING',
    category: 'PROJECTS & PRACTICAL DEVELOPMENT',
    title: 'Learning Through Building',
    location: 'PROJECTS',
    description:
      'Applying computer science concepts through projects involving agricultural AI, road-safety technology, mobile applications and embedded systems. My work spans experimentation, system design, implementation and continuous improvement.',
    note: 'KILIMO · NJIA · ALCOTRACK',
    icon: Code2,
  },
];

export default function Home() {
  return (
    <main>
      {/* TOP BAR */}
      <div className="topline">
        <span>
          MARK MUTINDA{' '}
          <span className="toplineLight">/ DIGITAL PORTFOLIO</span>
        </span>
        <span>
          2026 EDITION —{' '}
          <span className="availability">OPEN TO COLLABORATIONS &amp; OPPORTUNITIES</span>
        </span>
      </div>

      {/* NAVIGATION */}
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Mark Mutinda, back to top">
          mm<span className="brandDot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#journey">Journey</a>
          <a href="#beyond">Beyond</a>
          <a className="navContact" href="#contact">
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero shell" id="top">
        <div className="heroPrelude">
          <span className="eyebrow"><span className="miniDot" /> AN INTRODUCTION</span>
          <span className="issue">VOL. 01 — IDEAS INTO SYSTEMS</span>
        </div>
        <div className="heroSplit">
          <div className="heroContent">
            <div className="heroHeading">
              <span className="heroGreeting">HELLO, I&apos;M MARK MUTINDA</span>
              <h1>
                Curiosity,<br />
                <em>translated</em><br />
                into working<br />
                systems<span className="period">.</span>
              </h1>
            </div>
            <p className="heroDescription">
              I&apos;m <strong>Mark Mutinda</strong>, a Computer Science student exploring the
              intersection of software engineering, intelligent systems and human-centered technology.
            </p>
            <div className="heroActions">
              <a href="#work" className="heroPrimary">EXPLORE MY WORK <ArrowUpRight size={17} /></a>
              <a href="/cv" className="heroCV">
                <Eye size={17} />
                VIEW CV
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="heroSecondary" aria-label="Visit my GitHub profile">
                <Github size={18} /> GITHUB
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="heroSecondary" aria-label="Visit my LinkedIn profile">
                <Linkedin size={18} /> LINKEDIN
              </a>
            </div>
            <div className="heroSignature">
              <span className="signatureLine" />
              <span>BUILDING WITH CURIOSITY &amp; INTENTION</span>
            </div>
          </div>
          <div className="heroPortrait">
            <div className="portraitFrame">
              <Image
                src="/images/Mark.jpg"
                alt="Portrait of Mark Mutinda outdoors by a lake"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 42vw"
                className="portraitImage"
              />
            </div>
            <div className="portraitCaption">
              <span>FIG. 01 — THE PERSON BEHIND THE CODE</span>
              <span>MM / 2026</span>
            </div>
            <div className="portraitAccent" aria-hidden="true" />
          </div>
        </div>
        <div className="heroMeta">
          <span>BASED IN KENYA · THINKING BEYOND BORDERS</span>
          <a href="#about">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="aboutPanel" id="about">
        <div className="shell aboutGrid">
          <div>
            <span className="eyebrow lightEyebrow">01 / THE PERSON</span>
            <h2>More than<br /><em>just the code.</em></h2>
          </div>
          <div className="aboutCopy">
            <p>I&apos;m a Computer Science student at Strathmore University with an interest in building technology that solves practical problems.</p>
            <p>My interests move between software engineering, artificial intelligence, cybersecurity and the systems that connect them. I&apos;m particularly interested in understanding how different technologies can work together to create useful, reliable solutions.</p>
            <p>My academic exchange at CESI in Toulouse, France, gave me the opportunity to experience a different learning environment and broadened my perspective on engineering, collaboration and opportunities beyond familiar surroundings.</p>
            <div className="aboutChips"><span>INTELLIGENT SYSTEMS</span><span>SOFTWARE ENGINEERING</span><span>ALWAYS LEARNING</span></div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="work shell" id="work">
        <div className="sectionHeading">
          <div>
            <span className="eyebrow">02 / SELECTED WORK</span>
            <h2>Things I&apos;ve<br /><em>been building.</em></h2>
          </div>
          <p>A selection of projects exploring the intersection of software, intelligent systems and real-world problem-solving. Some are still evolving, and each represents a different part of my technical journey.</p>
        </div>
        <div className="projectList">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className={`project ${project.className}`} key={project.number}>
                <div className="projectVisual">
                  <div className="visualTop"><span>PROJECT / {project.number}</span><span>MM — 2026</span></div>
                  <div className="visualCenter">
                    <div className="visualOrbit"><Icon size={80} strokeWidth={1} aria-hidden="true" /></div>
                    <span className="visualWord">{project.title}</span>
                  </div>
                  <div className="visualBottom"><span>{project.category}</span><span aria-hidden="true">↗</span></div>
                </div>
                <div className="projectInfo">
                  <div className="projectTop"><span className="eyebrow">FEATURED PROJECT {project.number}</span><span className="status">● {project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                  <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="projectFooter">
                    <small>{project.footnote}</small>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">VIEW REPOSITORY <ArrowUpRight size={17} /></a>
                    ) : (
                      <span className="noLink">DOCUMENTATION COMING SOON</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <a className="otherWork" href={links.github} target="_blank" rel="noopener noreferrer">
          <span>Explore more work on GitHub</span><ArrowUpRight />
        </a>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section className="expertise">
        <div className="shell expertiseGrid">
          <div><span className="eyebrow lightEyebrow">03 / WORKING KNOWLEDGE</span><h2>A growing<br /><em>toolbox.</em></h2></div>
          <div className="skillColumns">
            <div><h3>Engineering</h3><p>Python · C# · Kotlin<br />TypeScript · SQL<br />FastAPI · ASP.NET Core<br />Next.js · PostgreSQL</p></div>
            <div><h3>Exploration</h3><p>Machine Learning<br />Computer Vision<br />Cybersecurity &amp; Design<br />Embedded Systems · RAG</p></div>
          </div>
        </div>
      </section>

      {/* ACADEMIC JOURNEY */}
      <section className="journey shell" id="journey">
        <div className="sectionHeading">
          <div><span className="eyebrow">04 / THE JOURNEY</span><h2>Places, people<br /><em>&amp; perspectives.</em></h2></div>
          <p>My academic journey has shaped how I approach problems, collaborate with others and continue developing as a computer scientist.</p>
        </div>
        <div className="timeline">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <div className="timelineItem" key={item.title}>
                <span className="timelineYear">{item.period}</span>
                <div>
                  <div className="timelineLabel"><Icon size={17} aria-hidden="true" /><span>{item.category}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="journeyNote">{item.note}</span>
                </div>
                <span className="timelineSide">{item.location}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* BEYOND THE SCREEN */}
      <section className="personal shell" id="beyond">
        <div className="personalTopline">
          <span className="eyebrow">05 / BEYOND THE SCREEN</span>
          <span className="personalEdition">THE UNFILTERED EDITION</span>
        </div>
        <div className="personalIntro">
          <h2>There&apos;s more to life<br />than <em>semicolons.</em></h2>
          <p>I&apos;m a curious person by nature, and not all my interests involve a keyboard. Sometimes it&apos;s two wheels, a new destination, a good meal, or music that&apos;s just too good to skip.</p>
        </div>

        {/* THE RADIO STORY */}
        <div className="radioStory">
          <div className="radioStoryVisual">
            <div className="radioVisualTop"><span>AN ORIGIN STORY</span><span>001 / CURIOSITY</span></div>
            <div className="radioIllustration"><div className="radioOrbit"><Radio size={94} strokeWidth={1} aria-hidden="true" /></div></div>
            <div className="radioVisualBottom"><span>IT STARTED WITH A BROKEN RADIO</span><span>↗</span></div>
          </div>
          <div className="radioStoryContent">
            <span className="eyebrow">THE STORY BEHIND THE CURIOSITY</span>
            <h3>They didn&apos;t think<br />I could <em>fix it.</em></h3>
            <p>There was this broken radio that nobody thought I could fix. And perhaps they had a point — I didn&apos;t exactly know what I was doing.</p>
            <p>But I wanted to try anyway.</p>
            <p>I was curious about what had gone wrong, what made it work in the first place, and whether I could figure it out. So I gave it a shot.</p>
            <p>Looking back, I think that little radio says quite a lot about me. I don&apos;t need to have every answer before starting. Sometimes, the interesting part is figuring things out along the way.</p>
            <div className="radioTakeaway"><span className="radioTakeawayLine" /><span>CURIOSITY FIRST. FIGURE IT OUT AS YOU GO.</span></div>
          </div>
        </div>

        {/* INTERESTS */}
        <div className="personalInterestsHeader">
          <div><span className="eyebrow">OFF THE CLOCK</span><h3>A few things that<br /><em>keep life interesting.</em></h3></div>
          <p>Because a life well lived needs a little more than clean code and working systems.</p>
        </div>
        <div className="interestGrid">
          <article className="interestCard interestWheels">
            <div className="interestCardTop"><span>01 / THE OPEN ROAD</span><Bike size={25} strokeWidth={1.4} aria-hidden="true" /></div>
            <div><h4>Life on<br /><em>two wheels.</em></h4><p>Two wheels, an open road, and nowhere to rush. There&apos;s something about the freedom of the ride that makes the journey just as good as the destination.</p></div>
            <span className="interestCardBottom">THE JOURNEY MATTERS</span>
          </article>
          <article className="interestCard interestTravel">
            <div className="interestCardTop"><span>02 / NEW HORIZONS</span><Plane size={25} strokeWidth={1.4} aria-hidden="true" /></div>
            <div><h4>Somewhere<br /><em>I&apos;ve never been.</em></h4><p>New cities, different cultures, unfamiliar streets and unexpected discoveries. I enjoy seeing how big the world is beyond what I know.</p></div>
            <span className="interestCardBottom">MORE PLACES, MORE STORIES</span>
          </article>
          <article className="interestCard interestFood">
            <div className="interestCardTop"><span>03 / SOMETHING&apos;S COOKING</span><UtensilsCrossed size={25} strokeWidth={1.4} aria-hidden="true" /></div>
            <div><h4>Good food.<br /><em>Better company.</em></h4><p>I enjoy cooking, experimenting with flavours, and discovering good places to eat. Some of the best conversations happen around a table.</p></div>
            <span className="interestCardBottom">ALWAYS ROOM FOR SECONDS</span>
          </article>
          <article className="interestCard interestMusic">
            <div className="interestCardTop"><span>04 / TURN IT UP</span><Music2 size={25} strokeWidth={1.4} aria-hidden="true" /></div>
            <div><h4>Life has a<br /><em>soundtrack.</em></h4><p>Music makes ordinary moments memorable. Whether it&apos;s discovering a new artist or experiencing live music, there&apos;s always something worth listening to.</p></div>
            <span className="interestCardBottom">GOOD MUSIC, GOOD ENERGY</span>
          </article>
        </div>
        <div className="personalClosing">
          <span>STILL CURIOUS. STILL EXPLORING.</span>
          <a href="#contact">GET TO KNOW ME <ArrowUpRight size={16} /></a>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer className="footer" id="contact">
        <div className="shell">
          <span className="eyebrow lightEyebrow">06 / THE NEXT CONVERSATION</span>
          <h2>Let&apos;s make<br /><em>something matter.</em></h2>
          <p className="footerIntro">
            I&apos;m open to meaningful collaborations, interesting projects, learning opportunities and conversations about technology. If something I&apos;m working on interests you, I&apos;d be glad to connect.
          </p>
          <div className="footerActions">
            <a href={links.email}><Mail size={18} /> EMAIL <ArrowUpRight size={17} /></a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LINKEDIN <ArrowUpRight size={17} /></a>
            <a href={links.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GITHUB <ArrowUpRight size={17} /></a>
            <a href={links.cv} download="Mark-Mutinda-CV.pdf"><Download size={18} /> DOWNLOAD CV</a>
          </div>
          <div className="footerBottom">
            <span>© {new Date().getFullYear()} MARK MUTINDA</span>
            <span>BUILT WITH CURIOSITY &amp; INTENTION</span>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
