import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Kumar Aditya',
  subtitle: 'I am a Front End developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: ' Hey! I am Kumar Aditya',
  paragraphTwo:
    'Front end developer based in India. I build software using React, javascript and flutter .',
  paragraphThree: 'I am currently pursuing my Engineering degree in Computer Science from SMVDU.',
  resume: 'https://drive.google.com/file/d/1MqJbopugtq2ZANziivezsyxntRY2m1ji/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smart.png',
    title: 'Smart Brain',
    info: 'Detect human faces, made using react and nodejs',
    info2: '',
    url: 'https://nnhhiilliisstt.github.io/smart-brain/',
    repo: 'https://github.com/nnhhiilliisstt/smart-brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid19.png',
    title: 'COVID-19 Tracker',
    info:
      'COVID-19 tracker that tracks number of cases, made using React.js, Chart.js and Material UI',
    info2: '',
    url: 'https://nnhhiilliisstt.github.io/corona_tracker/',
    repo: 'https://github.com/nnhhiilliisstt/corona_tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'icsgdd.png',
    title: 'ICSGDD Website',
    info:
      'Developed the website for ICSGDD(International Consortium for Spinal Genetics, Development and Disease)',
    info2: '',
    url: 'https://www.icsgdd.org/',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'folio.png',
    title: 'Flutter Portfolio',
    info: 'portfolio website  for developers using flutter web',
    info2: '',
    url: 'https://nnhhiilliisstt.github.io/flutterPortfolio/#/',
    repo: 'https://github.com/nnhhiilliisstt/flutterPortfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'codepen.png',
    title: 'CodePen Clone',
    info: 'CodePen Clone using react',
    info2: '',
    url: 'https://nnhhiilliisstt.github.io/React-CodePen-Clone/',
    repo: 'https://github.com/nnhhiilliisstt/React-CodePen-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bge.png',
    title: 'Background Generator',
    info: 'Generate gradient style color scheme for your webpages using this website',
    info2: '',
    url: 'https://nnhhiilliisstt.github.io/Background-Generator/',
    repo: 'https://github.com/nnhhiilliisstt/Background-Generator', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'robots.png',
    title: 'Robo Friends',
    info: 'Find robot friends to escape your sad and meaningless life,made with React',
    info2: '',
    url: 'https://nnhhiilliisstt.github.io/robofriends/',
    repo: 'https://github.com/nnhhiilliisstt/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Import_honesty',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/niihhiilliisstt/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kumar-aditya-77a2b4194/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nnhhiilliisstt',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/adityakomaar/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
