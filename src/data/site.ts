// All editable site content lives here.
// Icons are file names (without .svg) from src/icons/.

export const site = {
  name: 'Luke Rydeard',
  role: 'Full-Stack Web Developer + Designer',
  location: 'Wakefield, England',
  email: 'lukerydeard@gmail.com',
  cv: 'luke-rydeard-cv.pdf', // file in public/
  github: 'https://github.com/Rydeard',
};

// TODO: refresh — this copy is from 2022.
export const about = [
  "I'm a computer nerd living in Wakefield, England. I'm primarily a programmer, but I also have a love for eye-catching yet simple designs.",
  'I studied MEng Computer Science at the University of York and have experience creating websites, mobile apps, and APIs.',
];

export type Skill = { name: string; icon: string };

export const skillGroups: { title: string; note?: string; items: Skill[] }[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Dart', icon: 'dart' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    title: 'Tools',
    note: 'And way too many more…',
    items: [
      { name: 'Django', icon: 'django' },
      { name: 'React', icon: 'reactjs' },
      { name: 'Gatsby', icon: 'gatsby' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'WordPress', icon: 'wordpress' },
    ],
  },
  {
    title: 'DevOps + More',
    items: [
      { name: 'AWS EC2', icon: 'aws-ec2' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Swagger', icon: 'swagger' },
      { name: 'Analytics', icon: 'google-analytics' },
      { name: 'Google Ads', icon: 'google-ads' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Trello', icon: 'trello' },
      { name: 'Slack', icon: 'slack' },
    ],
  },
];

// TODO: add real projects. `url` is optional.
export const projects: { title: string; description: string; url?: string; tags?: string[] }[] = [
  {
    title: 'Dreamspace',
    description:
      'A mobile app built with a talented team trying to change the world. I built the app (not the website).',
    url: 'https://www.dreamspace.world/',
    tags: ['Flutter', 'Dart'],
  },
];
