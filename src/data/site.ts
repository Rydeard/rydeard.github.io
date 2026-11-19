// All editable site content lives here.
// Icons are file names (without .svg) from src/icons/.

export const site = {
  name: 'Luke Rydeard',
  role: 'Engineering Lead + Full-Stack Software Engineer',
  location: 'Wakefield, England',
  email: 'lukerydeard@gmail.com',
  cv: 'luke-rydeard-cv.pdf', // file in public/
  github: 'https://github.com/Rydeard',
};

export const about = [
  "I'm a computer nerd living in Wakefield, England. I'm primarily a programmer, but I also have a love for eye-catching yet simple designs.",
  'I studied MEng Computer Science at the University of York. Since then I’ve built mobile apps, web apps, and APIs end to end, and these days I lead the engineering team at Lifted.',
];

export type Job = {
  company: string;
  url?: string;
  blurb?: string;
  period: string;
  roles: { title: string; period: string }[];
  description: string[];
  tags?: string[];
};

export const experience: Job[] = [
  {
    company: 'Lifted',
    url: 'https://www.liftedcare.com/',
    blurb: 'Tech-enabled home care',
    period: '2022 – present',
    roles: [
      { title: 'Engineering Lead', period: '2026 – present' },
      { title: 'Senior Software Engineer', period: '2025 – 2026' },
      { title: 'Mobile Engineer', period: '2022 – 2025' },
    ],
    description: [
      'Joined to build Lifted’s Flutter carer app, then helped create Lifted Talent, a platform that screens and onboards carers and matches them with care providers. I worked across the whole stack: the Flutter app (my longest-running codebase, at 1,000+ commits), a TypeScript GraphQL API on PostgreSQL and AWS, and SolidJS web apps for carers and recruiters.',
      'Along the way I picked up infrastructure as code with Terraform and LLM integrations, and now I lead the engineering team: reviewing, mentoring, and shaping how we build.',
    ],
    tags: ['Flutter', 'TypeScript', 'GraphQL', 'PostgreSQL', 'SolidJS', 'AWS', 'Terraform'],
  },
  {
    company: 'OpenLeaf',
    blurb: 'Garage startup',
    period: '2025',
    roles: [{ title: 'Founder / Lead Engineer', period: '2025' }],
    description: [
      'A garage startup leveraging LLMs to build a chapter-by-chapter reading platform, with reading progress, bookmarks, ratings, comments, and a rich-text editor for writers. A valuable lesson in the power of fast MVPs and product experimentation.',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Cloudflare', 'LLMs'],
  },
];

export type Skill = { name: string; icon: string };

export const skillGroups: { title: string; note?: string; items: Skill[] }[] = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Dart', icon: 'dart' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    title: 'Frameworks',
    note: 'And way too many more…',
    items: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'SolidJS', icon: 'solidjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'Django', icon: 'django' },
    ],
  },
  {
    title: 'Cloud + Data',
    items: [
      { name: 'AWS', icon: 'aws-ec2' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Cloudflare', icon: 'cloudflare' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Docker', icon: 'docker' },
    ],
  },
  {
    title: 'AI, Tooling + More',
    items: [
      { name: 'Claude', icon: 'claude' },
      { name: 'GitHub Actions', icon: 'github-actions' },
      { name: 'Sentry', icon: 'sentry' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Slack', icon: 'slack' },
    ],
  },
];

// `url` is optional.
export const projects: { title: string; description: string; url?: string; tags?: string[] }[] = [
  {
    title: 'Dreamspace',
    description:
      'A mobile app built with a talented team trying to change the world. I built the app (not the website).',
    url: 'https://www.dreamspace.world/',
    tags: ['Flutter', 'Dart'],
  },
];
