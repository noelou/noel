// Single source of truth for everything on the page.
// Edit here and the whole site updates.

export const profile = {
  name: 'Noelou Jan Nagac',
  nickname: 'Noel',
  role: 'Front-End Web Developer',
  location: 'Cagayan de Oro, Philippines',
  email: 'noelounagac@gmail.com',
  phone: '09565367699',
  codingSince: 2018,
  tagline: 'Willing to learn new things — patience included, especially when fixing bugs.',
}

export const about = {
  intro: [
    `I've been coding since 2018, building responsive, accessible websites with HTML, CSS, JavaScript, and Vue.js.`,
    `I enjoy turning ideas into clean, functional interfaces — and I'm always willing to learn new things.`,
  ],
  focus: [
    {
      title: 'Accessibility first',
      body: `I build to WCAG standards by default. On Kéroul I helped migrate 6,000+ pages to a WCAG 2.2 AA compliant platform.`,
    },
    {
      title: 'Structured content',
      body: `I like modelling content as JSON and wiring it into reusable Vue templates and components — consistent layouts, easy to maintain.`,
    },
    {
      title: 'AI-assisted development',
      body: `I use Claude as a day-to-day pair for code exploration, debugging, and implementation — it makes me faster without cutting corners.`,
    },
  ],
}

export const experience = [
  {
    company: 'httpmédia',
    companyLocation: 'Canada',
    role: 'Front-End Developer',
    start: 'Feb 2021',
    end: 'Present',
    blurb: 'Building innovative digital products that move businesses forward.',
    points: [
      'Develop and maintain responsive websites.',
      'Implemented WCAG accessibility requirements.',
      'Work with HTML, CSS, JavaScript, and Vue.js.',
      'AI-assisted development with Claude.',
      'Structured and organised content data into JSON for integration with Vue.js templates.',
    ],
  },
  {
    company: 'Mednefits',
    companyLocation: 'Singapore',
    role: 'Front-End Developer',
    start: 'Dec 2018',
    end: 'Dec 2020',
    blurb:
      'A healthcare benefits platform helping companies provide benefits to employees at lower cost.',
    points: [
      'Develop and maintain responsive websites.',
      'Work with HTML, CSS, JavaScript, and Vue.js.',
    ],
  },
  {
    company: 'XDevs',
    companyLocation: 'Philippines',
    role: 'Front-End Developer',
    start: 'Feb 2018',
    end: 'Dec 2018',
    blurb: 'Professional outsourcing services building products for clients.',
    points: [
      'Develop and maintain responsive websites.',
      'Work with HTML, CSS, and JavaScript.',
    ],
  },
]

export const education = {
  school: 'Mindanao University of Science and Technology',
  schoolLocation: 'Cagayan de Oro City',
  degree: 'BS in Information Technology',
  start: '2010',
  end: '2015',
}

export const projects = [
  {
    name: 'Kéroul — Accessible Tourism',
    kind: 'Professional',
    stack: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
    summary:
      'Tourist accessibility platform for Quebec. 6,000+ pages migrated to the HAT, all WCAG 2.2 AA compliant, with centralized content management and accessible templates.',
    points: [
      'Implemented WCAG accessibility requirements across the platform.',
      'Built responsive pages with HTML, CSS, JavaScript, and Vue.js.',
      'Structured content data into JSON for Vue.js templates.',
      'Created reusable templates and components for consistent layouts.',
    ],
    url: 'https://www.keroul.qc.ca/fr',
  },
  {
    name: 'Kung-Fu Laval',
    kind: 'Professional',
    stack: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
    summary:
      "Bilingual website for a martial arts school — programs, instructors, schedules, testimonials, and trial-class booking.",
    points: [
      'Built responsive pages with HTML, CSS, JavaScript, and Vue.js.',
      'Structured content data into JSON for Vue.js templates.',
      'Implemented reusable templates and components.',
      'Applied semantic HTML and accessibility best practices.',
    ],
    url: 'https://kungfu-laval.com/en',
  },
  {
    name: 'CGY Ballers',
    kind: 'Personal',
    stack: ['React', 'HTML', 'CSS', 'JavaScript'],
    summary:
      'Responsive basketball league website presenting teams, players, game info, standings, and league content in a user-friendly interface.',
    points: [
      'Built reusable React components for each section and page.',
      'Structured and organised content data for use in the app.',
      'Implemented responsive layouts with HTML, CSS, and JavaScript.',
      'Used Claude for code exploration, debugging, and implementation.',
      'Deployed on Netlify.',
    ],
    url: 'https://cgyballers.netlify.app',
  },
  {
    name: 'Wedding RSVP',
    kind: 'Personal',
    stack: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
    summary:
      'Responsive wedding website and RSVP experience with a focus on clean UI and structured content management.',
    points: [
      'Built with Vue.js, HTML, CSS, and JavaScript.',
      'Structured content with JSON data wired into reusable Vue templates.',
      'Responsive layout optimised for mobile and desktop.',
      'Applied semantic HTML and accessibility best practices.',
      'Deployed for production use.',
    ],
    url: 'https://wedding.gacs.me/',
  },
]

export const skills = [
  {
    group: 'Languages & Markup',
    items: ['HTML5 / Semantic HTML', 'CSS3', 'JavaScript'],
  },
  {
    group: 'Frameworks',
    items: ['Vue.js', 'React'],
  },
  {
    group: 'Craft',
    items: [
      'Responsive Web Design',
      'WCAG / Web Accessibility',
      'JSON / Data Structuring',
      'Reusable Components & Templates',
    ],
  },
  {
    group: 'Workflow',
    items: ['AI-Assisted Development (Claude)', 'Netlify Deployment', 'Git'],
  },
]

export const languages = ['English', 'Filipino']
