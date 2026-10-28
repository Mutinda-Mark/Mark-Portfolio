import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import styles from './cv.module.css';

export const metadata: Metadata = {
  title: 'Curriculum Vitae | Mark Mutinda',
  description: 'Experience, education, leadership, technical skills and community involvement of Mark Mutinda.',
};

const experience = [
  { date: 'JAN — APR 2025', title: 'Cyber Assurance Intern', org: 'Safaricom PLC', points: [
    'Conducted simulated attacks and vulnerability scans to identify system weaknesses.',
    'Monitored network and endpoint logs for real-time incident response.',
    'Served as a Security Champion in SDLCs including Daraja, M-Pesa and other company applications.',
  ]},
  { date: 'MAR — APR 2024', title: 'Technology Intern · Sales & Marketing', org: 'Predictive Analytics Lab', points: [
    'Supported data collection and process documentation for an analytics project in Ethiopia.',
    'Worked with cross-functional teams to streamline course applications through digital form automation.',
    'Authored technical articles and project minutes for project tracking.',
  ]},
  { date: 'JAN — MAR 2024', title: 'Volunteer · 230 hours', org: 'Kenya National Library Services, Upperhill', points: [
    'Helped digitize and categorize library collections to improve information retrieval.',
    'Supported more than 200 users in accessing digital resources and public information services.',
    'Coordinated mobile library operations to extend services to underserved areas.',
  ]},
];

const education = [
  { date: 'JUL 2022 — SEP 2027', school: 'Strathmore University', detail: 'BSc Informatics and Computer Science · Expected graduation 2027' },
  { date: 'SEP 2025 — JAN 2026', school: 'CESI School of Engineering · Toulouse, France', detail: 'FISE Info Anglophone A3 2025–26 · Academic exchange' },
  { date: 'AUG — DEC 2024', school: 'Strathmore University · Safaricom Certification', detail: 'Certificate in Software Architecture Development and IT Automation' },
  { date: 'APR — JUN 2022', school: 'Strathmore University', detail: 'Certificate in Computer Applications' },
  { date: 'JAN 2018 — APR 2022', school: 'Moi High School – Kabarak', detail: 'Kenya Certificate of Secondary Education' },
];

const leadership = [
  { date: 'SEP 2024 — AUG 2025', role: 'Events and Planning Associate', group: 'Strathmore Student Council · Academic Senate' },
  { date: 'AUG 2024 — AUG 2025', role: 'Funding and Event Management Team Lead', group: 'Don Bosco Catholic Church · Youth Serving Christ' },
  { date: 'JAN — MAR 2024', role: 'Volunteers Team Lead', group: 'Kenya National Library Services, Upperhill' },
  { date: 'APR — JUL 2022', role: 'Class Representative', group: 'Strathmore University · Computer Applications Certificate' },
  { date: 'JAN 2021 — APR 2022', role: 'School President', group: 'Moi High School – Kabarak' },
];

export default function CvPage() {
  return (
    <main className={styles.page}>
      <div className={styles.topline}><span>MARK MUTINDA / CURRICULUM VITAE</span><span>2026 EDITION</span></div>
      <div className={styles.container}>
        <header className={styles.nav}>
          <Link href="/" className={styles.brand} aria-label="Back to portfolio">mm<span>.</span></Link>
          <Link href="/" className={styles.back}><ArrowLeft size={16}/> BACK TO PORTFOLIO</Link>
        </header>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>A CLOSER LOOK / MY EXPERIENCE & BACKGROUND</span>
          <h1>The story <em>so far.</em></h1>
          <p>I'm Mark Mutinda, a Computer Science student interested in building meaningful technology. My work and studies span software development, cybersecurity, intelligent systems and collaborative problem-solving.</p>
          <div className={styles.heroActions}>
            <a className={styles.primary} href="/Mark-Mutinda-CV.pdf" download="Mark-Mutinda-CV.pdf"><Download size={16}/> DOWNLOAD PDF CV</a>
          </div>
          <div className={styles.details}>
            <span><MapPin size={15}/> NAIROBI, KENYA</span>
            <a href="https://github.com/Mutinda-Mark" target="_blank" rel="noopener noreferrer"><Github size={15}/> GITHUB</a>
            <a href="https://www.linkedin.com/in/mark-mutinda-8a8445244/" target="_blank" rel="noopener noreferrer"><Linkedin size={15}/> LINKEDIN</a>
          </div>
        </section>
        <section className={styles.section} id="experience">
          <div className={styles.sectionTitle}><span className={styles.eyebrow}>01 / PROFESSIONAL EXPERIENCE</span><h2>Where I've <em>contributed.</em></h2></div>
          <div className={styles.entries}>{experience.map(job => <article className={styles.entry} key={job.org}><span className={styles.date}>{job.date}</span><div><h3>{job.title}</h3><p className={styles.organization}>{job.org}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
        </section>
        <section className={styles.section} id="education">
          <div className={styles.sectionTitle}><span className={styles.eyebrow}>02 / EDUCATION</span><h2>Learning <em>without borders.</em></h2></div>
          <div className={styles.entries}>{education.map(item => <article className={styles.entry} key={item.school + item.date}><span className={styles.date}>{item.date}</span><div><h3>{item.school}</h3><p>{item.detail}</p></div></article>)}</div>
        </section>
        <section className={styles.section} id="leadership">
          <div className={styles.sectionTitle}><span className={styles.eyebrow}>03 / LEADERSHIP</span><h2>Taking <em>initiative.</em></h2></div>
          <div className={styles.entries}>{leadership.map(item => <article className={styles.entry} key={item.role + item.date}><span className={styles.date}>{item.date}</span><div><h3>{item.role}</h3><p>{item.group}</p></div></article>)}</div>
        </section>
        <section className={styles.skillsSection} id="skills">
          <span className={styles.eyebrow}>04 / TECHNICAL CAPABILITIES</span><h2>Tools of the <em>trade.</em></h2>
          <div className={styles.skillGrid}>
            <div><h3>Programming</h3><p>Kotlin · Python · JavaScript · HTML · CSS</p></div>
            <div><h3>Databases & Systems</h3><p>MySQL · Windows · Linux (CentOS)</p></div>
            <div><h3>Security Tools</h3><p>Wireshark · Burp Suite · Metasploit · OWASP ZAP · Nmap · VirtualBox · Active Directory</p></div>
            <div><h3>Practice Areas</h3><p>Vulnerability Assessment · Risk Analysis · Network Security · Secure SDLC · Automation</p></div>
          </div>
        </section>
        <section className={styles.section} id="community">
          <div className={styles.sectionTitle}><span className={styles.eyebrow}>05 / COMMUNITY & BEYOND</span><h2>Beyond the <em>job title.</em></h2></div>
          <div className={styles.communityGrid}>
            <div><h3>Community engagement</h3><p>Korr Dream Initiative · Community Outreach Program (since 2023) · Strathmore Toastmasters Gavel Club (since 2023)</p></div>
            <div><h3>Achievements & service</h3><p>President's Award Scheme — Silver Award · Cyclist Marshal, Standard Chartered Marathon (since 2021)</p></div>
            <div><h3>Personal interests</h3><p>Long-distance cycling · Poetry · Aviation · Internet of Things</p></div>
          </div>
        </section>
        <footer className={styles.footer}><div><span className={styles.eyebrow}>THE NEXT CONVERSATION</span><h2>Let's <em>connect.</em></h2><p>Open to collaborations, opportunities and conversations about technology.</p></div><div className={styles.footerLinks}><a href="mailto:mutuku.mutuku@strathmore.edu">EMAIL <ArrowUpRight size={16}/></a><a href="/Mark-Mutinda-CV.pdf" download>DOWNLOAD CV <Download size={16}/></a><Link href="/">BACK TO PORTFOLIO <ArrowUpRight size={16}/></Link></div></footer>
      </div>
    </main>
  );
}
